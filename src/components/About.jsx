import React from "react";
import ReactTooltip from "react-tooltip"
import GitHubCalender from "react-github-calendar"
import Clock from "react-clock";
import AnalogClock from "../clock/Clock";
import AOS from "aos";
import "aos/dist/aos.css";

// import "react-tooltip/dist/react-tooltip.css";

const About = () => {


  


  AOS.init({
    offset: 100,
    duration: 1000,
  });


  return (
    <div 
      name="about"
      id="about" 
      
      className="w-full h-887px bg-gradient-to-b from-gray-800 to-black text-white  about section "
      // className="w-full h-887px bg-white text-white"
    >
      <div className="max-w-screen-lg p-4 gap-7 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500" id="#about.about.section" data-aos="fade-up" >
            About
          </p>
        </div>

        


        <p className="text-xl mt-7 text-gray-400" id="user-detail-intro" data-aos="fade-up" >
        Motivated and innovative aspiring full-stack developer
        with hands-on experience building websites with MERN
        stack and various web technologies including HTML,
        CSS, JAVASCRIPT, and REACT JS. Curious to learn about
        emerging web technologies and looking forward to
        making a significant contribution to an organization
        through dedicated effort.
        </p>


        <br />

          

         <div id="calender" data-aos="fade-up" >
           <GitHubCalender
             
             username="kallol0011"
             blockSize={18}
             color={"green"}
             blockMargin={7}            
             fontSize={18}
           >

            <ReactTooltip delayShow={11} html />
           </GitHubCalender>
         </div>

        <div className="lg:flex sm:grid gap-y-7   " id="github-streak-stats"  >
          <img data-aos="fade-right" src="https://github-readme-stats.vercel.app/api?username=kallol0011&show_icons=true&theme=radical" alt="" />
          <img data-aos="fade-left" id="github-top-langs" className=" sm:ml-2 sm:pl-2 lg:ml-11 lg:pl-14 " src="https://github-readme-stats.vercel.app/api/top-langs/?username=kallol0011&layout=compact)](https://github.com/anuraghazra/github-readme-stats)" alt="" />
          {/* <img
              className="stats"
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=kallol0011&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40"
              alt="kallol0011"
              id="github-streak-stats"
            /> */}
       
        </div>
      </div>
      
    </div>
  );
};

export default About;
