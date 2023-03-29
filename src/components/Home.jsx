import React from "react";
import profilepic from "../assets/portfolio/profilepic.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {



  AOS.init({
    offset: 100,
    duration: 1000,
  });


  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 bg-white"
      // className="h-screen w-full  bg-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        
          <h2 className="text-4xl sm:text-5xl inline-flex py-2 font-bold text-white " data-aos="fade-right" >
          Hello  <h2 className="hover:scale-125 duration-200"> 👋🏼 </h2>
          
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold inline-flex text-blue-400  " >
         <span className="text-white" id="user-detail-name" > I'm </span> 	&nbsp;
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right"  >K</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right"  >a</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right"  >l</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right"  >l</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right"  >o</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right"  >l</h5>
          <h5>&nbsp;</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right" data-aos-duration="3000"  >S</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right" data-aos-duration="3000" >a</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right" data-aos-duration="3000" >r</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right" data-aos-duration="3000" >k</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right" data-aos-duration="3000" >a</h5>
          <h5 className="hover:scale-y-150 duration-200" data-aos="fade-right" data-aos-duration="3000" >r</h5>
         {/* Kallol Sarkar */}
          </h2>
          <p className="text-gray-400 py-4 max-w-md" id="user-detail-intro" data-aos="fade-right" >
          Full-stack developer with experience in development and design.
           Proficient in various programming languages and able to create functional,
            visually appealing websites and applications.
          </p>

          <div>
            <Link
            data-aos="zoom-in"
            data-aos-duration="3000"
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
               

              Projects
              <span className="group-hover:rotate-90 ml-2  duration-300">
                <svg class="animate-bounce w-6 h-6 ...">
                {/* <MdOutlineKeyboardArrowRight size={25} className="ml-1" /> */}
                <AiFillCaretDown size={25} className="ml-1" />
                
              </svg>

              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            data-aos="zoom-in"
            src={profilepic}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-full  home-img " style={{width:"81%"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
