import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from './App'
// import PropTypes from 'prop-types'
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReRender.propTypes = {
//   store: PropTypes.object,
//   state: PropTypes.object,
//   addPost: PropTypes.func,
//   changeNewPostText: PropTypes.string,
//   dispatch: PropTypes.func
// }

// let ReRender = () => {
  
// }

// ReRender()



// store.subscribe(ReRender)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
