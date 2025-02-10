// database
interface ProjectInterface {
    title?: string,
    homeImage?: string,
    images?: Array<string>,
    technology?: Array<string>,
    completeTechnology?: Array<string>,
    content?: string,
    htmlContent?: string,
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
            content: 'Koncept Law Software is a robust bulk communication platform designed to send over 1 lakh+ SMS, emails, and WhatsApp messages daily. This software stands as one of the most extensive and powerful tools I have worked on, supporting high-volume campaigns with advanced management features.',
            htmlContent: ` <h1><b>Koncept Law Software Experience Note</b></h1>

    <h2><b>Project Overview:</b></h2>
    <p>Koncept Law Software is a robust bulk communication platform designed to send over 1 lakh+ SMS, emails, and WhatsApp messages daily. This software stands as one of the most extensive and powerful tools I have worked on, supporting high-volume campaigns with advanced management features.</p>

    <h2><b>Key Contributions:</b></h2>
    <ul>
        <li><strong>WhatsApp, SMS, and Email Send Pages:</strong> Developed intuitive user interfaces for sending bulk messages across different channels, ensuring seamless user experience and high performance.</li>
        <li><strong>Campaigns Management Page:</strong> Designed and implemented a comprehensive campaigns page to manage multiple accounts, enabling users to create, monitor, and analyze campaigns effectively.</li>
        <li><strong>Document Display Page:</strong> Integrated functionality to display documents, specifically focusing on rendering MS DOCX files directly within the application.</li>
    </ul>

    <h2>Challenging Tasks:</h2>
    <ul>
        <li><strong>MS DOCX File Rendering:</strong> Overcame complexities related to parsing and rendering MS DOCX files within the web application, ensuring accurate display and compatibility.</li>
        <li><strong>User Filtering for Bulk SMS Sending:</strong> Implemented dynamic user filtering mechanisms to target specific audiences for bulk SMS campaigns, enhancing message relevance and delivery efficiency.</li>
        <li><strong>Campaign Infinite Scroller:</strong> Developed an infinite scrolling feature to efficiently manage and render over 100+ active campaigns, optimizing performance and user interaction.</li>
    </ul>

    <h2><b>Interactive Points:</b></h2>
    <ul>
        <li>Discuss the architectural decisions made to handle high-volume message sending and campaign management.</li>
        <li>Explain the technical approach for rendering MS DOCX files within the application.</li>
        <li>Highlight the strategies used to implement infinite scrolling for large datasets.</li>
        <li>Share insights on optimizing performance for bulk communication tools.</li>
    </ul>`,
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
            content: 'QR Smart Application is a high-level QR code generation platform featuring fully optimized QR code functionalities. This application includes a comprehensive dashboard that allows users to manage multiple QR codes efficiently.',
            htmlContent: ` <h1><b>QR Smart Application Experience Note</b></h1>

    <h2><b>Project Overview:</b></h2>
    <p>QR Smart Application is a high-level QR code generation platform featuring fully optimized QR code functionalities. This application includes a comprehensive dashboard that allows users to manage multiple QR codes efficiently. The entire CRM and QR code generation functionalities were designed and implemented by me.</p>

    <h2><b>Key Contributions:</b></h2>
    <ul>
        <li><strong>Dashboard Design:</strong> Created a user-friendly dashboard for managing multiple QR codes, enabling seamless navigation and efficient QR code generation.</li>
        <li><strong>QR Code Generation:</strong> Implemented the QR code generation functionality using the <strong>qr-code-styling</strong> library, ensuring customizable and high-quality QR codes.</li>
        <li><strong>CRM Integration:</strong> Developed and integrated CRM features within the application to manage user data and QR code analytics effectively.</li>
    </ul>

    <h2>Challenging Tasks:</h2>
    <ul>
        <li><strong>Custom QR Code Generator Page:</strong> Built a fully customized QR code generator page, allowing users to insert images in the center of QR codes, modify corner shapes, and adjust QR code background and colors, including corner colors.</li>
    </ul>

    <h2><b>Interactive Points:</b></h2>
    <ul>
        <li>Discuss the technical approach for integrating the <strong>qr-code-styling</strong> library and customizing QR code features.</li>
        <li>Explain the challenges faced while implementing dynamic QR code styling, including image insertion and color adjustments.</li>
        <li>Highlight the design strategies used to create an intuitive dashboard for managing multiple QR codes.</li>
        <li>Share insights on CRM integration and handling user data efficiently within the application.</li>
    </ul>`,
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
            content: "Legal Papers India is a comprehensive CRM designed to manage over 50,000+ leads efficiently. I was responsible for creating a completely new, interactive, and user-friendly UI design, significantly enhancing the application's performance and usability.",
            htmlContent: ` <h1><b>Legal Papers India Experience Note</b></h1>

    <h2><b>Project Overview:</b></h2>
    <p>Legal Papers India is a comprehensive CRM designed to manage over 50,000+ leads efficiently. I was responsible for creating a completely new, interactive, and user-friendly UI design, significantly enhancing the application's performance and usability.</p>

    <h2><b>Key Contributions:</b></h2>
    <ul>
        <li><strong>Interactive UI Design:</strong> Developed a modern, responsive UI that enhances user experience and engagement.</li>
        <li><strong>Performance Optimization:</strong> Improved the application's performance, ensuring faster load times and smoother interactions.</li>
        <li><strong>Data Visualization:</strong> Integrated <strong>ApexCharts</strong> to provide interactive and insightful data visualizations.</li>
        <li><strong>Responsive Sidebar & Theme Changer:</strong> Implemented a dynamic sidebar and theme changer functionality for better navigation and customization.</li>
        <li><strong>Notification Functionality:</strong> Added real-time notification features to keep users informed about important updates.</li>
    </ul>

    <h2>Challenging Tasks:</h2>
    <ul>
        <li><strong>URL to Pagination for Data Load Management:</strong> Implemented efficient data loading using URL-based pagination with <strong>data-table-component-react</strong>, ensuring smooth handling of large datasets.</li>
    </ul>

    <h2><b>Interactive Points:</b></h2>
    <ul>
        <li>Discuss the design principles and strategies used to create an interactive and user-friendly UI.</li>
        <li>Explain the performance optimization techniques applied to manage 50,000+ leads effectively.</li>
        <li>Highlight the integration process of <strong>ApexCharts</strong> for data visualization.</li>
        <li>Share insights on implementing responsive UI components like the sidebar and theme changer.</li>
        <li>Describe the approach for managing large datasets with URL-based pagination and <strong>data-table-component-react</strong>.</li>
    </ul>`,
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
            content: 'The SGPS Government Website with CRM is a comprehensive job application portal developed entirely by me. This platform allows users to apply for multiple jobs seamlessly.',
            htmlContent: `<h1><a>SGPS Government Website with CRM Experience Note</b></h1>
  
      <h2><b>Project Overview:</b></h2>
      <p>The SGPS Government Website with CRM is a comprehensive job application portal developed entirely by me. This platform allows users to apply for multiple jobs seamlessly. The CRM supports two profiles: <strong>SuperAdmin</strong> and <strong>Jobseeker</strong>, each with distinct functionalities and access levels.</p>
  
      <h2><b>Key Contributions:</b></h2>
      <ul>
          <li><strong>Complete Development:</strong> Designed and developed both the website and CRM, ensuring a robust and user-friendly job application portal.</li>
          <li><strong>Job Application Portal:</strong> Enabled users to apply for multiple jobs through an intuitive interface, improving accessibility and efficiency.</li>
          <li><strong>Role-Based Access:</strong> Implemented role-based access control for SuperAdmin and Jobseeker profiles, ensuring secure and tailored user experiences.</li>
      </ul>
  
      <h2><b>Challenging Tasks:</b></h2>
      <ul>
          <li><strong>Complex Job Application Form:</strong> Developed a comprehensive job application form for Jobseekers using <strong>react-hook-form</strong> and <strong>Yup</strong> libraries, handling extensive validation and dynamic fields efficiently.</li>
          <li><strong>SuperAdmin Direct Access:</strong> Achieved complex functionality where SuperAdmin can directly access Jobseeker accounts without requiring login credentials. This was managed securely through token-based API authentication, ensuring seamless and secure administrative control.</li>
      </ul>
  
      <h2><b>Interactive Points:</b></h2>
      <ul>
          <li>Discuss the end-to-end development process of the SGPS Government Website and CRM, highlighting key architectural decisions.</li>
          <li>Explain the challenges and solutions in building the complex Jobseeker job application form with react-hook-form and Yup.</li>
          <li>Detail the implementation of role-based access control and the secure management of SuperAdmin functionalities.</li>
          <li>Describe the secure token-based API mechanism that allows SuperAdmin direct access to Jobseeker accounts without traditional authentication.</li>
      </ul>`,
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
            content: 'Omega CRM is a comprehensive lead management system designed and developed entirely by me. This CRM features a unique and interactive design, providing a user-friendly interface to manage leads efficiently.',
            htmlContent: `<h1><b>Omega CRM Experience Note</b></h1>

    <h2><b>Project Overview:</b></h2>
    <p>Omega CRM is a comprehensive lead management system designed and developed entirely by me. This CRM features a unique and interactive design, providing a user-friendly interface to manage leads efficiently. The dashboard includes dynamic and interactive graphs for data visualization.</p>

    <h2><b>Key Contributions:</b></h2>
    <ul>
        <li><strong>Complete Design:</strong> Crafted the entire design of Omega CRM, focusing on a unique, modern, and interactive user interface.</li>
        <li><strong>Interactive Graphs:</strong> Integrated interactive graphs using the <strong>ApexCharts</strong> library to visualize lead data effectively.</li>
        <li><strong>Advanced Styling:</strong> Utilized <strong>@material-tailwind/react</strong>, <strong>Ant Design (antd)</strong>, and <strong>TailwindCSS</strong> for styling, ensuring a clean, responsive, and consistent look across the application.</li>
    </ul>

    <h2><b>Technologies Used:</b></h2>
    <ul>
        <li><strong>ApexCharts:</strong> For creating dynamic and interactive data visualizations.</li>
        <li><strong>@material-tailwind/react:</strong> To design modern UI components with a Material Design approach.</li>
        <li><strong>Ant Design (antd):</strong> For additional UI components to enhance user interactions.</li>
        <li><strong>TailwindCSS:</strong> For responsive and utility-first CSS styling.</li>
    </ul>`,
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
            content: 'MGR CRM is an advanced customer relationship management system designed and developed entirely by me. This CRM offers a robust and user-centric interface to streamline customer data management and enhance operational efficiency.',
            htmlContent: `<h1><b>MGR CRM Experience Note</b></h1>
            
            <h2><b>Project Overview:</b></h2>
<p>MGR CRM is an advanced customer relationship management system designed and developed entirely by me. This CRM offers a robust and user-centric interface to streamline customer data management and enhance operational efficiency. The dashboard features real-time data tracking with interactive visual elements for seamless data analysis.</p>

<h2><b>Key Contributions:</b></h2>
<ul>
    <li><strong>End-to-End Development:</strong> Led the design and development of MGR CRM, ensuring a sleek, intuitive, and user-friendly interface.</li>
    <li><strong>Real-Time Data Visualization:</strong> Implemented dynamic and real-time data visualization using <strong>ApexCharts</strong> to provide meaningful insights into customer data.</li>
    <li><strong>Responsive Styling:</strong> Applied <strong>@material-tailwind/react</strong>, <strong>Ant Design (antd)</strong>, and <strong>TailwindCSS</strong> to achieve a cohesive, responsive, and aesthetically pleasing UI.</li>
</ul>

<h2><b>Technologies Used:</b></h2>
<ul>
    <li><strong>ApexCharts:</strong> For real-time, dynamic data visualization and analytical dashboards.</li>
    <li><strong>@material-tailwind/react:</strong> To develop modern UI components following Material Design principles.</li>
    <li><strong>Ant Design (antd):</strong> For enhancing user experience with versatile UI components.</li>
    <li><strong>TailwindCSS:</strong> For implementing responsive, utility-first CSS styling effectively.</li>
</ul>

<h2><b>Interactive Points:</b></h2>
<ul>
    <li>Discuss the comprehensive design strategy used to create a modern and intuitive UI for MGR CRM.</li>
    <li>Explain the process of integrating <strong>ApexCharts</strong> for real-time data visualization and performance optimization.</li>
    <li>Highlight the styling methodologies using <strong>@material-tailwind/react</strong>, <strong>antd</strong>, and <strong>TailwindCSS</strong> to maintain UI consistency.</li>
    <li>Share best practices for optimizing CRM performance while handling large-scale customer data and interactive dashboards.</li>
</ul>`,
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
            content: 'Ayurveda CRM is a specialized customer relationship management system designed to manage leads and tasks efficiently within the Ayurvedic healthcare domain.',
            htmlContent: `<h1><b>Ayurveda CRM Experience Note</b></h1>
            
            <h2><b>Project Overview:</b></h2>
<p>Ayurveda CRM is a specialized customer relationship management system designed to manage leads and tasks efficiently within the Ayurvedic healthcare domain. I worked on this CRM during my internship, contributing significantly to its development and optimization.</p>

<h2><b>Key Contributions:</b></h2>
<ul>
    <li><strong>Lead Management:</strong> Enhanced the functionality of the lead and edit lead pages to improve user experience and data handling.</li>
    <li><strong>API Integration:</strong> Integrated tasks API using <strong>Axios</strong> to streamline task management and improve system efficiency.</li>
    <li><strong>Rapid Development:</strong> Successfully completed the entire CRM project within a week, collaborating closely with backend developer <strong>Tarun Kumar</strong> to ensure smooth backend integration and performance.</li>
</ul>

<h2><b>Technologies Used:</b></h2>
<ul>
    <li><strong>React.js:</strong> For building dynamic and interactive user interfaces efficiently.</li>
    <li><strong>TailwindCSS:</strong> For responsive, utility-first CSS styling to create a clean and modern design.</li>
    <li><strong>Axios:</strong> For efficient API integration and seamless data communication between frontend and backend.</li>
    <li><strong>React Hook Form:</strong> To manage form state and validation seamlessly within the CRM.</li>
    <li><strong>ApexCharts:</strong> For creating dynamic and interactive data visualizations to analyze lead performance.</li>
</ul>`,
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
            content: 'Renefo CRM is a hospital customer relationship management system designed to manage user information and hospital-related data efficiently.',
            htmlContent: `<h1><b>Renefo CRM Experience Note</b></h1>

            <h2><b>Project Overview:</b></h2>
<p>Renefo CRM is a hospital customer relationship management system designed to manage user information and hospital-related data efficiently. I worked on this CRM during my internship, contributing to critical features that improved user management and document generation.</p>

<h2><b>Key Contributions:</b></h2>
<ul>
    <li><strong>User Management:</strong> Handled the development of the users page, ensuring smooth data presentation and management functionalities.</li>
    <li><strong>Edit User Form:</strong> Implemented and optimized the edit user form using <strong>react-hook-form</strong> for seamless form validation and state management.</li>
    <li><strong>PDF Generation:</strong> Created two PDF documents within the CRM using the <strong>@react-pdf/render</strong> library to facilitate document management and reporting.</li>
</ul>

<h2><b>Technologies Used:</b></h2>
<ul>
    <li><strong>React.js:</strong> For building dynamic and interactive user interfaces efficiently.</li>
    <li><strong>TailwindCSS:</strong> For responsive, utility-first CSS styling to create a clean and modern design.</li>
    <li><strong>React Hook Form:</strong> To manage form state and validation seamlessly within the CRM.</li>
    <li><strong>@react-pdf/render:</strong> For generating PDF documents dynamically within the application.</li>
    <li><strong>Axios:</strong> For efficient API integration and seamless data communication between frontend and backend.</li>
</ul>
            `,
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
            content: 'The OCPL Website was my first project during my internship, where I contributed significantly to both the frontend and backend development. This project allowed me to showcase my skills in web development and create a dynamic, user-friendly website for OCPL.',
            htmlContent: `<h1><b>OCPL Website Experience Note</b></h1>

            <h2><b>Project Overview:</b></h2>
<p>The OCPL Website was my first project during my internship, where I contributed significantly to both the frontend and backend development. This project allowed me to showcase my skills in web development and create a dynamic, user-friendly website for OCPL.</p>

<h2><b>Key Contributions:</b></h2>
<ul>
    <li><strong>New Page Development:</strong> Added new pages, including a <strong>Blog Page</strong> and a <strong>Products Section</strong> featuring products like CRM and ERP.</li>
    <li><strong>Animation Implementation:</strong> Integrated smooth animations using the <strong>motion.div</strong> library to enhance user engagement and interface aesthetics.</li>
    <li><strong>Blog Management System:</strong> Designed and developed a complete blog management website for OCPL, allowing seamless creation, management, and display of blog posts.</li>
    <li><strong>End-to-End Development:</strong> Successfully handled both frontend and backend development of the OCPL website blog, ensuring a cohesive and efficient design.</li>
</ul>

<h2><b>Technologies Used:</b></h2>
<ul>
    <li><strong>React.js:</strong> For building dynamic and interactive user interfaces efficiently.</li>
    <li><strong>TailwindCSS:</strong> For responsive, utility-first CSS styling to create a modern and clean design.</li>
    <li><strong>motion.div (Framer Motion):</strong> For adding smooth animations and enhancing user interaction.</li>
    <li><strong>Node.js & Express:</strong> For backend development, ensuring efficient API handling and data management.</li>
    <li><strong>MongoDB:</strong> For managing the database of blog content and product information.</li>
</ul>

<h2><b>Interactive Points:</b></h2>
<ul>
    <li>Discuss the process of adding new pages like the blog and products section, focusing on CRM and ERP.</li>
    <li>Explain the implementation of animations using the <strong>motion.div</strong> library to enhance user experience.</li>
    <li>Highlight the development of the blog management system, covering both frontend and backend aspects.</li>
    <li>Share insights on managing the entire website design and development independently, showcasing problem-solving and technical skills.</li>
</ul>`,
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
            content: 'Krishna Classes Tuition Website is a freelance project designed specifically for students from classes 6 to 12.',
            htmlContent: `<h1><b>Krishna Classes tuition website Experience Note</b></h1>
            <a href="https://krishnaclasses.netlify.app/" target="_blank">Krishna classes online</a>

            <h2><b>Project Overview:</b></h2>
<p>Krishna Classes Tuition Website is a freelance project designed specifically for students from classes 6 to 12. This website provides an intuitive and engaging platform for tuition services, making it easier for students and teachers to connect. It marks my first freelancing project, where I applied my skills in React.js to develop a robust educational platform.</p>

<h2><b>Key Contributions:</b></h2>
<ul>
    <li><strong>Complete Website Development:</strong> Designed and developed the entire website using <strong>React.js</strong>, ensuring a smooth and responsive user experience.</li>
    <li><strong>Student-Centric Design:</strong> Focused on creating an intuitive interface tailored to the needs of students from classes 6 to 12.</li>
    <li><strong>Freelancing Experience:</strong> Managed the project independently, handling client communication, requirement gathering, and implementation, which helped me gain valuable freelancing experience.</li>
</ul>

<h2><b>Technologies Used:</b></h2>
<ul>
    <li><strong>React.js:</strong> For building dynamic and interactive user interfaces.</li>
    <li><strong>TailwindCSS:</strong> For responsive and utility-first CSS styling, ensuring a clean and modern look.</li>
    <li><strong>JavaScript:</strong> To enhance the interactivity and functionality of the website.</li>
    <li><strong>HTML & CSS:</strong> For structuring and styling the website layout.</li>
</ul>

<h2><b>Interactive Points:</b></h2>
<ul>
    <li>Discuss the process of developing the tuition website from scratch using <strong>React.js</strong>.</li>
    <li>Explain the design strategies used to create a student-friendly interface for classes 6 to 12.</li>
    <li>Highlight the challenges faced and lessons learned during my first freelancing project.</li>
    <li>Share insights on managing client expectations, gathering requirements, and delivering the project successfully.</li>
</ul>`,
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
            content: "Programmer D is my personal YouTube channel's website, designed to provide educational content and resources. The website offers courses on HTML, CSS, and JavaScript, along with blogging and product pages.",
            htmlContent: `<h1><b>Programmer D Experience Note</b></h1>
            <a href="https://programmerd.in/" target="_blank">Programmer D online</a>

            <h2><b>Project Overview:</b></h2>
<p>Programmer D is my personal YouTube channel's website, designed to provide educational content and resources. The website offers courses on HTML, CSS, and JavaScript, along with blogging and product pages. It is developed using <strong>Next.js</strong> technology, ensuring a fully SEO-friendly site to reach a broader audience.</p>

<h2><b>Key Contributions:</b></h2>
<ul>
    <li><strong>Website Development:</strong> Designed and developed the entire website using <strong>Next.js</strong> for fast performance and SEO optimization.</li>
    <li><strong>Educational Courses:</strong> Created dedicated pages for <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> courses to help learners enhance their programming skills.</li>
    <li><strong>Blogging Section:</strong> Developed a blogging platform to share tutorials, coding tips, and technical articles.</li>
    <li><strong>Product Pages:</strong> Integrated product pages to showcase and manage different tech-related products.</li>
</ul>

<h2><b>Technologies Used:</b></h2>
<ul>
    <li><strong>Next.js:</strong> For server-side rendering, fast performance, and SEO-friendly architecture.</li>
    <li><strong>React.js:</strong> To build dynamic and interactive user interfaces.</li>
    <li><strong>TailwindCSS:</strong> For responsive and modern UI design with utility-first CSS.</li>
    <li><strong>JavaScript:</strong> To enhance interactivity and implement functional features.</li>
    <li><strong>HTML & CSS:</strong> For structuring and styling the core layout of the website.</li>
</ul>

<h2><b>Interactive Points:</b></h2>
<ul>
    <li>Discuss the development process using <strong>Next.js</strong> to create an SEO-friendly website.</li>
    <li>Explain the structure of educational course pages for <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</li>
    <li>Highlight the blogging platform's design and content management approach.</li>
    <li>Share insights on integrating product pages and managing dynamic content effectively.</li>
</ul>`,
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
            content: "Awesome Website is an interactive project designed to showcase stunning scrolling animations and dynamic effects.",
            htmlContent: `<h1><b>Awesome Website Experience Note</b></h1>
            <a href="https://awesome-gsap.netlify.app/" target="_blank">awesome website online</a>
            <h2><b>Project Overview:</b></h2>
<p>Awesome Website is an interactive project designed to showcase stunning scrolling animations and dynamic effects. Developed using <strong>Vite</strong> with <strong>React.js</strong>, <strong>TypeScript</strong>, and styled with <strong>TailwindCSS</strong> and <strong>SCSS</strong>, this website leverages the power of the <strong>GSAP</strong> library to deliver smooth, eye-catching animations. Check it out here: <a href="https://awesome-gsap.netlify.app/" target="_blank">Awesome Website</a>.</p>

<h2><b>Key Contributions:</b></h2>
<ul>
    <li><strong>Dynamic Animations:</strong> Integrated <strong>GSAP</strong> for creating seamless scrolling animations and interactive effects.</li>
    <li><strong>Modern Tech Stack:</strong> Utilized <strong>Vite</strong> for fast development, <strong>React.js</strong> for building UI components, and <strong>TypeScript</strong> for type safety and maintainability.</li>
    <li><strong>Advanced Styling:</strong> Combined the flexibility of <strong>TailwindCSS</strong> and <strong>SCSS</strong> for responsive, clean, and modern design aesthetics.</li>
</ul>

<h2><b>Technologies Used:</b></h2>
<ul>
    <li><strong>GSAP:</strong> For powerful and flexible animations, enhancing the scrolling experience.</li>
    <li><strong>Vite:</strong> For lightning-fast development and optimized build performance.</li>
    <li><strong>React.js:</strong> To create reusable, dynamic components for the user interface.</li>
    <li><strong>TypeScript:</strong> For adding type safety and improving code reliability.</li>
    <li><strong>TailwindCSS & SCSS:</strong> For responsive design and advanced styling capabilities.</li>
</ul>`,
        }
    ]
}

export default database;