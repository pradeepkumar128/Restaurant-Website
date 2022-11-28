import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Login/>        
      <Footer/>      
    </>
  )
}

export default App;