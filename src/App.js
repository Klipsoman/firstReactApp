import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Content/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

  function App() {

   return <BrowserRouter>
   
   <div className="wrapper">
      <Header />
      <Sidebar />
      <Main /> 
      <Footer />     
    </div>;
    </BrowserRouter>
  }

export default App;
