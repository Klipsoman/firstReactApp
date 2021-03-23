import React from 'react'
import style from './Dialogs.module.css'

const Dialogs = (props) => {

    console.log(props.arrFriends)

    let arrDialogsItems = props.arrFriends.map((item)=>{
        return  <div className={style.dialogsItem} key={item.id}>
        <div className={style.friendAva}>
            <img src={item.img} alt={item.firstName}/>
        </div>
        <div className={style.friendName}>{item.firstName} {item.lastName}</div>
    </div>
    })


    return <div className={style.dialogs}>

        <div className={style.dialogsItems}>

            { arrDialogsItems }

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