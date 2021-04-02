import React from 'react'
import Typed from 'react-typed';
import {Link} from 'react-router-dom'

function HeroSection() {
    return (
        <div className='container'>
        <div className='hero-wrapper'>
           <div className='hero-image'>
               <div className='hero-text'>
                   <h2>This is basically my portfolio thing</h2>
                   <Typed
                    className='typed-text'
                    strings={ ['Web design', 'Mobile-apps', 'Google-adds','web-development']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                    <div className='contact-button'>
                    <Link to ='Contacts' className='btn-outline'><small>Contact me</small></Link>

                    </div>
                   
               </div>
           </div> 
        </div>
         
    </div>
    )
}

export default HeroSection
