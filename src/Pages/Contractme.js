import React, { useRef } from "react";
import emailjs from "emailjs-com";

export const Contractme = () => {
  // const SERVER_KEY = process.env.SERVER_KEY;
  // const TEMPLATE_KEY = process.env.TEMPLATE_KEY;
  // const EMAIL_KEY = process.env.EMAIL_KEY;

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9uravqy",
        "template_xwadr1d",
        form.current,
        "0I-yVHiRaDswFf8r0"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent Successfully");
        },
        (error) => {
          alert("Email Not Sent");
        }
      );
    e.target.reset();
  };
  return (
    <section
      id="contactme"
      className="py-20 mt-6 bg-gray-400 rounded-2xl shadow-md hover:shadow-2xl shadow-slate-50"
      // style={{ marginTop: "calc(6rem + 64px)" }}
    >
      <div className="container mx-auto px-4 py-16 rounded-lg shadow-2xl shadow-black bg-gradient-to-r from-gray-500 via-gray-300 to-gray-800 transition-all duration-300">
        <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
          <div className="flex flex-col text-center items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
            <h1 className="text-3xl p-6 font-bold text-gray-800 tracking-wide leading-tight">
              Contact Me
            </h1>
          </div>
        </div>
        <form className="max-w-md mx-auto" ref={form} onSubmit={sendEmail}>
          <div className="mb-6 relative">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-gray-800"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 backdrop-filter backdrop-blur-sm backdrop-opacity-70"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-gray-800"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};
