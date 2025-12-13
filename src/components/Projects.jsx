import React from "react";

const Projects = () => {
    return (
        <section className="max-w-210 mx-auto text-justify">
            <header className="flex items-center mt-10">
                <h1 className="text-[#a9a9b3] text-4xl font-bolc">Projects</h1>
            </header>
            <div className="text-[#a9a9b3] my-4">
                <h1 className="text-3xl">CodeFightClub - Overview</h1>
                <p className="mt-2">
                    CodeFightClub is a GitHub-authenticated coding platform designed for
                    developers who want to practice and compete.
                    This project was built using the MERN stack, with special focus on
                    secure OAuth login, clean UI flow, and structured problem pages.
                </p>
                
            </div>
        </section>
    );
}

export default Projects;