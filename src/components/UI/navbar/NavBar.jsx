import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/posts'>Тематические посты</Link>
                <Link to='/about'>Информация</Link>
                <Link to='/login'>Вход</Link>
            </div>
        </div>
    );
};

export default NavBar;