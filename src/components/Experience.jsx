import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
// import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import typescript1 from  "../assets/typescript1.png"
import mongodb from  "../assets/mongodb.png"
import node from  "../assets/node.png"
// import github from  "../assets/github.png"
import chakra2 from  "../assets/chakra2.png"
import AOS from "aos";
import "aos/dist/aos.css";



const Experience = () => {



  AOS.init({
    offset: 100,
    duration: 1000,
  });

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      animation:"fade-right"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500", 
      animation:"zoom-in"
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      animation:"fade-left"
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      animation:"fade-right"
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      animation:"zoom-in"

    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
      animation:"fade-left"

    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
      animation:"fade-right"

    },
    {
      id: 8,
      src: node,
      title: "Node",
      style: "shadow-green-400",
      animation:"zoom-in"

    },
    {
      id: 9,
      src: typescript1,
      title: "Typescript",
      style: "shadow-blue-400",
      animation:"fade-left"

    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-white px-4",
      animation:"fade-right"

    },
    {
      id: 11,
      src: "https://www.chartjs.org/img/chartjs-logo.svg",
      title: "chart js",
      style: "shadow-pink-400",
      animation:"zoom-in"

    },
    {
      id: 12,
      src:chakra2 ,
      title: "Chakra UI",
      style: "shadow-green-400",
      animation:"fade-left"
    },
    
    
  ];

  return ( 
    <div
      name="technical_skills"
      id="skills"
      className="bg-gradient-to-b from-black to-gray-800  w-full h-887px "
      // className="bg-white  w-full h-887px "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline " data-aos="zoom-in" >
          Technical skills

          </p>
          <p className="py-6" data-aos="zoom-in" >These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style , animation}) => (
            <div
            data-aos={animation}
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
