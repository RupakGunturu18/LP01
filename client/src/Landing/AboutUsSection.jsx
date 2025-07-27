import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutImg from '../assets/Aboutus.png';
import { Users, Target, Eye } from 'lucide-react';


const tabs = [
  { label: 'About Us', key: 'about', icon: <Users size={12} className="text-indigo-500" /> },
  { label: 'Our Mission', key: 'mission', icon: <Target size={12} className="text-pink-500" /> },
  { label: 'Our Vision', key: 'vision', icon: <Eye size={12} className="text-purple-500" /> }
];


const aboutText = (
  <div>
    <p className="mb-6 font-bold text-gray-200 text-2xl">
      We unite photographers, studios, vendors, and clients under one intuitive platform—making creative collaboration as easy as it should be.
    </p>
    <p className="text-xl text-gray-400">
      Designed by creators, for creators. Whether you're shooting visuals, planning a campaign, or managing vendors—our workspace removes the noise, connects everything, and lets talent shine.
    </p>
  </div>
);


const missionText = (
  <div>
    <p className="text-xl text-gray-100 leading-8">
      Our mission is to empower every role within the creative pipeline—from freelancers and producers to clients and agencies—by centralizing their tools and streamlining the workflow.
    </p>
    <p className="text-xl text-gray-400 mt-5">
      We believe in automating what's unnecessary, enhancing what matters, and creating trusted partnerships through transparent communication and bold collaboration.
    </p>
  </div>
);


const visionText = (
  <div>
    <p className="text-xl text-gray-100 leading-8">
      Our vision is to lead the next digital transformation in the creative industry by becoming
      the one place studios, creatives, and clients go to work together—without friction.
    </p>
    <p className="text-xl text-gray-400 mt-5">
      We aim to redefine transparency, accessibility, and community-first collaboration—powered by creativity and enabled by technology.
    </p>
  </div>
);


const tabContent = {
  about: aboutText,
  mission: missionText,
  vision: visionText,
};


const tabVariants = {
  initial: { opacity: 0, y: 45 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, type: 'spring', stiffness: 70 }
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: { duration: 0.18 }
  }
};


const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);


  useEffect(() => {
    const index = tabs.findIndex(t => t.key === activeTab);
    if (tabsRef.current[index]) {
      const el = tabsRef.current[index];
      setBarStyle({ left: el.offsetLeft, width: el.clientWidth });
    }
  }, [activeTab]);


  return (
    <section className="w-full py-32 px-4 md:px-14 bg-gradient-to-br from-[#0a1020] via-[#0a1020] to-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
              {/* <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"> */}


        {/* Image Panel */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 45 }}
        >
          <div className="relative mb-10 mt-24 w-[390px] h-[390px] md:w-[520px] md:h-[520px] rounded-full overflow-hidden border-8 border-purple-500 shadow-2xl shadow-purple-900/35"
            style={{ minWidth: 250, minHeight: 250 }}
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <div className="w-[270px] h-[270px] rotate-45 bg-gradient-to-br from-purple-500 to-indigo-400 blur-2xl opacity-30"></div>
            </div>
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full h-full object-cover object-center rounded-full z-20"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-200 text-center tracking-tight font-['Inter',sans-serif] drop-shadow-xl mb-2">
            Gen Z Galaxy Team
          </h2>
          <p className="text-xl text-indigo-300 mt-1 text-center font-['Montserrat'] font-medium drop-shadow">
            Empowering bold creators & clients alike.
          </p>
        </motion.div>

        {/* Tab Content Panel */}
        <div className="flex flex-col w-full">
          {/* Tabs with underline bar */}
          <div className="relative mb-10 mt-2">
            <div className="flex gap-3 flex-wrap md:flex-nowrap bg-[#222134] p-4 rounded-2xl shadow-lg h-20 items-center">
              {tabs.map((tab, i) => (
                <button
                  key={tab.key}
                  ref={el => (tabsRef.current[i] = el)}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 flex flex-col items-center justify-center z-10 py-2 transition
                    ${activeTab === tab.key
                      ? 'text-purple-300 font-bold'
                      : 'text-gray-400 font-medium hover:text-indigo-300'
                    }`}
                  style={{ background: 'none', border: 'none', outline: 'none' }}
                >
                  {tab.icon}
                  <span className="mt-1 text-sm md:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
            {/* Sliding underline bar */}
            <motion.div
              className="absolute bottom-0 h-1 rounded bg-gradient-to-r from-purple-400 to-indigo-400"
              animate={{ left: barStyle.left, width: barStyle.width }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ position: 'absolute', bottom: 0, height: 4, borderRadius: 9999 }}
            />
          </div>

          {/* Animated Tab Content */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative bg-gradient-to-br from-[#1d1d37] to-[#291f48] rounded-3xl p-12 shadow-2xl min-h-[276px] transition-all font-['Montserrat'] text-gray-100 text-2xl"
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutUsSection;
