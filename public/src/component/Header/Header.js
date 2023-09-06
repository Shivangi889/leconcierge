import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
// import AboutUs from '../Aboutus/Aboutus';

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
                      {/* <a href="index.html" className="nav-link">
                        Home
                      </a> */}

                      <Link to="/home" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                      {/* <a href="aboutus.html">About</a> */}
                    </li>
                    <li>
                      <Link>Services</Link>
                      <ul>
                        <li>
                          <Link to="/business">New Business Setup</Link>
                        </li>
                        <li>
                          <Link to="/visaServices">Visa Services</Link>
                        </li>
                        <li>
                          <Link to="/banking">Banking & Mortgage Services</Link>
                        </li>
                        <li>
                          <Link to="/property">Property Management</Link>
                        </li>
                        <li>
                          <Link to="/accounting">
                            Accounting, Tax & Insurance
                          </Link>
                        </li>
                        <li>
                          <Link to="/luxury">Luxury Car Rental</Link>
                        </li>
                        <li>
                          <Link to="/yacht">Luxury Yacht Rental</Link>
                        </li>
                        <li>
                          <Link to="/privatejet">Private Jet Services</Link>
                        </li>
                        <li>
                          <Link to="/personal">Personal Assistance</Link>
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
                      <Link href="#">Career</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="call-us">
                  <Link to="#">E-mail</Link>
                  <Link to="#">Call Us</Link>
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
