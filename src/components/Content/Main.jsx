import React from 'react'
import Dialogs from './Dialogs/Dialogs'
import Friends from './Friends/Friends'
import style from './Main.module.css'
import Posts from './Posts/Posts'


const Main = () => {
    return <main>
        <Posts />
        <Dialogs />
        <Friends />
    </main>
}

export default Main