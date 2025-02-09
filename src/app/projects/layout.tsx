import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'devankar all companies projects',
}

const ProjectsLayout = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return <>
        {children}
    </>
}

export default ProjectsLayout;