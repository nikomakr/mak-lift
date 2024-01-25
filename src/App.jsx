import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Outlet } from 'react-router-dom';
import Footer from './components/footer'
import Navigation from './components/navigation';
import 'react-calendar/dist/Calendar.css';
import Header from './components/header'
// import Home from './pages/home'

function App() {
  return (
   <>
   <Header/>
   <Navigation/>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Outlet/>

      </div>
      <Footer/>
      </> 
  );
}

export default App;