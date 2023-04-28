import { motion } from "framer-motion";
import React from "react";

function Balls() {
  return (
    <div>
      <motion.div
        animate={{
          x: [10, 500, -100, 10],
          y: [0, 300, 300, 0],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="h-10 w-10 bg-red-500 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ backgroundColor: "white" }}
        animate={{
          // rotate: [0, 100, 200, 0],
          x: [10, 200, 100, 10],
          y: [300, 200, 100, 300],
          backgroundColor: "black",
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="h-10 w-10  rounded-full"
      ></motion.div>
      <motion.div
        animate={{
          // rotate: [0, 100, 200, 0],
          x: [50, 250, 100, 50],
          y: [0, 200, 150, 0],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="h-10 w-10 bg-blue-500 rounded-full"
      ></motion.div>
      <motion.div
        animate={{
          // rotate: [0, 100, 200, 0],
          x: [300, 250, 330, 300],
          y: [90, 270, 320, 90],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="h-10 w-10 bg-green-500 rounded-full"
      ></motion.div>
      <motion.div
        animate={{
          // rotate: [0, 100, 200, 0],
          x: [0, 60, 170, 0],
          y: [100, 344, 155, 100],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="h-10 w-10 bg-yellow-500 rounded-full"
      ></motion.div>
      <motion.div
        animate={{
          // rotate: [0, 100, 200, 0],
          x: [0, 160, 270, 0],
          y: [40, 304, 155, 40],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="h-10 w-10 bg-[#5ade1e] rounded-full"
      ></motion.div>
      {/* <motion.div
        animate={{}}
        transition={{duration:2}} 
        whileTap={{ x: [100, -400, -300, 100] ,y:[100,-320,-122,20]}}
        className="h-16 w-16 bg-yellow-500 rounded-full text-[14px] p-4 text-[#7a7777]"
      >tap me</motion.div> */}
    </div>
  );
}

export default Balls;
