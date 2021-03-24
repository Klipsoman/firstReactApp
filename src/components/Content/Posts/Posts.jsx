import React from 'react'
import AllPosts from './AllPosts/AllPosts'
import style from './Posts.module.css'



const Posts = (props) => {
    
    function createPost(e){
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
        let text = textArea.current.value 
        console.log(text)
        props.addPost(text)
        textArea.current.value = ''
    }

    return <div className={style.posts}>

        <div className={style.createPost}>
            <h5 onClick={createPost}>Создать запись</h5>
            <textarea name="" id="" cols="30" rows="10" ref={textArea} ></textarea>
            <button onClick={ sendPost }>New post!</button>
        </div>

        <h2>Все записи</h2>

        <AllPosts state={props.state}/>
     


    </div>
}

export default Posts
