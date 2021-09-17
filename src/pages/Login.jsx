import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useHistory} from 'react-router-dom';

const Login = () => {
    const router = useHistory();
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth)

    const login = event => {
        event.preventDefault();

        if(!isAuth) {
            setIsAuth(true);
            router.push('/posts');
        } else {
            router.push('/posts');
        }
    }

    return (
        isAuth===false
            ?
            <div>
                <h1 style={{margin: '25px 0'}}>Вход в систему</h1>
                <form onSubmit={login}>
                    <MyInput
                        placeholder='Введите логин'
                        type='login'
                    /><MyInput
                    placeholder='Введите пароль'
                    type='password'
                />
                    <MyButton style={{marginTop: '5px'}}>Войти</MyButton>
                </form>
            </div>

            :
            <div>
                <h1>Вы уже авторизированны на сайте!</h1>
            </div>
    );
};

export default Login;