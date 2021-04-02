import React from 'react'
import { Route } from 'react-router'
import style from './Main.module.css'
import News from './News/News'
import Posts from './Posts/Posts'
import Statistics from './Statistics/Statistics'
import DialogsContainer from './Dialogs/DialogsContainer'
import FriendsContainer from './Friends/FriendsContainer'
import UsersContainer from './Users/UsersContainer'


const Main = () => {
    
    return <main>
        <div className={style.wrapperMain}>
            <Route path='/posts' render={ () => <Posts />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/friends' render={() => <FriendsContainer />} />
            <Route path='/statistics' component={Statistics} />
            <Route path='/news' component={News} />
            <Route path='/users' component={UsersContainer} />
        </div>
    </main>
}


export default Main