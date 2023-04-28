import React from "react";

function Contact() {
  return (
    <div className="lg:px-52 px-10 text-center lg:text-left py-32">
      <p
        className="text-[#DD5D5D] uppercase text-[1rem] font-bold tracking-wider mb-5"
        id="#contacts"
      >
        Contact Me
      </p>
      <p className="text-2xl py-16">
        Let's Connect and Create Something Great Together!✨
      </p>
      <p className="text-2xl pb-16">Hit me up!👇🏻</p>
      <div className="lg:!flex">
        <a
          href="https://goo.gl/maps/PjDCzZBG5pNT7Qfr6"
          target="_blank"
          className="lg:text-2xl px-6  hover:text-slate-300 text-[20px]"
          rel="noreferrer"
        >
          ⚓️ : Aluva, Kerala
        </a>
        <p className="pt-10 lg:pt-0">
          <a
            className="lg:text-2xl text-[20px] lg:py-0  lg:pl-10 hover:text-slate-300"
            href="mailto:ajesh269@gmail.com"
          >
            📬 : ajesh269@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
