
import React from 'react';
import '../../App.css'
import Header from '../Header/Header';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import  jetBanner from '../../img/private-jet-services-banner.jpg';
import  jetpic from '../../img/private-jet-services-pic.jpg'


const PrivateJet = () => {
  return (
    <div> 
    <Header/>
     
    <div class="home-slider inner-banner carousel slide" data-bs-ride="carousel">
    <img src={jetBanner} alt=''/>
        <div class="text-overlay">
            <h2>Private Jet Services</h2>
        </div>
    </div>
    <div class="aboutus-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="service-inner-pera">

                    <p>Experience the epitome of luxury air travel with Le Concierge's UAE private jet charter
                            services. Our bespoke offerings are tailored to your travel preferences, ensuring a seamless
                            and personalized journey.<br/><br/> Enjoy unparalleled privacy, flexibility, and convenience
                            as you
                            fly in style, with access to exclusive UAE airports, personalized in-flight services, and a
                            dedicated support team. Whether you're traveling for business or leisure, Le Concierge's UAE
                            private jet services will elevate your experience to new heights.
                        </p>
                        <div class="appointment-btn d-flex">
                            <Link to="#">Book Appointment</Link>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="service-pic">
                        <img src= {jetpic} alt=" "/>
                    </div>
                </div>

            </div>
        </div>
    </div>
      
      <Footer/>
    </div>
  );
};

export default PrivateJet;
