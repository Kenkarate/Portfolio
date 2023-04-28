import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactMe() {
  const [state, handleSubmit] = useForm("mdovydjk");
  if (state.succeeded) {
    return (
      <p className="h-[30vh] lg:px-52 text-2xl font-bold">
        Thanks for joining!
      </p>
    );
  }
  return (
    <div className=" px-5 text-2xl  text-center lg:text-left lg:grid grid-cols-2 ">
      <div className="p-20">
        <p
          className="text-[#DD5D5D] uppercase text-[1rem] font-bold tracking-wider mb-5"
          id="#contacts"
        >
          Contact Me
        </p>
        <p className="text-2xl py-10 font-bold">
          Let's Connect and Create Something Great Together!✨
        </p>
        <p className="text-3xl pb-10 font-bold">Hit me up!</p>
      </div>
      <div className="bg-[#FFF5F3] p-20">
        <form onSubmit={handleSubmit}>
          <p htmlFor="email" className=" text-[20px] h-5 ">
            Email Address
          </p>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            className="border-2 w-full "
          />
          <br />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <p className="pt-5 text-[20px]">Message</p>
          <br />
          <textarea
            id="message"
            name="message"
            className="border-2 lg:h-[100px] w-full "
          />
          <br />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="border-2 rounded-lg w-full hover:bg-red-500 hover:text-white text-[20px] py-2"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
