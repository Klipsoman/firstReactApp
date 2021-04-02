import React from 'react'
import style from './Dialogs.module.css'
import PropTypes from 'prop-types'
// import { changeNewMessageTextActionCreator, sendNewMessageActionCreator } from '../../../redux/MessagesPageReducer'

const Dialogs = (props) => {

    let messagesArr = props.state.messagePage.messages.map((message) => {
        return <div key={message.id}>{message.message}</div>
    })

    function sendOnEnterPress(e){
        if(e.key === 'Enter' && !e.shiftKey){
            props.sendOnEnterPressC()
         }
    } 
    
    function changeNewMessageText(e){
       let newText = e.target.value
       props.changeNewMessageTextC(newText)
    }

    function sendMessage() {
       props.sendMessageC()
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
                     onKeyDown={sendOnEnterPress} placeholder='Enter your message here'></textarea>
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
    sendOnEnterPressC: PropTypes.func,
    changeNewMessageTextC: PropTypes.func,
    sendMessageC: PropTypes.func
  }


export default Dialogs