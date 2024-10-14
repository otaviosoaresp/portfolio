import {
    mobileg,
    webg,
    fullstack,
    backendg,
    softfocusbr_logo,
    habil_software_logo,
    agende_tecnologias_logo,
  } from "../assets";

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

export { services, experiences };
