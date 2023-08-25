import React from 'react';
import '../App.css'

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <section className="footer-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-left">
                <div className="footer-logo">
                  <img src="img/logo.png" alt="Logo" />
                </div>
                <p className="info-1">Office 2601, Ubora Tower, Business Bay, Dubai</p>
                <p className="info-1">
                  <a href="mailto:hello@leconcierge.ae">hello@leconcierge.ae</a>
                </p>
                <p className="info-1">+971 45588149</p>
                <ul className="d-flex">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-globe"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-right d-lg-flex justify-content-between">
                <div className="footer-menu">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="aboutus.html">About</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href="new-business-setup.html">New Business Setup</a>
                    </li>
                    <li>
                      <a href="visa-services.html">Visa Services</a>
                    </li>
                    <li>
                      <a href="banking-mortgage-services.html">Banking & Mortgage Services</a>
                    </li>
                    <li>
                      <a href="property-management.html">Property Management</a>
                    </li>
                    <li>
                      <a href="accounting-tax-insurance.html">Accounting, Tax & Insurance</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu">
                  <h3 className="over-text">Solutions</h3>
                  <ul>
                    <li>
                      <a href="luxury-car-rental.html">Luxury Car Rental</a>
                    </li>
                    <li>
                      <a href="luxury-yacht-rental.html">Luxury Yacht Rental</a>
                    </li>
                    <li>
                      <a href="private-jet-services.html">Private Jet Services</a>
                    </li>
                    <li>
                      <a href="personal-assistance.html">Personal Assistance</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copy-right-text">
                <p>Copyright © 2023 All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Alert */}
      <div className="alert text-center cookiealert" role="alert">
        <p>
          We use cookies and similar technologies to improve your experience on our website, analyze website usage, and
          deliver personalized content. You can manage your cookie preferences through your browser settings.
        </p>
        <button type="button" className="btn btn-primary btn-sm acceptcookies">
          I agree
        </button>
      </div>
    </>
  );
};

export default Footer;
