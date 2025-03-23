"use client";

// three.js
import { Canvas } from "@react-three/fiber";
import Boot from "../../models/Boot";

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// styles
import "../../styles/home.scss";
import { OrbitControls } from "@react-three/drei";

// components
import MyButton from "../buttons/MyButton";
import Heading from "../heading/Heading";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../project-comp/ProjectCard";
import ViewProjectsCard from "../project-comp/ViewProjectsCard";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowDown } from "react-icons/io";

interface ProjectInterface {
    title?: string,
    homeImage?: string,
    images?: Array<string>,
    technology?: Array<string>,
    completeTechnology?: Array<string>,
    content?: string,
    id?: string,
}

interface ApiResponse {
    data: {
        projects: Array<ProjectInterface>,
    }
}

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
    // ref
    const containerRef = useRef<HTMLDivElement | null>(null);

    // state
    const [projects, setProjects] = useState<ProjectInterface[]>([]);

    // reponsive
    const isMobile = useMediaQuery({ maxWidth: 960 });
    const isSmallMobile = useMediaQuery({ maxWidth: 400 });

    const fetchProject = async () => {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const response = await fetch(`${baseUrl}/api/projects`);
        const { data } = (await response.json()) as ApiResponse;
        if (data.projects) {
            setProjects(data.projects?.slice(0, 6));
        } else {
            setProjects(data.projects);
        }
    }

    useEffect(() => {
        fetchProject();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!isMobile) {
                if (projects && projects.length > 0) {
                    const myProjects = gsap.utils.toArray('.projects-section > div');

                    gsap.to(myProjects, {
                        xPercent: -80 * (myProjects.length - 1),
                        scrollTrigger: {
                            trigger: '.my-section.section2',
                            pin: true,
                            scrub: true,
                            start: 'top top',
                            end: '+=3000'
                        }
                    });
                }
            }

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

        }, containerRef);
        return () => ctx.revert();
    }, [projects]);

    const ContentText = ({ children }: { children: React.ReactNode }) => (
        <p className="leading-tight">
            <span className="text-[20px]">{"\""}</span>
            {children}
            <span className="text-[20px]">{"\""}</span>
        </p>
    );

    return <>
        <main ref={containerRef} className="w-full">
            <section className="introduction-section">
                <div className="left">
                    <div className="flex justify-start flex-col items-start">
                        <h1>Hello</h1>
                        <h1>I{"\'"}m Devankar</h1>
                    </div>
                    <p>I am mern stack developer. I have 1 year+ experience in React.js Frontend Development.</p>

                    <div className="flex justify-start items-center gap-x-4 introduction-left-buttons">
                        <MyButton>Learn</MyButton>
                        <a href="/devankar-resume.pdf" target="_blank">
                            <MyButton>Download CV</MyButton>
                        </a>
                    </div>
                </div>

                <div className="right flex justify-center relative items-center">
                    <Canvas style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <meshStandardMaterial />
                        <ambientLight position={[1, 1, 1]} />
                        <Boot scale={isSmallMobile ? 2.3 : 2.7} position={[0, -0.5, 0]} />
                        <OrbitControls enableZoom={false} autoRotate enableRotate={true} />
                    </Canvas>

                    {
                        isMobile ? <>
                            <button className="absolute left-[45%] bottom-20 p-3 z-30 rounded-full border-2 border-solid border-gray-900 text-gray-900 transition-all duration-300 hover:text-white hover:bg-gray-900" onClick={() => {
                                window.scrollTo(0, 600);
                            }}>
                                <IoIosArrowDown size={20} />
                            </button>
                        </> : null
                    }
                </div>
            </section>

            <section className="my-section section2">
                <Heading>Projects</Heading>
                <div className="projects-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                    {
                        projects?.map((item, index) => (
                            <ProjectCard
                                key={index}
                                title={item?.title}
                                image={item?.homeImage}
                                technology={item?.technology}
                                completeTechnology={item?.completeTechnology}
                                content={item?.content}
                                id={item?.id}
                            />
                        ))
                    }
                    {
                        projects.length > 0 && <ViewProjectsCard />
                    }

                </div>
            </section>

            <div className="my-section gallery-section">
                <Heading>Testimonials</Heading>

                {[
                    { src: "/images/gallery/devankar.jpg", title: "Devankar Mern Stack", description: 'Passionate MERN Stack Developer with 1.5+ years of experience in building scalable web applications. Proficient in React, Node.js, Express, and MongoDB, with expertise in REST APIs, Redux, Three.js, and Ant Design. Skilled in crafting responsive UI/UX with Material Tailwind and optimizing performance. Dedicated to delivering clean, maintainable code and innovative solutions.' },
                    { src: "/images/gallery/team1.png", title: "Backend Team Members", description: 'Tarun & Aditya – Skilled Backend Developers specializing in Node.js, Express, MongoDB, and API development. They ensure efficient, secure, and scalable backend architecture, driving seamless application performance.' },
                    { src: "/images/gallery/team2.jpg", title: "Sales Team Members", description: 'Our Sales Team at Koncept Software Solutions is dedicated to driving business growth, building strong client relationships, and delivering innovative software solutions. With a customer-first approach, we ensure seamless service and satisfaction.' },
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
                            <div className="w-full lg:w-[90%] bg-white h-[1px]"></div>
                            <ContentText>{item?.description}</ContentText>
                            <div className="flex justify-start items-center gap-x-2 text-yellow-500 my-1">
                                {Array(4).fill(0).map((_, i) => <FaStar key={i} size={18} />)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </>
}

export default Introduction;