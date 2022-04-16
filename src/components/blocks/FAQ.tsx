/* eslint-disable */
// react
import React, { useState } from "react";

function BlockMap() {
    const [previouslyOpen, setPreviouslyOpen] = useState<any>();
    const handleClick = (e: any) => {
        e.target.classList.toggle("active");
        const panel = e.target.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        if (previouslyOpen) {
            const target = previouslyOpen.nextElementSibling;
            previouslyOpen.classList.toggle("active");
            target.style.display = "none";
        }
        setPreviouslyOpen(e.target);
    };

    return (
        <div className="faq">
            <button type="button" className="accordion" onClick={handleClick}>
                1. Libero quo tempore ab?{" "}
            </button>
            <div className="panel">
                <p> voluptateme, libero quo tempore ab eum eveniet numquam. Ro quo tempore ab eum eveniet numquam</p>
            </div>

            <button type="button" className="accordion" onClick={handleClick}>
                2. consectetur adipisicin?{" "}
            </button>
            <div className="panel">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nostrum,</p>
            </div>

            <button type="button" className="accordion" onClick={handleClick}>
                3. Alestias, consectetur ut po?
            </button>
            <div className="panel">
                <p>vero sequi unde architecto aliquam dolorem temporibus molestias, consectetur ut possimus facer</p>
            </div>

            <button type="button" className="accordion" onClick={handleClick}>
                4. Alestias, consectetur ut po?
            </button>
            <div className="panel">
                <p>vero sequi unde architecto aliquam dolorem temporibus molestias, consectetur ut possimus facer</p>
            </div>

            <button type="button" className="accordion" onClick={handleClick}>
                5. Alestias, consectetur ut po?{" "}
            </button>
            <div className="panel">
                <p>vero sequi unde architecto aliquam dolorem temporibus molestias, consectetur ut possimus facer</p>
            </div>
            {/* <button type="button" className="btn btn-secondary btn-lg m-2">MORE FAQ</button> */}
        </div>
    );
}

export default BlockMap;
