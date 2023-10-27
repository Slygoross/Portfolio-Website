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
      title: "UI/UX Enthusiast",
      icon: web,
    },
    {
      title: "Front-End Developer",
      icon: mobile,
    },
    {
      title: "Aspiring Backend Developer",
      icon: backend,
    },
    {
      title: "Flutter Developer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
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
      title: "Finance Secretary",
      company_name: "Indian Society For Technical Education, Thapar Chapter",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2023 - Present",
      points: [
        "Oversaw the finances of Society Event - Xpedition.",
        "Collaborated with cross-functional teams including designers, marketers, and other developers to create high-quality products for the society.",
        "Participated in code reviews and in providing constructive feedback to other students.",
      ],
    },
    {
      title: "Core Member",
      company_name: "Indian Society For Technical Education, Thapar Chapter",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "February 2022 - April 2023",
      points: [
        "Oversaw and lead Hackonix - a hackathon which invited participants from various colleges including VIT Vellore, NIT Kurukshetra, BITS Goa.",
        "Oversaw and lead Quest of the Curious - A Treasure hunt which entrailed 200+ students from TIET.",
        "Handled Logistics and Finances for Colloquium 9.0 which witnessed the participation of 500+ students.",
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
      name: "Hostel Cleaning Management System",
      description:
        "Web-based platform that facilitates students with room cleaning bookings along with complaint filing for repair work, providing a convenient and efficient solution.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "EJS",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Slygoross/Hostel-Cleaning-Management-System",
    },
    {
      name: "Shopping Cart Backend",
      description:
        "C++ Based Shopping Cart Backend to manage inventory and calculate orders.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Slygoross/Shopping-Cart-Backend",
    },
    {
      name: "Password Strength Checker",
      description:
        "A Basic Web app that shows the strength of the password entered.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Slygoross/Password-Strength-Checker",
    },
    {
      name: "QR Code Generator",
      description:
        "A Basic Web App that Generates a QR code for any Web URL or a message.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Slygoross/QR-Code-Generator",
    },
    {
      name: "Meme Generator",
      description:
        "A Web App that generates random memes on the click of a button.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "meme-api",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Slygoross/Meme-Generator",
    },
    {
      name: "Digital Clock",
      description:
        "A Digital Clock Webpage.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Slygoross/Digital-Clock",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };