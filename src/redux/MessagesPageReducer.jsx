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
    newMessageText: ''
}

export const MessagesPageReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGENEWMESSAGETEXT: 
            return {
                ...state,
                newMessageText: action.text
            }
        case SENDMESSAGE: 
            return {
                ...state,
                messages: [...state.messages, {id:5, message: state.newMessageText}],
                newMessageText: ''
            }
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

