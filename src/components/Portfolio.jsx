import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

const Typewriter = ({ words, speed = 150, eraseSpeed = 100, delay = 1000 }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex(wordIndex + 1);
        }
      }, eraseSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, eraseSpeed, delay]);

  return <span>{text}</span>;
};

const neonSweep = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
  },
  show: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 1,
      ease: "easeOut",
    }
  }
};

const Portfolio = () => {
  return (
    <section className="text-[#a9a9b3] max-w-full md:max-w-[750px] lg:max-w-[1300px] mx-auto px-4 mb-12">
      <div className="flex flex-col items-center justify-center text-center mt-14">

        <motion.h1
          variants={neonSweep}
          initial="hidden"
          animate="show"
          transition={{ duration: 1 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl">
          Ketan
        </motion.h1>

        <h3 className="text-xl mt-2">
          <Typewriter words={["MERN Stack Dev.", "Full Stack Dev.", "Problem Solver."]} />
          <span className="ml-1 animate-blink">|</span>
        </h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-[650px] md:max-w-[720px] lg:max-w-[950px] text-center mt-3">
          MERN Stack and Full Stack developer from Ahmedabad (India) with hands-on experience in building projects using the MERN.
          Currently enhancing skills in React, Node.js, and databases while practicing DSA to strengthen problem-solving ability.
          Quick to adapt, eager to learn, and capable of completing tasks efficiently
          <br></br>
          <Link to="/about" className="text-blue-400 hover:underline inline-block">
            ...More about me?
          </Link>
        </motion.p>

        <div className="flex flex-col items-center justify-center m-10">


          <Link to="/projects">
            <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer transition-all duration-200 hover:scale-105">Projects</button>
          </Link>

          <Link to="https://github.com/ketanpatil29" target="_blank" rel="noopener noreferrer">
            <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer transition-all duration-200 hover:scale-105">Github</button>
          </Link>

          <Link to="https://www.linkedin.com/in/ketan-patil-788417389/" target="_blank" rel="noopener noreferrer">
            <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer transition-all duration-200 hover:scale-105">LinkedIn</button>
          </Link>

          <Link to="">
            <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer transition-all duration-200 hover:scale-105">Resume</button>
          </Link>

          <h3 className="font-bold text-2xl mt-3 mb-3">Contact Me</h3>

          <Link to="mailto:ketanpatil.sh@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 transition-all duration-200 hover:scale-105 cursor-pointer">Email</button>
          </Link>

          <Link to="" target="_blank" rel="noopener noreferrer">
            <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 transition-all duration-200 hover:scale-105 cursor-pointer">Discord</button>
          </Link>

          <h3 className="font-bold text-2xl mt-3 mb-3">Off Topic</h3>

          <Link to="/post">
            <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 transition-all duration-200 hover:scale-105 cursor-pointer">Posts</button>
          </Link>
          <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 transition-all duration-200 hover:scale-105 cursor-pointer">Instagram</button>
        </div>

        <div className="flex text-[#a9a9b3] space-x-3">
          <a href="https://github.com/ketanpatil29" target="_blank" rel="noopener noreferrer" className="inline-flex items-center transition-colors hover:text-white">
            <FaGithub className="w-7 h-7" />
          </a>

          <a href="https://www.linkedin.com/in/ketan-patil-788417389/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center transition-colors hover:text-white">
            <FaLinkedin className="w-7 h-7" />
          </a>

          <a href="https://instagram.com/weakhuh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center transition-colors hover:text-white">
            <FaInstagram className="w-7 h-7" />
          </a>

          <a href="#" className="inline-flex items-center transition-colors hover:text-white">
            <FaDiscord className="w-7 h-7" />
          </a>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full text-center mb-3">
        © {new Date().getFullYear()} Ketan Patil
      </div>
    </section>
  );
};

export default Portfolio;