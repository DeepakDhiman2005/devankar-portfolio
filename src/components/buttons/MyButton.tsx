"use client";

import { FaArrowUp } from "react-icons/fa";
// styles
import "../../styles/my-button.scss";

const MyButton = ({
    children
}: {
    children: React.ReactNode,
}) => {
    return <>
        <button className="my-button my-3">
            <span>{children}</span>
            <div className="arrows">
                <FaArrowUp size={17} className="rotate-45 normal-arrow" />
                <FaArrowUp size={17} className="rotate-45 hover-arrow" />
            </div>
        </button>
    </>
}

export default MyButton;