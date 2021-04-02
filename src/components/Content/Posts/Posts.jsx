import React from 'react'
import AllPosts from './AllPosts/AllPosts'
import style from './Posts.module.css'
import PropTypes from 'prop-types'
import CreatePostContainer from './CreatePost/CreatePostContainer'



const Posts = () => {

    return <div className={style.posts}>

        <CreatePostContainer />
        <h2>Все записи</h2>
        <AllPosts/>

    </div>
}


Posts.propTypes = {
    store: PropTypes.object,
    postsPage: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    dispatch: PropTypes.func,
  }


export default Posts
