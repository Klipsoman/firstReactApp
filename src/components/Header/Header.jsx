import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import Logo from './Logo/Logo';
import SignUp from './SignUp/SignUp';

const Header = () => {
  
    return <header>
        <div className={style.headerWrapper}>
    <Logo />
    <p>социальная сеть</p>

    <SignUp />

    </div>

    </header>
}

export default Header