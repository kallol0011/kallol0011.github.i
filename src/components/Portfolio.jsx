import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";

import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import typescript1 from  "../assets/typescript1.png"
import mongodb from  "../assets/mongodb.png"
import node from  "../assets/node.png"
import LimeRode from "../assets/Projects/LimeRode.png"
import redux from "../assets/redux.png"
import chakra2 from  "../assets/chakra2.png"
import metsverse from "../assets/Projects/metsverse.png"
import crypto from "../assets/Projects/crypto.png"
import nike from "../assets/Projects/nike.png"
import socialmedia from "../assets/Projects/socialmedia.png"

import cruise from "../assets/Projects/cruise.png"
import AnalogClock from "../clock/Clock";


import AOS from "aos";
import "aos/dist/aos.css";


const Portfolio = () => {


  AOS.init({
    offset: 100,
    duration: 1000,
  
  });

  const portfolios = [
    {
      id: 1,
      src: metsverse,
      tech1: nextjs ,
      tech2: tailwind ,
      // tech3: "https://cdn.dribbble.com/users/4878/screenshots/15802274/media/8f63cece88fccd2a614f791e5fbec240.png?compress=1&resize=400x300&vertical=top",
      
     tech:" Next js  tailwind css  Framer Motion",
      
      discription:<h2>
      METAVERSUS is a landing page of metaverse website with cool animations  

      </h2>,
      demo:"https://dashing-creponne-380cb6.netlify.app/",
      code:"https://github.com/kallol0011/Metaverse",
      animation:"fade-right"
    },
    {
      id: 2,
      src: crypto,
      tech1: reactImage ,
      tech2: chakra2 ,
      tech3: "https://www.chartjs.org/img/chartjs-logo.svg ",
      discription:<h2>Crypton is a ctypto charting app , which have a real time price chart of all 
        coins with real time trading informations

      </h2>,
       
      demo:"https://lighthearted-frangipane-14ada9.netlify.app/",
      code:"https://github.com/kallol0011/Crypto-app",
      animation:"zoom-in"
    },
    {
      id: 3,
      src: socialmedia,
      tech1: reactImage ,
      tech2: tailwind ,
      tech3: chakra2,
      discription:<h2>
      it's a basic clone of facebook . it's have features like Like , Dislike and comments etc

      </h2>,
      demo:"https://fastidious-nougat-dcf958.netlify.app/",
      code:"https://github.com/kallol0011/Facebook_UI",
      animation:"fade-left"
    },
    {
      id: 4,
      src: nike,
      tech1: reactImage ,
      tech2: tailwind ,
      tech3: "https://cdn.dribbble.com/users/4878/screenshots/15802274/media/8f63cece88fccd2a614f791e5fbec240.png?compress=1&resize=400x300&vertical=top",
      discription:<h2>
        Nike store is an online shopping destination which have  sports and casual sneakers  for men's and womenʼs 

      </h2>,
      demo:"https://inspiring-beijinho-e0ad7a.netlify.app/",
      code:"https://github.com/kallol0011/Nike_clone",
      animation:"fade-right"
    },
    {
      id: 5,
      src: LimeRode,
      tech1: reactImage ,
      tech2: chakra2 ,
      tech3: redux,
      discription:<h2>
        Nike store is an online shopping destination which have  sports and casual sneakers  for men's and womenʼs 

      </h2>,
      demo:"https://fashi0n-square.netlify.app/",
      code:"https://github.com/Avneesh002/Fashion-square",
      animation:"zoom-in"
    },
    {
      id: 6,
      src: cruise,
      tech1: reactImage ,
      // tech2: chakra2 ,
      // tech3: redux,
      tech2:typescript1,
      tech5:node,
      tech6:mongodb,
      discription:<h2>
        Avis is India's leading mobility Company with services ranging from chauffeur drive and self-drive car rentals, car-Sales
      </h2>,
      demo:"https://cruiserental.vercel.app/",
      code:"https://github.com/shikhu51197/Avis-Rentals",
      animation:"fade-left"
    }
  ];

  


  return (




    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white lg:h-887px  md:h-847px  project-card "
      // className="bg-white  md:h-847px  text-black "
    >  
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects  <span>  <AnalogClock/> </span>
          
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({animation , id, src , tooltip ,demo ,code , tech1 , tech2 , tech3, tech4, tech5, tech6 , discription}) => (
            <div data-aos-duration="2000" data-aos={animation} key={id} className="shadow-md shadow-gray-600 rounded-lg">
               

               


              <img
                
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              
              <div className="text-gray-300 px-2 py-2"  >
               {discription}
              </div>
              <span className="flex gap-3 py-2 px-2 text-blue-300" > Tech Stack -  
               <img style={{width:"31px"}} src={tech1} alt="tech" />
               <img style={{width:"31px"}} src={tech2} alt="tech" />                   
               { tech3 ? <img style={{width:"31px"}} src={tech3} alt="tech" /> : null }                   
               { tech4 ? <img style={{width:"31px"}} src={tech4} alt="tech" /> : null }                   
               { tech5 ? <img style={{width:"31px"}} src={tech5} alt="tech" /> : null }                   
               { tech6 ? <img style={{width:"31px"}} src={tech6} alt="tech" /> : null }                   
               

             </span> 
              <span className="flex gap-3 py-2 px-2 ml-14 pl-14 text-blue-300" > 
               
                                
               {/* { tech5 ? <img style={{width:"31px"}} src={tech5} alt="tech" /> : null }                    */}
               {/* { tech6 ? <img style={{width:"31px"}} src={tech6} alt="tech" /> : null }                    */}
               

             </span> 
              <div className="flex items-center justify-center">
                
                <a href={demo} target="_blank" className="w-1/2 px-6 m-3.5 p-2 hover:text-blue-400 duration-200 text-green hover:scale-105">
                  Demo
                </a>
                <a href={code} target="_blank" className="w-1/2 px-6 m-3.5 p-2 hover:text-blue-400 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
     
     {/* //////////////////////////////////// */}

        {/* small prjects section */}

     {/* <div className="py-12" >
       <h1> small projects </h1>
       </div>

     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , tooltip ,demo ,code , tech1 , tech2 , tech3, tech4, tech5, tech6 , discription}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
               

               


              <img
                
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              
              <div className="text-gray-300 px-2 py-2"  >
               {discription}
              </div>
              <span className="flex gap-3 py-2 px-2 text-blue-300" > Tech Stack -  
               <img style={{width:"31px"}} src={tech1} alt="tech" />
               <img style={{width:"31px"}} src={tech2} alt="tech" />                   
               { tech3 ? <img style={{width:"31px"}} src={tech3} alt="tech" /> : null }                   
               { tech4 ? <img style={{width:"31px"}} src={tech4} alt="tech" /> : null }                   
               { tech5 ? <img style={{width:"31px"}} src={tech5} alt="tech" /> : null }                   
               { tech6 ? <img style={{width:"31px"}} src={tech6} alt="tech" /> : null }                   
               

             </span> 


              <span className="flex gap-3 py-2 px-2 ml-14 pl-14 text-blue-300" > 
               
                                
                                   
               

             </span> 


              <div className="flex items-center justify-center">
                
                <a href={demo} target="_blank" className="w-1/2 px-6 m-3.5 p-2 hover:text-blue-400 duration-200 text-green hover:scale-105">
                  Demo
                </a>
                <a href={code} target="_blank" className="w-1/2 px-6 m-3.5 p-2 hover:text-blue-400 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div> */}

     {/* ///////////////////////////////////// */}

        <div className="bg-grey-800  w-full text-white  md:h-screen" style={{height:"111px"}} >
        </div>
      </div>
      
    </div>
  );
};

export default Portfolio;
