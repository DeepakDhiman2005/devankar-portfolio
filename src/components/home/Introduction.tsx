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

    const fetchProject = async () => {
        const response = await fetch('http://localhost:3000/api/projects');
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


        }, containerRef);
        return () => ctx.revert();
    }, [projects]);

    return <>
        <main ref={containerRef} className="w-full">
            <section className="introduction-section">
                <div className="left">
                    <div className="flex justify-start flex-col items-start">
                        <h1>Hello</h1>
                        <h1>I{"\'"}m Devankar</h1>
                    </div>
                    <p>I am mern stack developer. I have 1 year+ experience in React.js Frontend Development.</p>

                    <div className="flex justify-start items-center gap-x-4">
                        <MyButton>Learn</MyButton>
                        <MyButton>Explore</MyButton>
                    </div>
                </div>

                <div className="right flex justify-center items-center">
                    <Canvas style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <meshStandardMaterial />
                        <ambientLight position={[1, 1, 1]} />
                        <Boot scale={2.7} position={[0, -0.5, 0]} />
                        <OrbitControls enableZoom={false} autoRotate enableRotate={true} />
                    </Canvas>
                </div>
            </section>

            <section className="my-section section2">
                <Heading>Projects</Heading>
                <div className="projects-section grid grid-cols-7">
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

            <section className="my-section section3">
                <Heading>Skills</Heading>
            </section>
        </main>
    </>
}

export default Introduction;