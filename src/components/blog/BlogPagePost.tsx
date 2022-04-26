// react
import React, { useEffect, useState } from "react";
// third-party
import classNames from "classnames";
// application
import AppLink from "~/components/shared/AppLink";
import BlockSpace from "~/components/blocks/BlockSpace";
import BlogSidebar from "~/components/blog/BlogSidebar";
import Decor from "~/components/shared/Decor";
import Post from "~/components/blog/Post";
import { baseUrl } from "~/services/utils";
import { IBlogPageSidebarPosition } from "~/interfaces/pages";
import axios from "axios";
import { baseApi } from "../../../config.json";
import { STATUS_CODES } from "http";
import moment from "moment";

interface Props {
    featuredImage?: boolean;
    sidebarPosition?: IBlogPageSidebarPosition | false;
    slug?: string;
}

interface BlogPost {
    title: String;
    slug: String;
    image: String;
    body: String;
    categories: [];
    tags: [string];
    createdAt: string;
}

function BlogPagePost(props: Props) {
    const { featuredImage = false, sidebarPosition = false } = props;
    const [blogPost, setBlogPost] = useState<BlogPost>();

    const fetchBlogPost = async () => {
        const { data, status } = await axios.get(`${baseApi}/blogs/${props.slug}`);
        if (status === 200) {
            setBlogPost(data);
        }
    };

    useEffect(() => {
        fetchBlogPost();
    }, []);

    return (
        <React.Fragment>
            <div className="block post-view">
                <div
                    className={classNames("post-view__header post-header", {
                        "post-header--has-image": featuredImage,
                    })}
                >
                    {featuredImage && (
                        <div className="post-header__image" style={{ backgroundImage: `url(${blogPost?.image})` }} />
                    )}

                    <div className="post-header__body">
                        <div className="post-header__categories">
                            <ul className="post-header__categories-list">
                                <li className="post-header__categories-item">
                                    <AppLink href="/" className="post-header__categories-link">
                                        {blogPost?.categories[blogPost.categories.length - 1]}
                                    </AppLink>
                                </li>
                            </ul>
                        </div>
                        <h1 className="post-header__title">{blogPost?.title}</h1>
                        <div className="post-header__meta">
                            <ul className="post-header__meta-list">
                                <li className="post-header__meta-item">
                                    {"By "}
                                    <AppLink href="/" className="post-header__meta-link">
                                        Wegtra
                                    </AppLink>
                                </li>
                                <li className="post-header__meta-item">
                                    {moment(blogPost?.createdAt).format("MMMM Do, YYYY")}
                                </li>
                                {/* <li className="post-header__meta-item">
                                    <AppLink href="/" className="post-header__meta-link">
                                        4 Comments
                                    </AppLink>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <Decor type="bottom" className="post-header__decor" /> */}
                </div>

                <div className="container">
                    <div className="post-view__body">
                        {sidebarPosition === "start" && (
                            <div className="post-view__item post-view__item-sidebar">
                                <BlogSidebar />
                            </div>
                        )}
                        <Post
                            content={blogPost?.body}
                            tags={blogPost?.tags || ["New"]}
                            className="post-view__item post-view__item-post"
                        />
                        {sidebarPosition === "end" && (
                            <div className="post-view__item post-view__item-sidebar">
                                <BlogSidebar />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default BlogPagePost;
