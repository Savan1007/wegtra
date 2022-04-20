// react
import React from "react";
// application
import AppImage from "~/components/shared/AppImage";
import BlockReviews from "~/components/blocks/BlockReviews";
import BlockSpace from "~/components/blocks/BlockSpace";
import BlockTeammates from "~/components/blocks/BlockTeammates";
import Decor from "~/components/shared/Decor";
import PageTitle from "~/components/shared/PageTitle";
import { baseUrl } from "~/services/utils";
import Testimonial2 from "~/components/testimonial";
import SliderTestimonial from "~/components/testimonial";

function Page() {
    return (
        <React.Fragment>
            <PageTitle>About Us</PageTitle>

            <div className="about__us">
                <div className="about__body">
                    <div className="about__image">
                        <div
                            className="about__image-bg"
                            style={{
                                backgroundImage: `url(${baseUrl("/images/about.png")})`,
                            }}
                        />
                        <Decor className="about__image-decor" type="bottom" />
                    </div>

                    <div className="about__card">
                        <div className="about__card-title">About Us</div>
                        <div className="about__card-text">
                            Wegtra is a wellknown company with several years of history selling spare parts for cars,
                            trucks and motorcycles. During our work we managed to create a unique service for the sale
                            and delivery of spare parts around the world.
                        </div>
                        <div className="about__card-author">Ryan Ford, CEO Wegtra</div>
                        <div className="about__card-signature">
                            <AppImage src="/images/signature.jpg" width="160" height="55" />
                        </div>
                    </div>

                    <div className="about__indicators">
                        <div className="about__indicators-body">
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">350</div>
                                <div className="about__indicators-item-title">Stores around the world</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">80 000</div>
                                <div className="about__indicators-item-title">Original auto parts</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">5 000</div>
                                <div className="about__indicators-item-title">Satisfied customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="divider-xl" />

            <div className="col-md-12 mt-md-4 pt-5">
                <div className="site-heading">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h2>Our Mission</h2>
                        <div className="d-flex flex-md-row flex-column mt-4">
                            <div className="d-flex justify-content-center my-md-0 my-5 mx-5">
                                <img src="/images/mission.png" />
                            </div>
                            <div style={{ maxWidth: "500px", textAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam ullam culpa! Dicta, similique! Illum nulla iusto sit consectetur iste voluptates id qui nemo adipisci quo ex accusantium quod asperiores soluta cupiditate, praesentium, ullam dolores possimus dicta aut laborum, fuga corporis saepe ratione. Fugit beatae, sapiente cum veritatis et blanditiis?
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12 mt-md-4 pt-5 mt-5">
                <div className="site-heading">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h2>Our Vision</h2>
                        <div className="d-flex flex-md-row flex-column mt-4">
                            <div className="d-flex justify-content-center my-md-0 my-5 mx-5">
                                <img src="/images/vision.png" />
                            </div>
                            <div style={{ maxWidth: "500px", textAlign: 'justify' }} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam ullam culpa! Dicta, similique! Illum nulla iusto sit consectetur iste voluptates id qui nemo adipisci quo ex accusantium quod asperiores soluta cupiditate, praesentium, ullam dolores possimus dicta aut laborum, fuga corporis saepe ratione. Fugit beatae, sapiente cum veritatis et blanditiis?
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="divider-xl" />

            <SliderTestimonial />

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
