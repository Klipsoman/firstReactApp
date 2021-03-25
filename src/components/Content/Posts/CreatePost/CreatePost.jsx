import React from 'react'
import style from './CreatePost.module.css'

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
    function sendPost(){
        props.addPost()
    }

    
    function onAreaChange(e){
        let text = textArea.current.value
        props.changeNewPostText(text)
    }

    return <div className={style.createPost}>
        <h5 onClick={showPost}>Создать запись</h5>
        <textarea name="" id="" cols="30" rows="10" ref={textArea} onInput= { onAreaChange } value={props.postsPage.newTextPost}></textarea>
        <button onClick={sendPost}>New post!</button>
    </div>
}


export default CreatePost