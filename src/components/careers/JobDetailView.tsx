import axios from "axios";
import React, { useEffect, useState } from "react";
import BlockHeader from "../blocks/BlockHeader";
import { baseApi } from "../../../config.json";
import JobPost from "./JobPost";
import moment from "moment";
import { Modal } from "reactstrap";
import { toast } from "react-toastify";

interface Iprops {
    slug: string;
}

const JobDetailView = (props: Iprops) => {
    const [job, setJob] = useState<any>();
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState<any>();
    const [resume, setResume] = useState("");
    const [fileurl, setFileUrl] = useState("");

    const fetchJobBySlug = async () => {
        const { data, status } = await axios.get(`${baseApi}/careers/` + props.slug);
        if (status == 200) {
            setJob(data);
        }
    };
    useEffect(() => {
        fetchJobBySlug().then();
    }, []);

    const handleSubmit = async (e: any) => {
        const { status, data } = await axios.post(`${baseApi}/applications/new`, {
            name,
            email,
            contactNo,
            resume: fileurl,
            jobId: job?._id,
        });

        if (status == 200) {
            setModal(false);
            toast.success("Application Submitted !", { theme: "colored" });
        }
    };

    const handleFile = (e: any) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        axios
            .post(`${baseApi}/uploads`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then((data) => {
                setFileUrl(data.data.url);
            });
    };

    return (
        <React.Fragment>
            <Modal isOpen={modal} centered>
                <div className="bg-white p-5">
                    <div>
                        <div className="flex-column d-flex">
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                className="form-control my-3"
                                required
                            />

                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="form-control my-3"
                                required
                            />

                            <input
                                type="phone"
                                onChange={(e) => setContactNo(e.target.value)}
                                placeholder="Contact Number"
                                className="form-control my-3"
                                required
                            />

                            <input
                                type="file"
                                multiple={false}
                                accept="application/pdf"
                                onChange={handleFile}
                                className="my-3"
                            />
                            <div className="d-flex">
                                <button
                                    type="submit"
                                    className="btn btn-dark mt-2 mr-3"
                                    onClick={handleSubmit}
                                    disabled={fileurl.length < 1}
                                >
                                    Apply
                                </button>
                                <button
                                    className="btn btn-outline-danger mt-2"
                                    type="reset"
                                    onClick={() => {
                                        setModal(false);
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <BlockHeader
                pageTitle={job?.jobTitle}
                breadcrumb={[
                    { title: "Home", url: "/" },
                    { title: "Careers", url: "/careers" },
                    { title: props?.slug, url: "/careers" + props.slug },
                ]}
            />
            <div className={`container`}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-column my-5">
                            <div className="job__wrapper my-3">
                                <div className="job__description">
                                    <div className="d-flex flex-column">
                                        <h1>{job?.jobTitle}</h1>
                                        <p>{job?.department}</p>
                                    </div>
                                    <div>
                                        <div
                                            className="btn btn-outline-dark"
                                            onClick={() => {
                                                setModal(!modal);
                                            }}
                                        >
                                            {"Apply"}
                                        </div>
                                    </div>
                                </div>
                                <div className="job__footer">
                                    <div className="d-flex mr-3 justify-content-center align-items-center">
                                        <i className="fa fa-map-signs"></i>
                                        <p className="px-2">{job?.jobLocation}</p>
                                    </div>
                                    <div className="d-flex mr-3 justify-content-center align-items-center">
                                        <i className="fa fa-money-bill"></i>
                                        <p className="px-2">{job?.salary} INR</p>
                                    </div>
                                    <div className="d-flex mr-3 justify-content-center align-items-center">
                                        <i className="far fa-clock"></i>
                                        <p className="px-2">{moment(job?.createdAt).format("DD MMMM YYYY")}</p>
                                    </div>
                                    <div className="d-flex mr-3 justify-content-center align-items-center">
                                        <i className="fas fa-copy"></i>
                                        <p className="px-2">Applications : {job?.status}</p>
                                    </div>
                                    <div className="d-flex mr-3 justify-content-center align-items-center">
                                        <i className="fas fa-handshake"></i>
                                        <p className="px-2">Experince : {job?.experience}</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bg-white sm-mt-5 p-5"
                                dangerouslySetInnerHTML={{ __html: job?.description }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default JobDetailView;
