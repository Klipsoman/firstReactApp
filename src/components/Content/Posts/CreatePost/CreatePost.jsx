import React from 'react'
import style from './CreatePost.module.css'
import PropTypes from 'prop-types'

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
    
    function onAreaChange(e){
        let text = e.target.value
        props.onAreaChangeC(text)
    }

    function sendNewPost(){
        props.sendNewPostC()
    }

    return <div className={style.createPost}>
        <h5 onClick={showPost}>Создать запись</h5>
        <textarea className={style.textarea} onInput= { onAreaChange } value={ props.newTextPost } placeholder='Enter your text here'></textarea>
        <button className={style.button} onClick={ sendNewPost }>New post!</button>
    </div>
}

CreatePost.propTypes = {
    store: PropTypes.object,
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object,
    dispatch: PropTypes.func,
    sendNewPostC: PropTypes.func,
    onAreaChangeC: PropTypes.func,
    newTextPost: PropTypes.string
  }

export default CreatePost