import React from 'react'
import PropTypes from 'prop-types'
import { addPostActionCreator, changeNewPostTextActionCreator } from '../../../../redux/PostsPageReducer'
import CreatePost from './CreatePost'

const CreatePostContainer = (props) => {
      
    function onAreaChangeC(text){
        props.store.dispatch(changeNewPostTextActionCreator(text))
    }

    function sendNewPostC(){
       props.store.dispatch(addPostActionCreator())
    }

    return <CreatePost onAreaChangeC={onAreaChangeC} sendNewPostC={sendNewPostC} postsPage={props.store.getState().postsPage}/>
}

CreatePostContainer.propTypes = {
    store: PropTypes.object,
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object,
    dispatch: PropTypes.func,
  }


export default CreatePostContainer