"use client";
import "../../styles/heading.scss";

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MainHeading = ({
    text = "",
}: {
    text: string,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.main-heading > span');
            const tl = gsap.timeline({
                defaults: {
                    duration: 0.2,
                    ease: "power3.inOut"
                }
            });

            items.forEach((item) => {
                const it = item as HTMLElement;
                tl.to(it, {
                    webkitTextStroke: "0px transparent",
                    backgroundImage: "linear-gradient(180deg, rgba(233, 75, 75, 0.911) 40%, #d6c25dd3 80%)",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                    transition: 'background 0.7s ease-in-out',
                    opacity: 1,
                    y: 0,
                })
            })
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return <>
        <h2 ref={containerRef} className="main-heading">{
            text?.split('').map((item, index) => (
                <span key={index}>{item}</span>
            ))
        }</h2>
    </>
}

export default MainHeading;