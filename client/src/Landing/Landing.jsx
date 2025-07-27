import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import config from '../utils/config.js';
import Threads from './Threads';
import SplitText from './SplitText';
import logo from '../assets/logo.png';


// Cards asset imports (adjust path if necessary)
import studioOwnerImg from '../assets/photography-studio-vector-31936823-removebg-preview.png';
import photographerImg from '../assets/camera-with-strap-flat-style-vector-removebg-preview.png';
import printingVendorImg from '../assets/Printingvendor.png';
import clientImg from '../assets/Client1.png';

import CardSwap, { Card } from './CardSwap';
import { motion } from 'framer-motion';
import { User, Phone, MapPin } from 'lucide-react';
import CircularGallery from './CircularGallery';
import TestimonialsSection from './TestimonialsSection';
import ContactUsSection from './ContactUsSection.jsx';
import { Mail, } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import useScrollSpy from './UseScrollSpy.js'; // Adjust the path as needed

function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <FaFacebookF color="#a78bfa" size={20} />
      <FaTwitter color="#a78bfa" size={20} />
      <FaInstagram color="#a78bfa" size={20} />
      <FaLinkedinIn color="#a78bfa" size={20} />
    </div>
  );
}

// Icon Components (lightweight inline SVGs)
const FeatureIcon = ({ children }) => (
  <div className="bg-gray-800 p-3 rounded-full mb-4">
    {children}
  </div>
);

// Place these at the top of your Landing.jsx or import from a separate file

const UserIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="12" r="6" fill="#a78bfa"/>
    <ellipse cx="16" cy="24" rx="10" ry="6" fill="#a78bfa" fillOpacity="0.5"/>
  </svg>
);

const DealIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12" fill="#c084fc" />
    <path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PipelineIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <rect x="6" y="10" width="20" height="12" rx="3" fill="#a5b4fc"/>
    <rect x="10" y="14" width="12" height="4" rx="2" fill="#fff"/>
  </svg>
);

const ReportIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <rect x="8" y="8" width="16" height="16" rx="4" fill="#f472b6"/>
    <path d="M12 20v-4m4 4v-8m4 8v-2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MeetingIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <rect x="6" y="10" width="20" height="12" rx="3" fill="#818cf8"/>
    <circle cx="16" cy="16" r="3" fill="#fff"/>
    <rect x="22" y="14" width="2" height="4" rx="1" fill="#fff"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <rect x="6" y="10" width="20" height="12" rx="3" fill="#fbbf24"/>
    <path d="M8 12l8 6 8-6" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const TechIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="14" fill="#a78bfa" fillOpacity="0.2"/>
    <path d="M10 22l6-12 6 12" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="22" r="2" fill="#a78bfa"/>
  </svg>
);

const Landing = () => {

    const sectionIds = ['features', 'stakeholders', 'testimonials', 'contact']; 
    const activeSection = useScrollSpy(sectionIds);
  const features = [
    {
      icon: <UserIcon />, 
      title: "User Information", 
      desc: "Profiles and contact details for all network members in one place."
    },
    {
      icon: <DealIcon />, 
      title: "Deal Tracking", 
      desc: "Monitor project deals and opportunities in real-time."
    },
    {
      icon: <PipelineIcon />, 
      title: "Pipeline Management", 
      desc: "Visualize and manage your entire project pipeline easily."
    },
    {
      icon: <ReportIcon />, 
      title: "Reporting Dashboard", 
      desc: "Analytics and reports on performance, revenue, and engagement."
    },
    {
      icon: <MeetingIcon />, 
      title: "Meeting Scheduling", 
      desc: "Book and manage meetings with built-in calendar tools."
    },
    {
      icon: <EmailIcon />, 
      title: "Email Tracking", 
      desc: "Track, schedule, and centralize all your project emails."
    },
    {
      icon: <TechIcon />, 
      title: "Deal and Tech Data Tracking", 
      desc: "Keep all deal requirements and milestones organized."
    },
  ];

  // Remove rocketLaunched, showFlame, and handleRocketLaunch state and logic

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-gray-900/60 backdrop-blur-lg border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[80px]">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img 
                  src={logo} 
                  alt="GenZGalaxy Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div className="flex-shrink-0 text-white"
                     style={{
                       fontFamily: '"Lexend Deca", sans-serif',
                       fontWeight: 600,
                       fontSize: '24px',
                       lineHeight: '32px',
                     }}>
                  {config.APP_NAME || 'GenZGalaxy'}
                </div>
              </div>

              {/* Center Navigation */}
              <div className="hidden md:flex items-center justify-center flex-1 px-8">
                <div className="flex items-baseline space-x-10">
                <Link to="/our" className="...">Our Story</Link>

                  {['Features', 'Benefits', 'Testimonials', 'Contact Us' , ].map((item, index) => (
                    <a key={index}
                       href={item === 'Benefits' ? '#stakeholders' : item === 'Contact Us' ? '#contact' : `#${item.toLowerCase().replace(/\s+/g, '')}`}
                       className="relative py-2 text-white hover:text-purple-300 transition-colors duration-200 group"
                       style={{
                         fontFamily: '"Lexend Deca", sans-serif',
                         fontWeight: 600,
                         fontSize: '16px',
                         lineHeight: '20px',
                       }}>
                      {item}
<span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Side Buttons */}
              <div className="flex items-center space-x-5">
                <Link to="/login"
                      className="text-white/90 hover:text-white transition-colors duration-200"
                      style={{
                        fontFamily: '"Lexend Deca", sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '20px',
                      }}>
                  Sign in
                </Link>
                <Link to="/signup"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
                      style={{
                        fontFamily: '"Lexend Deca", sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '20px',
                      }}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
    </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Threads
            color={[0.6, 0.2, 0.8]}
            amplitude={1}
            distance={0.2}
            enableMouseInteraction={true}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto py-8">
          <div className="mb-7">
<div className="max-w-7xl mx-auto py-8">
  <SplitText
    text={`Streamline your creative workflow ..... from click to client.`}
    className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 p-2 whitespace-pre-line"
    style={{
      fontFamily: "'Poppins', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }}
    delay={50}
    splitType="chars"
  />
</div>
          </div>
<p className="text-xl md:text-3xl text-gray-300 max-w-2xl mx-auto mb-12 mt-4"
             style={{
               fontFamily: "'Lexend Deca', sans-serif",
               fontWeight: 400,
               fontSize :'1.50rem',
               WebkitFontSmoothing: 'antialiased',
               MozOsxFontSmoothing: 'grayscale',
             }}>
Our project revolutionizes the client journey with a fully digital, paperless workflow from booking to delivery, ensuring transparency, seamless communication, and efficiency. We emphasize reliability and professionalism to provide a hassle-free, tailored experience for modern clients.          </p>
          <div className="flex space-x-4 justify-center mb-12">
            <Link to="/demo" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold shadow-lg transition">Request Demo</Link>
            <a href="#features" className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold transition">Explore Features</a>
          </div>
          
        </div>
      </section>



      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#18192a] min-h-[80vh]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 tracking-tight"
              style={{
                fontFamily: "'Montserrat', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                textShadow: '0 2px 20px rgba(255, 255, 255, 0.1)',
                lineHeight: 1.2,
                paddingTop: '0.25em',
                paddingBottom: '0.25em',
              }}>
            An End-to-End Solution
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18
                }
              }
            }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                className={`
                  group relative bg-gradient-to-br from-[#23244a] to-[#1a1b2e] p-7 rounded-2xl border border-[#2d2e4d]
                  shadow-lg transition-all duration-300
                  hover:scale-[1.03] hover:shadow-purple-500/20
                  ${idx === 6 ? "lg:col-span-2 row-span-1" : ""}
                  flex flex-col justify-between
                  overflow-hidden
                `}
                style={{
                  minHeight: idx === 6 ? "220px" : "180px",
                  position: "relative"
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                }}
                
                viewport={{ amount: 0.2 }}
              >
                {/* Animated background blob for the last card */}
                {idx === 6 && (
                  <span className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tr from-purple-600/30 to-pink-500/20 rounded-full blur-2xl animate-pulse z-0"></span>
                )}
                <div className="relative z-10">
                  <span className="mb-4 block transition-transform duration-300 group-hover:scale-110">{feature.icon}</span>
                  <h3 className="text-xl font-extrabold mb-2 text-white/90 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: '"Lexend Deca", sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-[#b3b6d4] group-hover:text-gray-200 transition-colors duration-300 text-base leading-relaxed whitespace-pre-line">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stakeholder Benefits Section */}
      <section id="stakeholders" className="py-20 px-4 bg-gradient-to-br from-[#221242] via-[#18192a] to-[#1c1136]">
      <StakeholderSection />
      </section>

<TestimonialsSection />
<ContactUsSection />
     
      {/* Community/Join Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
        <p className="text-lg text-gray-400 mb-8">Connect with other professionals and stay ahead of the curve.</p>
        <Link to="/join" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold shadow-lg transition">Join Now</Link>
      </section>

      {/* Footer */}
<footer className="bg-[#181731] text-gray-200 px-4 py-8 mt-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-purple-900/35 pb-8">
   {/* Brand & Contact Info */}
<div>
  <div className="flex items-center gap-3 mb-3">
    <img
      src={logo}
      alt="Gen Z Galaxy Logo"
      className="w-10 h-10 rounded-full bg-white p-1 border border-gray-300 shadow"
    />
    <div>
      <span className="block font-bold text-base text-gray-100">Gen Z Galaxy</span>
      <span className="block text-xs text-gray-400">Tech Solutions</span>
    </div>
  </div>
  <ul className="space-y-1 text-sm mt-1 text-gray-400">
    <li className="flex items-center gap-2">
      <Mail size={15} className="text-purple-400" />
      <span>genzgalaxytech@gmail.com</span>
    </li>
    <li className="flex items-center gap-2">
      <Phone size={15} className="text-purple-400" />
      <span>+91 96861 55020</span>
    </li>
    <li className="flex items-center gap-2">
      <MapPin size={15} className="text-purple-400" />
      <span>Gachibowli, Hyderabad, 500032</span>
    </li>
    {/* Social Links BELOW location */}
    <li>
  <div className="flex gap-4 mt-3">
    <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-500">
      <i className="fab fa-facebook-f text-purple-400" />
    </a>
    <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-500">
      <i className="fab fa-twitter text-purple-400" />
    </a>
    <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-500">
      <i className="fab fa-instagram text-purple-400" />
    </a>
    <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" className="transition hover:text-purple-500">
      <i className="fab fa-linkedin-in text-purple-400" />
    </a>
  </div>
</li>

  </ul>
</div>

    {/* Quick Links */}
    <div>
      <div className="font-semibold text-md mb-2 text-gray-100">Quick Links</div>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="#" className="hover:text-purple-400 transition">Features</a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400 transition">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400 transition">Team</a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400 transition">Contact</a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400 transition">Join GenZ</a>
        </li>
      </ul>
    </div>
    {/* Legal */}
    <div>
      <div className="font-semibold text-md mb-2 text-gray-100">Legal</div>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400 transition">Terms of Service</a>
        </li>
      </ul>
    </div>
    {/* Newsletter */}
    <div>
      <span className="font-semibold text-md mb-2 block text-gray-100">Newsletter</span>
      <p className="text-xs text-gray-400 mb-2">Stay updated with our latest news and offers.</p>
      <form className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded bg-[#23213a] border border-gray-600 focus:border-purple-400 transition px-3 py-2 text-white text-sm placeholder-gray-400"
        />
        <button
          type="submit"
          className="rounded bg-purple-600 hover:bg-purple-700 py-2 text-white text-sm font-semibold mt-1 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
  <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 border-t border-gray-700/30 mt-6">
    <span>© {new Date().getFullYear()} GenZGalaxy. All rights reserved.</span>
  </div>
</footer>


    </div>
  );
};

const StakeholderSection = () => {
  const [glow, setGlow] = useState(false);
  const glowTimeout = useRef();

  const handleMouseMove = () => {
    setGlow(true);
    if (glowTimeout.current) clearTimeout(glowTimeout.current);
    glowTimeout.current = setTimeout(() => setGlow(false), 500);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 tracking-tight"
        style={{
          fontFamily: "'Montserrat', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          paddingTop: '0.25em',
          paddingBottom: '0.25em',
        }}
      >
        Empowering Every Role
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="rounded-3xl border border-[#28203e] bg-[#120f1f] p-8 md:p-20 flex flex-col md:flex-row items-center md:items-stretch gap-16 mt-8 shadow-lg overflow-hidden"
        style={{
          minHeight: '520px',
          maxWidth: '1200px',
          margin: '0 auto',
          boxShadow: glow
              ? '0 0 60px 10px rgba(139, 92, 246, 0.45), 0 0 0 4px rgba(139, 92, 246, 0.25)'
              : 'none',
          transition: 'box-shadow 0.3s'
        }}
        onMouseMove={handleMouseMove}
      >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 flex flex-col justify-center items-start max-w-xl"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{fontFamily: 'Lexend Deca, sans-serif'}}>
              One Network - <br />
              Four Roles.
            </h3>
            <p className="text-xl text-gray-400 mb-2">
              Connecting studios, photographers, vendors, and clients with a unified, enterprise-ready platform for seamless project management and collaboration
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="flex-1 flex justify-start items-end"
            style={{ position: 'relative', minHeight: '400px' }}
          >
            <div style={{ height: '100%', width: '100%', position: 'absolute', bottom: 0, left: 0, overflow: 'hidden', padding: 0, margin: 0 }}>
              <CardSwap
                width={'100%'}
                height={'100%'}
                cardDistance={80}
                verticalDistance={50}
                delay={2000}
                pauseOnHover={false}
              >
                {/* Studio Owners */}
                <Card customClass="flex flex-row h-full w-full bg-gradient-to-br from-[#23244a] to-[#1a1b2e] p-6 rounded-2xl shadow-xl border border-purple-400/20 items-start">
                  <img
                    src={studioOwnerImg}
                    alt="Studio Owner"
                    className="w-40 h-40 object-cover rounded-xl shadow-lg"
                  />
                  <div className="flex-1 flex flex-col justify-center ml-8">
                    <h3 className="text-2xl font-bold mb-1 text-purple-200">Studio Owners</h3>
                    <div className="text-md text-purple-100 mb-2 font-semibold">Manage, Optimize, Succeed</div>
                    <p className="text-gray-200 text-base leading-relaxed mb-2">
                      Efficiently manage bookings, staff, and client relations while maximizing studio utilization.
                    </p>
                    <a href="/studio" className="mt-2 inline-block text-purple-300 hover:underline font-semibold">Learn More</a>
                  </div>
                </Card>
  
                {/* Photographers */}
                <Card customClass="flex flex-row h-full w-full bg-gradient-to-br from-blue-900/80 to-blue-700/60 p-6 rounded-2xl shadow-xl border border-blue-400/20 items-start">
                  <img
                    src={photographerImg}
                    alt="Photographer"
                    className="w-40 h-40 object-cover rounded-xl shadow-lg"
                  />
                  <div className="flex-1 flex flex-col justify-center ml-8">
                    <h3 className="text-2xl font-bold mb-1 text-blue-200">Photographers</h3>
                    <div className="text-md text-blue-100 mb-2 font-semibold">Create, Connect, Deliver</div>
                    <p className="text-gray-200 text-base leading-relaxed mb-2">
                      Find work, manage contracts, collaborate with clients, and streamline your creative process.
                    </p>
                    <a href="/photographers" className="mt-2 inline-block text-blue-300 hover:underline font-semibold">Learn More</a>
                  </div>
                </Card>
  
                {/* Printing Vendors */}
                <Card customClass="flex flex-row h-full w-full bg-gradient-to-br from-green-900/80 to-green-700/60 p-6 rounded-2xl shadow-xl border border-green-400/20 items-start">
                  <img
                    src={printingVendorImg}
                    alt="Printing Vendor"
                    className="w-40 h-40 object-cover rounded-xl shadow-lg"
                  />
                  <div className="flex-1 flex flex-col justify-center ml-8">
                    <h3 className="text-2xl font-bold mb-1 text-green-200">Printing Vendors</h3>
                    <div className="text-md text-green-100 mb-2 font-semibold">Print, Process, Fulfill</div>
                    <p className="text-gray-200 text-base leading-relaxed mb-2">
                      Receive, manage, and fulfill print orders seamlessly from a network of professionals.
                    </p>
                    <a href="/printing" className="mt-2 inline-block text-green-300 hover:underline font-semibold">Learn More</a>
                  </div>
                </Card>
  
                {/* Clients */}
                <Card customClass="flex flex-row h-full w-full bg-gradient-to-br from-pink-900/80 to-pink-700/60 p-6 rounded-2xl shadow-xl border border-pink-400/20 items-start">
                  <img
                    src={clientImg}
                    alt="Client"
                    className="w-40 h-40 object-cover rounded-xl shadow-lg"
                  />
                  <div className="flex-1 flex flex-col justify-center ml-8">
                    <h3 className="text-2xl font-bold mb-1 text-pink-200">Clients</h3>
                    <div className="text-md text-pink-100 mb-2 font-semibold">Book, Track, Receive</div>
                    <p className="text-gray-200 text-base leading-relaxed mb-2">
                      A transparent and simple way to book, track, and receive your final photography projects.
                    </p>
                    <a href="/clients" className="mt-2 inline-block text-pink-300 hover:underline font-semibold">Learn More</a>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  };
  
  export default Landing;