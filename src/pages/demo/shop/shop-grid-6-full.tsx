// react
import React from 'react';
// application
import getShopPageData from '~/store/shop/shopHelpers';
import ShopPageShop from '~/components/shop/ShopPageShop';
import { wrapper } from '~/store/store';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    await getShopPageData(store, context, 'engine-drivetrain');

    return { props: {} };
});

function Page() {
    return (
        <ShopPageShop
            layout="grid"
            gridLayout="grid-6-full"
        />
    );
}

export default Page;
