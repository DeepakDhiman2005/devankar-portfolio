import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Skills',
    description: 'Devankar Skills: Programming Language: HTML, CSS, JavaScript, Typescript, Node.js, Python, C/C++. Libraries/frameworks: Tailwindcss, Scss, Next.js, React.js, Express.js. Tools/platform: Git, VS Code, Github, Canva, Chatgpt, Netlify, Firebase, Vercel. DataBase: MongoDB',
}

const SkillsLayout = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return <>
        {children}
    </>
}

export default SkillsLayout;