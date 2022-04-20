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
                url: "/catalog/products",
                desktopImage: "/images/slides/tyre/1.jpg",
                mobileImage: "/images/slides/tyre/2.jpg",
                title: "Choice of tyres at <br /> your doorstep!",
                details:
                    "Enjoy a smooth journey and avoid potholes, thanks to the <br /> quality tyre services offered by Wegtra.",
                buttonLabel: "Shop Now",
            },
            {
                url: "/catalog/products",
                desktopImage: "/images/slides/tyre/2.jpg",
                mobileImage: "/images/slides/tyre/2.jpg",
                title: "Got your Tyre <br> Flat?",
                details: "Wegtra will help you any of your tyre needs. <br> Browse flat tyre toolkits now!",
                buttonLabel: "Shop Now",
            },
            {
                url: "/catalog/products",
                desktopImage: "/images/slides/tyre/3.jpg",
                mobileImage: "/images/slides/tyre/3.jpg",
                title: "Big Choice Of <br>Wheel Tires",
                details: "Any size and diameter, with or without spikes, <br>summer or winter, rain or snow.",
                buttonLabel: "Shop Now",
            },
        ],
        []
    );
    return (
        <React.Fragment>
            {/* <div
                className="hero-x"
                style={{
                    background: `url(${baseUrl("/images/services/tyre-hero.jpg")})`,
                    backgroundRepeat: "no-repeat"
                }}
            >
                <img alt="" />
                <div className="content">
                    <h1>CHOICE OF TYRES AT YOUR DOORSTEP!</h1>
                    <p>
                        Enjoy a smooth journey and avoid potholes, thanks to the quality tyre services offered by
                        Wegtra.{" "}
                    </p>
                    <button className="btn btn-dark rounded">Shop Now</button>
                </div>
            </div> */}
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

const SearchByTireSize = () => {
    const widths = ["Select width", "17 Inches", "18 Inches", "19 Inches", "20 Inches"];
    const profiles = ["Select profile", "Profile 1", "Profile 2", "Profile 3", "Profile 4"];
    const rims = ["Select rim", "Rim 1", "Rim 2", "Rim 3"];
    return (
        <div className="model__container">
            <div className="py-2 mx-3">Search by Tire Size</div>
            <div className="flex g-2 sm-flex-column">
                <select className="form-control p-2 m-3" name="width" id="">
                    {widths.map((b) => {
                        return <option value={b}>{b}</option>;
                    })}
                </select>
                <select className="form-control p-2 m-3" name="profile" id="">
                    {profiles.map((b) => {
                        return <option value={b}>{b}</option>;
                    })}
                </select>
                <select className="form-control p-2 m-3" name="rim" id="">
                    {rims.map((b) => {
                        return <option value={b}>{b}</option>;
                    })}
                </select>
            </div>
            <div className="mobile__input m-3 pb-2">
                <input type="text" className="form-control" placeholder="Enter Mobile Number..." required />
            </div>
            <AppLink href={`/catalog/tires-wheels/products`}>
                <button type="submit" className="btn m-3 mb-sm-5 btn-dark">
                    SEARCH
                </button>
            </AppLink>
        </div>
    );
};

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
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M15.5 6.937A6.997 6.997 0 0 1 19 13v8h-4.17a3.001 3.001 0 0 1-5.66 0H5v-8a6.997 6.997 0 0 1 3.5-6.063A3.974 3.974 0 0 1 8.125 6H5V4h3.126a4.002 4.002 0 0 1 7.748 0H19v2h-3.126c-.085.33-.212.645-.373.937zm-1.453 1.5C13.448 8.795 12.748 9 12 9a3.981 3.981 0 0 1-2.047-.563A5.001 5.001 0 0 0 7 13v6h2v-4a3 3 0 0 1 6 0v4h2v-6a5.001 5.001 0 0 0-2.953-4.563zM12 14a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
            ),
        },
        {
            key: "car",
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.48-5.788A2 2 0 0 1 6.32 4H17.68a2 2 0 0 1 1.838 1.212L22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-7H4v5h16v-5zM4.176 11h15.648l-2.143-5H6.32l-2.143 5zM6.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
            ),
        },
        {
            key: "truck",
            iconSvg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95V7zm2 6h4v-.285L18.992 10H17v3zm.5 6a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001zM7 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                </svg>
            ),
        },
    ];

    const handleChange = (key: string) => {
        setSelectedItem(key);
    };

    return (
        <div className="vehicle__container my-5">
            <div className="vehicle__chooser">
                {vehicles.map((v) => {
                    return (
                        <div
                            key={v.key}
                            onClick={() => handleChange(v.key)}
                            className={selectedItem === v.key ? "selected" : ""}
                        >
                            <div>{v.iconSvg}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const index = () => {
    const [searchByBrand, setSearchByBrand] = useState<boolean>(true);

    return (
        <React.Fragment>
            <div className="p-md-5">
                <HeroSection />
                <div className="col-md-12 mt-md-4 pt-sm-5">
                    <div className="site-heading text-center">
                        <h2>Find Tyres by Your Preference</h2>
                    </div>
                </div>

                <VehicleChooser />
                <div className="col-md-4 col-xs-12 align-items-center justify-content-between my-5 mx-auto">
                    <button className={`btn ${searchByBrand && "btn-dark"}`} onClick={() => setSearchByBrand(true)}>
                        Search By Model
                    </button>
                    <button className={`btn ${!searchByBrand && "btn-dark"}`} onClick={() => setSearchByBrand(false)}>
                        Search By Tire Size
                    </button>
                </div>
                {searchByBrand ? <SearchByModel /> : <SearchByTireSize />}

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
