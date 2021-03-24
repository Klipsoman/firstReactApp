import React from 'react'
import style from './Dialogs.module.css'

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
        </div>
    </div>
}

export default Dialogs