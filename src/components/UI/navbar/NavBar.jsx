import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const unLogin = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className='navbar'>
            <MyButton
                style={{marginLeft: '10%', width: '80px'}}
                onClick={unLogin}
            >
                Выйти
            </MyButton>
            <div className='navbar__links'>
                <Link to='/posts'>Тематические посты</Link>
                <Link to='/about'>Информация</Link>
                <Link to='/login'>Войти</Link>
            </div>
        </div>
    );
};

export default NavBar;