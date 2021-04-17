import React from 'react';
import AuthContainer from './Auth/AuthContainer';
import style from './Header.module.css';
import Logo from './Logo/Logo';
import SignUpContainer from './SignUp/SignUpContainer';

const Header = () => {
  
    return <header>
        <div className={style.headerWrapper}>
    <Logo />
    <p>социальная сеть</p>
    <AuthContainer />
    <SignUpContainer />
    </div>
    </header>
    
}

export default Header