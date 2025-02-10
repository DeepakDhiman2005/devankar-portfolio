"use client";

import "../../styles/about.scss";
import Heading from "@/components/heading/Heading";

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo('.about-container > .section1 > .image > .image> img', {
                scale: 0.5,
                opacity: 0,
            }, {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                ease: "power2.inOut",
            });

            tl.fromTo('.about-container > .section1 > .about-intro > h1', {
                x: -200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.inOut",
            });

            tl.fromTo('.about-container > .section1 > .about-intro > h3', {
                x: -200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
            });

            tl.fromTo('.about-container > .section1 > .about-intro > p', {
                y: 20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return <>
        <main ref={containerRef} className="about-container">
            <section className="section1">
                <div className="image">
                    <div className="circle"></div>
                    {/* <img src="/images/gallery/devankar.jpg" alt="image" /> */}
                    <div className="image">
                        <Image
                            src="/images/gallery/devankar.jpg"
                            alt="image"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>

                <div className="about-intro overflow-hidden">
                    <h1>About Us</h1>
                    <h3>I{"\'"}m Devankar. Frontend (React.js) Developer.</h3>
                    <p className="font-medium"><span className="font-semibold">Email:</span> dhimandeepak957@gmail.com</p>
                    <p className="font-medium"><span className="font-semibold">Mobile:</span> 91+ 9319558980</p>
                    <p className="font-medium"><span className="font-semibold">Eduction:</span> BCA (Present)</p>
                </div>
            </section>

            <section className="section2">
                <Heading>Eduction</Heading>
                <div className="my-4">
                    <h2 className="flex flex-col lg:flex-row justify-start lg:justify-between w-full items-start lg:items-center">
                        <span className="font-medium">SARVODAYA BAL VIDYALAYA JANTA FLAT NAND NAGARI DLI</span>
                        <span>june 2023 - may 2024</span>
                    </h2>
                    <h3 className="flex flex-col lg:flex-row justify-start lg:justify-between w-full items-start lg:items-center">
                        <span className="font-medium">Commerce 12th MarkSheet</span>
                        <span>Delhi</span>
                    </h3>
                    <p>Percentage: 53%</p>
                </div>

                <div className="my-4">
                    <h2 className="flex flex-col lg:flex-row justify-start lg:justify-between w-full items-start lg:items-center">
                        <span className="font-medium">INDIRA GANDHI NATIONAL OPEN UNIVERSITY (IGNOU)</span>
                        <span>june 2024 - july 2026</span>
                    </h2>
                    <h3 className="flex flex-col lg:flex-row justify-start lg:justify-between w-full items-start lg:items-center">
                        <span className="font-medium">Bachelor of Computer Application (BCA) Degree</span>
                        <span>Nodia</span>
                    </h3>
                </div>
            </section>

            <section className="section3">
                <Heading>Experience</Heading>

                <div className="flex flex-col lg:flex-row justify-start lg:justify-between w-full items-start lg:items-center">
                    <h2 className="font-semibold">Frontend Developer React.js</h2>
                    <h3>Delhi, India | 05/2024 – 01/2025</h3>
                </div>

                <h2 className="font-semibold">Internship at OCPL Tech (2 months)</h2>
                <ul>
                    <li className="pl-[2px]">1. Built 4+ web projects, including a custom CRM, using React.js and Node.js</li>
                    <li>2. Improved the ocpl.tech website by adding blogging functionality to boost content management.</li>
                    <li>3. Gained experience in agile development, Git, and modern web practices.</li>
                </ul>

                <h2 className="font-semibold">Full-time Developer at Koncept Software Solutions (5 months)</h2>
                <ul>
                    <li className="pl-[2px]">1. Managed 10+ projects, including CRMs, payment gateways, and bulk communication tools.</li>
                    <li>2. Developed scalable interfaces with React.js, JavaScript, and HTML/CSS.</li>
                    <li>3. Integrated third-party APIs and payment services to optimize application performance.</li>
                </ul>
            </section>

            <section className="section4">
                <Heading>Skills</Heading>
                <div className="flex flex-col justify-start items-start my-4 gap-y-2">
                    <h2 className="font-semibold">1. Programming Languages</h2>
                    <p>HTML, CSS, JavaScript, TypeScript, Node.js, Python, C/C++</p>
                </div>
                <div className="flex flex-col justify-start items-start my-4 gap-y-2">
                    <h2 className="font-semibold">2. Libraries/Frameworks</h2>
                    <h3 className="font-semibold">Frameworks</h3>
                    <p>Next.js, Express.js</p>
                    <h3 className="font-semibold">CSS Frameworks</h3>
                    <p>Tailwind CSS, Material Tailwind, Ant Design</p>
                    <h3 className="font-semibold">CSS Libraries</h3>
                    <p>SCSS</p>
                    <h3 className="font-semibold">JavaScript Libraries</h3>
                    <p>React.js, Redux, GSAP, Three.js, React three fiber, Framer Motion, React Slick Slider, Swiper, React ApexCharts, React Helmet, React Data Table Component, QR Code Styling, React Hook Form, React Toastify</p>
                </div>
                <div className="flex flex-col justify-start items-start my-4 gap-y-2">
                    <h2 className="font-semibold">3. Tools / Platforms</h2>
                    <h3 className="font-semibold">Tools</h3>
                    <p>Git, VS Code, GitHub, Canva, ChatGPT, Vite</p>
                    <h3 className="font-semibold">Platforms</h3>
                    <p>Netlify, Firebase, Vercel, Hostinger</p>
                    <h3 className="font-semibold">CSS Libraries</h3>
                    <p>SCSS</p>
                    <h3 className="font-semibold">Hosting Methods</h3>
                    <p>Static Hosting (Netlify, Vercel), Cloud Hosting (Firebase), Shared Hosting (Hostinger)</p>
                </div>
                <div className="flex flex-col justify-start items-start my-4 gap-y-2">
                    <h2 className="font-semibold">4. Databases</h2>
                    <p>MongoDB</p>
                </div>
            </section>

            <section className="section5">
                <Heading>Active</Heading>
                <div className="flex flex-col justify-start items-start my-4 gap-y-2">
                    <h2 className="font-semibold">1. <a href="https://www.instagram.com/deepakdhiman4367/" target="_blank" className="active-link">Instagram</a></h2>
                    <h2 className="font-semibold">2. <a href="https://www.linkedin.com/in/devankar-dhiman-1a1959336/" target="_blank" className="active-link">LinkedIn</a></h2>
                    <h2 className="font-semibold">3. <a href="https://www.youtube.com/@ProgrammerD7" target="_blank" className="active-link">YouTube</a></h2>
                    <h2 className="font-semibold">4. <a href="https://programmerd.in/" target="_blank" className="active-link">Website</a></h2>
                    <h2 className="font-semibold">5. <a href="https://www.freelancer.com/u/dhimandeepak957" target="_blank" className="active-link">Freelancer</a></h2>
                    <h2 className="font-semibold">6. <a href="https://www.fiverr.com/sellers/deepakdhiman877/" target="_blank" className="active-link">Fiverr</a></h2>
                    <h2 className="font-semibold">7. <a href="https://github.com/DeepakDhiman2005" target="_blank" className="active-link">Github</a></h2>
                </div>

            </section>
        </main>
    </>
}

export default About;