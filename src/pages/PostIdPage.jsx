import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const responce = await PostService.getById(id);
        setPost(responce.data);
    });
    const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
        const responce = await PostService.getCommentByPost(id);
        setComments(responce.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div style={{width: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '15px', }}>
            <h1 style={{marginBottom: '25px'}}>Вы открыли страницу с содержимым поста №{params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div style={{fontSize: '18px', padding: '15px 15px', border: '2px inset teal'}}><strong>{post.id}.</strong> {post.title}</div>
            }

            <h2 style={{selfAlign: 'left', marginTop: '100px'}}>Комментарии</h2>
            {isCommentLoading
                ? <Loader/>
                : <div>
                    {comments.map((comm) =>
                        <div key={comm.id} style={{marginTop: '25px', marginBottom: '15px', border: '1px solid teal'}}>
                            <h4 style={{margin: '5px 5px'}}>{comm.email}</h4>
                            <div style={{padding: '5px 5px'}}>{comm.body}</div>
                        </div>
                    )}
                </div>
            }

        </div>
    );
};

export default PostIdPage;