import React from 'react';
import   '../../App.css';


import pictestimonial from '../../img/testimonail-pic.png';
const TestimonialSection = () => {
  return (
    <section className="testimonial-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="testimanial-heading">
            <div className="text-heading">
              <h2>Client Speak</h2>
            </div>
          </div>
          <div
            id="carouselExampleDark"
            className="home-carousel carousel carousel-light slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="testimanial-box">
                  <div className="testimonial-pic">
                    <img src= {pictestimonial} alt="..." />
                  </div>
                  <h4>
                    "Le Concierge provided excellent service when setting up my new business
                    in the UAE. Their knowledgeable team took care of everything, making the process
                    seamless and stress-free."
                  </h4>
                  <div className="founder-text">
                    <span>Oliva jems</span>
                    <p>Investment Banker</p>
                  </div>
                </div>
              </div>
              {/* Other carousel items */}
            </div>
            <div className="cauousel-btn">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span aria-hidden="true">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span aria-hidden="true">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>


            
        </div>
        </div>
     </div>
    </section>
  );
};

export default TestimonialSection;



















// import Carousel from 'react-bootstrap/Carousel';

// function DarkVariantExample() {
//   return (
//     <div className='testimonial-bg'>

// <div className="container-fluid">
//         <div className="row">
//           <div className="testimanial-heading">
//             <div className="text-heading">
//               <h2>Client Speak</h2>
//             </div>
//           </div>
//           </div>
//           </div>
//           <div  id="carouselExampleDark"
//             className="home-carousel carousel carousel-light slide"
//             data-bs-ride="carousel">

// <Carousel data-bs-theme="dark" >
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={pictestimonial}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//         </Carousel.Item>
//     {/* <Carousel data-bs-theme="dark" >
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={pictestimonial}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item> */}
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=eee"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=e5e5e5"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     </div>
//     </div>
//   );
// }

// export default DarkVariantExample;
