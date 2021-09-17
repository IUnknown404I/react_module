import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({title, posts, remove}) => {
    if(!posts.length) {
        return <h1 style={{textAlign: 'center', marginTop: '40px', marginBottom: '35px'}}>Посты не найдены!</h1>
    }

    return (
        <div style={{margin: '40px 0'}}>
            <h1 style={{textAlign: 'center', marginBottom: '35px'}}>
                {title}
            </h1>

            <TransitionGroup>
                { posts.map( (post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={650}
                        classNames="post"
                    >
                        <PostItem remove={remove} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;