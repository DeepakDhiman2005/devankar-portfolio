"use client";

import "../../styles/project-slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import { useMediaQuery } from "react-responsive";

interface ProjectSliderProps {
    images: string[];
}

const ProjectSlider = ({ images = [] }: ProjectSliderProps) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isActive, setIsActive] = useState<string | undefined>(images?.[0]);

    // responsive
    const isMobile = useMediaQuery({ maxWidth: 650 });

    const ImageButton = ({ src, active }: { src?: string; active?: boolean }) => (
        <div className={`project-slider-button-image ${active ? 'active' : ''}`} onClick={() => setIsActive(src)}>
            <Image src={src as string} alt="image" width={1000} height={1000} className="w-full h-auto" />
        </div>
    );

    return (
        <section className="project-slider">
            <div className="left">
                <div className="arrow-container left-arrow-container">
                    <div className="arrow" style={{ rotate: isMobile ? '-90deg': '0deg' }} onClick={() => swiperRef.current?.slidePrev()}>
                        <IoIosArrowUp size={18} />
                    </div>
                </div>
                <div className={`${isMobile ? 'h-auto': 'h-[300px]'} w-full`}>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        // direction="vertical"
                        direction={isMobile ? 'horizontal': 'vertical'}
                        slidesPerView={2}
                        centeredSlides
                        spaceBetween={50}
                        effect="coverflow"
                        modules={[EffectCoverflow, Pagination]}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 250,
                            modifier: 1,
                            slideShadows: false,
                            scale: 1.1,
                        }}
                        className="h-full"
                    >
                        {images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ImageButton src={item} active={isActive === item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="arrow-container right-arrow-container">
                    <div className="arrow" style={{ rotate: isMobile ? '-90deg': '0deg' }} onClick={() => swiperRef.current?.slideNext()}>
                        <IoIosArrowDown size={18} />
                    </div>
                </div>
            </div>
            <div className="right">
                <a href={isActive} target="_blank" rel="noopener noreferrer" className="w-full h-auto">
                    <Image src={isActive as string} alt="image" width={1000} height={1000} className="w-full h-auto slider-image" />
                </a>
            </div>
        </section>
    );
};

export default ProjectSlider;
