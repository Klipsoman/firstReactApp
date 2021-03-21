import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Content/Main';
import Footer from './components/Footer/Footer';

  function App() {

   return <div className="wrapper">
      <Header />
      <Main />
      <Sidebar />
      <Footer />     
    </div>;
  }

export default App;
