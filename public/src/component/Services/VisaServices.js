
import React from 'react';
import '../../App.css'
import Header from '../Header/Header';

import Footer from '../Footer';
import { Link } from 'react-router-dom';

import vission from '../../img/vission-banner.jpg';
import  visa from '../../img/visa-services-pic.png';

const VisaServices = () => {
  return (
    <div> 
    <Header/>
     
    <div class="home-slider inner-banner carousel slide" data-bs-ride="carousel">
        <img src={vission} alt=""/>
        <div class="text-overlay">
            <h2>Visa Services</h2>
        </div>
    </div>
     
    <div class="aboutus-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="service-inner-pera">

                        <p>Navigating visa procedures in the UAE can be time-consuming and complicated. At Le Concierge,
                            we strive to make this experience as smooth and hassle-free as possible.</p> 
                            <p>Our knowledgeable team is well-versed in the intricacies of UAE visa applications, including
                            Golden Visa, Residence, and Employment Visas.</p>
                            <p>We'll guide you through each stage of the process, from application preparation and submission to renewal and status updates,
                            ensuring your peace of mind in the UAE.
                        </p>
                        <div class="appointment-btn d-flex">
                            <Link to="#">Book Appointment</Link>
                        </div>

                    </div>


                </div>

                <div class="col-lg-6">
                    <div class="service-pic">
                        <img src={visa} alt=""/>
                    </div>
                </div>


            </div>
        </div>
    </div>
      
      <Footer/>
    </div>
  );
};

export default VisaServices;
