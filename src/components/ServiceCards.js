import React from 'react'
import './servicecards.css'
import card from './hero-images/card.jpg'

function ServiceCards() {
    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                  <div className='main_title'>
                      <p className='top_text'>Our Services</p>
                      <h2>What Service We Offer You</h2>
                      </div>  
                </div>
            </div>
            <div className='service_body'>
            <div className='service_container'>
                <div className='service_box'>
                    <div className='image_box'>
                        <img src={card} alt='card'/>
                        </div>
                    <div className='details'>
                        <h2> Web Development</h2>
                        <div className='info'>
                            <h3>World class responsive sites</h3>
                            <p>This is a paragraph in a website</p>
                        </div> 
                </div>
            </div>
            </div>

            <div className='service_container'>
                <div className='service_box'>
                    <div className='image_box'>
                        <img src={card} alt='card'/>
                        </div>
                    <div className='details'>
                        <h2> Web Development</h2>
                        <div className='info'>
                            <h3>World class responsive sites</h3>
                            <p>This is a paragraph in a website</p>
                        </div> 
                </div>
            </div>
            </div>



            
            </div>

            

            

            

            

        </div>
        </>
    )
}

export default ServiceCards

