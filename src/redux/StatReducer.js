const DELETEUSER = 'DELETE-USER'
const CHAGEUSER = 'CHAGE-USER'
const CHANGEINPUT = 'CHANGE-INPUT'
const GETNAME = 'GET-NAME'
const CLEAR = 'CLEAR'
const ADDUSER = 'ADD-USER'

const initialState = {
    users: [
        {
            id: 1,
            name: 'Andrew'
        },
        {
            id: 2,
            name: 'Dima'
        },
        {
            id: 3,
            name: 'Billy'
        }
    ],
    value: '',
    boxName: '',
}

export const StatReducer = (state = initialState, action) => {
   switch (action.type){
   case DELETEUSER: 
   return {
        ...state,
        users: state.users.filter(user => user.id !== action.userId)
   }
   case CHAGEUSER:
       return {
        ...state,
        users: state.users.map(user => {
            if(user.id === action.userId){
                return {...user, name: action.name}
                // user.name = action.name  ???
            } else {
            return user
            }
        } )
       }
    case CHANGEINPUT: 
        return {
        ...state,   
        value: action.text
       }
    case GETNAME:{
        return {
            ...state,
            boxName: action.userName
        }
    }
    case CLEAR:
        return {
            ...state,
            value: ''
        }
    case ADDUSER:{
        let newId = state.users.length + 1
        let newUser = {id: newId, name: action.name}
        return {
            ...state,
            users: [...state.users, newUser]
        }
    }
   default:
       return state
   }
}
 
export let delUserAC = (userId) => {
    return {
        type: DELETEUSER,
        userId
    }
}

export let changeUserAC = (userId, name) => {
    return {
        type: CHAGEUSER,
        name,
        userId
    }
}

export let changeInputAC = (text) => {
    return {
        type: CHANGEINPUT,
        text
    }
}

export let getNameAC = (userName) => {
    return {
        type: GETNAME,
        userName
    }
}

export const clearAC = () => {
    return {
        type: CLEAR
    }
}

export const addUserAC = (name) => {
    return {
        type: ADDUSER,
        name
    }
}