import React from "react";
import JobDetailView from "~/components/careers/JobDetailView";
import { wrapper } from "~/store/store";

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    // await getShopPageData(store, context);
    // console.log(context.query.slug);
    return {
        props: {
            slug: context.query.slug,
        },
    };
});

const Page = (props: any) => {
    return <JobDetailView slug={props?.slug} />;
};

export default Page;
