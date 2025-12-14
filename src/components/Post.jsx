import React from "react";

import neymar from "../assets/neymar.mp4";
import neymar2 from "../assets/neymar2.mp4";

const Post = () => {
    return (
        <section className="max-w-[600px] md:max-w-[750px] lg:-[950px] mx-auto my-12">
            <div className="flex items-center justify-center">
                <h1 className="text-[#a9a9b3] text-3xl md:text-4xl lg:text-4xl font-bold">Post</h1>
            </div>

            <h1 className="text-[#a9a9b3] text-3xl md:text-4xl lg:text-4xl font-bold">404 UNDER CONSTRUCTION, well Enjoy neymar edits</h1>

            <video width="360" height="360" autoPlay loop muted playsInline className="mt-10">
                <source src={neymar} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video width="360" height="360" autoPlay loop muted playsInline className="mt-10">
                <source src={neymar2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
}

export default Post;