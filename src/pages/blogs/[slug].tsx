// react
import React from "react";
// application
import BlogPagePost from "~/components/blog/BlogPagePost";
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
function Page(props: any) {
    return <BlogPagePost featuredImage slug={props.slug} />;
}

export default Page;
