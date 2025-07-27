// ScrollStackExample.js
import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import studioOwnerImg from "../assets/Studio.png";
import photographerImg from "../assets/camera-with-strap-flat-style-vector-removebg-preview.png";
import printingVendorImg from "../assets/Printingvendor.png";

const ScrollStackExample = () => {
  return (
    <ScrollStack
      className="w-full h-screen"
      itemDistance={60}
      itemScale={0.05}
      itemStackDistance={20}
      stackPosition="25%"
      scaleEndPosition="15%"
      baseScale={0.9}
      rotationAmount={0}
      blurAmount={0}
    >
      <ScrollStackItem itemClassName="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white h-[26rem] p-16 flex items-center">
        <img
          src={studioOwnerImg}
          alt="Studio Owner"
          className="w-56 h-56 object-contain shadow-none border-none mr-10"
          style={{ background: "none" }}
        />
        <div className="max-w-2xl text-left">
          <h3 className="text-5xl font-black mb-4 font-sans tracking-tight" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
            Studio Owners
          </h3>
          <p className="text-2xl leading-relaxed font-normal font-[Inter]">
            Efficiently manage bookings, staff, and client relations while maximizing studio utilization.
          </p>
        </div>
      </ScrollStackItem>
      <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white h-[26rem] p-16 flex items-center">
        <img
          src={photographerImg}
          alt="Photographer"
          className="w-56 h-56 object-contain shadow-none border-none mr-10"
          style={{ background: "none" }}
        />
        <div className="max-w-2xl text-left">
          <h3 className="text-5xl font-black mb-4 font-sans tracking-tight" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
            Photographers
          </h3>
          <p className="text-2xl leading-relaxed font-normal font-[Inter]">
            Find work, manage contracts, collaborate with clients, and streamline your creative process.
          </p>
        </div>
      </ScrollStackItem>
      <ScrollStackItem itemClassName="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white h-[26rem] p-16 flex items-center">
        <img
          src={printingVendorImg}
          alt="Printing Vendor"
          className="w-56 h-56 object-contain shadow-none border-none mr-10"
          style={{ background: "none" }}
        />
        <div className="max-w-2xl text-left">
          <h3 className="text-5xl font-black mb-4 font-sans tracking-tight" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
            Printing Vendors
          </h3>
          <p className="text-2xl leading-relaxed font-normal font-[Inter]">
            Receive, manage, and fulfill print orders seamlessly from a network of professionals.
          </p>
        </div>
      </ScrollStackItem>
    </ScrollStack>
  );
};

export default ScrollStackExample;
