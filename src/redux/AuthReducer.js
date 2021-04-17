import { UsersAPI } from "../api/api"

const SETAUTH = 'SET-AUTH'

let initialState = { 
    userId: null,
    userLogin: null,
    userEmail: null,
    isAuth: false,
}  

export const AuthReducer = (state = initialState, action) => {

     switch (action.type) {
        case SETAUTH: {
            return {
                ...state,
                userId: action.user.id,
                userLogin: action.user.login,
                userEmail: action.user.email,  
                isAuth: (action.user.id !== undefined ? true : false),          
             }
        }
        default: 
            return state
    }
}

export const setAuth = (user) => {
      return {
        type: SETAUTH,
        user
    }
}

export const getAuth = () => (dispatch) => {
    UsersAPI.checkAuth()
    .then(res=>{
        dispatch(setAuth(res.data.data))
     })
}
