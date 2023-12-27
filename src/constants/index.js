import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fmIcon,
  quotientIcon,
  wordpressIcon,
  laptopIcon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Frontend Experience",
    icon: mobile,
  },
  {
    title: "Backend Experience",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Quotient Technologies Inc",
    icon: quotientIcon, 
    iconBg: "#383E56",
    date: "December 2019 - Present",
    points: [
      "Played a pivotal role in developing a new dashboard for company administrators using React.js, ensuring UI components closely matched designer mockups.",
      "Transformed product team ideas into functional features for the advertising management platform, utilizing Angular 2+ and TypeScript.",
      "Maintained and optimized the company's social platform developed with Ember.js, addressing existing bugs and implementing new features.",
      "Developed a project automating data entry from Excel sheets into the company's platform using Kotlin.",
      "Maintained and optimized legacy platforms with Ext.js (frontend) and PHP and Zend (backend), enhancing features and fixing bugs.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "FM Home Loans",
    icon: fmIcon, 
    iconBg: "#E6DEDD",
    date: "January 2018 – November 2019",
    points: [
      "Contributed to engineering the frontend of the company's mortgage application with React, ensuring optimal layout and responsiveness.",
      "Developed an Employee Onboarding Application, utilizing Semantic UI and jQuery for a streamlined, multi-step form.",
      "Developed custom forms and plugins for the client software using the client's .NET SDK and programming with C# in Visual Studio.",
      "Maintained, debugged, and enhanced the company's Intranet site, an existing PHP-based codebase with a MySQL database.",
      "Developed a dashboard for IT management to track the company's inventory and monitor usage by employees.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Employed",
    icon: wordpressIcon, 
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Providing freelance web development services with a focus on WordPress customization and development.",
      "Creating tailored solutions for clients, ensuring seamless integration and user-friendly experiences.",
      "Expertise in building and customizing WordPress themes and plugins to meet specific client needs.",
      "Collaborating with clients to understand their business requirements and delivering visually appealing and functional websites.",
    ],
  },
  {
    title: "Personal Project",
    company_name: "Personal",
    icon: laptopIcon,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Created a virtual phone number using Twilio to analyze and respond to incoming WhatsApp messages.",
      "Utilized Microsoft Logic App for message analysis, Wolfram|Alpha Short Answers API for factual question responses, Microsoft Vision API for text detection in images, and IBM Watson API for transcribing voicenotes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
