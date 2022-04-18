/* eslint-disable @typescript-eslint/no-unused-vars */
// react
import React, { useMemo } from "react";
// third-party
import { useIntl } from "react-intl";
// application
import BlockBanners from "~/components/blocks/BlockBanners";
import BlockCategories from "~/components/blocks/BlockCategories";
import BlockFeatures from "~/components/blocks/BlockFeatures";
import BlockPosts from "~/components/blocks/BlockPosts";
import BlockProductsCarousel from "~/components/blocks/BlockProductsCarousel";
import BlockProductsColumns from "~/components/blocks/BlockProductsColumns";
import BlockSale from "~/components/blocks/BlockSale";
import BlockSlideshow from "~/components/blocks/BlockSlideshow";
import BlockSpace from "~/components/blocks/BlockSpace";
import url from "~/services/url";
import { AppDispatch } from "~/store/types";
import { optionsSetAll } from "~/store/options/optionsActions";
import { shopApi, blogApi } from "~/api";
import { useDeferredData, useProductColumns, useProductTabs } from "~/services/hooks";
import { wrapper } from "~/store/store";
import Card from "../components/card";
import Client from "../components/client";
import Testimonial from "../components/testimonial";
import BlockCard from "../components/blockcard";
import { IProduct } from "~/interfaces/product";
import SliderTestimonial from "../components/testimonial";

export interface IBlockProductsColumnsItem {
    title: string;
    products: IProduct[];
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as AppDispatch;

    await dispatch(
        optionsSetAll({
            desktopHeaderVariant: "classic/one",
            mobileHeaderVariant: "one",
        })
    );

    return { props: {} };
});

function Page() {
    const intl = useIntl();

    const slides = useMemo(
        () => [
            {
                url: "/catalog/products",
                desktopImage: "/images/slides/1.jpg",
                mobileImage: "/images/slides/1.jpg",
                offer: "30% OFF",
                title: "When Buying Parts <br>With Installation",
                details: "Installation of parts in the services of <br>our partners.",
                buttonLabel: "Shop Now",
            },
            {
                url: "/catalog/products",
                desktopImage: "/images/slides/2.jpg",
                mobileImage: "/images/slides/2.jpg",
                title: "Not enough <br>spare parts?",
                details:
                    "We have everything you need – replacement parts, <br>performance parts, accessories, oil & fluids, <br>tools and much more...",
                buttonLabel: "Shop Now",
            },
            {
                url: "/catalog/products",
                desktopImage: "/images/slides/3.jpg",
                mobileImage: "/images/slides/3.jpg",
                offer: "30% OFF",
                title: "Big Choice Of <br>Wheel Tires",
                details: "Any size and diameter, with or without spikes, <br>summer or winter, rain or snow.",
                buttonLabel: "Shop Now",
            },
        ],
        []
    );

    const popularCategories = useDeferredData(
        () =>
            shopApi.getCategories({
                slugs: ["helmets", "windshield", "tyres", "batteries"],
                depth: 1,
            }),
        []
    );

    /*
     * Featured products.
     */
    const featuredProducts = useProductTabs(
        useMemo(
            () => [
                { id: 1, name: "All", categorySlug: null },
                { id: 2, name: "Power Tools", categorySlug: "power-tools" },
                { id: 3, name: "Hand Tools", categorySlug: "hand-tools" },
                { id: 4, name: "Plumbing", categorySlug: "plumbing" },
            ],
            []
        ),
        (tab) => shopApi.getFeaturedProducts(tab.categorySlug, 8)
    );
    // #0012B1
    const blockSale = useDeferredData(() => shopApi.getSpecialOffers(8), []);

    const latestPosts = useDeferredData(() => blogApi.getLatestPosts(8), []);
    const latestPostsLinks = useMemo(
        () => [
            { title: "Special Offers", url: url.blog() },
            { title: "New Arrivals", url: url.blog() },
            { title: "Reviews", url: url.blog() },
        ],
        []
    );

    /*
     * Product columns.
     */
    const columns = useProductColumns(
        useMemo(
            () => [
                {
                    title: "Top Rated Products",
                    source: () => shopApi.getTopRatedProducts(null, 3),
                },
            ],
            []
        )
    );

    return (
        <React.Fragment>
            <BlockSpace layout="divider-xs" />
            <BlockSlideshow slides={slides} />
            <BlockSpace layout="divider-nl" />
            <div className="col-md-12">
                <div className="site-heading text-center">
                    <h2>Our Services</h2>
                </div>
            </div>
            <BlockCard />
            <BlockFeatures layout="bottom-strip" />
            <BlockSpace layout="divider-nl" />
            <div className="col-md-12">
                <div className="site-heading text-center">
                    <h2>Our Clients</h2>
                </div>
            </div>
            <Client />
            <BlockCategories
                blockTitle={intl.formatMessage({ id: "HEADER_POPULAR_CATEGORIES" })}
                categories={popularCategories.data}
            />
            <BlockSpace layout="divider-nl" />
            <div className="block-categories__title"> Best Offers</div>
            <BlockBanners />
            <BlockSpace layout="divider-nl" />
            <BlockSpace layout="divider-nl" />
            <BlockSale products={blockSale.data} loading={blockSale.isLoading} />
            <BlockSpace layout="divider-nl" />
            <BlockSpace layout="divider-nl" />
            <BlockBanners />
            <BlockSpace layout="divider-nl" />
            <BlockSpace layout="divider-nl" />
            <BlockPosts
                blockTitle={intl.formatMessage({ id: "HEADER_LATEST_NEWS" })}
                layout="list"
                loading={latestPosts.isLoading}
                posts={latestPosts.data}
                links={latestPostsLinks}
            />
            <BlockSpace layout="divider-nl" className="d-xl-block d-none" />
            <BlockProductsColumns columns={columns} />

            <SliderTestimonial />
        </React.Fragment>
    );
}

export default Page;
