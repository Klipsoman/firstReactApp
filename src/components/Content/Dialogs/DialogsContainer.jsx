import { changeNewMessageTextActionCreator, sendNewMessageActionCreator } from '../../../redux/MessagesPageReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendOnEnterPressC: () => {
            dispatch(sendNewMessageActionCreator())
        },
        sendMessageC: () => {
            dispatch(sendNewMessageActionCreator())
        },
        changeNewMessageTextC: (text) => {
            dispatch(changeNewMessageTextActionCreator(text))
        },
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer