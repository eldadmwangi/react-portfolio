import React from 'react'
import Footer from './Footer'
import cool from './hero-images/cool.jpeg'
import SignUp from './SignUp'


function Contacts() {
     
    return (
        <div className='container mt-3'>
           <div className='row'>
               <div className='col-md-5'>
                   <SignUp/>
               </div>
               <div className='col-md-7 my-auto'>
                    <img className='img-fluid w-100' src={cool} alt='cool'/>
                </div>
           </div>
           <Footer/>
        </div>
    )
}

export default Contacts
