import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/State';
import App from './App'
import { addPost } from './redux/State'
import { func } from './redux/State'
import { changeNewPostText } from './redux/State'

let ReRender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

func(ReRender)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
