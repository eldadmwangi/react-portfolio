import React from 'react'
import logo1 from './images/logo1.png'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Link className="navbar-brand" to="/logo"> <img  className='logo' src={logo1}/> Eldad</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/" style={{color:'white'}}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/AboutUs" style={{color:'white'}}>About Me</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Services" style={{color:'white'}}>Services</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Projects" style={{color:'white'}}>Projects</Link>
      </li>
     
    </ul>
   
  </div>
</nav>
        </div>
        </>
    )
}

export default Navbar
