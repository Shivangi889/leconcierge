
import React from 'react';
import '../../App.css'
import Header from '../Header/Header';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import  yacht from '../../img/yacht-rental-banner.jpg';
import  yachtpic from '../../img/luxury-yacht-rental-pic.jpg'


const LuxuryYacht = () => {
  return (
    <div> 
    <Header/>
     
    <div class="home-slider inner-banner carousel slide" data-bs-ride="carousel">
        <img src={yacht} alt=""/>
        <div class="text-overlay">
            <h2>Luxury Yacht Rental</h2>
        </div>
    </div>
    <div class="aboutus-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="service-inner-pera">

                    <p>Discover the pinnacle of yachting experiences with Le Concierge's UAE luxury yacht rental
                            services. Our selection of high-end yachts offers unparalleled comfort, elegance, and
                            performance.<br/> <br/> Whether you're planning an intimate UAE getaway or a lavish
                            celebration, our dedicated team will ensure your time on the water is unforgettable. From
                            personalized itineraries and gourmet catering to on-board entertainment, we'll take care of
                            every detail, so all you need to do is sit back and enjoy the journey.
                        </p>

                        <div class="appointment-btn d-flex">
                            <Link to="#">Book Appointment</Link>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="service-pic">
                        <img src= {yachtpic} alt=" "/>
                    </div>
                </div>

            </div>
        </div>
    </div>
      
      <Footer/>
    </div>
  );
};

export default LuxuryYacht;
