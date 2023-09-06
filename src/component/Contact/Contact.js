import React from "react";
import '../../App.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from "../Header/Header";
import Footer from "../Footer";
import contactBanner from "../../img/contact-page-banner.jpg";
import location from "../../img/office-location-icon.png";
import email from "../../img/email-icon.png";
import telephone from "../../img/telephone-icon.png";

function Contact() {
  return (
    <div>
      <Header />
      <div
        class="home-slider inner-banner carousel slide"
        data-bs-ride="carousel"
      >
        <img src={contactBanner} alt="" />
        <div class="text-overlay">
          <h2>Contact us</h2>
        </div>
      </div>

      <div class="aboutus-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="get-in-tuch-box">
                <h3>Get in Tuch with us</h3>
                <div class="contact-address">
                  <div class="current-address d-lg-flex">
                    <div class="current-address-pic">
                      <img src={location} alt="" />
                    </div>

                    <div class="current-address-text">
                      <h5>Office Address</h5>
                      <p>Office 2601, Ubora Tower, Business Bay, Dubai</p>
                    </div>
                  </div>

                  <div class="current-address d-lg-flex">
                    <div class="current-address-pic">
                      <img src={email} alt="" />
                    </div>

                    <div class="current-address-text">
                      <h5>Mail Us</h5>
                      <p>hello@leconcierge.ae</p>
                    </div>
                  </div>

                  <div class="current-address d-lg-flex">
                    <div class="current-address-pic">
                      <img src={telephone} alt="" />
                    </div>

                    <div class="current-address-text">
                      <h5>Telephone</h5>
                      <p>+971 45588149</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="contact-form">
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupContact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" placeholder="Enter Contact" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Message" />
                  </Form.Group>
                  <Button variant="warning" type="submit">
                    Submit
                  </Button>{''}
                </Form>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
