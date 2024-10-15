import { agende_tecnologias_logo, angular, backendg, css, django, docker, fastapi, firebase, flutter, fullstack, git, habil_software_logo, leetcode_ai, mobileg, nodejs, postgresql, python, quiz, reactjs, softfocusbr_logo, sorteador, tailwind, typescript, webg, spring } from "../assets";


const services = [
    {
        title: "Full Stack Developer",
      icon: fullstack,
    },
    {
      title: "Frontend Developer",
      icon: webg,
    },
    {
      title: "Backend Developer",
      icon: backendg,
    },
    {
      title: "Mobile Developer",
      icon: mobileg,
    },
  ];

const experiences = [
  {
    title: "experience.job1.title",
    company_name: "experience.job1.company",
    icon: softfocusbr_logo,
    iconBg: "#00A0DC",
    date: "experience.job1.date",
    points: [
      "experience.job1.point1",
      "experience.job1.point2",
      "experience.job1.point3",
      "experience.job1.point4",
    ],
  },
  {
    title: "experience.job2.title",
    company_name: "experience.job2.company",
    icon: habil_software_logo,
    iconBg: "#F48201",
    date: "experience.job2.date",
    points: [
      "experience.job2.point1",
      "experience.job2.point2",
    ],
  },
  {
    title: "experience.job3.title",
    company_name: "experience.job3.company",
    icon: agende_tecnologias_logo,
    iconBg: "#FFF",
    date: "experience.job3.date",
    points: [
      "experience.job3.point1",
      "experience.job3.point2",
    ],
  },
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "CSS",
    icon: css,
  },
  
];

const works = [
  {
    name: "works.project1.name",
    description: "works.project1.description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "red-text-gradient",
      },
      {
        name: "typescript",
        color: "yellow-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: sorteador,
    source_code_link: "https://github.com/otaviosoaresp/sorteador",
  },
  {
    name: "works.project2.name",
    description: "works.project2.description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "ollama",
        color: "purple-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/otaviosoaresp/alg-quiz-llm",
  },
  {
    name: "works.project3.name",
    description: "works.project3.description",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyqt5",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "yellow-text-gradient",
      },
      {
        name: "tesseract",
        color: "red-text-gradient",
      },
      {
        name: "ollama",
        color: "purple-text-gradient",
      },
    ],
    image: leetcode_ai,
    source_code_link: "https://github.com/otaviosoaresp/screen-reader-py",
  },

]
  

export { services, experiences, technologies, works };