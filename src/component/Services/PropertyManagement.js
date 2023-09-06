
import React from 'react';
import '../../App.css'
import Header from '../Header/Header';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import  proBanner from '../../img/property-management-banner.jpg';
import  picManagement from '../../img/property-management-pic.png'


const PropertyManagement = () => {
  return (
    <div> 
    <Header/>
     
    <div class="home-slider inner-banner carousel slide" data-bs-ride="carousel">
        <img src={proBanner} alt=""/>
        <div class="text-overlay">
            <h2>Property Management</h2>
        </div>
    </div>
  
    <div class="aboutus-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="service-inner-pera">

                        <p>Trust Le Concierge to manage your UAE property with professionalism and care. Our
                            comprehensive property management services encompass everything from routine maintenance and
                            repairs to tenant relations and rent collection. </p>
                            <p>We pride ourselves on our attention to detail and commitment to preserving the value of your UAE property while providing a
                            stress-free experience for you.
                        </p>

                        <div class="appointment-btn d-flex">
                            <Link to="#">Book Appointment</Link>
                        </div>

                    </div>


                </div>

                <div class="col-lg-6">
                    <div class="service-pic">
                        <img src={picManagement} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
      <Footer/>
    </div>
  );
};

export default PropertyManagement;
