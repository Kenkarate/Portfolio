import React from "react";
import { motion } from "framer-motion";
import ajesh from "../ajesh.png";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/javascript.svg";
import react from "../images/react.svg";
import tailwind from "../images/tailwind.svg";
import scss from "../images/scss.svg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


function Home() {
  return (
    <>
      <div
        className="lg:h-[90vh] lg:w-[100vw] bg-header px-[15%] lg:text-left text-center"
        id="#home"
      >
        <div className="lg:h-[70%] grid lg:grid-cols-2 content-center pb-20">
          <div className="max-w-[50rem]">
            <h2 className="lg:text-5xl text-3xl h-24 lg:text-left text-center font-extrabold py-4 lg:h-32">
              {/* Front-end React Developer 👋 */}
              Front-end React Developer 👋
            </h2>
            <p className="lg:text-2xl text-[#6c6c6f]">
              Hi, I'm Ajesh Babu. A passionate Front-end React Developer based
              in Aluva, India.
            </p>
            <motion.div
              animate={{ x: -10, scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="flex py-4 text-4xl lg:justify-start justify-center "
            >
              <span className="pr-3 pl-2 text-[22px]">
                <a href="https://linkedin.com/in/ajeshofficial/">
                  <AiFillLinkedin />
                </a>
              </span>
              <span className="pr-3 text-[22px]">
                <a href="https://github.com/Kenkarate">
                  <AiFillGithub />
                </a>
              </span>
            </motion.div>
          </div>
          <div className="">
            <img
              src={ajesh}
              alt=""
              className="lg:w-[40%]  lg:absolute"
            />
            {/* <Balls className="relative " /> */}
          </div>
        </div>
        <div className="grid lg:grid-cols-7 hidden lg:block ">
          <motion.p
            whileHover={{ x: [0, 10, -10, 0] }}
            className="self-center text-[20px] cursor-context-menu"
          >
            Tech Stack
          </motion.p>
          <span className="text-[#7e7b7b] px-[5%] self-center">|</span>
          <ul className="lg:flex mx-auto">
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={html} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={css} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={js} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={react} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={tailwind} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={scss} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
          </ul>
        </div>
        <div className=" lg:hidden  ">
          <motion.p
            whileHover={{ scale: 1.5 }}
            className="self-center text-[20px]"
          >
            Tech Stack
          </motion.p>
          <span className="text-[#7e7b7b] px-[5%] self-center">|</span>
          <ul className="grid grid-cols-3 mx-auto">
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={html} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={css} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={js} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
          </ul>
          <ul className="grid grid-cols-3 mx-auto">
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={react} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={tailwind} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              className="h-20 w-20 shadow-lg rounded-full mx-3 my-3 bg-white"
            >
              <img src={scss} alt="" className="h-20 w-20  p-5 " />
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
