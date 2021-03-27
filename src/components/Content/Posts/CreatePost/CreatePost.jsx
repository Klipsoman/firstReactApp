import React from 'react'
import style from './CreatePost.module.css'
import PropTypes from 'prop-types'
import { addPostActionCreator, changeNewPostTextActionCreator } from '../../../../redux/State'

const CreatePost = (props) => {
    
    function showPost(e){
        if(e.target.nextElementSibling.style.display === 'block'){
        e.target.nextElementSibling.style.display = 'none'
        e.target.nextElementSibling.nextElementSibling.style.display = 'none'
        } else {
        e.target.nextElementSibling.style.display = 'block'
        e.target.nextElementSibling.nextElementSibling.style.display = 'block'
        }
    }

    let textArea = React.createRef()
    
    function onAreaChange(){
        let text = textArea.current.value
        props.dispatch(changeNewPostTextActionCreator(text))
    }

    function sendNewPost(){
       props.dispatch(addPostActionCreator())
    }

    return <div className={style.createPost}>
        <h5 onClick={showPost}>Создать запись</h5>
        <textarea className={style.textarea} ref={textArea} onInput= { onAreaChange } value={props.postsPage.newTextPost}></textarea>
        <button className={style.button} onClick={sendNewPost}>New post!</button>
    </div>
}

CreatePost.propTypes = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object,
    dispatch: PropTypes.func,
  }


export default CreatePost