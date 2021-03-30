const ADDPOST = 'ADD-POST'
const CHANGENEWPOSTTEXT = 'CHANGE-NEW-POST-TEXT'

export const PostsPageReducer = (state, action) => {

    if(action.type === ADDPOST){
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
        state.posts.push(post)
        state.newTextPost = ''
    } else if(action.type === CHANGENEWPOSTTEXT){
        state.newTextPost = action.text
    } 

    return state
}

export const addPostActionCreator = () =>  ( {type: ADDPOST} )

export const changeNewPostTextActionCreator = (text) => ({
        type: CHANGENEWPOSTTEXT,
        text: text
})
