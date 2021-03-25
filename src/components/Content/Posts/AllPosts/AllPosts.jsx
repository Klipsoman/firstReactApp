import React from 'react'
import style from './AllPosts.module.css'
import Post from './Post/Post'

const AllPosts = (props) => {
    return <div className={style.allPostsWrapper}>
        <div className={style.allPosts}>  

            <Post postsPage={props.postsPage}/>
        
        </div>
    </div>

}

export default AllPosts