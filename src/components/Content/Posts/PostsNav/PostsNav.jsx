import React from 'react'
import style from './PostsNav.module.css'

const PostsNav = () => {
    return <div className={style.postsNav}>
    <a href=""><h3>Все посты</h3></a>
    <a href=""><h3>Мои посты</h3></a>
    <a href=""><h3>Создать пост</h3></a>
</div>
}

export default PostsNav