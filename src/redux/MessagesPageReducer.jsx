const CHANGENEWMESSAGETEXT = 'CHANGE-NEW-MESSAGE-TEXT'
const SENDMESSAGE = 'SEND-MESSAGE'

let initialState = {
    friendsItem: [{}],
    messages: [
        {
       id: 1,
       message: 'Hello!'         
    },
    {
        id: 2,
        message: 'Hi!'         
     },
     {
        id: 3,
        message: 'How are you?'         
     },
     {
        id: 4,
        message: 'Cool!'         
     },
],
    newMessageText: 'new text'
}

export const MessagesPageReducer = (state = initialState, action) => {

    switch (action.type){
        case CHANGENEWMESSAGETEXT:
            state.newMessageText = action.text
            return state
        case SENDMESSAGE: 
        state.messages.push(
            {
                id:5,
                message: state.newMessageText
            })
            state.newMessageText = ''
            return state
        default: 
        return state
    }
}


export const changeNewMessageTextActionCreator = (text) => ({
    type: CHANGENEWMESSAGETEXT,
    text
})
export const sendNewMessageActionCreator = () => ({
    type: SENDMESSAGE
})

