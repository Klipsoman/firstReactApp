import React from 'react'
import { Route } from 'react-router'
import Dialogs from './Dialogs/Dialogs'
import Friends from './Friends/Friends'
import style from './Main.module.css'
import News from './News/News'
import Posts from './Posts/Posts'
import Statistics from './Statistics/Statistics'
import PropTypes from 'prop-types'


const Main = (props) => {

    return <main>
        <div className={style.wrapperMain}>
            <Route path='/posts' render={ () => <Posts postsPage={props.state.postsPage}
                                                //  addPost={props.addPost}
                                                //  changeNewPostText={props.changeNewPostText}
                                                 dispatch={props.dispatch}
                                                 /> 
                                                 } />
            <Route path='/dialogs' render={() => <Dialogs state={props.state} dispatch={props.dispatch}/>} />
            <Route path='/friends' render={() => <Friends state={props.state.friendsPage} />} />
            <Route path='/statistics' component={Statistics} />
            <Route path='/news' component={News} />
        </div>
    </main>
}

Main.propTypes ={
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    postsPage: PropTypes.object,
    dispatch: PropTypes.func
  }

export default Main