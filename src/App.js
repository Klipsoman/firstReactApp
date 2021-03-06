import React from 'react'
import './App.css'
import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Content/Main';
import Footer from './components/Footer/Footer';
import PropTypes from 'prop-types';
import SidebarContainer from './components/Sidebar/SidebarContainer';


  function App() {
    
   return <div className="mainWrap">
   
   <div className="wrapper">
      <Header />
      <SidebarContainer />
      <Main /> 
      <Footer />     
    </div>

    </div>

  }

  App.propTypes = {
    store: PropTypes.object,
    state: PropTypes.object,
    addPost: PropTypes.func,
    changeNewPostText: PropTypes.func,
    dispatch: PropTypes.func,
  }

export default App;
