import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navigation.module.css'

const  Navigation = () => {
    return  <nav className={style.navigation}>
           <ul>
                <li>
                   <NavLink to="/posts" activeClassName={style.activeLink}>Посты</NavLink>
                   <span></span>
               </li>
               <li>
                   <NavLink to="/friends" activeClassName={style.activeLink}>Друзья</NavLink>
                   <span></span>
               </li>
               <li>
                   <NavLink to="/dialogs" activeClassName={style.activeLink}>Сообщения</NavLink>
                   <span></span>
               </li>
               <li>
                  <NavLink to="/statistics" activeClassName={style.activeLink}>Статистика</NavLink>    
                   <span></span>
               </li>
               <li>
                  <NavLink to="/news" activeClassName={style.activeLink}>Новости</NavLink>    
                   <span></span>
               </li>
           </ul>
        </nav>

}

export default Navigation