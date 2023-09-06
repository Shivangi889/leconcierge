
import React from 'react';
import '../../App.css'
import Header from '../Header/Header';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import  banner from '../../img/banking-services-banner.jpg';
import mortgage from '../../img/mortgage-lending-pic.jpg'


const BankingServices = () => {
  return (
    <div> 
    <Header/>
     
    <div class="home-slider inner-banner carousel slide" data-bs-ride="carousel">
        <img src={banner} alt=''/>
        <div class="text-overlay">
            <h2>Banking & Mortgage Services</h2>
        </div>
    </div>
      
    <div class="aboutus-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="service-inner-pera">

                        <p>Managing your finances in the UAE can be a challenging and intricate task. At Le Concierge,
                            we provide expert support to help you navigate the world of UAE finance. </p>
                            <p>Our experienced team will assist you with opening personal or corporate bank accounts,
                            identifying the best mortgage options, and securing optimal financing solutions.</p> <p>We
                            work closely with reputable UAE banks and financial institutions, ensuring you receive
                            unparalleled service tailored to your needs.
                        </p>


                        <div class="appointment-btn d-flex">
                            <Link href="#">Book Appointment</Link>
                        </div>


                    </div>


                </div>

                <div class="col-lg-6">
                    <div class="service-pic">
                        <img src={mortgage} alt=""/>
                    </div>
                </div>




            </div>
        </div>
    </div>
      
      <Footer/>
    </div>
  );
};

export default BankingServices;
