// react
import React, { useCallback, useEffect, useMemo, useState } from "react";
// application
import AppImage from "~/components/shared/AppImage";
import MobileMenuLinks from "~/components/mobile/MobileMenuLinks";
import MobileMenuPanelController from "~/components/mobile/MobileMenuPanelController";
import { ArrowRoundedRight6x9Svg } from "~/svg";
import { getAllLanguages } from "~/services/i18n/utils";
import { IMobileMenuLink } from "~/interfaces/mobile-menu-link";
import { useCurrency, useCurrencyChange } from "~/store/currency/currencyHooks";
import { useLanguage, useSetLocale } from "~/services/i18n/hooks";
import { useMobileMenuClose } from "~/store/mobile-menu/mobileMenuHooks";
// data
import dataShopCurrencies from "~/data/shopCurrencies";

function MobileMenuSettings() {
    const language = useLanguage();
    const currency = useCurrency();
    const setLocale = useSetLocale();
    const currencyChange = useCurrencyChange();
    const mobileMenuClose = useMobileMenuClose();

    const languages: IMobileMenuLink[] = useMemo(
        () =>
            getAllLanguages().map<IMobileMenuLink>((eachLanguage) => ({
                title: eachLanguage.name,
                image: eachLanguage.icon,
                customFields: {
                    locale: eachLanguage.locale,
                },
            })),
        []
    );

    const currencies: IMobileMenuLink[] = useMemo(
        () =>
            dataShopCurrencies.map((eachCurrency) => ({
                title: `${eachCurrency.symbol} ${eachCurrency.name}`,
                customFields: {
                    currency: eachCurrency,
                },
            })),
        []
    );

    const cities: IMobileMenuLink[] = [
        {
            title: "Hydrabad",
        },
        {
            title: "Banglore",
        },
    ];

    const onLanguageItemClick = useCallback(
        (item: IMobileMenuLink) => {
            if (item.customFields && item.customFields.locale) {
                setLocale(item.customFields.locale);
            }

            mobileMenuClose();
        },
        [setLocale, mobileMenuClose]
    );

    const onCurrencyItemClick = useCallback(
        (item: IMobileMenuLink) => {
            if (item.customFields && item.customFields.currency) {
                currencyChange(item.customFields.currency);
            }

            mobileMenuClose();
        },
        [currencyChange, mobileMenuClose]
    );

    const getDistanceFromLatLonInKm = (lat1: any, lon1: any, lat2: any, lon2: any) => {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1); // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };

    function deg2rad(deg: any) {
        return deg * (Math.PI / 180);
    }

    const [city, setCity] = useState("Select City");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords);
                if (position.coords.latitude < 23) {
                    if (
                        getDistanceFromLatLonInKm(
                            12.972442,
                            77.580643,
                            position.coords.latitude,
                            position.coords.longitude
                        ) <
                        getDistanceFromLatLonInKm(
                            17.38714,
                            78.491684,
                            position.coords.latitude,
                            position.coords.longitude
                        )
                    ) {
                        setCity("Bangalore");
                        return;
                    }
                    setCity("Hydrabad");
                }
            });
        }
    }, []);

    return (
        <div className="mobile-menu__settings-list">
            <div className="mobile-menu__setting">
                <MobileMenuPanelController
                    label="Language"
                    content={<MobileMenuLinks items={languages} onItemClick={onLanguageItemClick} />}
                >
                    {(open) => (
                        <button type="button" className="mobile-menu__setting-button" title="Language" onClick={open}>
                            <span className="mobile-menu__setting-icon">
                                <AppImage src={language.icon} />
                            </span>
                            <span className="mobile-menu__setting-title">{language.name}</span>
                            <span className="mobile-menu__setting-arrow">
                                <ArrowRoundedRight6x9Svg />
                            </span>
                        </button>
                    )}
                </MobileMenuPanelController>
            </div>
            <div className="mobile-menu__setting">
                <MobileMenuPanelController
                    label="Select City"
                    content={<MobileMenuLinks items={cities} onItemClick={onLanguageItemClick} />}
                >
                    {(open) => (
                        <button type="button" className="mobile-menu__setting-button" title="Language" onClick={open}>
                            <span className="mobile-menu__setting-icon">
                                <AppImage src={language.icon} />
                            </span>
                            <span className="mobile-menu__setting-title">{city}</span>
                            <span className="mobile-menu__setting-arrow">
                                <ArrowRoundedRight6x9Svg />
                            </span>
                        </button>
                    )}
                </MobileMenuPanelController>
            </div>
        </div>
    );
}

export default MobileMenuSettings;
