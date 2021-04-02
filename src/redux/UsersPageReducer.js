const ADDFRIEND = 'ADD-FRIEND'
const DELFRIEND = 'DELETE-FRIEND'
const SETUSERS = 'SET-USERS'

let initialState = {
    users: []
}

export const UsersPageReducer = (state = initialState, action) => {
    switch (action.type){
        case ADDFRIEND: 
            return {
                ...state,
                users: state.users.map((u)=>{
                    if(u.id === action.userId){
                       return {...u, isFriend: true } 
                    }
                        return u
                })              
            }
        case DELFRIEND: 
            return {
                ...state,
                users: state.users.map((u)=>{
                    if(u.id === action.userId){
                      return {...u, isFriend: false}  
                    }
                    return u
                })              
            }
        case SETUSERS: 
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default: 
        return state
    }
}


export const toFriendAC = (userId) => ({
    type: ADDFRIEND,
    userId 
})
export const delFriendAC = (userId) => ({
    type: DELFRIEND,
    userId
})

export const setUsersAC = (users) => ({
    type: SETUSERS,
    users
})


