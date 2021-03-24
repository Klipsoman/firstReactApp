import React from 'react'
import style from './Posts.module.css'



const Posts = () => {
    
    function createPost(e){
        if(e.target.nextElementSibling.style.display === 'block'){
        e.target.nextElementSibling.style.display = 'none'
        e.target.nextElementSibling.nextElementSibling.style.display = 'none'
        } else {
        e.target.nextElementSibling.style.display = 'block'
        e.target.nextElementSibling.nextElementSibling.style.display = 'block'
        }
        
    }

    return <div className={style.posts}>

        <div className={style.createPost}>
            <h5 onClick={createPost}>Создать запись</h5>
            <textarea name="" id="" cols="30" rows="10" ></textarea>
            <button>New post!</button>
        </div>

        <h2>Все записи</h2>
        <div className={style.allPosts}>
            <div className={style.post}></div>
            <div className={style.post}></div>
            <div className={style.post}></div>
            <div className={style.post}></div>
            <div className={style.post}></div>
            <div className={style.post}></div>
        </div>



    </div>
}

export default Posts
