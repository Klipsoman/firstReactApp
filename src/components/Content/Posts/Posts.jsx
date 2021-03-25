import React from 'react'
import AllPosts from './AllPosts/AllPosts'
import CreatePost from './CreatePost/CreatePost'
import style from './Posts.module.css'



const Posts = (props) => {

    return <div className={style.posts}>

        <CreatePost addPost={props.addPost} postsPage={props.postsPage} changeNewPostText={props.changeNewPostText}/>

        <h2>Все записи</h2>
        <AllPosts postsPage={props.postsPage}/>

    </div>
}

export default Posts
