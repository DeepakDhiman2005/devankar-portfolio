"use client";

import "./htmlContentRender.scss";
import { useEffect, useRef } from "react";

const HtmlContentRender = ({
    content = ""
}: {
    content?: string,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if(containerRef.current){
            containerRef.current.innerHTML = content;
        }
    }, [content]);

    return <>
    <div ref={containerRef} className="html-content-render"></div>
    </>
}

export default HtmlContentRender;