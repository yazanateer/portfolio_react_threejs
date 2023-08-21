import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Js",
      icon: reactjs,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Cybersecurity",
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
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Exam managment system",
      company_name: "afeka",
      icon: "",
      iconBg: "#383E56",
      date: "",
      points: [
        "Developed using java, javaFX, MVC architecture ",
        "Implementing responsive design using Object-Oriented programming to make it perfect",
        "This project can be used by schools, colleges or other institutes to create exams from their question collection",
        ,
      ],
    },
    {
      title: "Supermarket managment system",
      company_name: "afeka",
      icon: "",
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developed using C language",
        "providing efficient solutions for inventory control and customer managment",
        
        ,
      ],
    },
    {
      title: "Personal portfolio website",
      company_name: "shark development",
      icon: "./src/assets/sharkLogo.png",
      iconBg: "#383E56",
      date: "",
      points: [
        "responsive portfolio website to showcasing projects and skills",
        "developed using HTML, CSS, JavaScript, tailwind, react.js and three.js",

      ],
    },
    {
      title: "python development",
      company_name: " ",
      icon: "" ,
      iconBg: "#",
      date: " ",
      points: [
      "created a password manager ",
      "socket programming "  
      ],
    },
  ];
  
  
 
  export { services, technologies, experiences };