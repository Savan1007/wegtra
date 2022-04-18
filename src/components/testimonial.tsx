/* eslint-disable */
import React, { useEffect } from "react";
import $ from "jquery";
import Slider from "react-slick";

const TestimonialInner = () => {
    return (
        <div>
            <div className="testimonial__wrapper">
                <div className="testimonial__img">
                    <img src="/images/testimonials/t-1.jpg" alt="" />
                </div>
                <div className="d-flex flex-column">
                    <p>
                        “The Quality and Delivery is always on time, being a professional service I value and love their
                        service a lot”
                    </p>
                </div>

                <div className="testimonial__author">
                    <p>Ryan Wels</p>
                    <span>CUSTOMER</span>
                </div>
            </div>
        </div>
    );
};

const SliderTestimonial = () => {
    var settings = {
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
    };

    return (
        <div>
            <div className="col-md-12 mt-md-4 pt-5">
                <div className="site-heading text-center">
                    <h2>What our customer’s say?</h2>
                </div>
            </div>
            <Slider className="slider" {...settings}>
                <TestimonialInner></TestimonialInner>
                <TestimonialInner></TestimonialInner>
                <TestimonialInner></TestimonialInner>
            </Slider>
        </div>
    );
};

export default SliderTestimonial;
