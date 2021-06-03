//import all the things (navbar, etc)

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/Main.css';
import './styles/Home.css';


const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Route exact path = '/home' component={Home}/> 
      <h1>PISS WRINKLE</h1>
<<<<<<< HEAD
      <Footer />
=======
    <Footer />
>>>>>>> c2fc936b2898ca5fe6f50dba35b036f446e30623
    </div>
    </BrowserRouter>
  );
}

export default App;