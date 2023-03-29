import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaDirections, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Tooltip  from "react-tooltip";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {



  AOS.init({
    offset: 100,
    duration: 1000,
  
  });


  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kallol-sarkar-229000210/",
      style: "rounded-tr-md ml-11",
      tooltip:"Linkedin"
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/kallol0011",
      tooltip:"GitHub"
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size={30} />
        </>
      ),
      href:"mailto:kallolblgsarkar@gmail.com ",
      tooltip:"mail"
    },
    {
      id: 4,
      
      child: (
        <>
           <BsFillPersonLinesFill size={30} />
        </>
      ),
      
      href: "https://drive.google.com/file/d/1qCNGAeixGMObjhT-0LWdvy-j-N5wtbIw/view?usp=share_link" , //   "/resume.pdf",
      style: "rounded-br-md",
      tooltip:"Resume"
    }
  ];

  return (
    <div
      name="contact"
      className="w-full h-887px bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      // className="w-full h-887px bg-white text-black"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500" data-aos="zoom-in" data-aos-duration="2000" >
            Contact
          </p>
          <p className="sans-serif text-2xl mt-3 " data-aos="fade-right" data-aos-duration="2000" >
            Contact Number  <span className="text-blue-300" > - +91 7063577154 </span> 
          </p>
          <p className="sans-serif text-2xl mt-3 " data-aos="fade-right" data-aos-duration="2000" >
          Email <span className="text-blue-300" > - kallolblgsarkar@gmail.com</span>    
            </p>
          <p className="py-6" data-aos="fade-right" >Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/1126474a-c7da-4258-9123-05cd1ffa75af"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
             data-aos="fade-right"
             data-aos-duration="2000"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
            data-aos="fade-left"
            data-aos-duration="2000"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
            data-aos="zoom-in"
            data-aos-duration="2000"
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
          
        </div>
        <div
              
         
        className="  lg:mr-2 text-blue-300 sm:text-4xl flex-col text-center justify-center  " >
          
        <div className="flex lg:pl-7 gap-9 sm:ml-72 text-center" >
        {links.map(({ id, child, href, style, download , tooltip }) => (
          <div
          
            key={id}
            className={
               +
              " " +
              style
            }
          >
            <a
            
              href={href}
              // style={{border:"1px solid yellow"}}
              className="flex p-1 text-white hover:scale-150 duration-200 "
              download={download}
              title={tooltip}
              target="_blank"
              rel="noreferrer"
              
            >
              {child}
            </a>
            
          </div>
            
            
            ))}
           
            
      </div>
      
      </div>
      </div>
      
      
    </div>
  );
};

export default Contact;
