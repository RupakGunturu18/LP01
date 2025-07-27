import React from "react";
import { motion } from "framer-motion";
import AboutUsSection from "./AboutUsSection.jsx";
import ScrollStackExample from './ScrollStackExample';
import AIEcosystemSection from './AIEcosystemSection';
import ChromaGrid from './ChromaGrid';
import Navbar from './Navbar.jsx'; // adjust path as needed
import Footer from "./Footer.jsx";


const imageUrl =
  "https://thumbs.dreamstime.com/b/event-management-concept-meeting-white-office-table-93231489.jpg";

const leadershipItems = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Shayak",
    subtitle: "CEO/CTO",
    description: "Former Navy officer and seasoned entrepreneur, combining defense expertise with global e-commerce experience to drive AI-led transformation in commerce.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #0a1020 60%, #3B82F6 100%)",
    url: "https://linkedin.com/in/shayak"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Archana",
    subtitle: "COO",
    description: "Dynamic leader blending creative vision with operational expertise, co-founding ventures that transform the future of commerce.",
    borderColor: "#6366f1",
    gradient: "linear-gradient(145deg, #0a1020 60%, #6366f1 100%)",
    url: "https://linkedin.com/in/archana"
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Daniel",
    subtitle: "CRO",
    description: "Business leader and technical solutions architect helping companies drive value with AI, and was formerly the CEO/CTO of a unified communications company.",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #0a1020 60%, #10B981 100%)",
    url: "https://linkedin.com/in/daniel"
  }
];

const splitText = "OUR STORY".split("");

const letterVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.07
    }
  }
};

const placeholderVariants = {
  initial: { scale: 0.7, opacity: 0, y: 20 },
  animate: { scale: 1, opacity: 1, y: 0 }
};

const staggerDelays = [0.0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8];

const zPhotoPlaceholders = [
  { top: 10, left: -5 },
  { top: 0, left: 140 },
  { top: 100, left: 280 },
  { top: 200, left: 180 },
  { top: 220, left: 0 },
  { top: 380, left: 120 }

];

const bigImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1eea0bbc164?auto=format&fit=crop&w=700&q=80"
];

const zPhotoImages = [
  "https://media.istockphoto.com/id/1297821882/vector/print-and-typography-services-banner-flat-vector-illustration-isolated.jpg?s=612x612&w=0&k=20&c=Ugasx7KlI0QHVNk-62dL0SGMPLnLjYzLO77NERqSu4E=", // Or use a photo URL
  "https://www.kdmevents.co.uk/_cache/is-event-management-503x327.jpg",
  "https://img.freepik.com/premium-vector/event-management-wedding-planner-manager-planning-event-conference-party_501813-2157.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2023/3/295133854/TJ/YR/WW/156624171/event-management-website-services-500x500.jpg",
  "https://www.ticketfairy.com/blog/wp-content/uploads/2022/11/event-planning-skills-feature.jpg",
  "https://cdn.dribbble.com/userupload/19454256/file/original-227e70d853258834b8cb6c7e447562d8.gif",
  "https://www.ticketfairy.com/blog/wp-content/uploads/2022/11/event-planning-skills-feature.jpg",
  ""
];

const photoLayout = [
  { top: 30, left: 0, rotate: -8 },
  { top: 70, left: 110, rotate: 4 },
  { top: 110, left: 220, rotate: -5 },
  { top: 40, left: 230, rotate: 8 }
];


<div style={{
  flex: 1,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#161629"
}}>
  <div style={{
    width: 520,
    height: 440,
    position: "relative"
  }}>
    {bigImages.map((url, idx) => (
      <img
        key={idx}
        src={url}
        alt={`Polaroid ${idx + 1}`}
        style={{
          position: "absolute",
          top: photoLayout[idx]?.top || 0,
          left: photoLayout[idx]?.left || 0,
          width: 180,
          height: 180,
          objectFit: "cover",
          borderRadius: 14,
          border: "8px solid #fff",
          boxShadow: "0 10px 40px rgba(0,0,0,0.19)",
          transform: `rotate(${photoLayout[idx]?.rotate || 0}deg)`,
          zIndex: idx + 1
        }}
      />
    ))}
  </div>
</div>

export default function HeroSplitScreen() {
  return (
    
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Reuse Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          fontFamily: "'Montserrat', Arial, sans-serif",
          overflow: "hidden",
          position: "relative",
          
        }}
      >
        {/* Left: Animated Heading */}
        <motion.div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 5vw",
            zIndex: 2,
          }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Split Text Animation for OUR STORY */}
          <motion.h3
            className="text-animate fade-in"
            style={{
              fontSize: "2.6vw",
              fontWeight: 900,
              letterSpacing: "0.14em",
              color: "transparent",
              WebkitTextStroke: "1.5px #fff",
              textTransform: "uppercase",
              marginBottom: "2vw",
              display: "flex",
              gap: "0.1em"
            }}
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {splitText.map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                style={{
                  display: "inline-block",
                  minWidth: char === " " ? "0.5em" : undefined
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h3>
          <div className="text-animate slide-up" style={{ transitionDelay: "0.3s" }}>
  <span
    style={{
      display: "block",
      fontSize: "3.2vw", // Reduced size
      fontWeight: 700,
      color: "#fff",
      fontFamily: "'Poppins', Arial, sans-serif",
      marginBottom: "0.3vw",
      letterSpacing: "0.08em",
      textAlign: "left"
    }}
  >
    WE BELIEVE IN EMPOWERING
  </span>
</div>
<div className="text-animate slide-up" style={{ transitionDelay: "0.5s" }}>
  <span
    style={{
      display: "block",
      fontSize: "4.5vw",
      fontWeight: 900,
      color: "#a259f7",
      fontFamily: "'Poppins', Arial, sans-serif",
      marginBottom: "0.1vw",
      letterSpacing: "0.08em",
      textAlign: "left"
    }}
  >
    CREATIVITY  & <br></br>
    SIMPLICITY
  </span>
</div>
          <div
            className="text-animate fade-in"
            style={{ transitionDelay: "0.7s" }}
          >
            <p
              style={{
                fontSize: "1.4vw", // slightly reduced for better fit
                color: "#cbd5e1",
                lineHeight: 1.7,
                marginTop: "0.5vw",
                maxWidth: "60vw", // increased width for more space
                fontWeight: 500,
                fontFamily: "'Poppins', 'Montserrat', Arial, sans-serif",
                letterSpacing: "0.01em",
                textShadow: "0px 3px 12px rgba(0,0,0,0.4)",
                wordBreak: "break-word", // ensures no overflow
              }}
            >
              The event management world faces many challenges today, but no community is better equipped than ours to overcome them. Through passion, innovation, and collaboration, we lead the way forward.
            </p>
          </div>
        </motion.div>

        {/* Right Image */}
        {/* Right: Z-shaped Placeholders */}
        <div
  style={{
    flex: 1,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#161629",
    overflow: "hidden",
    flexDirection: "column"
  }}
>
  <div
  style={{
    background: "linear-gradient(to bottom right, #1d1d37, #291f48)", // purple gradient similar to AboutUsSection
    borderRadius: 24,
    padding: 24,
    boxShadow: "0 20px 40px rgba(41, 31, 72, 0.6)", // shadow similar to AboutUsSection's shadow-purple-900/35
    width: 430,  // increased width to accommodate padding and image sizes nicely
    height: 400, // increased height for similar reasons
    position: "relative",
    margin: "0 auto",
    pointerEvents: "none",
    marginTop: "0vh" // keep your upward shift here as you want
  }}
>
{zPhotoPlaceholders.map((pos, idx) => {
  const imgURL = zPhotoImages[idx];
  const styleCommon = {
    position: "absolute",
    top: pos.top,
    left: pos.left,
    width: 220,         // Enlarged size, adjust as needed
    height: 170,        // Enlarged size, adjust as needed
    border: "4px solid #fff",
    borderRadius: 5,
    boxShadow: "0 6px 20px rgba(0,0,0,0.13)",
    zIndex: idx + 1
  };

  return imgURL ? (
    <motion.img
      key={idx}
      src={imgURL}
      alt={`photo ${idx + 1}`}
      style={styleCommon}
      variants={placeholderVariants}
      initial="initial"
      animate="animate"
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: staggerDelays[idx]
      }}
    />
  ) : (
    <motion.div
      key={idx}
      style={{ ...styleCommon, background: "#222" }}
      variants={placeholderVariants}
      initial="initial"
      animate="animate"
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: staggerDelays[idx]
      }}
    />
  );
})}

  </div>
</div>
        {/* Text Overlay */}
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            zIndex: 1,
            background:
              "linear-gradient(110deg, rgba(20,20,20,0.6) 58%, rgba(30,8,48,0.25) 100%)",
          }}
        />
      </div>

      {/* CSS Animations */}
      <style>{`
  .image-animate {
    opacity: 0;
    transform: scale(1.08) translateX(60px);
    animation: imgEntrance 1.4s ease-out forwards 0.3s;
  }
  @keyframes imgEntrance {
    to {
      transform: scale(1) translateX(0);
      opacity: 1;
    }
  }

  .text-animate {
    opacity: 0;
    transform: translateY(40px);
    animation: textAppear 1.2s ease forwards;
  }

  .fade-in {
    animation: fadeIn 1.2s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes textAppear {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 900px) {
    .text-animate span {
      font-size: 6.5vw !important;
    }
    .text-animate p {
      font-size: 4vw !important;
    }
    .image-animate {
      width: 95% !important;
      height: 70vh !important;
      left: 0 !important;
    }
  }
  @media (max-width: 600px) {
    .text-animate h3 {
      font-size: 6vw !important;
    }
    .text-animate span {
      font-size: 8vw !important;
    }
    .image-animate {
      width: 100% !important;
      height: auto !important;
      left: 0 !important;
    }
  }
  `}</style>
      {/* About Us Section */}
      <AboutUsSection />
      {/* AI Ecosystem Section */}
      <AIEcosystemSection />

      {/* Slides Section */}
      <div style={{ height: '100vh' }}>
        <ScrollStackExample />
      </div>

      {/* Leadership Section */}
     <section
  className="w-full flex flex-col items-center justify-center py-16"
  style={{
    background: "#000", // Black background for this section
  }}
>
  <h2
    className="text-7xl font-extrabold text-white text-center mb-12 tracking-tight"
    style={{
      fontFamily: "'Poppins', Arial, sans-serif",
      letterSpacing: "0.04em"
    }}
  >
    Our Leadership
  </h2>

  <div className="w-full flex justify-center">
    <div
      style={{
        height: '600px',
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'center',
        // background: "rgba(0,0,0,0.6)", // Black with opacity
        alignItems: 'center',
        gap: '2.5rem',
      }}
    >
      <ChromaGrid
        items={leadershipItems}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
        className="w-full flex justify-center items-center gap-10"
  cardClassName="w-[350px] h-[500px] bg-[#101426] rounded-[28px] shadow-2xl"
        cardStyle={{
    background: "#000", // Black background for this section
          borderRadius: 28,
        }}
      />
    </div>
  </div>

  <Footer />
</section>



    </div>
  );
}
