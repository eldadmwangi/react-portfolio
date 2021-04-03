import React from 'react'
import Typed from 'react-typed';
import {Link} from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function HeroSection() {
    return (
        <div className='container'>
        <div className='hero-wrapper'>
           <div className='hero-image'>
               <div className='hero-text'>
                   <h2 className='hero-header'>Eldad's Portfolio</h2>
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
        
        <footer className='footer-area'>
            <section className='footer-subscription'>
                <h5 className='footer-subscription-heading'> Subscribe here
                </h5>
                <p className='footer-subscription-text'> Unsubscribe anytime!</p>

                <div className='input-areas'>
                    <form>
                        <input 
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Enter Email..'
                        />
                        <Link to='/Contacts'><button>Subscribe</button></Link>
                    </form>
                </div>
            </section>

            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to ='/AboutUs'>About</Link>
                        <Link to ='/Services'>Services</Link>
                        <Link to ='/'>Testimonials</Link>
                        <Link to ='/Contacts'>Contacts</Link>
                    </div>
                </div>
          </div>
          
          <div className='social-media-wrap'>
              <Link className='social-icon-link'
              to={'https://www.facebook.com/eldad.mwangi'}
              target='_blank'>
              <FaFacebook/>
             </Link>

             <Link className='social-icon-link'
              to={'//www.linkedin.com/in/eldad-mwangi-685351176/'}
              target='_blank'>
              <FaLinkedin/>
             </Link>

             <Link className='social-icon-link'
              to='/'
              target='_blank'>
              <FaInstagram/>
             </Link>

             <Link className='social-icon-link'
              to={'//github.com/eldadmwangi'}
              target='_blank'>
              <FaGithub/>
             </Link>
          </div>
          <small className='website-rights'>Eldad-shop &copy; 2021</small>
        </footer>

    </div>
    
    )
}

export default HeroSection
