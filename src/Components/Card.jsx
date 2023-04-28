import React from "react";
import { motion } from "framer-motion";
import growth from "../images/Growth-Marketing-Agency-for-SaaS-Startups-growth-cx_11zon.webp";
import gallery from "../images/Digital-Music-Distribution-Sell-Your-Music-Online-Gallery-Vision_11zon.webp";
import nintriva from "../images/Custom-Software-Development-App-Development-Nintriva_11zon.jpg";
import suitejar from "../images/Suitejar-Best-Content-Marketing-Tool-Free-SEO-Tool_11zon.webp";
function Card() {
  return (
    <>
      <div className="lg:!w-[70vw] lg:!h-[50vh] mx-5 rounded-3xl lg:mx-52 mb-20 lg:!grid lg:!grid-cols-3  select-none">
        <div className="lg:!col-span-2 row-span-2 w-[90%] h-[350px] lg:!h-[90%]  rounded-3xl bg-[#ffffff] drop-shadow-2xl mx-auto my-auto overflow-hidden">
          <motion.img
            whileHover={{ y: -1600 }}
            transition={{ duration: 15 }}
            initial={{ y: 10 }}
            src={growth}
            alt=""
            className=""
          />
        </div>
        <div className="py-10 text-center px-5">
          <p className="text-2xl py-2 font-bold cursor-none select-none text-[#DD5D5D]">
            Growth.cx
          </p>
          <p>
          growth.cx is a full service product marketing agency helping B2B SaaS startups outrun and outshine their competitors. We/They (depends on how you want to say) are a group of super passionate and highly qualified Growth Hackers, Product Marketers, Content Creators, Developers and Designers.
          </p>
          <p className="mt-10 text-[20px] text-[#BD827E] hover:text-[#BD827E]  ">
            <a
              href="https://growth.cx/"
              className="px-2 "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              View 
            </a>
          </p>
        </div>
      </div>
      <div className="lg:w-[70vw] lg:h-[50vh] mx-5   rounded-3xl lg:mx-52 flex flex-col-reverse lg:grid lg:grid-cols-3 select-none">
        <div className="py-10 text-center px-5">
          <p className="text-2xl py-2 font-bold cursor-none select-none  text-[#DD5D5D]">
            Gallery Vision
          </p>
          <p className="">
            Digital Music Distribution Company <br />
            We are music lovers! We are aggregators, marketers, and
            distributors, and we cater to artists who love to showcase their
            talent to the world.
          </p>
          <p className="mt-10 text-[20px]  text-[#BD827E] hover:text-[#BD827E]  ">
            <a
              href="https://gallery.vision/"
              className="px-2 "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              View 
            </a>
          </p>
        </div>
        <div className="lg:!col-span-2 w-[90%] lg:!h-[90%] h-[350px] rounded-3xl bg-[#ffffff] drop-shadow-2xl mx-auto my-auto overflow-hidden">
          <motion.img
            whileHover={{ y: -2800 }}
            transition={{ duration: 15 }}
            initial={{ y: 10 }}
            src={gallery}
            alt=""
          />
        </div>
      </div>
      <div className="lg:!w-[70vw] lg:!h-[50vh] mx-5 rounded-3xl lg:mx-52 my-20 lg:!grid lg:!grid-cols-3  select-none">
        <div className="lg:!col-span-2 row-span-2 w-[90%] h-[350px] lg:!h-[90%]  rounded-3xl bg-[#ffffff] drop-shadow-2xl mx-auto my-auto overflow-hidden">
          <motion.img
            whileHover={{ y: -1600 }}
            transition={{ duration: 15 }}
            initial={{ y: 10 }}
            src={nintriva}
            alt=""
            className=""
          />
        </div>
        <div className="py-10 text-center px-5">
          <p className="text-2xl py-2 font-bold cursor-none select-none text-[#DD5D5D]">
            Nintriva
          </p>
          <p>
            Nintriva is a full service shop offering end-to-end information
            technology solutions and services to businesses and organizations
            around the world.
          </p>
          <p className="mt-10 text-[20px] text-[#BD827E] hover:text-[#BD827E] ">
            <a
              href="https://nintriva.com/"
              className="px-2 "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              View 
            </a>
          </p>
        </div>
      </div>
      <div className="lg:w-[70vw] lg:h-[50vh] mx-5 rounded-3xl lg:mx-52 flex flex-col-reverse lg:grid lg:grid-cols-3 select-none">
        <div className="py-10 text-center px-5">
          <p className="text-2xl py-2 font-bold cursor-none select-none text-[#DD5D5D]">
            Suitejar
          </p>
          <p className="">
            Digital Music Distribution Company <br />
            We are music lovers! We are aggregators, marketers, and
            distributors, and we cater to artists who love to showcase their
            talent to the world.
          </p>
          <p className="mt-10 text-[20px]  text-[#BD827E] hover:text-[#BD827E]  ">
            <a
              href="https://suitejar.com/"
              className="px-2 "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              View 
            </a>
          </p>
        </div>
        <div className="lg:!col-span-2 w-[90%] lg:!h-[90%] h-[350px] rounded-3xl bg-[#ffffff] drop-shadow-2xl mx-auto my-auto overflow-hidden">
          <motion.img
            whileHover={{ y: -2800 }}
            transition={{ duration: 15 }}
            initial={{ y: 10 }}
            src={suitejar}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Card;
