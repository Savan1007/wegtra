/* eslint-disable */
import React, { useEffect } from "react";
import $ from "jquery";
import Slider from "react-slick";

const Testimonial = () => {
    useEffect(() => {
        $(".client-single").on("click", function a(event) {
            event.preventDefault();

            const active = $(this).hasClass("active");

            const parent = $(this).parents(".testi-wrap");

            if (!active) {
                const activeBlock = parent.find(".client-single.active");

                const currentPos: any = $(this).attr("data-position");

                const newPos: any = activeBlock.attr("data-position");

                activeBlock.removeClass("active").removeClass(newPos).addClass("inactive").addClass(currentPos);
                activeBlock.attr("data-position", currentPos);

                $(this).addClass("active").removeClass("inactive").removeClass(currentPos).addClass(newPos);
                $(this).attr("data-position", newPos);
            }
        });
    }, []);

    return (
        <section id="testimonial-area">
            <br />
            <br />
            <div className="col-md-12">
                <div className="site-heading text-center">
                    <h2>Reviews About Us</h2>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="testi-wrap">
                    <div className="client-single active position-1" data-position="position-1">
                        <div className="client-img">
                            <img
                                alt=""
                                src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299"
                            />
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                            </p>
                            <span>
                                <i className="fa fa-quote-left" />
                            </span>
                        </div>
                    </div>

                    <div className="client-single inactive position-2" data-position="position-2">
                        <div className="client-img">
                            <img
                                src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299"
                                alt=""
                            />
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                            </p>
                            <span>
                                <i className="fa fa-quote-left" />
                            </span>
                        </div>
                    </div>

                    <div className="client-single inactive position-3" data-position="position-3">
                        <div className="client-img">
                            <img
                                src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299"
                                alt=""
                            />
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                            </p>
                            <span>
                                <i className="fa fa-quote-left" />
                            </span>
                        </div>
                    </div>

                    <div className="client-single inactive position-5" data-position="position-5">
                        <div className="client-img">
                            <img
                                src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299"
                                alt=""
                            />
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                            </p>
                            <span>
                                <i className="fa fa-quote-left" />
                            </span>
                        </div>
                    </div>

                    <div className="client-single inactive position-6" data-position="position-6">
                        <div className="client-img">
                            <img
                                src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299"
                                alt=""
                            />
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                            </p>
                            <span>
                                <i className="fa fa-quote-left" />
                            </span>
                        </div>
                    </div>

                    <div className="client-single inactive position-7" data-position="position-7">
                        <div className="client-img">
                            <img
                                src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299"
                                width="40px"
                                alt=""
                            />
                        </div>
                        <div className="client-comment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                            </p>
                            <span>
                                <i className="fa fa-quote-left" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Testimonial2 = (props: any) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <div className="col-md-12 mt-md-4 pt-5">
                <div className="site-heading text-center">
                    <h2>What our customer’s say?</h2>
                </div>
            </div>
            <div className="testimonial__wrapper">
                <div className="testimonial__img">
                    <img src={props.img} alt="" />
                </div>
                <div className="d-flex flex-column">
                    <p>
                        {props.text}
                    </p>
                </div>

                <div className="testimonial__author">
                    <p>{props.customerName}</p>
                    <span>{props.customerDetail}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial2;
