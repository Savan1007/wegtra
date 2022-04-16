/* eslint-disable */
import React, { Fragment, useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { shopApi } from "~/api";
import BlockCategories from "~/components/blocks/BlockCategories";
import BlockProductsCarousel from "~/components/blocks/BlockProductsCarousel";
import BlockSlideshow from "~/components/blocks/BlockSlideshow";
import Fquestions from "~/components/blocks/FAQ";
import Client from "~/components/client";
import { baseUrl } from "~/services/utils";
import { useDeferredData, useProductTabs } from "~/services/hooks";
import classNames from "classnames";
import { url } from "inspector";
import AppLink from "~/components/shared/AppLink";
import { Interface } from "readline";
import Testimonial2 from "~/components/testimonial";

const Form = () => {
    const [byVarient, setByVarient] = useState(true);
    return (
        <div className="form-body">
            <div className="row">
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Find Tyers Of Your Performance</h3>
                            <div className="col-md-12 mt-3">
                                <label className="mb-3 mr-1" htmlFor="gender">
                                    Vehicle Type:{" "}
                                </label>
                                <label className="btn btn-primary m-1" htmlFor="male">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="gender"
                                        id="male"
                                        autoComplete="off"
                                        required
                                    />
                                    &nbsp; Car
                                </label>
                                <label className="btn btn-primary m-1" htmlFor="female">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="gender"
                                        id="female"
                                        autoComplete="off"
                                        required
                                    />
                                    &nbsp; Bike
                                </label>
                                <label className="btn btn-primary m-1" htmlFor="secret">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="gender"
                                        id="secret"
                                        autoComplete="off"
                                        required
                                    />
                                    &nbsp; Truck
                                </label>
                                <div className="valid-feedback mv-up">You selected vehicle!</div>
                                <div className="invalid-feedback mv-up">Please select a vehicle!</div>
                            </div>
                            <div className="col">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm m-1"
                                    onClick={() => {
                                        setByVarient(true);
                                    }}
                                >
                                    Select By Modal
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm m-1"
                                    onClick={() => {
                                        setByVarient(false);
                                    }}
                                >
                                    Select By TyerSize
                                </button>
                            </div>
                            {byVarient ? (
                                <form className="requires-validation">
                                    <div className="col-md-12">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Keywords"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <select className="form-select mt-3" required>
                                            <option selected disabled value="">
                                                Brand
                                            </option>
                                            <option value="jweb">Maruti Suzuki</option>
                                            <option value="sweb">MRF</option>
                                            <option value="pmanager">Tarzen</option>
                                        </select>
                                        <div className="valid-feedback">You selected a brand!</div>
                                        <div className="invalid-feedback">Please select a brand!</div>
                                    </div>
                                    <div className="col-md-12">
                                        <select className="form-select mt-3" required>
                                            <option selected disabled value="">
                                                Modal
                                            </option>
                                            <option value="jweb">MX2103</option>
                                            <option value="sweb">UI20</option>
                                            <option value="pmanager">MRF506</option>
                                        </select>
                                        <div className="valid-feedback">You selected a modal!</div>
                                        <div className="invalid-feedback">Please select a modal</div>
                                    </div>
                                    <div className="col-md-12">
                                        <select className="form-select mt-3" required>
                                            <option selected disabled value="">
                                                Varient
                                            </option>
                                            <option value="jweb">VAR-1</option>
                                            <option value="sweb">VAR-2</option>
                                            <option value="pmanager">VAR-3</option>
                                        </select>
                                        <div className="valid-feedback">You selected a varient!</div>
                                        <div className="invalid-feedback">Please select a varient!</div>
                                    </div>
                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-primary m-3">
                                            Search Now
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form className="requires-validation">
                                    <div className="col-md-12">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Keywords"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="name" placeholder="Width" />
                                    </div>
                                    <div className="col-md-12">
                                        <select className="form-select mt-3" required>
                                            <option selected disabled value="">
                                                Profile
                                            </option>
                                            <option value="jweb">MX2103</option>
                                            <option value="sweb">UI20</option>
                                            <option value="pmanager">MRF506</option>
                                        </select>
                                        <div className="valid-feedback">You selected a modal!</div>
                                        <div className="invalid-feedback">Please select a modal</div>
                                    </div>
                                    <div className="col-md-12">
                                        <select className="form-select mt-3" required>
                                            <option selected disabled value="">
                                                Rims
                                            </option>
                                            <option value="jweb">VAR-1</option>
                                            <option value="sweb">VAR-2</option>
                                            <option value="pmanager">VAR-3</option>
                                        </select>
                                        <div className="valid-feedback">You selected a varient!</div>
                                        <div className="invalid-feedback">Please select a varient!</div>
                                    </div>
                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-primary m-3">
                                            Search Now
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
                    <h2>How It Works</h2>
                </div>
            </div>
            <div className="how-it-works__outer">
                <div className="how-it-works__wrapper">
                    <div className="vertical-line-1"></div>
                    <div className="vertical-line-2"></div>
                    {items.map((item, idx) => {
                        return (
                            <div className="how-it-works__item">
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
    const slides = useMemo(() => [
        {
            url: '/catalog/products',
            desktopImage: '/images/services/tyre-hero.jpg',
            mobileImage: '/images/services/tyre-hero.jpg',
            // offer: '30% OFF',
            title: 'Choice of tyres at <br /> your doorstep!',
            details: 'Enjoy a smooth journey and avoid potholes, thanks to the <br /> quality tyre services offered by Wegtra.',
            buttonLabel: 'Shop Now',
        },
        {
            url: '/catalog/products',
            desktopImage: '/images/services/tyre-hero1.jpg',
            mobileImage: '/images/services/tyre-hero1.jpg',
            title: 'Got your <br>tyre flat?',
            details: 'Wegtra will help you any of your tyre needs. <br> Browse flat tyre toolkits now!',
            buttonLabel: 'Shop Now',
        },
        {
            url: '/catalog/products',
            desktopImage: '/images/slides/3.jpg',
            mobileImage: '/images/slides/3.jpg',
            // offer: '30% OFF',
            title: 'Big Choice Of <br>Wheel Tires',
            details: 'Any size and diameter, with or without spikes, <br>summer or winter, rain or snow.',
            buttonLabel: 'Shop Now',
        },
    ], []);
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
            <BlockSlideshow slides={slides} ></BlockSlideshow>
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
                <div className="flex g-2">
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
                <div className="mobile__input m-3 pb-5">
                    <input type="text" className="form-control" placeholder="Enter Mobile Number..." required />
                    <AppLink
                        href={`/catalog/tires-wheels/products${
                            selectedConfig?.brand !== undefined ? "/?filter_brand=" + selectedConfig?.brand : ""
                        }`}
                    >
                        <button type="submit" className="btn ml-md-5 btn-dark">
                            SEARCH
                        </button>
                    </AppLink>
                </div>
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
                <div className="col-md-12 mt-md-4">
                    <div className="site-heading text-center">
                        <h2>Find Tyres by Your Preference</h2>
                    </div>
                </div>
                <VehicleChooser />
                <SearchByModel />

                <div className="col-md-12 mt-md-4">
                    <div className="site-heading text-center">
                        <h2>Why Us?</h2>
                    </div>
                </div>
            </div>
            <WhyUs />

            <HowItWorks />

            <Testimonial2></Testimonial2>
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
