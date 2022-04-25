// react
import React from "react";
// application
import getShopPageData from "~/store/shop/shopHelpers";
import ShopPageShop from "~/components/shop/ShopPageShop";
import { wrapper } from "~/store/store";

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    await getShopPageData(store, context);
    // console.log(context.query.slug);
    return {
        props: {},
    };
});

function Page(props: any) {
    return <ShopPageShop layout="grid" gridLayout="grid-4-sidebar" sidebarPosition="start" />;
}

export default Page;
