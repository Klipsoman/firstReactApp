const CHANGENEWMESSAGETEXT = 'CHANGE-NEW-MESSAGE-TEXT'
const SENDMESSAGE = 'SEND-MESSAGE'

export const MessagesPageReducer = (state, action) => {

    if(action.type === CHANGENEWMESSAGETEXT){
        state.newMessageText = action.text
    }  else if(action.type === SENDMESSAGE){
        state.messages.push(
            {
                id:5,
                message: state.newMessageText
            })
            state.newMessageText = ''
    }

    return state
}


export const changeNewMessageTextActionCreator = (text) => ({
    type: CHANGENEWMESSAGETEXT,
    text
})
export const sendNewMessageActionCreator = () => ({
    type: SENDMESSAGE
})

