import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Link, Route, BrowserRouter} from 'react-router-dom'
import Services from './components/Services';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/AboutUs' exact component={AboutUs}/>
       <Route path='/Services' exact component={Services}/>
       <Route path='/Projects' exact component={Projects}/>
     </Switch>
    
    </BrowserRouter>
  );
}

export default App;
