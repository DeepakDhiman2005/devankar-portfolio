"use client";
import Link from "next/link";
import "../../styles/projects.scss";
import { Dialog } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CardInterface {
  title?: string;
  image?: string;
  technology?: Array<string>;
  completeTechnology?: Array<string>;
  content?: string;
  id?: string;
}

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  title = "",
  image = "",
  technology = [],
  completeTechnology = [],
  content = "",
  id = "",
}: CardInterface) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(!isOpen);

  const handleAnimation = () => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            toggleActions: "play none none reverse", // Play on scroll, reverse on scroll back
          },
        }
      );
    }
  };

  useEffect(() => {
    if (image) {
      // Delay animation until image loads
      const img = new window.Image();
      img.src = image;
      img.onload = () => handleAnimation();
    } else {
      handleAnimation();
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [image]);

  return (
    <>
      <Dialog
        open={isOpen}
        handler={handleOpen}
        size="lg"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className="w-full py-3 px-4">
          <div className="w-full flex justify-between py-2 items-start">
            <h2 className="text-[20px] font-semibold text-gray-900">Technologies</h2>
            <button className="hover-cross" onClick={handleOpen}>
              <RxCross2 size={25} />
            </button>
          </div>
          <div className="project-card py-8">
            <div className="technology-section">
              {completeTechnology.map((item, index) => (
                <div key={index} className="item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Dialog>

      <div ref={containerRef} className="project-card">
        <div className="image">
          <Link href={`/projects/${id}`} className="w-full h-auto">
            {image ? (
              <Image
                src={image}
                alt="project image"
                width={1000}
                height={1000}
                onLoad={handleAnimation} // Trigger animation when image loads
                priority // Faster LCP
              />
            ) : (
              <div className="image-loader"></div>
            )}
          </Link>
        </div>
        <h2>{title}</h2>
        <div className="technology-section">
          {technology.map((item, index) =>
            item?.toLowerCase()?.includes("more") ? (
              <div key={index} className="item" onClick={handleOpen}>
                {item}
              </div>
            ) : (
              <div key={index} className="item">
                {item}
              </div>
            )
          )}
        </div>
        <p>{content}</p>
        <Link href={`/projects/${id}`} className="w-auto h-auto">
          <button>See Details</button>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
