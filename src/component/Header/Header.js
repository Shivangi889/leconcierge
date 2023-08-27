import React from 'react';
import './Header.css';

import logo from '../../img/logo.png';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-menu">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="nav-menu collapse navbar-collapse justify-content-center"
                  id="navbarSupportedContent"
                >
                  <ul className="d-lg-flex">
                    <li>
                      <a href="index.html" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html">About</a>
                    </li>
                    <li>
                      <a>Services</a>
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
                    </li>

                    {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Personal Assistance</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}









                    <li> 
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="call-us">
                  <a href="#">E-mail</a>
                  <a href="#">Call Us</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
