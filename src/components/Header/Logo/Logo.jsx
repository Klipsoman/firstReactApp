import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Logo.module.css'


const Logo = () => {
    return  <div className={style.logo}>
    <NavLink to='/'>
      <img src="http://pngimg.com/uploads/letter_a/letter_a_PNG1.png" alt=""/>
    </NavLink>
        </div >
}

export default Logo