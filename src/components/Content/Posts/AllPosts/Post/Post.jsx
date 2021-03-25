import React from 'react'
import style from './Post.module.css'

const Post = (props) => {

    let arrPost = props.postsPage.posts.map(item => {
        return <div className={style.post} key={item.id}>
            <div className={style.postProfile}>

                <div className={style.postProfileImgBlock}>
                    <img src={item.img} alt="" />
                </div>
                <div className={style.postProfileUserName}>
                    <p>{item.firstName} {item.lastName}</p>
                </div>
                <div className={style.postProfileInfo}>
                    <div className={style.postDate}>{item.date}</div>
                    <div className={style.postLikes}>{item.likes}</div>
                </div>

            </div>

            <div className={style.postContent}>
                <h3>{item.postTitle}</h3>
                <p>{item.postMessage}</p>
            </div>

        </div>

    })

    return  <>
            {  arrPost  }
    </>
}

export default Post