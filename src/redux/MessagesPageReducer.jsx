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

        case CHANGENEWMESSAGETEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = state.newMessageText
            stateCopy.newMessageText = action.text
            return stateCopy
        }
        case SENDMESSAGE: {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(
            {
                id:5,
                message: state.newMessageText
            })
            stateCopy.newMessageText = ''
            return stateCopy
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

