import React from 'react';

const AboutUs = () => {
  return (
    <div>
      {/* BANNER SECTION START */}
      <div className="home-slider inner-banner carousel slide" data-bs-ride="carousel">
        <img src="img/aboutus-banner.jpg" alt="About Us Banner" />
        <div className="text-overlay">
          <h2>About us</h2>
        </div>
      </div>
      {/* BANNER SECTION END */}
      
      {/* ABOUT US SECTION START */}
      <section className="aboutus-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-inner-pera">
                <p>
                  At Le Concierge, we recognize the importance of your time and understand that you need
                  to focus on what truly matters in your life. Our tailored concierge services are designed
                  to handle your daily tasks and errands, allowing you to prioritize the essential aspects of
                  your personal and professional life.
                </p>
                <p>
                  Our mission at Le Concierge is to deliver exceptional and personalized services that cater
                  to your unique requirements while upholding the highest standards of professionalism,
                  integrity, and discretion.
                  <br /><br />
                  As a leading provider of luxury concierge services in the UAE, we
                  are committed to fostering enduring relationships with our valued clients by consistently
                  delivering unmatched value and surpassing your expectations at every opportunity.
                </p>
                <h5>Vision Statement:</h5>
                <p className="mb-05">
                  To become the leading provider of luxury concierge services in the UAE, delivering bespoke
                  solutions that exceed client expectations and redefine the industry standard.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-pic">
                <img src="img/about_us.jpg" alt="About Us Image" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="about-inner-pera">
                <h5>Values :</h5>
                <ul>
                  <li><strong>Excellence:</strong> We strive to consistently provide exceptional service and
                    exceed expectations, ensuring that our clients receive the highest level of satisfaction
                    with every interaction.</li>
                  <li><strong>Personalization:</strong> We recognize that each client has unique needs and
                    preferences. Therefore, we prioritize personalization, tailoring our services to meet
                    each client's specific requirements.</li>
                  <li><strong>Integrity:</strong> We maintain the highest level of integrity, honesty, and
                    ethical conduct in all our interactions with clients, ensuring that we operate with
                    transparency and accountability at all times.</li>
                  <li><strong>Commitment:</strong> We are dedicated to delivering on our promises and
                    maintaining long-lasting relationships with our clients, always putting their needs and
                    satisfaction at the forefront of our business.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US SECTION END */}
    </div>
  );
};

export default AboutUs;
