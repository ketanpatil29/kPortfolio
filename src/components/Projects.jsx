import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import devchan1 from "../assets/devchan1.png";
import devchan2 from "../assets/devchan2.png";

const projects = [
    {
        id: "devchan",
        title: "DevChan",
        year: "2025",
        role: "Frontend / Backend",
        short:
            `DevChan is a skill-based social platform for developers to connect, share activities, and explore like-minded profiles based on their intrests and skills.
       It uses GitHub authentication and focuses on building a community around skills, learning, and growth."`,
        long: [
            "DevChan is a skill-based social networking platform built for developers. It allows users to authenticate using GitHub, create a developer profile, and connect with others based on shared skills and interests.",
            "Users can post updates about their learning journey, projects, or weekly activities, making DevChan a space focused on growth rather than distractions.",
            "The project is designed with future scalability in mind, with planned features such as real-time communication, skill-based matchmaking, and collaboration tools."
        ],
        tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        images: [devchan1, devchan2],
        github: "https://github.com/ketanpatil29/devchan",
        live: "https://devchan.vercel.app/",
    },
    {
        id: "codefightclub",
        title: "CodeFightClub",
        year: "2025",
        role: "Full-Stack Developer",
        short:
            "A GitHub-authenticated coding platform for practicing and competing.",
        long:
            "CodeFightClub is a MERN-stack platform where developers authenticate using GitHub OAuth, solve coding problems, and compete with others. The backend is structured for scalability, and the UI focuses on clarity and smooth navigation.",
        tech: ["React", "Node.js", "Express", "MongoDB", "GitHub OAuth"],
        images: [],
        github: "https://github.com/ketanpatil29/CodeFightClub",
        live: "https://codefightclub.vercel.app/",
    },
    {
        id: "kportfolio",
        title: "KPortfolio",
        year: "2024",
        role: "Designer & Developer",
        short:
            "A personal portfolio showcasing my projects and skills.",
        long:
            "This portfolio was designed with simplicity in mind, focusing on readability, subtle animations, and performance. Framer Motion is used sparingly to enhance the user experience without being distracting.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        images: [],
        github: "https://github.com/ketanpatil29",
        live: "",
    },
];

const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    return (
        <div className="mt-6">
            <motion.img
                key={index}
                src={images[index]}
                className="rounded-lg w-full shadow-lg"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            />

            <div className="flex justify-between mt-3 text-sm">
                <button
                    onClick={() =>
                        setIndex((index - 1 + images.length) % images.length)
                    }
                    className="text-gray-400 hover:text-white transition"
                >
                    ← Prev
                </button>
                <button
                    onClick={() => setIndex((index + 1) % images.length)}
                    className="text-gray-400 hover:text-white transition"
                >
                    Next →
                </button>
            </div>
        </div>
    );
};

const Projects = () => {
    const [openId, setOpenId] = useState(null);

    return (
        <section className="max-w-full md:max-w-[750px] lg:max-w-[950px] lg:mx-auto mx-auto px-4 text-[#a9a9b3]">

            <header className="text-center my-12">
                <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold">Projects</h1>
                <p className="mt-3 text-gray-400">
                    A selection of projects I've built while learning and experimenting.
                </p>
            </header>


            <div className="space-y-14">
                {projects.map((project) => (
                    <div key={project.id} className="border-b border-zinc-800 pb-10">
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <h2 className="text-3xl font-semibold">{project.title}</h2>
                            <span className="text-sm text-gray-400">
                                {project.year} • {project.role}
                            </span>
                        </div>

                        <p className="mt-3 text-sm md:text-base">
                            {project.short}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-3 py-1 rounded-full bg-zinc-800"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-6 mt-5 text-sm">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>
                        </div>

                        <button
                            onClick={() =>
                                setOpenId(openId === project.id ? null : project.id)
                            }
                            className="mt-6 text-sm text-blue-400 hover:underline"
                        >
                            {openId === project.id ? "Hide details" : "Learn more →"}
                        </button>

                        <AnimatePresence>
                            {openId === project.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden mt-6"
                                >

                                    <div className="space-y-4">
                                        {Array.isArray(project.long) ? (
                                            project.long.map((para, i) => (
                                                <p
                                                    key={i}
                                                    className="text-sm md:text-base leading-relaxed text-gray-400"
                                                >
                                                    {para}
                                                </p>
                                            ))
                                        ) : (
                                            <p className="text-sm md:text-base leading-relaxed text-gray-400">
                                                {project.long}
                                            </p>
                                        )}
                                    </div>


                                    <ImageSlider images={project.images} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
