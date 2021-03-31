import React from 'react'
import { Route } from 'react-router'
// import Dialogs from './Dialogs/Dialogs'
import Friends from './Friends/Friends'
import style from './Main.module.css'
import News from './News/News'
import Posts from './Posts/Posts'
import Statistics from './Statistics/Statistics'
import PropTypes from 'prop-types'
import DialogsContainer from './Dialogs/DialogsContainer'


const Main = (props) => {

    return <main>
        <div className={style.wrapperMain}>
            <Route path='/posts' render={ () => <Posts postsPage={props.state.postsPage}
                                                 dispatch={props.dispatch}
                                                 store={props.store}
                                                 /> 
                                                 } />
            <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
            <Route path='/friends' render={() => <Friends state={props.state.friendsPage} />} />
            <Route path='/statistics' component={Statistics} />
            <Route path='/news' component={News} />
        </div>
    </main>
}

Main.propTypes ={
    store: PropTypes.object,
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object,
    dispatch: PropTypes.func
  }

export default Main