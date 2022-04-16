import React from 'react';
import Slider from 'react-slick';

const Blockcard = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <React.Fragment>
            <Slider {...settings}>
                <div className="container-card-block">
                    <div className="card_block">
                        <div className="face face1">
                            <div className="content_block img-center">
                                <img alt="" src="/images/services/tyres.png" />
                            </div>
                            <div className='content_block'>
                                <h3>Tyres</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content_block">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas cum cumque minus iste veritatis
                                    provident at.
                                </p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-card-block">
                    <div className="card_block">
                        <div className="face face1">
                            <div className="content_block img-center">
                                <img alt="" src="/images/services/battery.png" />
                            </div>
                            <div className='content_block'>
                                <h3>Battery</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content_block">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas cum cumque minus iste veritatis
                                    provident at.
                                </p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-card-block">
                    <div className="card_block">
                        <div className="face face1">
                            <div className="content_block img-center">
                                <img alt="" src="/images/services/windshield.png"/>
                                
                            </div>
                            <div className='content_block'>
                                <h3>Windshield</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content_block">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas cum cumque minus iste veritatis
                                    provident at.
                                </p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-card-block">
                    <div className="card_block">
                        <div className="face face1">
                            <div className="content_block">
                                <img alt="" src="/images/services/evstore.png" />
                            </div>
                            <div className='content_block'>
                                <h3>EV Store</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content_block">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas cum cumque minus iste veritatis
                                    provident at.
                                </p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-card-block">
                    <div className="card_block">
                        <div className="face face1">
                            <div className="content_block">
                                <img alt="" src="/images/services/services.png" />
                            </div>
                            <div className='content_block'>
                                <h3>2W Service</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content_block">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas cum cumque minus iste veritatis
                                    provident at.
                                </p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-card-block">
                    <div className="card_block">
                        <div className="face face1">
                            <div className="content_block img-center">
                                <img alt="" src="/images/services/helmets.png" />
                            </div>
                            <div className='content_block'>
                                <h3>Helmets</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content_block">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas cum cumque minus iste veritatis
                                    provident at.
                                </p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </React.Fragment>
    );
};
export default Blockcard;
