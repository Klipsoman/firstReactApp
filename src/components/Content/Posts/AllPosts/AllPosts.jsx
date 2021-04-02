import React from 'react'
import style from './AllPosts.module.css'
import PropTypes from 'prop-types'
import PostContainer from './Post/PostContainer'

const AllPosts = () => {
    return <div className={style.allPostsWrapper}>
        <div className={style.allPosts}>  

            <PostContainer/>
        
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