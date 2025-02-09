"use client";
import { FaArrowUp } from "react-icons/fa";
import "../../styles/projects.scss";
import { useRouter } from "next/navigation";

const ViewProjectsCard = () => {
    const router = useRouter();

    return <>
        <div className="projects-view-card" onClick={() => router.push('/projects')}>
            <div className="icon">
                <FaArrowUp size={30} className="rotate-45" />
            </div>
            <h2>View Projects</h2>
        </div>
    </>
}

export default ViewProjectsCard;