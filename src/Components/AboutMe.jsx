import React from "react";
import dev from "../images/Programming-amico.svg";

import { motion } from "framer-motion";

function AboutMe() {
  return (
    <>
      <div
        className="lg:h-[70vh] w-100vw grid lg:grid-cols-2 lg:mx-20 mx-10 lg:my-20 my-10 text-center lg:text-left"
        id="#about"
      >
        <img src={dev} alt="" className="w-[80%] mx-auto" />
        <div className="my-16 lg:mr-20 ">
          <p className="text-[#DD5D5D] uppercase text-[1rem] font-bold tracking-wider">
            About Me
          </p>
          <h3 className="text-2xl tracking-wide py-5 lg:h-28 ">
            A skilled programmer with extensive experience in{" "}
            <span className="font-bold uppercase">
              <motion.div className="h-10 overflow-hidden text-[#DD5D5D]">
                {" "}
                <motion.p
                  animate={{ y: [30, 0,0,-90] }}
                  transition={{ duration: 7, repeat: Infinity, type: "tween",repeatDelay:7}}
                >
                  programming languages.
                </motion.p>{" "}
                <motion.p
                  animate={{ y: [30, -35, -35, -90] }}
                  transition={{ duration: 7, repeat: Infinity, type: "tween",delay:4 ,repeatDelay:8}}
                >
                  digital marketing.
                </motion.p>{" "}
                <motion.p
                  animate={{ y: [30, -65, -65, -90] }}
                  transition={{ duration: 7, repeat: Infinity, type: "tween" ,delay:8, repeatDelay:10}}
                >
                  website development.
                </motion.p>{" "}
              </motion.div>

              {/* <Typewriter
                words={[
                  "programming languages.",
                  "digital marketing.",
                  "website development.😌",
                ]}
                loop={0}
                />{" "} */}
            </span>
            <motion.p></motion.p>
          </h3>
          <span className="leading-7">
            If you're looking for a skilled programmer with extensive experience
            in various programming languages, digital marketing, and website
            development, then I can help you achieve your{" "}
            <b className="uppercase">goals</b>.{" "}
            <p className="hidden lg:block">
              {" "}
              With my expertise in HTML, CSS, Bootstrap, tailwind CSS,
              JavaScript, and ReactJS, I can create innovative solutions to
              complex challenges, ensuring that your projects are completed to
              the highest standards.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
