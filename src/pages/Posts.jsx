import React, {useEffect, useRef, useState} from 'react';
import '../styles/App.css'
import {usePosts} from "../hooks/usePosts";
import {getPagesCount} from "../utils/pages";
import {useFetching} from "../hooks/useFetching";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import PostService from "../API/PostService";
import {useObserver} from "../hooks/useObserver";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedForSearchPosts = usePosts(posts, filter.sort, filter.query);

    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    const changePage = (newPage) => {
        setPage(newPage);
    }
    const createPost = (post) => {
        setPosts([...posts, post]);
        setModal(false);
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };
    const clearPosts = () => {
        setPosts([]);
    }
    const changePageByButtons = (newPage) => {
        clearPosts();
        setPage(newPage);
    }

    useEffect(() => {
        clearPosts();
        console.log("page before clearing: " + page)
        setPage(1);
    }, [limit]);

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page]);

    useEffect(() => {
        console.log(page)
    }, [page]);


    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        console.log("page before useObserver incrementing: " + page)
        setPage(page + 1);
    });


    return (
        <div className="App">

            <MyButton style={{margin: '20px 0'}} onClick={() => setModal(true)}>
                Создать запись
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
                limit={limit}
                setLimit={setLimit}
            />
            <hr style={{margin: '25px 0'}}/>

            { postsError &&
            <h1 style={{textAlign: 'center', marginTop: '40px', marginBottom: '35px', color: 'darkorange'}}>
                Произошла ошибка {postsError}
            </h1>
            }

            { isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            }
            <PostList remove={removePost} posts={sortedForSearchPosts} title='Листинг текущих постов'/>
            <div ref={lastElement} style={{marginTop: '0', width: '100%'}}/>

            <Pagination
                changePage={changePageByButtons}
                page={page}
                totalPages={totalPages}>
            </Pagination>


            {/*<div style={{textAlign: 'center', width: '100%', position: 'absolute', left: '0px', bottom: '0px', margin: '30px 0'}}>*/}
            {/*    <a href='./jsModule_page/js.html'>Перейти на тестовую страницу нативного JS</a>*/}
            {/*</div>*/}
        </div>
    );
}

export default Posts;