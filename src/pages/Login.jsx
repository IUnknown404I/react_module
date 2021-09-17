import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useHistory} from 'react-router-dom';

const Login = () => {
    const router = useHistory();
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();

        if(!isAuth) {
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
            router.push('/posts');
        } else {
            router.push('/posts');
        }
    }

    const unLogin = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        isAuth===false
            ?
            <div>
                <h1 style={{margin: '25px 0', textAlign: 'center'}}>Вход в систему</h1>
                <form style={{margin: '5px 10px'}} onSubmit={login}>
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
            <div style={{textAlign: 'center'}}>
                <h1 style={{margin: '35px 10px'}}>Вы уже авторизированны на сайте!</h1>
                <MyButton style={{marginTop: '40px', width: '120px', height: '50px'}} onClick={() => unLogin()}>Выйти из системы</MyButton>
            </div>
    );
};

export default Login;