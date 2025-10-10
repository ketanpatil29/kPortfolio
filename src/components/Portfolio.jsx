import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import linkImg from "../assets/link.png";
import githubImg from "../assets/github.png";
import linkedInImg from "../assets/linkedin.png";

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

const Portfolio = () => {
  return (
    <section>
        <div className="text-[#a9a9b3] flex flex-col items-center justify-center mt-16">
            <h1 className="font-bold text-4xl">Ketan</h1>
                <h3 className="text-xl mt-2">
                    <Typewriter words={["MERN Stack Dev.", "Problem Solver."]} />
                <span className="ml-1 animate-blink">|</span>
            </h3>

            <p className="max-w-230 text-center mt-3">Software developer from Ahmedabad (India) with hands-on experience in building projects using the MERN stack.
                 Currently enhancing skills in React, Node.js, and databases while practicing DSA to strengthen problem-solving ability.
                 Quick to adapt, eager to learn, and capable of completing tasks efficiently
                 <a href="#" className="text-blue-400 hover:underline inline-block">
                    ...More about me?
                </a>
            </p>

            <div className="flex flex-col items-center justify-center m-10">
                

                <Link to="/projects"><button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer transition-all duration-200 hover:scale-105">Projects</button></Link>
                <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer">Github</button>
                <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer">LinkedIn</button>

                <h3 className="font-bold text-2xl mt-3 mb-3">Contact Me</h3>

                <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer">Email</button>
                <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer">Discord</button>

                <h3 className="font-bold text-2xl mt-3 mb-3">Off Topic</h3>

                <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer">Posts</button>
                <button className="bg-amber-100 text-black text-2xl rounded-md w-36 mb-3 cursor-pointer">Instagram</button>
            </div>

            <div className="flex">
              <img src={githubImg} alt="github" className="w-8 h-8 mr-2 text-[#a9a9b3]" />
              <img src={linkedInImg} alt="linkedIn" className="w-8 h-8 mr-2" />
            </div>
        </div>
    </section>
  );
};

export default Portfolio;
