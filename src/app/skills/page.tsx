"use client";
import { useEffect, useRef, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../styles/skills.scss";
import MainHeading from "@/components/heading/MainHeading";

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ProgrammingLanguagesInterface {
    title?: string,
    image?: string,
}

const Skills = () => {
    const swiperRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handlePaginationClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
            setActiveIndex(index);
        }
    };

    // programming languages
    const programmingLanguages: Array<ProgrammingLanguagesInterface> = [
        {
            title: 'HTML',
            image: '/images/programming-images/html.png'
        },
        {
            title: "CSS",
            image: '/images/programming-images/css.png'
        },
        {
            title: 'JavaScript',
            image: '/images/programming-images/js.png'
        },
        {
            title: 'Node.js',
            image: '/images/programming-images/node.png'
        },
        {
            title: 'TypeScript',
            image: '/images/programming-images/ts.png'
        },
        {
            title: 'Python',
            image: '/images/programming-images/python.png'
        },
        {
            title: 'C/C++',
            image: '/images/programming-images/c-cpp.png'
        }
    ]

    const lib_and_framework: Array<ProgrammingLanguagesInterface> = [
        {
            title: "React.js",
            image: '/images/programming-images/react.png'
        },
        {
            title: "Next.js",
            image: '/images/programming-images/next.png'
        },
        {
            title: "Tailwindcss",
            image: '/images/programming-images/tailwind.png'
        },
        {
            title: "Express.js",
            image: '/images/programming-images/express.png'
        },
        {
            title: "Three.js",
            image: '/images/programming-images/three.png'
        }
    ]

    const tools_and_platforms: Array<ProgrammingLanguagesInterface> = [
        {
            title: 'Github',
            image: '/images/programming-images/git.png',
        },
        {
            title: "Chatgpt",
            image: '/images/programming-images/chatgpt.png',
        },
        {
            title: "Vercel",
            image: '/images/programming-images/vercel.png',
        },
        {
            title: 'VS Code',
            image: '/images/programming-images/vscode.png'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            const section1 = document.querySelector('.skills-container > section.section1') as HTMLElement;
            // console.log(section1);
            gsap.fromTo(section1, {
                opacity: 0,
                x: -200,
            }, {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: section1,
                    start: 'top center',
                }
            });

            const section2 = document.querySelector('.skills-container > section.section2') as HTMLElement;
            // console.log(section1);
            gsap.fromTo(section2, {
                opacity: 0,
                x: 200,
            }, {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: section2,
                    start: 'top center',
                }
            });

            const section3 = document.querySelector('.skills-container > section.section3') as HTMLElement;
            // console.log(section1);
            gsap.fromTo(section3, {
                opacity: 0,
                y: 200,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: section3,
                    start: 'top center',
                }
            });

            const section4 = document.querySelector('.skills-container > section.section4') as HTMLElement;
            // console.log(section1);
            gsap.fromTo(section4, {
                opacity: 0,
                scale: 0.5,
            }, {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: section4,
                    start: 'top center',
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="skills-container overflow-hidden">
            {/* <h1>Skills</h1> */}
            <MainHeading text="Skills" />

            <section className="section1">
                <div className="left">
                    <h2>Programming Languages</h2>
                    <p>HTML, CSS, JavaScript, TypeScript, Node.js, Python, C/C++</p>
                </div>

                <div className="right">
                    <div className="w-full h-[300px] relative">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            direction="vertical"
                            slidesPerView={1}
                            spaceBetween={0}
                            autoplay={{
                                delay: 1200, // Auto-scroll delay in ms
                                disableOnInteraction: false, // Continue autoplay after user interaction
                            }}
                            speed={700}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 0,
                                depth: 250,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            modules={[EffectCoverflow, Autoplay]}
                            className="h-full custom-swiper"
                        >
                            {programmingLanguages.map(({
                                title,
                                image,
                            }, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        // className={`flex items-center justify-center h-[300px] text-white text-2xl font-bold`}
                                        className="skills-card"
                                    >
                                        {/* <img src={image} alt={`${title} Image`} /> */}
                                        <div className="image">
                                            <Image
                                                src={image as string}
                                                alt={`${title} Image`}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="w-full custom-pagination-swiper my-2 flex justify-center items-center gap-x-2">
                        {programmingLanguages.map((_, index) => (
                            <div
                                key={index}
                                className={`circle ${activeIndex === index ? "active" : ""}`}
                                onClick={() => handlePaginationClick(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section2 flex-row-reverse">
                <div className="left">
                    <h2>Libraries / Frameworks</h2>
                    <div className="flex flex-col justify-start items-start gap-y-4">
                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <h3 className="font-semibold">Frameworks</h3>
                            <p>Next.js, Express.js</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <h3 className="font-semibold">CSS Frameworks</h3>
                            <p>Tailwind CSS, Material Tailwind, Ant Design</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <h3 className="font-semibold">CSS Libraries</h3>
                            <p>SCSS</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <h3 className="font-semibold">JavaScript Libraries</h3>
                            <p>React.js, Redux, GSAP, Three.js, React three fiber, Framer Motion, React Slick Slider, Swiper, React ApexCharts, React Helmet, React Data Table Component, QR Code Styling, React Hook Form, React Toastify</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="w-full h-[300px] relative">
                        <Swiper
                            direction="horizontal"
                            slidesPerView={1}
                            spaceBetween={0}
                            autoplay={{
                                delay: 1200, // Auto-scroll delay in ms
                                disableOnInteraction: false, // Continue autoplay after user interaction
                            }}
                            speed={700}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 0,
                                depth: 250,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Autoplay, Pagination]}
                            className="h-full custom-swiper"
                        >
                            {lib_and_framework.map(({
                                title,
                                image
                            }, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="skills-card"
                                    >
                                        {/* <img src={image} alt={`${title} Image`} /> */}
                                        <div className="image">
                                            <Image
                                                src={image as string}
                                                alt={`${title} Image`}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="section3">
                <div className="left">
                    <h2>Tools / Platforms</h2>
                    <div className="flex flex-col justify-start items-start gap-y-4">
                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <h3 className="font-semibold">Tools</h3>
                            <p>Git, VS Code, GitHub, Canva, ChatGPT, Vite</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <h3 className="font-semibold">Platforms</h3>
                            <p>Netlify, Firebase, Vercel, Hostinger</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <h3 className="font-semibold">Hosting Methods</h3>
                            <p>Static Hosting (Netlify, Vercel), Cloud Hosting (Firebase), Shared Hosting (Hostinger)</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="w-full h-[300px] relative">
                        <Swiper
                            direction="horizontal"
                            slidesPerView={1}
                            spaceBetween={0}
                            autoplay={{
                                delay: 1200, // Auto-scroll delay in ms
                                disableOnInteraction: false, // Continue autoplay after user interaction
                            }}
                            speed={700}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 0,
                                depth: 250,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Autoplay, Pagination]}
                            className="h-full custom-swiper"
                        >
                            {tools_and_platforms.map(({
                                title,
                                image
                            }, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="skills-card"
                                    >
                                        {/* <img src={image} alt={`${title} Image`} /> */}
                                        <div className="image">
                                            <Image
                                                src={image as string}
                                                alt={`${title} Image`}
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="section4 flex-row-reverse">
                <div className="left">
                    <h2>Databases</h2>
                    <p>MongoDB</p>
                </div>

                <div className="right">
                    <div className="w-full h-[300px] relative">
                        <div
                            className="skills-card"
                        >
                            {/* <img src={'/images/programming-images/mongo.png'} alt={`MongoDB Image`} /> */}
                            <div className="image">
                                <Image
                                    src='/images/programming-images/mongo.png'
                                    alt={`MongoDB Image`}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
