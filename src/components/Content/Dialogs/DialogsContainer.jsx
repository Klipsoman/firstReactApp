import React from 'react'
import { changeNewMessageTextActionCreator, sendNewMessageActionCreator } from '../../../redux/MessagesPageReducer'
import Dialogs from './Dialogs'
import PropTypes from 'prop-types'

const DialogsContainer = (props) => {
    
    let state = props.store.getState()
    
    function sendOnEnterPressC(){
        props.store.dispatch(sendNewMessageActionCreator())
    } 
    
    function sendMessageC() {
        props.store.dispatch(sendNewMessageActionCreator())
    }

    function changeNewMessageTextC(text){
        props.store.dispatch(changeNewMessageTextActionCreator(text))
    }
    
    return (
           <Dialogs sendMessageC={sendMessageC} 
                    changeNewMessageTextC={changeNewMessageTextC}
                    sendOnEnterPressC={sendOnEnterPressC}
                    state={state}
                    />
    )

}

DialogsContainer.propTypes = {
    store: PropTypes.object,
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object,
    dispatch: PropTypes.func,
  }

export default DialogsContainer