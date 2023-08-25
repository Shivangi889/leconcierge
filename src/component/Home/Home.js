import React from 'react';
import mov from '../../img/mov-2.mp4';
import about from '../../img/about-home-pic.jpg';
import business from '../../img/new-business-setup-pic.jpg';
import property from '../../img/property-management.jpg';
import personal from '../../img/personal-assistance.jpg';
import privatejet from '../../img/private-jet.jpg';
import yatch from '../../img/yatch-rental.jpg'
import luxury from '../../img/luxury-car-rental.jpg';
import banking from '../../img/banking.jpg';
import accounting from '../../img/accounting-tax-insurance.jpg';
import visa from '../../img/visa-services.jpg';
// import bgbusiness from '../../img/business-setup-background.jpg'
// import AboutUs from '../Aboutus/Aboutus';
// import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="home-slider carousel slide" data-bs-ride="carousel">
        <div className="home-slider-video">
          <video width="100%" height="600" loop autoPlay muted playsInline>
            <source src={mov} type="video/mp4" />
          </video>
        </div>
        <div className="text-overlay">
          <h2>Bespoke Concierge Services</h2>
        </div>
      </div>

      <div className="aboutus-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-text home-about-text">
                <div className="text-heading">
                  <h2>About us</h2>
                </div>
                <p>
                  At Le Concierge, we understand that your time is valuable. That's why our bespoke concierge services
                  are designed to take care of your daily tasks and errands, giving you more time to focus on the things
                  that truly matter in your life. Whether managing your property, arranging travel, or handling your
                  financial needs, our team of experienced professionals is committed to providing exceptional service
                  and making your life easier. With Le Concierge, you can trust that your needs will be handled with the
                  utmost care and attention to detail.
                </p>

                {/* <div className="appointment-btn">
                  <a href="aboutus.html" className="appointment-btn">Read More</a>
                </div> */}

                {/* <div className="appointment-btn">
                  <Link to="AboutUs" className="appointment-btn">Read More</Link>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="home-about-pic">
                <img src={about} alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-bg">
        <div className="container">
          <div className="row">
            <div className="text-heading text-center heading-text">
              <h2 className="text-center text-white">Our Services</h2>
            </div>

            <div className="col-lg-4">
              <a href="new-business-setup.html">
                <div className="service-column">
                  <div className="service-column-pic">
                    <img src={business} alt="Business Setup" />
                  </div>
                  <div className="service-text-overlay">
                    <h4>Business Setup</h4>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
					<a href="visa-services.html">
						<div class="service-column">
							<div class="service-column-pic">
							<img src={visa} alt="loading"/>
							</div>
							<div class="service-text-overlay">
								<h4>Visa Services</h4>
							</div>
						</div>
					</a>
				</div>

            <div className="col-lg-4">
              <a href="property-management.html">
                <div className="service-column">
                  <div className="service-column-pic">
                    <img src={property} alt="Property Management" />
                  </div>
                  <div className="service-text-overlay">
                    <h4>Property Management</h4>
                  </div>
                </div>
              </a>
            </div>




            <div class="col-lg-4">
					<a href="accounting-tax-insurance.html">
						<div class="service-column">
							<div class="service-column-pic">
							<img src= {accounting} alt='loading'/>
							</div>
							<div class="service-text-overlay">
								<h4>Tax Assistance</h4>
							</div>
						</div>
					</a>
				</div>

				<div class="col-lg-4">
					<a href="banking-mortgage-services.html">
						<div class="service-column">
							<div class="service-column-pic">
							<img src={banking} alt='loading'/>
							</div>
							<div class="service-text-overlay">
								<h4>Insurance Services</h4>
							</div>
						</div>
					</a>
				</div>

				<div class="col-lg-4">
					<a href="luxury-car-rental.html">
						<div class="service-column">
							<div class="service-column-pic">
							<img src= {luxury} alt='loading' />
							</div>
							<div class="service-text-overlay">
								<h4>Luxury Car Rental</h4>
							</div>
						</div>
					</a>
				</div>


				<div class="col-lg-4">
					<a href="luxury-yacht-rental.html">
						<div class="service-column">
							<div class="service-column-pic">
							<img src={yatch} alt='loading'/>
							</div>
							<div class="service-text-overlay">
								<h4>Luxury Yacht Rental</h4>
							</div>
						</div>
					</a>
				</div>

				<div class="col-lg-4">
					<a href="private-jet-services.html">
						<div class="service-column">
							<div class="service-column-pic">
							<img src={privatejet} alt='loading'/>
						</div>
							<div class="service-text-overlay">
								<h4>Private Jet Services</h4>
							</div>
						</div>
					</a>
				</div>

				<div class="col-lg-4">
					<a href="personal-assistance.html">
						<div class="service-column">
							<div class="service-column-pic">
							<img src= {personal} alt='loading'/>
						</div>
							<div class="service-text-overlay">
								<h4>Personal Assistance</h4>
							</div>
						</div>
					</a>
				</div>




          </div>
        </div>
      </div>

      <div class="business-setup-bg" >
	  {/* <img src = {bgbusiness} alt='' /> */}
		<div class="container">
			<div class="row">
				<div class="col-lg-4 demand-listing-box">
					<div class="demand-listing">
						<span>we strive to be leaders in the concierge
							industry by providing unparalleled services that are tailored to
							your unique needs and preferences</span>
					</div>
				</div>
			</div>
		</div>


		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12 px-0 py-0 d-lg-flex flex-lg-column align-items-end">
					<div class="business-setup-box business-text">
						<h2>100+</h2>
						<span>business<br/>
							setup</span>
					</div>

					<div class="citizen-box business-text">
						<h2>1250+</h2>
						<span>CITIZEN BY INVESTMENT</span>
					</div>

					<div class="business-bottom-box d-lg-flex justify-content-between">
						<div class="property-box business-text">
							<h2>250+</h2>
							<span>Work Visa</span>
						</div>

						<div class="visa-box business-text">
							<h2>50+</h2>
							<span>Property MANAGEMENT</span>
						</div>

					</div>

				</div>
			</div>
		</div>
	</div>
    </div>
  );
};

export default Home;
