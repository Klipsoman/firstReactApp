import React from 'react'
import style from './AllPosts.module.css'
import Post from './Post/Post'

const AllPosts = (props) => {
    return <div className={style.allPostsWrapper}>
        <div className={style.allPosts}>  

            <Post state={props.state}/>
        
        </div>
    </div>

}

export default AllPosts