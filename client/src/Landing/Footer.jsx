import React from "react";
import { Mail, Phone, MapPin } from "react-feather";
// Option 1: Local import
// import logo from './assets/logo.png';
// Option 2: Direct URL
const logo = "https://genzgalaxy.tech/assets/logo.png"; // Change to your logo
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
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
  );
}
