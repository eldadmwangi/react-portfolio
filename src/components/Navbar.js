import React from 'react'
import logo1 from './images/logo1.png'
import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBars } from 'react-icons/fa'

function Navbar() {
    const name='eldad'
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className='container'>
  <Link className="navbar-brand" to="/"> <img  className='logo' src={logo1}/> Eldad
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars style={{color:'white'}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/AboutUs">About</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Services">Services</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Projects">Projects</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Contacts">Contacts</Link>
      </li>
     
    </ul>
   </div>

  </div>
</nav>
     
        </>
    )
}

export default Navbar
