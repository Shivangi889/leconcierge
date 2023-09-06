
import React from 'react';
import '../../App.css'
import Header from '../Header/Header';

import Footer from '../Footer';
import { Link } from 'react-router-dom';
import  AccBanner from '../../img/accounting-insurance-banner.jpg';
import  insurance from '../../img/accounting-insurance-pic.jpg'


const Accounting = () => {
  return (
    <div> 
    <Header/>
     
    <div class="home-slider inner-banner carousel slide" data-bs-ride="carousel">
        <img src={AccBanner} alt=''/>
        <div class="text-overlay">
            <h2>Accounting, Tax & Insurance</h2>
        </div>
    </div>
  
    <div class="aboutus-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="service-inner-pera">

                        <p>Le Concierge's proficient team is here to manage all your UAE accounting requirements, from
                            bookkeeping and financial reporting to business VAT and tax assistance. <br/><br/>Our experts
                            stay up-to-date with the latest UAE regulatory changes, ensuring your financial records
                            remain compliant and accurate. Additionally, we help you secure the ideal insurance coverage
                            to protect your valuable personal and business assets in the UAE, offering peace of mind and
                            financial security.
                        </p>

                        <div class="appointment-btn d-flex">
                            <Link to="#">Book Appointment</Link>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="service-pic">
                        <img src= {insurance} alt=" "/>
                    </div>
                </div>

            </div>
        </div>
    </div>
      
      <Footer/>
    </div>
  );
};

export default Accounting;
