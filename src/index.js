import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Store from './redux/State';
import App from './App'
import PropTypes from 'prop-types'

let ReRender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={Store.getState()} dispatch={Store.dispatch.bind(Store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

ReRender.propTypes ={
  state: PropTypes.object,
  addPost: PropTypes.func,
  changeNewPostText: PropTypes.string,
  dispatch: PropTypes.func
}

Store.func(ReRender)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
