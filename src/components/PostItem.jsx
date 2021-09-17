import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';

const PostItem = (props) => {
    const router = useHistory();

    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>{props.post.id}. {props.post.title}</strong>

                    <div style={{marginTop: '7px'}}>{props.post.body}</div>
                </div>


                <div className='post__btns'>
                    <MyButton style={{marginLeft: '15px'}} onClick={() => router.push(`/posts/${props.post.id}`)}>
                        Перейти
                    </MyButton>
                    <MyButton style={{marginLeft: '5px'}} onClick={() => props.remove(props.post)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;