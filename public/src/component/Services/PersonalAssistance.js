
import React from 'react';
import '../../App.css'
import Header from '../Header/Header';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import  personalBanner from '../../img/personal-assistance-banner.jpg';
import  personalpic from '../../img/personal-assistance-pic.jpg'


const PersonalAssistance = () => {
  return (
    <div> 
    <Header/>
     
    <div class="home-slider inner-banner carousel slide" data-bs-ride="carousel">
    
    <img src={personalBanner} alt=''/>
        <div class="text-overlay">
            <h2>Personal Assistance</h2>
        </div>
    </div>
    <div class="aboutus-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="service-inner-pera">
                    <p>TAt Le Concierge, we recognize the importance of your time and understand that you need to
                            focus on what truly matters. Our dedicated personal assistance services in the UAE are
                            designed to handle your daily tasks and errands, allowing you to prioritize the essential
                            aspects of your personal and professional life. Whether it's running errands such as grocery
                            shopping, picking up prescriptions, or managing your dry cleaning, we ensure that every task
                            is completed efficiently and accurately. Our team also excels in managing appointments and
                            scheduling, handling medical, personal, and professional meetings with diligence and
                            precision. Our comprehensive UAE travel planning services include booking flights,
                            accommodations, and transportation, ensuring a seamless and stress-free travel experience
                            tailored to your unique requirements. Trust Le Concierge to be your personal assistant in
                            the UAE, providing exceptional support and service for all aspects of your life.
                        </p>
                    
                        <div class="appointment-btn d-flex">
                            <Link to="#">Book Appointment</Link>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="service-pic">
                        <img src= {personalpic} alt=" "/>
                    </div>
                </div>

            </div>
        </div>
    </div>
      
      <Footer/>
    </div>
  );
};

export default PersonalAssistance;
