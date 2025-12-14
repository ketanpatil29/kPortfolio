import React from "react";
import { motion } from "framer-motion";
import welcomeVideo from "../assets/welcome2.mp4";
import neymar from "../assets/neymar.mp4";

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

const About = () => {
    return (
        <section className="text-[#a9a9b3] max-w-full md:max-w-[750px] lg:max-w-[1250px] mx-auto px-4 mt-12 mb-8">
            <div className="flex flex-col items-center text-center">
                <motion.h3
                    variants={neonSweep}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 1 }}
                    className="text-3xl sm:text-4xl font-bold mb-10">
                    About me
                </motion.h3>

                <p className="max-w-[950px] text-sm sm:text-lg leading-relaxed text-justify">
                    Hi! I’m Ketan and i love watching football. Welcome to my website.
                    <br /><br />
                    i'm a 20 year old software devloper from Ahmedabad, India. i've completed my bachelor's in computer application in 2025.
                    Throughout my education, i've had through experince in multiple langueages, includes, C, C++, Javascript, Java, Python, PHP and other languages.
                    i've also experienced in frontend and backend devlopments using HTML, CSS, React, Tailwindcss, Framer-motion, Node and other frameworks.
                    Additionally, I’ve worked with different operating systems like Linux and have experience with shell scripting.
                    <br /><br />
                    I’ve built several projects focused on practical use cases, including a skill-based developer social platform (DevChan) and a GitHub-authenticated
                    coding practice platform (CodeFightClub). Through these projects, I’ve worked on authentication, REST APIs, frontend state management,
                    responsive UI design, and scalable backend structure.
                    <br /><br />
                    Outside of project work, I do practice data structures and algorithms(DSA) to strengthen my problem-solving skills.
                    <br /><br />
                    You can contant me through these links:

                    <ul className="text-sm sm:text-base space-y-1 list-disc list-inside my-2 mx-4">
                        <li><span className="font-semibold">Email:</span> ketanpatil.sh@gmail.com</li>
                        <li><span className="font-semibold">GitHub:</span> <a href="https://github.com/ketanpatil29" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/ketanpatil29</a></li>
                        <li><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in//" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/ketan-patil</a></li>
                    </ul>
                </p>

                <div className="mt-10 w-full">
                    <h3 className="text-2xl font-semibold mb-6">
                        Skills & Technologies
                    </h3>

                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "JavaScript",
                            "React",
                            "Node.js",
                            "Express",
                            "MongoDB",
                            "Tailwind CSS",
                            "Git & GitHub",
                            "REST APIs",
                            "DSA"
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-1 text-sm rounded-full bg-zinc-800"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <video width="360" height="360" autoPlay loop muted playsInline className="mt-10">
                    <source src={welcomeVideo} type="video/mp4" />
                    
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}

export default About;