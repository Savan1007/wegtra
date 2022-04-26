// react
import React from "react";
// third-party
import classNames from "classnames";
// application
import AppImage from "~/components/shared/AppImage";
import AppLink from "~/components/shared/AppLink";
import url from "~/services/url";
import { IPost } from "~/interfaces/post";
import moment from "moment";

export type IPostCardLayout = "list" | "grid" | "grid-sm";

interface Props {
    post: any;
    layout?: IPostCardLayout;
}

function PostCard(props: Props) {
    const { post, layout } = props;

    const rootClasses = classNames("post-card", {
        [`post-card--layout--${layout}`]: layout,
    });

    return (
        <div className={rootClasses}>
            <div className="post-card__image">
                <AppLink href={"/blogs/" + post.slug}>
                    <AppImage src={post.image} width={"100%"} height={"100%"} style={{ objectFit: "fill" }} />
                </AppLink>
            </div>
            <div className="post-card__content">
                <div className="post-card__category">
                    {post.categories.map((category: any, index: any) => (
                        <AppLink href="/" key={index}>
                            {category}
                        </AppLink>
                    ))}
                </div>
                <div className="post-card__title">
                    <h2>
                        <AppLink href={"/blogs/" + post.slug}>{post.title}</AppLink>
                    </h2>
                </div>
                <div className="post-card__date">
                    {" By "}
                    <AppLink href="/">Wegtra </AppLink>
                    {moment(post.createdAt, "YYYYMMDD").fromNow()}
                </div>
                <div className="post-card__excerpt">
                    <div className="typography" dangerouslySetInnerHTML={{ __html: post.body.slice(0, 180) }}></div>
                </div>
                <div className="post-card__more">
                    <AppLink href={"/blogs/" + post.slug} className="btn btn-secondary btn-sm">
                        Read more
                    </AppLink>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
