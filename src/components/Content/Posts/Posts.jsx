import React from 'react'
import AllPosts from './AllPosts/AllPosts'
import CreatePost from './CreatePost/CreatePost'
import style from './Posts.module.css'
import PropTypes from 'prop-types'



const Posts = (props) => {

    return <div className={style.posts}>

        <CreatePost 
        postsPage={props.postsPage}
        // addPost={props.addPost}         
        // changeNewPostText={props.changeNewPostText}
        dispatch={props.dispatch}
        />

        <h2>Все записи</h2>
        <AllPosts postsPage={props.postsPage}/>

    </div>
}


Posts.propTypes = {
    postsPage: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    dispatch: PropTypes.func,
  }


export default Posts
