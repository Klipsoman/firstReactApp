import React from 'react'
import style from './PostsNav.module.css'
import { NavLink } from 'react-router-dom'


const PostsNav = () => {
    return <div className={style.postsNav}>
    <NavLink to="/posts"><h3>Все посты</h3></NavLink>
    <NavLink to="/posts"><h3>Мои посты</h3></NavLink>
    <NavLink to="/posts"><h3>Создать пост</h3></NavLink>
</div>
}

export default PostsNav