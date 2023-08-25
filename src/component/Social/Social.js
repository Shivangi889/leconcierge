import React from 'react';
import instagramPic1 from '../../img/instagram-pic1.png';
import instagramPic2 from '../../img/instagram-pic2.png';
import instagramPic3 from '../../img/instagram-pic3.png';
import '../../App.css'; 

const Social = () => {
  return (
    <section className="instagram-bg">
      <div className="container">
        <div className="row">
          <div className="instagram-heading">
            <div className="text-heading">
              <h2>Instagram</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="instagram-column">
              <img src={instagramPic1} alt="Instagram 1" className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="instagram-column">
              <img src={instagramPic2} alt="Instagram 2" className="img-fluid" />
              <div className="insta-buttons d-flex justify-content-between">
                <a href="#">
                  load More{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
                <a href="#">
                  Follow on Instagram{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="instagram-column">
              <img src={instagramPic3} alt="Instagram 3" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
