/* eslint-disable */
// react
import React, { useState } from "react";
// third-party
import { FormattedMessage } from "react-intl";
// application
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppImage from "~/components/shared/AppImage";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppLink from "~/components/shared/AppLink";
import Decor from "~/components/shared/Decor";
import FooterContacts from "~/components/footer/FooterContacts";
import FooterLinks from "~/components/footer/FooterLinks";
import FooterNewsletter from "~/components/footer/FooterNewsletter";
// data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import theme from "~/data/theme";

import aerrowSVG from "../../svg/arrow-rounded-down-12x7.svg";

const ColoredLine = () => (
    <hr
        style={{
            color: "red",
            backgroundColor: "white",
        }}
    />
);

const WhiteLine = () => (
    <hr
        style={{
            backgroundColor: "white",
            marginBottom: "-54px",
        }}
    />
);

export function Footer() {
    const [cssClass, setCssClass] = useState("hide-animated");
    const toggleFooter = () => {
        if (cssClass === "show-animated") {
            setCssClass("hide-animated");
        } else {
            setCssClass("show-animated");
        }
    };
    return (
        <React.Fragment>
            <div className="site-footer">
                <div className="footer__hide" onClick={toggleFooter}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        height="7px"
                        fill="#fff"
                        transform={`rotate(${cssClass === "hide-animated" ? "180" : "0"})`}
                    >
                        <path d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z" />
                    </svg>
                </div>
                <div className={`${cssClass}`}>
                    <Decor className="site-footer__decor" type="bottom" />
                    <div className="container">
                        <br />
                        <div className="row">
                            <div className="col-md-3">
                                <h3 style={{ color: "white" }}> Bangalore </h3>
                                <div className="mt-3">
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 style={{ color: "white" }}> Pune </h3>
                                <div className="mt-3">
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 style={{ color: "white" }}> Hyderabad </h3>
                                <div className="mt-3">
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 style={{ color: "white" }}> Chennai </h3>
                                <div className="mt-3">
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>{" "}
                                    <br />
                                    <a
                                        href="/"
                                        className="color-white border-0"
                                        style={{ fontSize: "13px", color: "gray", border: "0" }}
                                    >
                                        {" "}
                                        Demo Text{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ColoredLine />
                </div>

                <div className="site-footer__widgets mt-sm-4">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className=" col-12 col-xl-4">
                                <FooterContacts className="site-footer__widget" />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <FooterLinks
                                    className="site-footer__widget"
                                    header={<FormattedMessage id="HEADER_SERVICES" />}
                                    links={[
                                        { title: <FormattedMessage id="LINK_STORE_LOCATION" /> },
                                        { title: <FormattedMessage id="LINK_ORDER_HISTORY" /> },
                                        { title: <FormattedMessage id="LINK_WISH_LIST" /> },
                                        { title: <FormattedMessage id="LINK_NEWSLETTER" /> },
                                        { title: <FormattedMessage id="LINK_SPECIAL_OFFERS" /> },
                                        { title: <FormattedMessage id="LINK_GIFT_CERTIFICATES" /> },
                                        { title: <FormattedMessage id="LINK_AFFILIATE" /> },
                                    ]}
                                />
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <FooterLinks
                                    className="site-footer__widget"
                                    header={<FormattedMessage id="HEADER_URL" />}
                                    links={[
                                        { title: <FormattedMessage id="LINK_ABOUT_US" /> },
                                        { title: <FormattedMessage id="LINK_DELIVERY_INFORMATION" /> },
                                        { title: <FormattedMessage id="LINK_PRIVACY_POLICY" /> },
                                        { title: <FormattedMessage id="LINK_BRANDS" /> },
                                        { title: <FormattedMessage id="LINK_CONTACT_US" /> },
                                        { title: <FormattedMessage id="LINK_RETURNS" /> },
                                        { title: <FormattedMessage id="LINK_SITE_MAP" /> },
                                    ]}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <FooterNewsletter className="site-footer__widget" />
                            </div>
                        </div>
                    </div>
                    {/* <WhiteLine /> */}
                </div>
                <div className="container sm-center">
                    <div className="row">
                        <div className="col-12 col-xl-8">
                            <p style={{ color: "white", marginTop: "8px" }}>
                                {" "}
                                © 2022 AgumentikSoftware. All Rights Reserved by{" "}
                            </p>
                        </div>
                        <div className="col-12 col-xl-4">
                            <p style={{ color: "white", marginTop: "8px" }}>
                                {" "}
                                <a href="/terms" style={{ color: "white" }}>
                                    {" "}
                                    Terms & Conditions |{" "}
                                    <a href="/faq" style={{ color: "white", marginTop: "8px" }}>
                                        {" "}
                                        Privacy Policy{" "}
                                    </a>{" "}
                                </a>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(Footer);
