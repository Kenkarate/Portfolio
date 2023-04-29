import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <div className="lg:!w-[100vw] h-[20vh] bg-[#f4acb7] lg:flex lg:px-52 text-center lg:text-left pt-5 lg:pt-0">
      <p className="text-white lg:p-10  ">
        Copyright ©️ 2023. All Rights are Reserved
      </p>
      <div className="text-white pt-10 lg:pl-[50%] bg-[#] ">
        <motion.div
          animate={{ x: -10, scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="flex text-4xl justify-center"
        >
          <span className="pr-3">
            <a href="https://linkedin.com/in/ajeshofficial/">
              <AiFillLinkedin />
            </a>
          </span>
          <span>
            <a href="https://github.com/Kenkarate">
              <AiFillGithub />
            </a>
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
