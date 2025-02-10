import { Metadata } from "next";
import "../../../styles/projects.scss";
import ProjectSlider from "@/components/project-comp/ProjectSlider";
import HtmlContentRender from "../../../components/contents/HtmlContentRender";

interface ProjectInterface {
    title?: string;
    homeImage?: string;
    images?: Array<string>;
    technology?: Array<string>;
    completeTechnology?: Array<string>;
    content?: string;
    htmlContent?: string,
    id?: string;
}

interface ApiResponse {
    data: ProjectInterface | null;
}

type tParams = Promise<{ project: string }>;

export async function generateMetadata({ params }: { params: tParams }): Promise<Metadata> {
    const { project } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    // console.log(baseUrl);
    const response = await fetch(`${baseUrl}/api/project?id=${project}`);
    const { data } = (await response.json()) as ApiResponse;

    return {
        title: data?.title,
        description: data?.content,
        openGraph: {
            title: data?.title,
            description: data?.content,
            images: data?.images || [],
        },
    };
}

const Project = async ({ params }: { params: tParams }) => {
    const { project } = await params; // ✅ Direct destructuring
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/project?id=${project}`);
    const { data } = (await response.json()) as ApiResponse;

    return (
        <main className="w-full flex flex-col lg:flex-row gap-y-4 justify-start items-start gap-x-12 py-10 px-6 md:px-12">
            <div className="w-full lg:w-1/2">
                <ProjectSlider images={data?.images as string[]} />
            </div>
            <div className="w-full lg:w-1/2 project-page">
                <h1 className="main-heading">{data?.title}</h1>
                <div className="technology-section my-2">
                    {data?.completeTechnology?.map((item, index) => (
                        <div key={index} className="item">{item}</div>
                    ))}
                </div>
                <HtmlContentRender content={data?.htmlContent} />
                {/* <p>{data?.content}</p> */}
            </div>
        </main>
    );
};

export default Project;
