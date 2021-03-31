const ADDPOST = 'ADD-POST'
const CHANGENEWPOSTTEXT = 'CHANGE-NEW-POST-TEXT'

let initialState = { 
    posts:[
    {
        id: 1,
        firstName: 'Andrey',
        lastName: 'Zharov',
        img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg',
        date: '2021.03.24',
        likes: 100,
        postTitle: 'First post',
        postMessage: 'Hello its my first post!!!'
    },
    {
        id: 2,
        firstName: 'Viktor',
        lastName: 'Zhukov',
        img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg',
        date: '2021.03.25',
        likes: 10,
        postTitle: 'mister Viktor',
        postMessage: 'Hi hi hi!'
    },
], 
    newTextPost: 'TextHere',
}  

export const PostsPageReducer = (state = initialState, action) => {

    let post = {
        id: 3,
        firstName: 'Vladdddd',
        lastName: 'Shishkin',
        img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg',
        date: '2021.03.26',
        likes: 20,
        postTitle: 'heyhey',
        postMessage: state.newTextPost
    }

    switch (action.type) {
        case ADDPOST: 
            state.posts.push(post)
            state.newTextPost = ''
            return state
        case CHANGENEWPOSTTEXT: 
             state.newTextPost = action.text
             return state
        default:
            return state
    }
}

export const addPostActionCreator = () =>  ( {type: ADDPOST} )

export const changeNewPostTextActionCreator = (text) => ({
        type: CHANGENEWPOSTTEXT,
        text: text
})
