const ADDPOST = 'ADD-POST'
const CHANGENEWPOSTTEXT = 'CHANGE-NEW-POST-TEXT'

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
            {
                id: 9,
                firstName: 'Pes',
                lastName: 'Barbos',
                img: 'https://vraki.net/sites/default/files/mood/u.jpg'
            },
            {
                id: 10,
                firstName: 'Pes',
                lastName: 'Barbos',
                img: 'https://vraki.net/sites/default/files/mood/u.jpg'
            },
            {
                id: 11,
                firstName: 'Pes',
                lastName: 'Barbos',
                img: 'https://vraki.net/sites/default/files/mood/u.jpg'
            },
          ]
    },
        messagePage: {},
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

        if(action.type === ADDPOST){
            let post = {
                id: 3,
                firstName: 'Vladdddd',
                lastName: 'Shishkin',
                img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg',
                date: '2021.03.26',
                likes: 20,
                postTitle: 'heyhey',
                postMessage: Store._state.postsPage.newTextPost
            }
            Store._state.postsPage.posts.push(post)
            Store._state.postsPage.newTextPost = ''
            this._renderDocument()

        } else if(action.type === CHANGENEWPOSTTEXT){
            Store._state.postsPage.newTextPost = action.text
            this._renderDocument()
        }
    }

}


export const addPostActionCreator = () =>  ( {type: ADDPOST} )

export const changeNewPostTextActionCreator = (text) => ({
        type: CHANGENEWPOSTTEXT,
        text: text
})

export default Store