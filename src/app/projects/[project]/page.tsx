import { Metadata } from "next";
import "../../../styles/projects.scss";
import ProjectSlider from "@/components/project-comp/ProjectSlider";

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
    data: ProjectInterface | null
}

export async function generateMetadata({
    params
}: {
    params: { project: string }
}): Promise<Metadata> {
    const { project } = await Promise.resolve(params);
    const response = await fetch('http://localhost:3000/api/project?id=' + project);
    const { data } = (await response.json()) as ApiResponse;

    return {
        title: data?.title,
        description: data?.content,
        openGraph: {
            title: data?.title,
            description: data?.content,
            images: data?.images ? data?.images : [],
        },
    };
}

const Project = async ({ params }: {
    params: { project: string }
}) => {
    const { project } = await Promise.resolve(params);
    const response = await fetch('http://localhost:3000/api/project?id=' + project);
    const { data } = (await response.json()) as ApiResponse;

    // const technology: Array<string> = [
    //     "react.js",
    //     "tailwindcss",
    //     "react-countup",
    //     "@material-tailwindcss/react",
    // ]

    return <>
        <main className="w-full flex justify-start items-start gap-x-12 py-10 px-12">
            <div className="w-1/2">
                <ProjectSlider
                    images={data?.images}
                />
            </div>
            <div className="w-1/2 project-page">
                <h1 className="main-heading">{data && data?.['title']}</h1>
                <div className="technology-section my-2">
                    {
                        data ? data?.completeTechnology?.map((item, index) => (
                            <div key={index} className="item">{item}</div>
                        )) : null
                    }
                </div>
                <p>{data && data?.content}</p>
            </div>
        </main>
    </>
}

export default Project;