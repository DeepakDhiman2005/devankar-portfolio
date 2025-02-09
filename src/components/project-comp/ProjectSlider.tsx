"use client";

import "../../styles/project-slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import Image from "next/image";

const ProjectSlider = ({
    images = []
}: {
    images: Array<string> | undefined,
}) => {
    const swiperRef = useRef<any>(null);
    const [isActive, setIsActive] = useState<string | undefined>(images && images?.[0]);

    const ImageButton = ({ src, active }: { src?: string, active?: boolean }) => {
        return <div className={`project-slider-button-image ${active && 'active'}`} onClick={() => setIsActive(src)}>
            {/* <img src={src} alt="image" className="w-full h-auto" /> */}
            <Image src={src as string} alt="image" width={1000} height={1000} className="w-full h-auto" />
        </div>
    }
    // let image_path: string = "/images/konceptlaw";

    return <>
        <section className="project-slider">
            <div className="left">
                <div className="arrow-container">
                    <div className="arrow"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <IoIosArrowUp size={18} />
                    </div>
                </div>
                <div className="h-[300px] w-full">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        direction="vertical"
                        slidesPerView={2}
                        centeredSlides
                        spaceBetween={50}
                        effect="coverflow"
                        // centeredSlides
                        modules={[EffectCoverflow, Pagination]}
                        coverflowEffect={{
                            rotate: 0,                      // Rotate angle
                            stretch: 0,                      // Stretch between slides
                            depth: 250,                      // Depth for 3D effect
                            modifier: 1,                     // Effect intensity
                            slideShadows: false,              // Enable slide shadows
                            scale: 1.1,
                        }}
                        className="h-full"                 // Full height for Swiper
                    >
                        {images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ImageButton src={item} active={isActive === item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="arrow-container">
                    <div className="arrow"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <IoIosArrowDown size={18} />
                    </div>
                </div>
                {/* <ImageButton src={`${image_path}/1.png`} /> */}
            </div>
            <div className="right">
                <a href={isActive} target="_blank" className="w-full h-auto">
                    {/* <img src={isActive} alt="image" className="w-full h-auto slider-image" /> */}
                    <Image src={isActive as string} alt="image" width={1000} height={1000} className="w-full h-auto slider-image" />
                </a>
            </div>
        </section>
    </>
}

export default ProjectSlider;