import React from "react";
import logo3d from "../assets/Camera18.gif";

export default function AIEcosystemSection() {
  return (
    <section className="w-full min-h-[60vh] bg-gradient-to-br from-[#0a1020] via-[#0a1020] to-black flex flex-col md:flex-row items-center justify-center px-6 py-16">
      {/* Left: Text */}
      <div className="flex-1 flex items-center justify-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl font-[Montserrat]">
            We unite the event management community—
            <span className="text-violet-400 font-extrabold">photographers</span>,{" "}
            <span className="text-violet-400 font-extrabold">studios</span>,{" "}
            <span className="text-violet-400 font-extrabold">vendors</span>, and{" "}
            <span className="text-violet-400 font-extrabold">clients</span>
            —on one platform, simplifying every step of your projects.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-blue-200 max-w-xl font-semibold font-[Inter]">
            Built with passion and relentless effort, our solution transforms hard work into seamless collaboration and success for all.
          </p>
        </div>
      </div>
      {/* Right: 3D Illustration */}
      <div className="flex-1 flex items-center justify-center relative w-full h-[500px] md:h-[650px]">
        <img
          src={logo3d}
          alt="3D Company Logo"
          className="w-[450px] h-[450px] md:w-[600px] md:h-[600px] object-contain"
          style={{ boxShadow: "none", background: "none", borderRadius: 0 }}
        />
      </div>
    </section>
  );
}
