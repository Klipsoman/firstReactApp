import React from 'react'
import style from './Dialogs.module.css'
import PropTypes from 'prop-types'

const Dialogs = (props) => {

    let arrDialogsItem = props.state.friendsPage.arrFriends.map((item) => {
        return <div className={style.dialogsItem} key={item.id}>
            <div className={style.friendAva}>
                <img src={item.img} alt={item.firstName} />
            </div>
            <div className={style.friendName}>{item.firstName} {item.lastName}</div>
        </div>
    })


    return <div className={style.dialogs}>

        <div className={style.dialogsItems}>

            {  arrDialogsItem }

        </div>

        <div className={style.dialog}>
            <div>
                <div>Hello!</div>
                <div>Hi!</div>
            </div>
            <div className={style.writtenBlock}>
                <div>
                    <textarea name="" id="" cols="30" rows="10" value="123"></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    </div>
}


Dialogs.propTypes = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object
  }


export default Dialogs