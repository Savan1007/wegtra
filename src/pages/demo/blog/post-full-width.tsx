// react
import { useRouter } from "next/router";
import React from "react";
// application
import BlogPagePost from "~/components/blog/BlogPagePost";

function Page() {
    return <BlogPagePost featuredImage />;
}

export default Page;
