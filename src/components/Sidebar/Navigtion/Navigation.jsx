import React from 'react'
import style from './Navigation.module.css'

const  Navigation = () => {
    return  <nav className={style.navigation}>
           <ul>
                <li>
                   <a href="">Посты</a>
                   <span></span>
               </li>
               <li>
                   <a href="">Просмотры</a>
                   <span></span>
               </li>
               <li>
                   <a href="">Друзья</a>
                   <span></span>
               </li>
               <li>
                   <a href="">Сообщения</a>
                   <span></span>
               </li>
               <li>
                   <a href="">Новости</a>
                   <span></span>
               </li>
               <li>
                   <a href="">Статистика</a>
                   <span></span>
               </li>
           </ul>
        </nav>

}

export default Navigation