import React from "react";
import welcomeVideo from "../assets/welcome2.mp4";

const About = () => {
    return(
        <div className="flex flex-col justify-center items-center mt-16">
            <p className="max-w-230 text-[#a9a9b3] text-center mt-3">
                Software developer from Ahmedabad (India) with hands-on experience in building projects using the MERN stack.
                Currently enhancing skills in React, Node.js, and databases while practicing DSA to strengthen problem-solving ability.
                Quick to adapt, eager to learn, and capable of completing tasks efficiently.
                
            </p>
            <video width="360" height="360" autoPlay loop muted playsInline className="mt-10">
                <source src={welcomeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
}

export default About;