import React from 'react';
import style from './Header.module.css';

const Header = () => {
  
    return <header>
        <div className={style.logo}>
            <div className={style.logoItem}>
            <a href="">
              <img src="http://pngimg.com/uploads/letter_a/letter_a_PNG1.png" alt=""/>
            </a>
            <p>социальная сеть</p>
            </div >
        </div>
    </header>
}

export default Header