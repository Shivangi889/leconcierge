import React from 'react';
import '../../App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { arrowright } from '@fortawesome/free-solid-svg-icons'
import pictestimonial from '../../img/testimonail-pic.png';
const TestimonialSection = () => {
    return (
        <section class="testimonial-bg">
            <div class="container-fluid">
                <div class="row">
                    <div class="testimanial-heading">
                        <div class="text-heading">
                            <h2>Client Speak</h2>
                        </div>
                    </div>
                    <div id="carouselExampleDark" class="home-carousel carousel carousel-light slide"
                        data-bs-ride="carousel">
                        <div class="carousel-inner">

                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="testimanial-box">
                                    <div class="testimonial-pic"><img src={pictestimonial} alt="..." /></div>
                                    <h4>"Le Concierge provided excellent service when setting up my new
                                        business in the UAE. Their knowledgeable team took care of everything, making
                                        the process seamless and stress-free."</h4>
                                    <div class="founder-text">
                                        <span>Oliva jems</span>
                                        <p>Investment Banker</p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item" data-bs-interval="2000">
                                <div class="testimanial-box">
                                    <div class="testimonial-pic"><img src={pictestimonial} alt="..." /></div>
                                    <h4>"Thanks to Le Concierge, I was able to find the perfect luxury car rental
                                        for my stay in the UAE. Their attention to detail and personalized service exceeded
                                        my expectations."</h4>
                                    <div class="founder-text">
                                        <span>Poornima Rai</span>
                                        <p>Fashion Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimanial-box">
                                    <div class="testimonial-pic"><img src={pictestimonial} alt="..." /></div>
                                    <h4>"Le Concierge has been a game-changer for me. Their
                                        personalized services, attention to detail, and exceptional professionalism have
                                        allowed me to focus on what truly matters. I couldn't be happier with my decision
                                        to trust them with my needs."</h4>
                                    <div class="founder-text">
                                        <span>John Fareel</span>
                                        <p>Investor</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimanial-box">
                                    <div class="testimonial-pic"><img src={pictestimonial} alt="..." /></div>

                                    <h4>"I've been using Le Concierge's services for a year, and I'm
                                        impressed by their tailored solutions and commitment to excellence. They've
                                        helped me with visa services, insurance, and even luxury car rentals. I highly
                                        recommend them for anyone seeking a luxury concierge service in the UAE."</h4>
                                    <div class="founder-text">
                                        <span>Amit Kumar</span>
                                        <p>Founder, Tech Company</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="carousel-control">
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span aria-hidden="false"><i class="fas fa-arrow-left"></i></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </section>

    );
};

export default TestimonialSection;