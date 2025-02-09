"use client";
import Link from "next/link";
import "../../styles/projects.scss";
import { Dialog } from "@material-tailwind/react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface CardInterface {
    title?: string,
    image?: string,
    technology?: Array<any>,
    completeTechnology?: Array<any>,
    content?: string,
    id?: string,
}

const ProjectCard = ({
    title = "",
    image = "",
    technology = [],
    completeTechnology = [],
    content = "",
    id = "",
}: CardInterface) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpen = () => setIsOpen(!isOpen);

    return <>
        <Dialog
            open={isOpen}
            handler={handleOpen}
            size="lg"
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
        >
            {/* <h2>technologies</h2> */}
            <div className="w-full py-3 px-4">
                <div className="w-full flex justify-between py-2 items-start">
                    <h2 className="text-[20px] font-semibold text-gray-900">Technologies</h2>
                    <button className="hover-cross" onClick={handleOpen}>
                        <RxCross2 size={25} />
                    </button>
                </div>
                <div className="project-card py-8">
                    <div className="technology-section">
                        {
                            completeTechnology.map((item, index) => (
                                <div key={index} className="item">{item}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Dialog>

        <div className="project-card">
            <div className="image">
                <Link href={`/projects/${id}`} className="w-full h-auto">
                    {
                        image && image !== "" ? <img src={image} alt="image" /> : <div className="image-loader"></div>
                    }
                </Link>
            </div>
            <h2>{title}</h2>
            <div className="technology-section">
                {
                    technology.map((item, index) => (
                        item?.toLowerCase()?.match('more') ?
                            <div key={index} className="item" onClick={handleOpen}>{item}</div>
                            : <div key={index} className="item">{item}</div>
                    ))
                }
            </div>
            <p>{content}</p>
            <Link href={`/projects/${id}`} className="w-auto h-auto">
                <button>See Details</button>
            </Link>
        </div>
    </>
}

export default ProjectCard;