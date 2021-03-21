import React from 'react'
import style from './Avatar.module.css'

const Avatar = () => {
    return <div className={style.avatar}>
        <div className={style.photoBlock}>
            <img src="https://yt3.ggpht.com/ytc/AAUvwnjoWSUD_sN4qv6h-6aDmJcS8WzE0mz5dkh8gA5J=s900-c-k-c0x00ffffff-no-rj" alt="" />
        </div>
    </div>
}

export default Avatar