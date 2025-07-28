// TestimonialsSection.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    image: "https://pngimg.com/d/naruto_PNG63.png",
    quote: "This platform transformed how I run my studio. The unified dashboard is a game-changer!",
    name: "Jane Doe, Studio Owner",
  },
  {
    image: "https://i.pravatar.cc/150?u=user2",
    quote: "Managing gigs has never been easier. The digital contracts feature saves me hours.",
    name: "John Smith, Photographer",
  },
  {
    image: "https://i.pravatar.cc/150?u=user3",
    quote: "Client communication tools make every project more organized and transparent.",
    name: "Priya Patel, Event Client",
  },
  {
    image: "https://i.pravatar.cc/150?u=user4",
    quote: "Sharing assets across venues has never been so seamless!",
    name: "Alex Chen, Studio Owner",
  },
  {
    image: "https://i.pravatar.cc/150?u=user5",
    quote: "The print fulfillment process is easier than ever.",
    name: "Sneha Rao, Printing Vendor",
  },
  {
    image: "https://i.pravatar.cc/150?u=user6",
    quote: "Highly recommended! So fast and reliable.",
    name: "Omar El-Sayed, Photographer",
  },
  {
    image: "https://i.pravatar.cc/150?u=user7",
    quote: "I booked, tracked and received my delivery in one place!",
    name: "Emily Williams, Client",
  }
];

export default function TestimonialsSection() {
  const setactive = "testimonials";
  return (
    <section id="testimonials" className="py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-100 mb-12 font-['Montserrat']">
          Trusted by Professionals
        </h2>
        <Swiper
          modules={[Autoplay, Mousewheel, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
            invert: true
          }}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={32}
          breakpoints={{
            640:  { slidesPerView: 1 },
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div
                className="flex flex-col items-center bg-gradient-to-br from-[#2d2253] to-[#3b2d71] p-8 pt-16 rounded-3xl shadow-2xl border border-purple-500/30 mx-auto"
                style={{
                  width: "340px",
                  height: "420px",
                  boxSizing: "border-box"
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-5 border-4 border-purple-400 object-cover shadow-lg bg-white"
                />
                <span className="block text-5xl text-purple-300 opacity-20 leading-none -mb-4">“</span>
                <p
                  className="text-lg text-white italic font-medium mb-6 leading-relaxed"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical"
                  }}
                >
                  {testimonial.quote}
                </p>
                <span className="text-purple-300 font-bold tracking-wide text-sm">
                  {testimonial.name}
                </span>
                <span className="block text-5xl text-purple-300 opacity-20 rotate-180 text-right -mt-4">”</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
