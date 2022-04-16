// react
import React, { useEffect, useRef, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
import classNames from 'classnames';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Rating from '~/components/shared/Rating';
import url from '~/services/url';
import VehicleForm from '~/components/shared/VehicleForm';
import {
    Search20Svg, IndiaGateSvg, GateWayOfIndiaSvg, VidhanSabhaSvg,
    VictoriaMemorialSvg, ChennaiStationSvg, HawaMehalSvg, CharminarSvg,
} from '~/svg';

import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { IVehicle } from '~/interfaces/vehicle';
import { shopApi } from '~/api';
import { useGlobalMousedown } from '~/services/hooks';
import {
    useGarageAddItem,
    useGarageCurrent,
    useUserVehicles,
} from '~/store/garage/garageHooks';

export function Search() {
    const intl = useIntl();
    const [query, setQuery] = useState('');
    const [suggestionsIsOpen, setSuggestionsIsOpen] = useState(false);
    const [hasSuggestions, setHasSuggestions] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<IShopCategory[]>([]);
    const [vehiclePickerIsOpen, setVehiclePickerIsOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState('list');
    const [addVehicle, setAddVehicle] = useState<IVehicle | null>(null);
    const vehicles = useUserVehicles();
    const garageAddItem = useGarageAddItem();
    const hasVehicles = vehicles.length > 0;
    const selectVehicleButtonRef = useRef<HTMLButtonElement>(null);
    const vehiclePickerDropdownRef = useRef<HTMLDivElement>(null);

    const currentVehicle = useGarageCurrent();

    const searchCancelFnRef = useRef(() => {});
    const rootRef = useRef<HTMLDivElement>(null);

    const search = (value: string) => {
        searchCancelFnRef.current();

        let canceled = false;

        searchCancelFnRef.current = () => {
            canceled = true;
        };

        shopApi.getSearchSuggestions(value, {
            limitProducts: 3,
            limitCategories: 4,
        }).then((result) => {
            if (canceled) {
                return;
            }

            if (result.products.length === 0 && result.categories.length === 0) {
                setHasSuggestions(false);
                return;
            }

            setHasSuggestions(true);
            setProducts(result.products);
            setCategories(result.categories);
        });

        setQuery(value);
    };

    const toggleSuggestions = (force?: boolean) => {
        setSuggestionsIsOpen((prevState) => {
            const newState = force !== undefined ? force : !prevState;

            if (newState) {
                setVehiclePickerIsOpen(false);
            }

            return newState;
        });
    };

    const toggleVehiclePicker = (force?: boolean): void => {
        setVehiclePickerIsOpen((prevState) => {
            const newState = force !== undefined ? force : !prevState;

            if (newState) {
                setSuggestionsIsOpen(false);
            }

            return newState;
        });
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        const input = event.currentTarget;

        toggleSuggestions(true);
        search(input.value);
    };

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget;

        search(input.value);
    };

    const handleButtonClick = () => {
        toggleVehiclePicker();
    };

    const handleVehicleChange = (vehicle: IVehicle | null) => {
        setAddVehicle(vehicle);
    };

    const handleRootBlur = () => {
        setTimeout(() => {
            if (document.activeElement === document.body) {
                return;
            }

            if (document.activeElement && document.activeElement.closest('.search') !== rootRef.current) {
                toggleSuggestions(false);
            }
        }, 10);
    };

    useGlobalMousedown((event) => {
        const outsideButton = (
            selectVehicleButtonRef.current
            && !selectVehicleButtonRef.current.contains(event.target as HTMLElement)
        );
        const outsideDropdown = (
            vehiclePickerDropdownRef.current
            && !vehiclePickerDropdownRef.current.contains(event.target as HTMLElement)
        );

        if (outsideButton && outsideDropdown) {
            setVehiclePickerIsOpen(false);
        }
    }, [setVehiclePickerIsOpen, selectVehicleButtonRef]);

    useGlobalMousedown((event) => {
        const outside = (
            rootRef.current
            && !rootRef.current.contains(event.target as HTMLElement)
        );

        if (outside && suggestionsIsOpen) {
            setHasSuggestions(false);
        }
    }, [rootRef, suggestionsIsOpen, setHasSuggestions]);

    const searchPlaceholder = currentVehicle
        ? intl.formatMessage({ id: 'INPUT_SEARCH_PLACEHOLDER_VEHICLE' }, { ...currentVehicle })
        : intl.formatMessage({ id: 'INPUT_SEARCH_PLACEHOLDER' });

    const [city, setCity] = useState('Select City');
    const handleCityClick = (e: any) => {
        const city = e.target.getAttribute('data-city');
        setCity(city);
        setSuggestionsIsOpen(false);
        toggleVehiclePicker();
    };

    const getDistanceFromLatLonInKm = (lat1 : any , lon1 : any ,lat2 : any ,lon2 : any) => {
        var R = 6371; // Radius of the earth in km 
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }
      
      function deg2rad(deg : any) {
        return deg * (Math.PI/180)
      }

    useEffect(()=>{
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log(position.coords)
                if(position.coords.latitude <23) {
                    if(getDistanceFromLatLonInKm(12.972442 , 77.580643 , position.coords.latitude , position.coords.longitude) <
                        getDistanceFromLatLonInKm(17.387140 , 78.491684 ,  position.coords.latitude , position.coords.longitude)
                    ) {
                        setCity("Bangalore")
                        return;
                    }
                    setCity("Hydrabad")
                }
            });
        }
    } , [])

    return (
        <div className="search" ref={rootRef} onBlur={handleRootBlur}>
            <form className="search__body">
                <div className="search__shadow" />

                <label className="sr-only" htmlFor="site-search">
                    <FormattedMessage id="INPUT_SEARCH_LABEL" />
                </label>

                <input
                    type="text"
                    className="search__input"
                    id="site-search"
                    autoCapitalize="off"
                    autoComplete="off"
                    spellCheck="false"
                    name="search"
                    value={query}
                    placeholder={searchPlaceholder}
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                />

                <button
                    type="button"
                    className={classNames('search__button p-3 search__button--start', {
                        'search__button--hover': vehiclePickerIsOpen,
                    })}
                    onClick={handleButtonClick}
                    ref={selectVehicleButtonRef}
                >
                    {city}
                    &nbsp;
                </button>

                <button className="search__button search__button--end" type="submit">
                    <Search20Svg />
                </button>

                <div className="search__box" />
                <div className="search__decor">
                    <div className="search__decor-start" />
                    <div className="search__decor-end" />
                </div>

                <div
                    className={classNames('search__dropdown', 'search__dropdown--suggestions', 'suggestions', {
                        'search__dropdown--open': suggestionsIsOpen && hasSuggestions,
                    })}
                >
                    {products.length > 0 && (
                        <div className="suggestions__group">
                            <div className="suggestions__group-title">
                                <FormattedMessage id="TEXT_PRODUCTS" />
                            </div>
                            <div className="suggestions__group-content">
                                {products.map((product) => (
                                    <AppLink
                                        key={product.id}
                                        href={url.product(product)}
                                        className="suggestions__item suggestions__product"
                                        onClick={() => toggleSuggestions(false)}
                                    >
                                        <div className="suggestions__product-image">
                                            <AppImage src={product.images && product.images[0]} />
                                        </div>
                                        <div className="suggestions__product-info">
                                            <div className="suggestions__product-name">
                                                {product.name}
                                            </div>
                                            <div className="suggestions__product-rating">
                                                <div className="suggestions__product-rating-stars">
                                                    <Rating value={product.rating || 0} />
                                                </div>
                                                <div className="suggestions__product-rating-label">
                                                    <FormattedMessage
                                                        id="TEXT_RATING_LABEL"
                                                        values={{
                                                            rating: product.rating,
                                                            reviews: product.reviews,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" suggestions__product-price">
                                            <CurrencyFormat value={product.price} />
                                        </div>

                                    </AppLink>
                                ))}
                            </div>
                        </div>
                    )}
                    {categories.length > 0 && (
                        <div className="suggestions__group">
                            <div className="suggestions__group-title">
                                <FormattedMessage id="TEXT_CATEGORIES" />
                            </div>
                            <div className="suggestions__group-content">
                                {categories.map((category) => (
                                    <AppLink
                                        key={category.id}
                                        href={url.category(category)}
                                        className="suggestions__item suggestions__category"
                                        onClick={() => toggleSuggestions(false)}
                                    >
                                        {category.name}
                                    </AppLink>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={classNames('search__dropdown', 'search__dropdown--vehicle-picker', 'vehicle-picker', {
                        'search__dropdown--open': vehiclePickerIsOpen,
                    })}
                    ref={vehiclePickerDropdownRef}
                >
                    <div className="select-city-layout">
                        <div className="headline-city__select">
                            <span className="m-3 text-secondary">SELECT CITY</span>
                            <div className="hero m-3">
                                <div className="input-group justify-content-center">
                                    <div className="form-outline">
                                        <input id="search-input" type="search" className="form-control p-3" placeholder="search for a city" />
                                    </div>
                                    <button id="search-button" type="button" className="btn btn-primary">
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h6 className="text-secondary title-select-city">POPULAR CITY</h6>
                        <div className="city-flex">
                            <div className="city-card" onClick={handleCityClick} data-city="Bangalore" aria-hidden="true">
                                <VidhanSabhaSvg data-city="Bangalore" />
                                <p data-city="Bangalore">Bangalore</p>
                            </div>
                            <div className="city-card" onClick={handleCityClick} data-city="Jaipur" aria-hidden="true">
                                {/* <img src='./charminar.png' /> */}
                                <CharminarSvg data-city="Hyderabad" />
                                <p data-city="Hyderabad">Hyderabad</p>
                            </div>
                            
                            <div className="city-card" onClick={handleCityClick} data-city="Jaipur" aria-hidden="true">
                                <HawaMehalSvg data-city="Jaipur" />
                                <p data-city="Jaipur">Jaipur</p>
                            </div>
                            <div className="city-card" onClick={handleCityClick} data-city="Delhi" aria-hidden="true">
                                <IndiaGateSvg data-city="Delhi" />
                                <p data-city="Delhi">Delhi</p>
                            </div>
                            <div className="city-card" onClick={handleCityClick} data-city="Mumbai" aria-hidden="true">
                                <GateWayOfIndiaSvg data-city="Mumbai" />
                                <p data-city="Mumbai">Mumbai</p>
                            </div>
                            <div className="city-card" onClick={handleCityClick} data-city="Kolkata" aria-hidden="true">
                                <VictoriaMemorialSvg data-city="Kolkata" />
                                <p data-city="Kolkata">Kolkata</p>
                            </div>
                            <div className="city-card" onClick={handleCityClick} data-city="Chennai" aria-hidden="true">
                                <ChennaiStationSvg data-city="Chennai" />
                                <p data-city="Chennai">Chennai</p>
                            </div>
                        </div>
                        <br />
                        <h6 className="text-secondary title-select-city">OTHER CITY</h6>
                        <div className="other-city-flex">
                            <div className="other-city-card">Chandigarh</div>
                            <div className="other-city-card">Indore</div>
                            <div className="other-city-card">Kochi</div>
                            <div className="other-city-card">Noida</div>
                        </div>
                    </div>
                    <div
                        className={classNames('vehicle-picker__panel', {
                            'vehicle-picker__panel--active': vehiclePanel === 'form' || !hasVehicles,
                        })}
                    >
                        <div className="vehicle-picker__panel-body">
                            <VehicleForm location="search" onVehicleChange={handleVehicleChange} />
                            <div className="vehicle-picker__actions">
                                {hasVehicles && (
                                    <div className="search__car-selector-link">
                                        {/* eslint-disable-next-line */}
                                        <AppLink
                                            anchor
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setVehiclePanel('list');
                                            }}
                                        >
                                            <FormattedMessage id="BUTTON_BACK_TO_LIST" />
                                        </AppLink>
                                    </div>
                                )}
                                <AsyncAction
                                    action={() => (addVehicle ? garageAddItem(addVehicle.id) : Promise.resolve())}
                                    render={({ run, loading }) => (
                                        <button
                                            type="button"
                                            className={classNames('btn', 'btn-primary', 'btn-sm', {
                                                'btn-loading': loading,
                                            })}
                                            disabled={addVehicle === null}
                                            onClick={run}
                                        >
                                            <FormattedMessage id="BUTTON_ADD_VEHICLE" />
                                        </button>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;
