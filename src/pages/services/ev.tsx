/* eslint-disable */
import React, { Fragment, useEffect, useLayoutEffect, useMemo, useState } from "react";
import BlockSlideshow from "~/components/blocks/BlockSlideshow";
import Fquestions from "~/components/blocks/FAQ";
import Client from "~/components/client";
import AppLink from "~/components/shared/AppLink";
import SliderTestimonial from "~/components/testimonial";

const HowItWorks = () => {
    const [items, setItems] = useState([
        {
            title: "Choose required car service",
            subTitle: "From wegtra's broad list of services",
        },
        {
            title: "Schedule the servicing",
            subTitle: "We offer dynamic time policies",
        },
        {
            title: "Track your car services",
            subTitle: "You can track the services in the real time",
        },
    ]);

    return (
        <Fragment>
            <div className="col-md-12 mt-md-4 pt-5">
                <div className="site-heading text-center">
                    <h2>How It Works?</h2>
                </div>
            </div>
            <div className="how-it-works__outer">
                <div className="how-it-works__wrapper">
                    {items.map((item, idx) => {
                        return (
                            <div className={`how-it-works__item ${"active-item-animate-" + idx}`}>
                                <div className="indexes">{idx + 1}</div>
                                <div className="ml-3">
                                    <b>{item.title}</b>
                                    <div>{item.subTitle}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
};

const WhyUs = () => {
    const data = [
        {
            title: "The Speed We Deliver",
            content: "We at wegtra provide fast and feasible tyre services",
            imageUrl: "/images/services/why-1.png",
        },
        {
            title: "Your Safety",
            content: "We at wegtra will always prioratize the safety over anything else.",
            imageUrl: "/images/services/why-2.png",
        },
        {
            title: "Quality that we offer!",
            content: "We provide best in class solutions to your needs.",
            imageUrl: "/images/services/why-3.png",
        },
    ];
    return (
        <div className="whyus__container">
            <div className="flex">
                {data.map((d) => {
                    return (
                        <div className="custom">
                            <img src={d.imageUrl} alt="" height={"100px"} />
                            <h1>{d.title}</h1>
                            <div>
                                <p>{d.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const HeroSection = () => {
    const slides = useMemo(
        () => [
            {
                url: "/catalog/batteries/products",
                desktopImage: "/images/slides/battery/1.jpg",
                mobileImage: "/images/slides/battery/1.jpg",
                title: "Choice of Batteries at <br /> your doorstep!",
                details:
                    "Enjoy a smooth journey and avoid potholes, thanks to the <br /> quality tyre services offered by Wegtra.",
                buttonLabel: "Shop Now",
            },
            {
                url: "/catalog/batteries/products",
                desktopImage: "/images/slides/battery/2.jpg",
                mobileImage: "/images/slides/battery/2.jpg",
                title: "Got your Battery <br> Damaged?",
                details: "Wegtra will help you any of your tyre needs. <br> Browse flat tyre toolkits now!",
                buttonLabel: "Shop Now",
            },
            {
                url: "/catalog/batteries/products",
                desktopImage: "/images/slides/battery/3.jpg",
                mobileImage: "/images/slides/battery/3.jpg",
                title: "Big Choice Of <br>Batteries",
                details: "Any size and diameter, with or without spikes, <br>summer or winter, rain or snow.",
                buttonLabel: "Shop Now",
            },
        ],
        []
    );
    return (
        <React.Fragment>
            <BlockSlideshow slides={slides}></BlockSlideshow>
        </React.Fragment>
    );
};

const TireBrands = () => {
    return (
        <div>
            <div className="col-md-12 mt-md-4 pt-5">
                <div className="site-heading text-center">
                    <h2>Brands We Sell</h2>
                </div>
            </div>
            <Client />
        </div>
    );
};

// const SearchByTireSize = () => {
//     const widths = ["Select width", "17 Inches", "18 Inches", "19 Inches", "20 Inches"];
//     const profiles = ["Select profile", "Profile 1", "Profile 2", "Profile 3", "Profile 4"];
//     const rims = ["Select rim", "Rim 1", "Rim 2", "Rim 3"];
//     return (
//         <div className="model__container">
//             <div className="py-2 mx-3">Search by Model</div>
//             <div className="flex g-2">
//                 <select className="form-control p-2 m-3" name="width" id="">
//                     {widths.map((b) => {
//                         return <option value={b}>{b}</option>;
//                     })}
//                 </select>
//                 <select className="form-control p-2 m-3" name="profile" id="">
//                     {profiles.map((b) => {
//                         return <option value={b}>{b}</option>;
//                     })}
//                 </select>
//                 <select className="form-control p-2 m-3" name="rim" id="">
//                     {rims.map((b) => {
//                         return <option value={b}>{b}</option>;
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// };

const SearchByModel = () => {
    const brands = ["Select brand", "brandix", "red-get", "Sunset", "Specter"];
    const models = ["Select model", "BMW X3", "AUDI R8", "JAGUAR C3", "SUZUKI SWIFT"];
    const varients = ["Select varient", "Petrol", "Diesel", "CNG"];

    const [selectedConfig, setSelectedConfig] = useState<{
        brand?: string;
        model?: string;
        varient?: string;
    }>();

    const handleChange = (param: string, name: string) => {
        setSelectedConfig({ ...selectedConfig, [param]: name });
    };

    return (
        <div className="model__container">
            <div className="py-2 mx-3">Search by Model</div>
            <form action="#">
                <div className="flex g-2 sm-flex-column">
                    <select
                        className="form-control p-2 m-3"
                        name="brand"
                        id=""
                        required
                        onChange={(e) => {
                            handleChange("brand", e.target.value);
                        }}
                    >
                        {brands.map((b) => {
                            return <option value={b}>{b}</option>;
                        })}
                    </select>
                    <select
                        className="form-control p-2 m-3"
                        name="model"
                        id=""
                        required
                        onChange={(e) => {
                            handleChange("model", e.target.value);
                        }}
                    >
                        {models.map((b) => {
                            return <option value={b}>{b}</option>;
                        })}
                    </select>
                    <select
                        className="form-control p-2 m-3"
                        name="varient"
                        id=""
                        required
                        onChange={(e) => {
                            handleChange("varient", e.target.value);
                        }}
                    >
                        {varients.map((b) => {
                            return <option value={b}>{b}</option>;
                        })}
                    </select>
                </div>
                <div className="mobile__input m-3 pb-2">
                    <input type="text" className="form-control" placeholder="Enter Mobile Number..." required />
                </div>
                <AppLink
                    href={`/catalog/tires-wheels/products${
                        selectedConfig?.brand !== undefined ? "/?filter_brand=" + selectedConfig?.brand : ""
                    }`}
                >
                    <button type="submit" className="btn m-3 mb-sm-5 btn-dark">
                        SEARCH
                    </button>
                </AppLink>
            </form>
        </div>
    );
};

const VehicleChooser = () => {
    const [selectedItem, setSelectedItem] = useState("bike");
    const vehicles = [
        {
            key: "bike",
            imageUrl: "/images/services/v-bike.png",
        },
        {
            key: "car",
            imageUrl: "/images/services/v-car.png",
        },
        {
            key: "truck",
            imageUrl: "/images/services/v-truck.png",
        },
    ];

    const handleChange = (key: string) => {
        setSelectedItem(key);
    };

    return (
        <div className="vehicle__container">
            <div className="vehicle__chooser">
                {vehicles.map((v) => {
                    return (
                        <div
                            key={v.key}
                            onClick={() => handleChange(v.key)}
                            className={selectedItem === v.key ? "selected" : ""}
                        >
                            <img src={v.imageUrl} alt="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const index = () => {
    return (
        <React.Fragment>
            <div className="p-md-5">
                <HeroSection />
                <div className="col-md-12 mt-md-4 pt-sm-5">
                    <div className="site-heading text-center">
                        <h2>Find EV Store by Your Preference</h2>
                    </div>
                </div>
                <VehicleChooser />
                <SearchByModel />

                <div className="col-md-12 mt-md-4 pt-sm-5 mt-4">
                    <div className="site-heading text-center">
                        <h2>Why Us?</h2>
                    </div>
                </div>
            </div>
            <WhyUs />

            <HowItWorks />

            <SliderTestimonial />
            <TireBrands />
            <div className="col-md-12 mt-md-4 pt-5">
                <div className="site-heading text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
            </div>
            <Fquestions></Fquestions>
        </React.Fragment>
    );
};

export default index;
