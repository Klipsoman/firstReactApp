import React from 'react'
import { Route } from 'react-router'
import style from './Main.module.css'
import News from './News/News'
import Posts from './Posts/Posts'
// import Statistics from './Statistics/Statistics'
import DialogsContainer from './Dialogs/DialogsContainer'
import FriendsContainer from './Friends/FriendsContainer'
import UsersContainer from './Users/UsersContainer'
import StatContainer from './Statistics/StatContainer'
import ProfileContainer from './Profile/ProfileContainer'
import Login from '../Login/Login'

const Main = () => {
    
    return <main>
        <div className={style.wrapperMain}>
            <Route path='/my-profile/:userId?' render={ () => <ProfileContainer />} />
            <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
            <Route path='/posts' render={ () => <Posts />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/friends' render={() => <FriendsContainer />} />
            <Route path='/statistics' component={StatContainer} />
            <Route path='/news' component={News} />
            <Route path='/users' component={UsersContainer} />
            <Route path='/login' component={Login} />

        </div>
    </main>
}


export default Main