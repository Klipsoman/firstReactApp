import React from 'react'
import style from './Friends.module.css'

const Friends = (props) => {

    const myFriends = props.arrFriends.map((item) => {
        return <div className={style.friend} key={item.id}>
            <div className={style.friendImgBlock}>
                <img src={item.img} alt="" />
            </div>
            <span>{item.firstName}</span>
            <span>{item.lastName}</span>
        </div>
    })

    return <div className={style.friends}>

            { myFriends }

    </div>
}

export default Friends