import React from 'react';
import style from './Header.module.css';

const Header = () => {
  
    return <header>
        <div className={style.logo}>
            <a href="">
              <img src="http://pngimg.com/uploads/letter_a/letter_a_PNG1.png" alt=""/>
            </a>
        </div>
    </header>
}

export default Header