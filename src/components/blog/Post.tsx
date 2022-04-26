// react
import React from "react";
// third-party
import classNames from "classnames";
// application
import AppImage from "~/components/shared/AppImage";
import AppLink from "~/components/shared/AppLink";
import CommentsList from "~/components/blog/CommentsList";
import Pagination from "~/components/shared/Pagination";
import ShareLinks from "~/components/shared/ShareLinks";
import { ArrowRoundedLeft7x11Svg, ArrowRoundedRight7x11Svg } from "~/svg";
// data
import dataBlogComments from "~/data/blogComments";
import dataBlogPosts from "~/data/blogPosts";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    content?: String;
    tags: [string];
}

function Post(props: Props) {
    const { className, ...rootProps } = props;

    const rootClasses = classNames(className);

    return (
        <div className={rootClasses} {...rootProps}>
            <div className="post-view__card post">
                <div
                    className="post__body typography"
                    dangerouslySetInnerHTML={{ __html: props?.content?.toString() || "" }}
                ></div>

                {/* <div className="post__pagination">
                    <div className="post__pagination-title">Pages</div>
                    <div className="post__pagination-list">
                        <ul>
                            <li>
                                <span className="post__pagination-link post__pagination-link--current">1</span>
                            </li>
                            <li>
                                <AppLink href="/" className="post__pagination-link">
                                    2
                                </AppLink>
                            </li>
                            <li>
                                <AppLink href="/" className="post__pagination-link">
                                    3
                                </AppLink>
                            </li>
                        </ul>
                    </div>
                </div> */}

                <div className="post__footer">
                    <div className="post__tags tags tags--sm">
                        <div className="tags__list">
                            {props?.tags.map((tag: string) => {
                                return <AppLink href="/">{tag}</AppLink>;
                            })}
                        </div>
                    </div>
                    <ShareLinks className="post__share-links" />
                </div>

                <div className="post__author">
                    <div className="post__author-avatar">
                        <AppImage src="/images/signature.jpg" />
                    </div>
                    <div className="post__author-info">
                        <div className="post__author-name">{"Wegtra"}</div>
                        <div className="post__author-about">
                            Aliquam ullamcorper elementum sagittis. Etiam lacus lacus, mollis in mattis in, vehicula eu
                            nulla. Nulla nec tellus pellentesque.
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="post-view__card post-navigation">
                <div className="post-navigation__body">
                    <AppLink href="/" className="post-navigation__item post-navigation__item--prev">
                        <div className="post-navigation__item-image">
                            <AppImage src={dataBlogPosts[1].image} />
                        </div>
                        <div className="post-navigation__item-info">
                            <div className="post-navigation__direction">
                                <div className="post-navigation__direction-arrow">
                                    <ArrowRoundedLeft7x11Svg />
                                </div>
                                <div className="post-navigation__direction-title">Previous post</div>
                            </div>
                            <div className="post-navigation__item-title">{dataBlogPosts[1].title}</div>
                        </div>
                    </AppLink>

                    <AppLink href="/" className="post-navigation__item post-navigation__item--next">
                        <div className="post-navigation__item-info">
                            <div className="post-navigation__direction">
                                <div className="post-navigation__direction-title">Next post</div>
                                <div className="post-navigation__direction-arrow">
                                    <ArrowRoundedRight7x11Svg />
                                </div>
                            </div>
                            <div className="post-navigation__item-title">{dataBlogPosts[2].title}</div>
                        </div>
                        <div className="post-navigation__item-image">
                            <AppImage src={dataBlogPosts[2].image} />
                        </div>
                    </AppLink>
                </div>
            </div> */}

            {/* <div className="post-view__card">
                <h2 className="post-view__card-title">Comments ({dataBlogComments.count})</h2>

                <div className="post-view__card-body comments-view">
                    <CommentsList className="comments-view__list" comments={dataBlogComments.items} />

                    <div className="comments-view__pagination">
                        <Pagination current={1} siblings={2} total={3} />
                    </div>
                </div>
            </div> */}

            {/* <div className="post-view__card">
                <h2 className="post-view__card-title">Write A Comment</h2>

                <form className="post-view__card-body">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="comment-first-name">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="comment-first-name"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="comment-last-name">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="comment-last-name"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="comment-email">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="comment-email"
                                placeholder="Email Address"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment-content">Comment</label>
                        <textarea className="form-control" id="comment-content" rows={6} />
                    </div>
                    <div className="form-group mb-0">
                        <button type="submit" className="btn btn-primary mt-md-4 mt-2">
                            Post Comment
                        </button>
                    </div>
                </form>
            </div> */}
        </div>
    );
}

export default Post;
