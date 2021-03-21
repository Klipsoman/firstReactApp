import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  
    return <header>
        <div className={style.logo}>
            <NavLink to='/posts'>
              <img src="http://pngimg.com/uploads/letter_a/letter_a_PNG1.png" alt=""/>
            </NavLink>
            </div >
        
        <p>социальная сеть</p>
    </header>
}

export default Header