import moment from "moment";
import Link from "next/link";
import React from "react";
import AppLink from "../shared/AppLink";

interface IProps {
    jobTitle: string;
    slug: string;
    department: string;
    jobLocation: string;
    salary: string;
    jobType: string;
    createdAt: string;
}

const JobPost = (props: IProps) => {
    return (
        <Link href={"/careers/" + props.slug}>
            <div className="job__wrapper" style={{ cursor: "pointer" }}>
                <div className="job__description">
                    <div className="d-flex flex-column">
                        <h1>{props.jobTitle}</h1>
                        <p>{props.department}</p>
                    </div>
                    <div>
                        <button className="btn btn-outline-dark">{props.jobType}</button>
                    </div>
                </div>
                <div className="job__footer">
                    <div className="d-flex mr-3 justify-content-center align-items-center">
                        <i className="fa fa-map-signs"></i>
                        <p className="px-2">{props.jobLocation}</p>
                    </div>
                    <div className="d-flex mr-3 justify-content-center align-items-center">
                        <i className="fa fa-money-bill"></i>
                        <p className="px-2">{props.salary} INR</p>
                    </div>
                    <div className="d-flex mr-3 justify-content-center align-items-center">
                        <i className="far fa-clock"></i>
                        <p className="px-2">{moment(props.createdAt).format("DD MMMM YYYY")}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JobPost;
