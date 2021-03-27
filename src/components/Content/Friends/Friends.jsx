import React from 'react'
import style from './Friends.module.css'
import PropTypes from 'prop-types'

const Friends = (props) => {

    const myFriends = props.state.friendsPage.arrFriends.map((item) => {
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

Friends.propTypes = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object
  }

export default Friends