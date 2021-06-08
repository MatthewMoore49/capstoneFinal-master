
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import FooterHome from './FooterHome';
import Home from './pages/Home';
import About from './pages/About';
 import Attractions from './pages/Attractions';
 import Contact from './pages/Contact';
import './styles/Main.css';
// import router from './routes/auth';


// app.use(express.json())
// app.use(require('./routes/auth'))


// router.get('./', (req,res)=>{
//   res.send("hello")
// })


// router.post('/signup', (req,res)=>{
//   console.log(req.body.name)
// })




const App = () => {
  return (

<BrowserRouter>
    <div>
    <Navbar/>
    <Route exact path = '/home' component={Home}/>
     <Route path = '/about' component={About}/>
    <Route path = '/contact' component={Contact}/>
    <Route path = '/Attractions' component={Attractions}/>
    {/* <Route path = '/Sports' component={Sports}/> */}
    {/* <Route path = '/Casinos' component={Casinos}/> */}
    {/* <Route path = '/Venues' component={Music_Venues}/> */}
    {/* <Route path = '/OurFavorites' component={Our_Favorites}/> */}
    {/* <Route path = '/Parks' component={Parks}/> */}
    {/* <Route path = '/Restaurants' component={Restaurants}/> */}
    {/* <Route path = '/Breweries' component={Breweries}/> */}
    <FooterHome />
    </div>
    </BrowserRouter>
  );
}


// app.listen(5000,() => {
//   console.log('express server started');
// });

export default App;












