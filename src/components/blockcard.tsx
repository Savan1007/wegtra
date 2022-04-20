import React, { useState } from "react";
import Slider from "react-slick";

const Blockcard = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    };

    const [servicesData, setServicesData] = useState([
        {
            iconSvg: "https://www.svgrepo.com/show/93449/tire.svg",
            title: "Tyres",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. eum iusto?",
        },
        {
            iconSvg: "https://www.svgrepo.com/show/232154/wiper.svg",
            title: "Windshields",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            iconSvg: "https://www.svgrepo.com/show/219567/helmet.svg",
            title: "Helmets",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            iconSvg: "https://www.svgrepo.com/show/387082/car-battery.svg",
            title: "Battery",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            iconSvg: "https://www.svgrepo.com/show/253047/motorcycle.svg",
            title: "2W Services",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            iconSvg: "https://www.svgrepo.com/show/53870/car.svg",
            title: "4W Services",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            iconSvg: "https://www.svgrepo.com/show/276103/electric-car.svg",
            title: "EV Store",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            iconSvg: "https://www.svgrepo.com/show/218785/steering-wheel.svg",
            title: "PDI",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        },
    ]);

    return (
        <React.Fragment>
            <div className="services__wrapper my-5">
                {servicesData.map((s, idx) => {
                    return (
                        <div key={idx} className="services__item">
                            <div className="d-flex justify-content-center">
                                <img src={s.iconSvg} alt="" width={"50px"} />
                            </div>
                            <div className="d-flex flex-column justify-content center">
                                <b className="text-center mt-3 mb-2">{s.title}</b>
                                <p className="text-center">{s.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};
export default Blockcard;
