
import React from 'react';
import '../../App.css'
import Header from '../Header/Header';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import  carbanner from '../../img/luxury-car-rental-banner.jpg';
import  carpic from '../../img/luxury-car-rental-pic.jpg'


const Luxury = () => {
  return (
    <div> 
    <Header/>
     
    <div class="home-slider inner-banner carousel slide" data-bs-ride="carousel">
        <img src={carbanner} alt=""/>
        <div class="text-overlay">
            <h2>Luxury Car Rental</h2>
        </div>
    </div>
    <div class="aboutus-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="service-inner-pera">

                    <p>Experience the ultimate in luxury and convenience with Le Concierge's UAE luxury car rental
                            services. Choose from our extensive fleet of high-end vehicles, featuring the latest models
                            from renowned automakers.<br/><br/> Whether you require a sleek sports car, a comfortable
                            sedan, or a spacious SUV, we'll arrange the perfect UAE car rental tailored to your needs.
                            Enjoy our seamless booking process, exceptional customer service, and flexible rental terms
                            designed to accommodate your preferences.
                        </p>

                        <div class="appointment-btn d-flex">
                            <Link to="#">Book Appointment</Link>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="service-pic">
                        <img src= {carpic} alt=" "/>
                    </div>
                </div>

            </div>
        </div>
    </div>
      
      <Footer/>
    </div>
  );
};

export default Luxury;
