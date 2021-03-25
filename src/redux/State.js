let renderDocument;

export const func = (observer) => {
    renderDocument = observer
    renderDocument()
}

let State = {
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
        newTextPost: '123',
},  
}

export let addPost = () => {
    let post = {
        id: 3,
        firstName: 'Vladdddd',
        lastName: 'Shishkin',
        img: 'https://pbs.twimg.com/media/EXpP15yXYAAaQPU.jpg',
        date: '2021.03.26',
        likes: 20,
        postTitle: 'heyhey',
        postMessage: State.postsPage.newTextPost
    }
    State.postsPage.posts.push(post)
    State.postsPage.newTextPost = ''
    renderDocument()
}

export const changeNewPostText = (newtext) => {
    State.postsPage.newTextPost = newtext
    renderDocument()
}

export default State