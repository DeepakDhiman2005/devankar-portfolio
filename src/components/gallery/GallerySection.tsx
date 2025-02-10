"use client";
import Image from "next/image";
import "../../styles/home.scss";
import Heading from "../heading/Heading";
import { FaStar } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
    const galleryContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const createAnimation = (section: string) => {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%", // Adjusted for better visibility
                    }
                });

                timeline.fromTo(`${section} > .card-image > .image`, 
                    { marginTop: '0%' }, 
                    { marginTop: '-15%', duration: 0.5, ease: "power1.inOut" }
                );

                timeline.fromTo(`${section} > .card-content > h2`, 
                    { x: -20, opacity: 0 }, 
                    { x: 0, opacity: 1, duration: 0.5, ease: "power1.inOut" }
                );
            };

            ['.gallery-card-section1', '.gallery-card-section2', '.gallery-card-section3'].forEach(createAnimation);

            const images = document.querySelectorAll<HTMLImageElement>('.card-image img');
            let loadedCount = 0;

            images.forEach(img => {
                if (img.complete) {
                    loadedCount++;
                } else {
                    img.addEventListener('load', () => {
                        loadedCount++;
                        if (loadedCount === images.length) {
                            ScrollTrigger.refresh();
                        }
                    });
                }
            });

            if (loadedCount === images.length) {
                ScrollTrigger.refresh();
            }

        }, galleryContainerRef);

        // Force refresh globally after all components mount
        setTimeout(() => ScrollTrigger.refresh(), 500);

        return () => ctx.revert();
    }, []);

    const ContentText = ({ children }: { children: React.ReactNode }) => (
        <p className="leading-tight italic">
            <span className="text-[20px]">{"\""}</span>
            {children}
            <span className="text-[20px]">{"\""}</span>
        </p>
    );

    return (
        <div ref={galleryContainerRef} className="my-section gallery-section">
            <Heading>Testimonials</Heading>

            {[ 
                { src: "/images/gallery/devankar.jpg", title: "Devankar Frontend" },
                { src: "/images/gallery/team1.png", title: "Backend Team Members" },
                { src: "/images/gallery/team2.jpg", title: "Sales Team Members" },
            ].map((item, index) => (
                <div key={index} className={`gallery-card gallery-card-section${index + 1}`}>
                    <div className="card-image">
                        <div className="image">
                            <Image
                                src={item.src}
                                alt="image"
                                width={1000}
                                height={1000}
                                priority
                            />
                        </div>
                    </div>
                    <div className="card-content">
                        <h2>{item.title}</h2>
                        <ContentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur quaerat molestiae blanditiis, commodi ab!</ContentText>
                        <div className="flex justify-start items-center gap-x-2 text-yellow-500 my-1">
                            {Array(4).fill(0).map((_, i) => <FaStar key={i} size={18} />)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GallerySection;
