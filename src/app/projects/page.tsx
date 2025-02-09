"use client";

import ProjectCard from "@/components/project-comp/ProjectCard";
import "../../styles/projects.scss";
import { useEffect, useRef, useState } from "react";

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCardSkeleton from "@/components/project-comp/ProjectCardSkeleton";
import MainHeading from "@/components/heading/MainHeading";

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

const Projects = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [projects, setProjects] = useState<ProjectInterface[]>([]);
    const fetchProjects = async () => {
        const response = await fetch('http://localhost:3000/api/projects');
        const { data } = (await response.json()) as ApiResponse;
        if (data.projects) {
            setProjects(data.projects);
        }
    }
    // console.log(data.projects);

    useEffect(() => {
        fetchProjects();
    }, []);

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         const myProjects = gsap.utils.toArray('.project-cards .project-card');
    //         myProjects.forEach((item) => {
    //             const project = item as HTMLElement;
    //             gsap.fromTo(project, {
    //                 y: 30,
    //                 opacity: 0,
    //             }, {
    //                 y: 0,
    //                 opacity: 1,
    //                 duration: 0.7,
    //                 ease: "power2.inOut",
    //                 scrollTrigger: {
    //                     trigger: project,
    //                     start: 'top center',
    //                 }
    //             });
    //         })
    //     }, containerRef);
    //     return () => ctx.revert();
    // }, [projects]);

    return <>
        <main ref={containerRef} className="projects-section">
            {/* <h1>Projects</h1> */}
            <MainHeading text="Projects" />

            <div className="main-section w-full">

                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16 project-cards">
                    {
                        projects && projects.length > 0 ? projects?.map((item, index) => (
                            <div className="w-full h-auto" key={index}>
                                <ProjectCard
                                    title={item?.title}
                                    image={item?.homeImage}
                                    technology={item?.technology}
                                    completeTechnology={item?.completeTechnology}
                                    content={item?.content}
                                    id={item?.id}
                                />
                            </div>
                        )) : <>
                            <ProjectCardSkeleton />
                            <ProjectCardSkeleton />
                            <ProjectCardSkeleton />
                        </>
                    }
                </div>
            </div>

            <div className="h-[250px]"></div>
        </main>
    </>
}

export default Projects;