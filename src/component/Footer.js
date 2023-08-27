// import React from 'react';
import '../App.css';
//  import logo from '../img/logo.png'

// const Footer = () => {
//   return (
//     <>
//       {/* Footer Section */}
//       <section className="footer-bg">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="footer-left">
//                 <div className="footer-logo">
//                   <img src={logo} alt="Logo" />
//                 </div>
//                 <p className="info-1">Office 2601, Ubora Tower, Business Bay, Dubai</p>
//                 <p className="info-1">
//                   <a href="mailto:hello@leconcierge.ae">hello@leconcierge.ae</a>
//                 </p>
//                 <p className="info-1">+971 45588149</p>
//                 <ul className="d-flex">
//                   <li>
//                     <a href="#">
//                       <i className="fa-brands fa-facebook-f"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fa-brands fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fa-solid fa-globe"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-8">
//               <div className="footer-right d-lg-flex justify-content-between">
//                 <div className="footer-menu">
//                   <h3>Quick Links</h3>
//                   <ul>
//                     <li>
//                       <a href="aboutus.html">About</a>
//                     </li>
//                     <li>
//                       <a href="#">Features</a>
//                     </li>
//                     <li>
//                       <a href="#">Blog</a>
//                     </li>
//                     <li>
//                       <a href="#">Contact</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer-menu">
//                   <h3>Services</h3>
//                   <ul>
//                     <li>
//                       <a href="new-business-setup.html">New Business Setup</a>
//                     </li>
//                     <li>
//                       <a href="visa-services.html">Visa Services</a>
//                     </li>
//                     <li>
//                       <a href="banking-mortgage-services.html">Banking & Mortgage Services</a>
//                     </li>
//                     <li>
//                       <a href="property-management.html">Property Management</a>
//                     </li>
//                     <li>
//                       <a href="accounting-tax-insurance.html">Accounting, Tax & Insurance</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer-menu">
//                   <h3 className="over-text">Solutions</h3>
//                   <ul>
//                     <li>
//                       <a href="luxury-car-rental.html">Luxury Car Rental</a>
//                     </li>
//                     <li>
//                       <a href="luxury-yacht-rental.html">Luxury Yacht Rental</a>
//                     </li>
//                     <li>
//                       <a href="private-jet-services.html">Private Jet Services</a>
//                     </li>
//                     <li>
//                       <a href="personal-assistance.html">Personal Assistance</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-12">
//               <div className="copy-right-text">
//                 <p>Copyright © 2023 All rights reserved</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Cookie Alert */}
//       <div className="alert text-center cookiealert" role="alert">
//         <p>
//           We use cookies and similar technologies to improve your experience on our website, analyze website usage, and
//           deliver personalized content. You can manage your cookie preferences through your browser settings.
//         </p>
//         <button type="button" className="btn btn-primary btn-sm acceptcookies">
//           I agree
//         </button>
//       </div>
//     </>
//   );
// };

// export default Footer;




import React from 'react';
import logo from '../img/logo.png'


import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  
  MDBCol,
  MDBRow,
  
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
         
<section className=''>
        <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>

            {/* <div className="footer-left"> */}
                <div className="footer-logo">
                  <img src={logo} alt="Logo" />
                </div>
                <br/>
              <p className='me-3'>
                <MDBIcon className="me-3" />
                


                Office 2601, Ubora Tower, Business Bay, Dubai


              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +971 45588149
              </p>

              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hello@leconcierge.ae
              </p>
              
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style ={{Color:'#fcc304'}} >Quick Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Features
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services
</h6>


              <p>
                <a href='#!' className='text-reset'>
                New Business Setup</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Visa Services
 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Banking & Mortgage Services

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Property Management
                </a>
              </p>

              <p>
                <a href='#!' className='text-reset'>
                Accounting, Tax & Insurance
                </a>
              </p>
            </MDBCol>
            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            
              <p>
                <a href='#!' className='text-reset'>
                Luxury Car Rental
</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Luxury Yacht Rental </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Private Jet Services

                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Personal Assistance
                </a>
              </p>

        
            </MDBCol>
          </MDBRow>
        </section>

        
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Copyright © 2023 All rights reserved
        
      </div>
    </MDBFooter>
  );
}