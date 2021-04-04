import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Link, Route, BrowserRouter} from 'react-router-dom'
import Services from './components/Services';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Contacts from './components/Contacts';
// import Particles from 'react-particles-js';

function App() {
  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
     {/* <Particles 
       params={{
         particles:{
           number:{
             value:30,
             density:{
               enable:true,
               value_area:900
             }
           },
           shape:{
             type:'star',
             stroke:{
                width:6,
                color:'#000000'
             }
           }
         }
       }}/> */}
     <Switch>
       <Route path='/' exact component={Home}/>
      
       <Route path='/AboutUs' exact component={AboutUs}/>
       <Route path='/Services' exact component={Services}/>
       <Route path='/Projects' exact component={Projects}/>
       <Route path='/Contacts' exact component={Contacts}/>
       <Route path='/' render={()=><div>404 Error</div>}/>
       
     </Switch>
    
    </BrowserRouter>
    </>
  );
}

export default App;
