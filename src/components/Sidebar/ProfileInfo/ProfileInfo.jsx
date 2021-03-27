import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  
    function toggleLikes(e){
        e.target.classList.contains('fa-heart-o') ? e.target.classList.replace('fa-heart-o', 'fa-heart') : e.target.classList.replace('fa-heart', 'fa-heart-o');
    }

    return <div className={style.profileInfo}>
        <div className={style.likes}>
            <i className="fa fa-heart-o fa-1x" onClick={toggleLikes}></i>
            <span className={style.countLikes}>20</span>
        </div>
        
        <div className={style.view}>
            <i className='fa fa-eye fa-1x'></i>
            <span className={style.view}>180</span>
        </div>
    </div>
}

export default ProfileInfo