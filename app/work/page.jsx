"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "project 1",
    description:
      "Developed an advanced blogging platform using the MERN stack, featuring comprehensive blog management, robust admin capabilities, and user authentication with Google OAuth.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Express.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://advanced-blog-dwil.onrender.com",
    github: "https://github.com/gopinathvarad/mern-blog",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "MasteryGrids TeacherDashboard - A tool to analyse students academic performance, This project involves designing and evaluating visualisations to support instructor and student planning of learning activities.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Vue.js" },
      { name: "Three.js" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/gopinathvarad/Teacher-Dashboard-Project",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description: "Group Call Application with WebRTC Mesh Architecture",
    stack: [
      { name: "React.js" },
      { name: "WebRTC" },
      { name: "Simple-peer" },
      { name: "SocketIO" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github:
      "https://github.com/gopinathvarad/Group-Video-Chat-Application-using-WebRTC",
  },
  {
    num: "04",
    category: "Augmented Reality App",
    title: "project 4",
    description:
      "Augmented Reality App developed for medical students to see the Anatomy diagrams with the comfort of sitting in home",
    stack: [
      { name: "Unity" },
      { name: "C#" },
      { name: "Vuforia" },
      { name: "Blender" },
    ],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/gopinathvarad/AR-App-for-Medical-Students",
  },
  {
    num: "05",
    category: "Predictive Modeling",
    title: "project 5",
    description:
      "Predictive Modeling for Hospital Readmission Using Clinical Data: A Data-Driven Approach to Improve Healthcare Outcomes",
    stack: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Modeling" },
    ],
    image: "/assets/work/thumb5.png",
    live: "",
    github:
      "https://github.com/gopinathvarad/To-create-a-classification-model-to-predict-the-patient-readmit-rate/tree/main",
  },
  {
    num: "06",
    category: "Desktop Application",
    title: "project 6",
    description:
      "Instructor Dashboard Project to Enter and Visualise Data of the students progress ",
    stack: [{ name: "C#" }, { name: "Visual Studio" }, { name: "MySQL" }],
    image: "/assets/work/thumb6.png",
    live: "",
    github:
      "https://github.com/gopinathvarad/Instructor-Management-to-Insert-student-record-and-Visualise-it.",
  },
  {
    num: "07",
    category: "Mobile Application",
    title: "project 7",
    description:
      "Election App created using flutter and Dart programming language",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Firebase" },
      { name: "SQL" },
    ],
    image: "/assets/work/thumb7.png",
    live: "",
    github: "https://github.com/gopinathvarad/Election-Flutter-App",
  },
  {
    num: "08",
    category: "Frontend",
    title: "project 8",
    description: "My personal portfolio project",
    stack: [
      { name: "React.js" },
      { name: "Framer-motion" },
      { name: "React-icons" },
    ],
    image: "/assets/work/thumb8.png",
    live: "https://portfolio-website-opal-pi.vercel.app",
    github: "https://github.com/gopinathvarad/Portfolio-website",
  },
  {
    num: "09",
    category: "fullstack",
    title: "project 7",
    description: "Complete Working modern Todo list Application",
    stack: [
      { name: "React" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Node.js" },
    ],
    image: "/assets/work/thumb9.png",
    live: "",
    github: "https://github.com/gopinathvarad/Todolist",
  },
  {
    num: "10",
    category: "Augmented Reality App",
    title: "project 10",
    description:
      "Developed an Augmented Reality App for Educational Purposes of the kids below the age of 12",
    stack: [
      { name: "Unity" },
      { name: "C#" },
      { name: "Vuforia" },
      { name: "Blender" },
    ],
    image: "/assets/work/thumb10.png",
    live: "",
    github: "https://github.com/gopinathvarad/Election-Flutter-App",
  },
  {
    num: "11",
    category: "fullstack",
    title: "project 11",
    description: "My Personal Freelancing application website",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Framer-motion" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb11.png",
    live: "",
    github: "https://github.com/gopinathvarad/GVTech-",
  },
  {
    num: "12",
    category: "Data Analysis",
    title: "project 12",
    description: "FIFA Worldcup Data Analysis",
    stack: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Numpy" },
      { name: "Jupyter Notebook" },
      { name: "Matplotlib" },
    ],
    image: "/assets/work/thumb12.png",
    live: "",
    github: "https://github.com/gopinathvarad/FIFA-World-Cup-Data-Analysis",
  },
  {
    num: "13",
    category: "Custom Software",
    title: "Project 13",
    description:
      "Insights about the airline delays. Analyzed using groovy programming language and MongoDB.",
    stack: [{ name: "Groovy" }, { name: "MongoDB" }, { name: "Data Analysis" }],
    image: "/assets/work/thumb13.png",
    live: "",
    github:
      "https://github.com/gopinathvarad/Insights-about-the-airline-delays.-/tree/main",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
