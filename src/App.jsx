import './App.css';
// import { BrowserRouter as Router, Route, Switch, Outlet } from 'react-router-dom';
import Footer from './components/footer';
import Navigation from './components/navigation';

import { Outlet } from 'react-router-dom';


function App() {
  return (
   <>
   <Navigation/>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Outlet />

      </div>
      <Footer/>
      </> 
  );
}

export default App;