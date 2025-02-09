"use client";
import "../../styles/heading.scss";

const Heading = ({
    children,
}: {
    children?: React.ReactNode,
}) => {
    return <>
        <h2 className="sub-heading">
            {children}
        </h2>
    </>
}

export default Heading;