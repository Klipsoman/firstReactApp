import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Content/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


  function App(props) {
    
   return <BrowserRouter>

   <div className="mainWrap">
   
   <div className="wrapper">
      <Header />
      <Sidebar />
      <Main state={props.state}
            // addPost={props.addPost}
            // changeNewPostText={props.changeNewPostText}
            dispatch={props.dispatch}
            /> 
      <Footer />     
    </div>

    </div>
    
    </BrowserRouter>
  }

  App.propTypes = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    dispatch: PropTypes.func,
  }

export default App;
