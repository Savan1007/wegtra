import React, { useState } from "react";
import { brands } from "~/fake-server/database/brands";
import AppImage from "./shared/AppImage";
import AppLink from "./shared/AppLink";

const Client = () => {
    const [brandImages, setBrandImages] = useState([
        { url: "/images/brands/brand-img-1.png" },
        {
            url: "/images/brands/brand-img-2.png",
        },
        {
            url: "/images/brands/brand-img-3.png",
        },
        {
            url: "/images/brands/brand-img-4.png",
        },
        { url: "/images/brands/brand-img-1.png" },
        {
            url: "/images/brands/brand-img-2.png",
        },
        {
            url: "/images/brands/brand-img-3.png",
        },
        {
            url: "/images/brands/brand-img-4.png",
        },
        { url: "/images/brands/brand-img-1.png" },
        {
            url: "/images/brands/brand-img-2.png",
        },
        {
            url: "/images/brands/brand-img-3.png",
        },
        {
            url: "/images/brands/brand-img-4.png",
        },
    ]);
    return (
        <div className="block block-brands block-brands--layout--columns-8-full">
            <div className="container">
                <ul className="block-brands__list">
                    <div className="slider__container">
                        <div className="slide-track">
                            {brandImages.map((brand) => {
                                return (
                                    <div className="slide">
                                        <img src={brand.url} height="200" alt="" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Client;
