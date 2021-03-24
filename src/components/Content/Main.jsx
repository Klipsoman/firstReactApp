import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Dialogs from './Dialogs/Dialogs'
import Friends from './Friends/Friends'
import style from './Main.module.css'
import News from './News/News'
import Posts from './Posts/Posts'
import Statistics from './Statistics/Statistics'


const Main = (props) => {

    return <main>
        <div className={style.wrapperMain}>
            <Route path='/posts' render={ () => <Posts state={props.state} addPost={props.addPost}/> } />
            <Route path='/dialogs' render={() => <Dialogs state={props.state} />} />
            <Route path='/friends' render={() => <Friends state={props.state} />} />
            <Route path='/statistics' component={Statistics} />
            <Route path='/news' component={News} />
        </div>
    </main>
}

export default Main