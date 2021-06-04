
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import FooterHome from './FooterHome';
import Home from './pages/Home';
import About from './pages/About';
// import Attractions from './pages/Attractions';
// import Contact from './pages/Contact';
import './styles/Main.css';



const App = () => {
  return (

<BrowserRouter>
    <div>
    <Navbar/>
    <Route exact path = '/home' component={Home}/>
     <Route path = '/about' component={About}/>
    {/* <Route path = '/contact' component={Contact}/> */}
    {/* <Route path = '/attractions' component={Attractions}/> */}
    <FooterHome />
    </div>
    </BrowserRouter>
  );
}
export default App;












