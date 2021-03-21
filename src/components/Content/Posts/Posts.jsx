import React from 'react'
import style from './Posts.module.css'
import PostsNav from './PostsNav/PostsNav'


const Posts = () => {
    return <div className={style.posts}>
        
        <PostsNav />

        <div className={style.createPost}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>New post!</button>
        </div>
        <div></div>

    </div>
}

export default Posts