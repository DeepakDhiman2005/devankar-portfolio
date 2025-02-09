"use client";
import "../../styles/projects.scss";

const ProjectCardSkeleton = () => {
    return <>
        <div className="project-card-skeleton">
            <div className="image-loader"></div>
            <p className="line"></p>
            <div className="technology-section">
                {
                    Array(5).fill(0).map((_, index) => (
                        <div key={index} className="item">
                            <p className="line"></p>
                        </div>
                    ))
                }
            </div>
            <p className="line"></p>
            <p className="line"></p>
            <div className="w-auto h-auto">
                <button>See Details</button>
            </div>
        </div>
    </>
}

export default ProjectCardSkeleton;