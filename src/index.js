import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from './App'
import PropTypes from 'prop-types'

let ReRender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

ReRender()

ReRender.propTypes ={
  state: PropTypes.object,
  addPost: PropTypes.func,
  changeNewPostText: PropTypes.string,
  dispatch: PropTypes.func
}

store.subscribe(ReRender)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
