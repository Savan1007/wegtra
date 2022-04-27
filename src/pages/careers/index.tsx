import axios from "axios";
import React, { useEffect, useState } from "react";
import BlockHeader from "~/components/blocks/BlockHeader";
import JobPost from "~/components/careers/JobPost";
import { baseApi } from "../../../config.json";

const index = () => {
    const [jobs, setJobs] = useState<any>([]);

    const fetchJobs = async () => {
        const { status, data } = await axios.get(`${baseApi}/careers/is_publish`);
        if (status === 200) {
            setJobs(data);
        }
    };

    useEffect(() => {
        fetchJobs().then();
    }, []);

    return (
        <React.Fragment>
            <BlockHeader
                pageTitle="Careers"
                breadcrumb={[
                    { title: "Home", url: "/" },
                    { title: "Careers", url: "/careers" },
                ]}
            />
            <div className={`block blog-view blog-view--layout--${"left"}`}>
                <div className="container pb-5">
                    <div className="row">
                        {jobs.map((job: any, idx: number) => {
                            return (
                                <div className="col-md-6 my-2">
                                    <JobPost
                                        key={job._id}
                                        department={job?.department}
                                        jobTitle={job?.jobTitle}
                                        jobLocation={job?.jobLocation}
                                        salary={job?.salary}
                                        createdAt={job?.createdAt}
                                        jobType={job?.jobType}
                                        slug={job?.slug}
                                    ></JobPost>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default index;
