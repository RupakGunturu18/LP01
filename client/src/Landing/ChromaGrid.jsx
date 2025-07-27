import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
  items,
  className = "",
  cardClassName = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const data = items;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
<div
  ref={rootRef}
  onPointerMove={handleMove}
  onPointerLeave={handleLeave}
  className={`relative w-full h-full flex flex-wrap justify-center items-start gap-6 ${className}`}
  style={{
    "--r": `${radius}px`,
    "--x": "50%",
    "--y": "50%",
    background: "linear-gradient(to bottom right, #1d1d37, #291f48)",
    borderRadius: 32, // optional for curved edge
    padding: 24,      // optional for breathing room
  }}
>
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className={`group relative flex flex-col rounded-[28px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer shadow-xl bg-white ${cardClassName}`}
          style={{
            "--card-border": c.borderColor || "transparent",
            background: c.gradient,
            "--spotlight-color": "rgba(255,255,255,0.3)",
          }}
        >
<div
  className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-30"
// or add inline style directly for opacity, e.g. style={{opacity: 0.3}} 
  style={{
    background:
      "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 90%)",
  }}
/>

          <div className="relative z-10 flex-1 p-0 box-border flex flex-col items-center">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-32 h-32 object-cover rounded-full mt-8 mb-2 shadow-lg"
            />
            <div className="w-full px-6 pb-2 pt-2 flex flex-col items-center">
              <h3 className="text-3xl font-[Montserrat] font-semibold text-black mb-0">{c.title}</h3>
              <div className="uppercase text-gray-400 font-bold text-lg mb-2 tracking-wide">{c.subtitle}</div>
            </div>
          </div>
          <footer className="relative z-10 px-6 pb-6 pt-2 bg-gradient-to-t from-gray-100/90 to-white/70 text-black font-sans rounded-b-[28px]">
            <p className="m-0 text-base font-medium opacity-90">{c.description}</p>
            <div className="flex justify-end mt-4">
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
              </a>
            </div>
          </footer>
        </article>
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
    
  );
};

export default ChromaGrid;