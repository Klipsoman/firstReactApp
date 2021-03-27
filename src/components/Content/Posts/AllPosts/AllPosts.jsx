import React from 'react'
import style from './AllPosts.module.css'
import Post from './Post/Post'
import PropTypes from 'prop-types'

const AllPosts = (props) => {
    return <div className={style.allPostsWrapper}>
        <div className={style.allPosts}>  

            <Post postsPage={props.postsPage}/>
        
        </div>
    </div>

}

AllPosts.propTypes = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object
  }

export default AllPosts