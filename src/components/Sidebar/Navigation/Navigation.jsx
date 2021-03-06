import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navigation.module.css'

const Navigation = () => {
    return <nav className={style.navigation}>
        <ul>
            {/* <li>
                <NavLink to="/profile" activeClassName={style.activeLink}>Мой профиль</NavLink>
                <span className="fa fa-newspaper-o"></span>
            </li> */}
            <li>
                <NavLink to="/my-profile" activeClassName={style.activeLink}>Мой профиль</NavLink>
                <span className="fa fa-newspaper-o"></span>
            </li> 
            <li>
                <NavLink to="/posts" activeClassName={style.activeLink}>Посты</NavLink>
                <span className="fa fa-calendar-o"></span>
            </li>
            <li>
                <NavLink to="/friends" activeClassName={style.activeLink}>Друзья</NavLink>
                <span className="fa fa-address-book-o"></span>
            </li>
            <li>
                {/* <li className='fa fa-envelope-o'></li> */}
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Сообщения</NavLink>
                <span className='fa fa-envelope-o'></span>
            </li>
            <li>
                <NavLink to="/statistics" activeClassName={style.activeLink}>Статистика</NavLink>
                <span className="fa fa-signal"></span>
            </li>
            <li>
                <NavLink to="/news" activeClassName={style.activeLink}>Новости</NavLink>
                <span className="fa fa-newspaper-o"></span>
            </li>
            <li>
                <NavLink to="/users" activeClassName={style.activeLink}>Все пользователи</NavLink>
                <span className="fa fa-newspaper-o"></span>
            </li>
        </ul>
    </nav>

}

export default Navigation