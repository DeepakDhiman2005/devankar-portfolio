import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'It\'s about us page.',
}

interface AboutLayoutInterface {
    children: React.ReactNode,
}

const AboutLayout = ({ children }: AboutLayoutInterface) => {
    return <>
        {children}
    </>
}

export default AboutLayout;