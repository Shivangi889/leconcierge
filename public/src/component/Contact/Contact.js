import React from "react";
import '../../App.css'
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
                <form action="send-mail.php" method="post">
                  <div className="input-filed">
                    <input type="hidden" name="page" value="Contact Us Page" />
                  </div>
                  <div className="input-filed">
                    <input
                      type="hidden"
                      name="redirect_url"
                      value="contact.html"
                    />
                  </div>
                  <div className="input-filed" style={{color: "red"}}>
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="input-filed">
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="input-filed">
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  <div className="col-md-12">
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <div className="submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
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
