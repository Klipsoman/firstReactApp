import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Content/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

  function App(props) {
    
   return <BrowserRouter>

   <div className="mainWrap">
   
   <div className="wrapper">
      <Header />
      <Sidebar />
      <Main state={props.state} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/> 
      <Footer />     
    </div>

    </div>
    
    </BrowserRouter>
  }

export default App;
