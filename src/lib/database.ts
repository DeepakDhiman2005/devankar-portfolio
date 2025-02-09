// database
interface ProjectInterface {
    title?: string,
    homeImage?: string,
    images?: Array<string>,
    technology?: Array<string>,
    completeTechnology?: Array<string>,
    content?: string,
    id?: string,
}

interface DataBaseInterface {
    projects?: Array<ProjectInterface>,
}

const database: DataBaseInterface = {
    projects: [
        {
            id: "koncept-law",
            title: 'Koncept Law Software',
            homeImage: '/images/konceptlaw/1.png',
            images: [
                "/images/konceptlaw/1.png",
                "/images/konceptlaw/2.png",
                "/images/konceptlaw/3.png",
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "react-countup",
                "@material-tailwindcss/react",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "react-countup",
                "antd",
                "@material-tailwindcss/react",
                "react-icons"
            ],
            content: 'Konceptlaw Software. 1 lakh+ per day Bulk Email, SMS and Whatsapp Send Software.',
        },
        {
            id: "qr-smart",
            title: 'QR Smart Application',
            images: [
                "/images/qrsmart/1.png",
                "/images/qrsmart/2.png",
                "/images/qrsmart/3.png",
                "/images/qrsmart/4.png",
                "/images/qrsmart/5.png",
            ],
            homeImage: '/images/qrsmart/1.png',
            technology: [
                "react.js",
                "tailwindcss",
                "qr-code-styling",
                "html-to-image",
                "awesome-qr",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "qr-code-styling",
                "html-to-image",
                "awesome-qr",
                "@material-tailwindcss/react",
                "antd",
                "react-icons"
            ],
            content: 'QR Smart application generate awesome fully customized qr code with unqiue design.',
        },
        {
            id: 'legal-papers',
            title: 'Legal Papers India',
            homeImage: '/images/legalpapers/2.png',
            images: [
                '/images/legalpapers/1.png',
                '/images/legalpapers/2.png',
                '/images/legalpapers/3.png',
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                "@material-tailwindcss/react",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                'react-toastify',
                "antd",
                "@material-tailwindcss/react",
                "react-icons"
            ],
            content: 'Legal papers india CRM handle 1 lakh+ per day leads.'
        },
        {
            id: 'sgps',
            title: 'SGPS Govt. Website with CRM',
            homeImage: '/images/sgps/1.png',
            images: [
                '/images/sgps/1.png',
                '/images/sgps/2.png',
                '/images/sgps/3.png',
                '/images/sgps/4.png',
                '/images/sgps/5.png',
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "Slick Slider",
                "@material-tailwindcss/react",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "Slick Slider",
                "@material-tailwindcss/react",
                "antd",
                "react-toastify",
                "react-hook-form",
                "redux",
                "@redux/toolkit",
                "react-icons"
            ],
            content: 'SGPS a govt. job portal. this portal to apply for jobs.',
        },
        {
            id: "omega",
            title: 'Omega CRM',
            homeImage: '/images/omega/1.png',
            images: [
                '/images/omega/1.png',
                '/images/omega/2.png',
                '/images/omega/3.png',
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                "@material-tailwindcss/react",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                "redux",
                "@redux/toolkit",
                "react-hook-form",
                "react-toastify",
                "antd",
                "@material-tailwindcss/react",
                "react-icons"
            ],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis!'
        },
        {
            id: 'mgr',
            title: 'MGR CRM',
            homeImage: '/images/mgr/1.png',
            images: [
                "/images/mgr/1.png",
                "/images/mgr/2.png",
                "/images/mgr/3.png",
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                "@material-tailwindcss/react",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                "redux",
                "@redux/toolkit",
                "antd",
                "react-hook-form",
                "react-toastify",
                "@material-tailwindcss/react",
                "react-icons"
            ],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis!'
        },
        {
            id: 'ayurveda',
            title: 'Ayurveda CRM',
            homeImage: '/images/ayurveda/1.png',
            images: [
                "/images/ayurveda/1.png",
                "/images/ayurveda/2.jpg",
                "/images/ayurveda/3.jpg",
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                "@material-tailwindcss/react",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                "redux",
                "@redux/toolkit",
                "antd",
                "react-hook-form",
                "react-toastify",
                "@material-tailwindcss/react",
                "react-icons"
            ],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis!'
        },
        {
            id: 'renefo',
            title: 'Renefo CRM',
            homeImage: '/images/renefo/1.png',
            images: [
                '/images/renefo/1.png',
                '/images/renefo/2.png',
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                "@material-tailwindcss/react",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "Apexcharts",
                "redux",
                "@redux/toolkit",
                "react-toastify",
                "@react-pdf/render",
                "react-hook-form",
                "@material-tailwindcss/react",
                "react-icons"
            ],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis!'
        },
        {
            id: 'ocpl',
            title: 'OCPL Website',
            homeImage: '/images/ocpl/1.png',
            images: [
                '/images/ocpl/1.png',
                '/images/ocpl/2.png',
                '/images/ocpl/3.png',
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "antd",
                "@material-tailwindcss/react",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "antd",
                "@material-tailwindcss/react",
                "scss",
                "axios",
                "react-hook-form",
                "three.js",
                "motion.div",
                "react-icons",
                "node.js",
                "express.js",
                "mongodb",
            ],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis!'
        },
        {
            id: 'krishna-classes',
            title: 'Krishna Classes tuition website',
            homeImage: '/images/krishnaclasses.png',
            images: [
                "/images/krishnaclasses.png",
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "react-dom",
                "redux",
                "react-hook-form",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "react-dom",
                "redux",
                "react-hook-form",
            ],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis!'
        },
        {
            id: 'programmerd',
            title: "Programmer D",
            homeImage: '/images/programmerd.png',
            images: [
                '/images/programmerd.png',
            ],
            technology: [
                "next.js",
                "react.js",
                "tailwindcss",
                "redux",
                "More +"
            ],
            completeTechnology: [
                "next.js",
                "react.js",
                "tailwindcss",
                "redux",
                "axios",
                "react-icons",
                "node.js",
                "mongodb",
            ],
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis!'
        },
        {
            id: 'awesome',
            title: 'Awesome Website',
            homeImage: '/images/awesome.png',
            images: [
                '/images/awesome.png',
            ],
            technology: [
                "react.js",
                "tailwindcss",
                "gsap",
                "scss",
                "More +"
            ],
            completeTechnology: [
                "react.js",
                "tailwindcss",
                "gsap",
                "scss",
            ],
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis!"
        }
    ]
}

export default database;