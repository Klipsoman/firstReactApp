import React from 'react'
import style from './Dialogs.module.css'
import PropTypes from 'prop-types'
import { changeNewMessageTextActionCreator, sendNewMessageActionCreator } from '../../../redux/State'

const Dialogs = (props) => {

    let messagesArr = props.state.messagePage.messages.map((message) => {
        return <div key={message.id}>{message.message}</div>
    })

    function sendOnEnterPress(e){
        if(e.key === 'Enter' && !e.shiftKey){
            props.dispatch(sendNewMessageActionCreator())
         }
    } 
    
    function sendMessage() {
            props.dispatch(sendNewMessageActionCreator())
    }

    function changeNewMessageText(e){
       let newText = e.target.value
       props.dispatch(changeNewMessageTextActionCreator(newText))
    }



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
            <div className={style.dialogMessages}>
            
                {messagesArr}

            </div >
            <div className={style.writtenBlock}>
                <div>
                    <textarea onInput={changeNewMessageText} value={props.state.messagePage.newMessageText}
                     onKeyDown={sendOnEnterPress}></textarea>
                </div>
                <div>
                    <button className={style.messageButton} onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    </div>
}


Dialogs.propTypes = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object,
    dispatch: PropTypes.func
  }


export default Dialogs