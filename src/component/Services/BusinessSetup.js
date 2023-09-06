
import React from 'react';
import '../../App.css'
import Header from '../Header/Header';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import  setup from '../../img/new-business-setup-banner.jpg';
import picsetup from '../../img/new-business-setup-pic.jpg'


const Bsetup = () => {
  return (
    <div> 
    <Header/>
     
      <div className="home-slider inner-banner carousel slide" data-bs-ride="carousel">
        <img src={setup} alt="About Us Banner" />
        <div className="text-overlay">
          <h2>New Business Setup</h2>
        </div>
      </div>
      <div class="aboutus-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="service-inner-pera">

                        <p>At Le Concierge, we understand that setting up a new business in the UAE can be a complex and
                            daunting task. Our experienced team is committed to simplifying this process for you,
                            offering expert guidance and handling all required documentation.</p><p> Whether you're
                            establishing a mainland, free zone, or offshore company in the UAE, our comprehensive
                            services cover every aspect of the setup process. </p>
                            <p>From legal assistance and license acquisition to office space sourcing and registration, we'll be with you every step of the
                            way, ensuring a seamless and successful UAE business launch.
                        </p>



                        <div class="appointment-btn d-flex">
                            <Link to="#">Book Appointment</Link>
                        </div>

                    </div>


                </div>

                <div class="col-lg-6">
                    <div class="service-pic">
                        <img src={picsetup} alt=""/>
                    </div>
                </div>




            </div>
        </div>
    </div>
      
      <Footer/>
    </div>
  );
};

export default Bsetup;
