import { PostsPageReducer } from "./PostsPageReducer"
import { MessagesPageReducer } from './MessagesPageReducer'

let Store = {

    _state: {
        friendsPage: {arrFriends: [
            {   
                id: 1,
                firstName: 'Lisa',
                lastName: 'AlisaLilisaLiAaL',
                img: 'https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg'
            },
            {
                id: 2,    
                firstName: 'Rudy',
                lastName: 'Bekkins',
                img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg'
            },
            {
                id: 3,
                firstName: 'Jonatatn',
                lastName: 'Gazilinsky',
                img: 'https://vraki.net/sites/default/files/mood/u.jpg'
            },
            {
                id: 4,
                firstName: 'Pes',
                lastName: 'Barbos',
                img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg'
            },
            {
                id: 5,
                firstName: 'Pes',
                lastName: 'Barbos',
                img: 'https://vraki.net/sites/default/files/mood/u.jpg'
            },
            {
                id: 6,
                firstName: 'Pes',
                lastName: 'Barbos',
                img: 'https://vraki.net/sites/default/files/mood/u.jpg'
            },
            {
                id: 7,
                firstName: 'Pes',
                lastName: 'Barbos',
                img: 'https://vraki.net/sites/default/files/mood/u.jpg'
            },
            {
                id: 8,
                firstName: 'Pes',
                lastName: 'Barbos',
                img: 'https://vraki.net/sites/default/files/mood/u.jpg'
            },
          ]
    },
        messagePage: {
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
        },
        postsPage: { 
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
            // {
            //     id: 3,
            //     firstName: 'Vlad',
            //     lastName: 'Shishkin',
            //     img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg',
            //     date: '2021.03.26',
            //     likes: 20,
            //     postTitle: 'heyhey',
            //     postMessage: 'post!!!'
            // },
        ], 
            newTextPost: 'TextHere',
    },  
    },

    _renderDocument(){
        console.log(1)
    },

    getState(){
        return this._state
    },

   func(observer){
    this._renderDocument = observer
    this._renderDocument()
},

    dispatch(action){
        MessagesPageReducer(this._state.messagePage, action)
        PostsPageReducer(this._state.postsPage, action)
        
        this._renderDocument()
    }

}

export default Store