"use client"

import React from 'react'
import { motion } from "framer-motion";
import { Github, Linkedin, LocationEditIcon, Mail, Phone } from 'lucide-react';
import { useGetProfileQuery } from '@/redux/apis/admin.api';

const Footer = () => {

  const { data } = useGetProfileQuery()

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Features", href: "/#features" },
  { name: "Contact", href: "/#contact" },
];
const profile = data?.result

const text = "Kirti";

  return <>
      <footer className="p-10 text-center border-t border-white/10 py-12  bg-gradient-to-br from-gray-100 via-white to-gray-200
          dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 text-lg">

        <div className="my-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10  md:text-left">

          {/* Brand */}
          <div className="flex flex-col md:w-1/3 items-start md:items-start">
            <motion.h1
              className="sm:text-5xl text-3xl md:text-4xl font-bold mb-4 leading-tight font-display flex gap-1 flex-wrap justify-center md:justify-start"
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-t from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}  // faster animation
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
        
            <p className="text-gray-500 text-lg max-w-sm text-start ">
              Fullstack Developer with a passion for creating beautiful, responsive web applications.
            </p>
          </div>
        
          {/* Contact Us */}
          {
            data && data.result.map(item => <div className="flex flex-col md:w-1/3 items-start md:items-start" key={item._id}>
            <h3 className="text-xl font-semibold font-display mb-4">
              Contact Us
            </h3>
        
            <a
              href={`tel:${item.mobile}`}
              className="flex items-center gap-3 mb-3 hover:text-purple-400 transition"
            >
              <Phone size={20} />
              <span>{item.mobile}</span>
            </a>
        
            <a
              href={`mailto:${item.email}`}
              className="flex items-center gap-3 mb-3 hover:text-purple-400 transition"
            >
              <Mail size={20} />
              <span>{item.email}</span>
            </a>

            <a
              href= "https://maps.app.goo.gl/Y5BfSbUaJRTjwnPK7"
              className="flex items-center gap-3 mb-3 hover:text-purple-400 transition text-start"
            >
              <Mail size={20} />
              <span>{item.location}</span>
            </a>

        
            {/* <div className="flex items-center gap-3 text-gray-500 text-start">
              <LocationEditIcon size={20} />
              <span>{item.location}</span>
            </div> */}


          </div>)
          }
        
          {/* Follow Me */}
          <div className="flex flex-col md:w-1/3 items-start md:items-start">
            <h3 className="text-xl font-semibold font-display mb-4">
              Follow Me
            </h3>
        
            <div className="flex gap-5 justify-start md:justify-start">
              
              <a
                href="https://github.com/KirtiShinde18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-purple-300 hover:bg-gradient-to-r from-purple-300 to-indigo-300   transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
        
              <a
                href="https://www.linkedin.com/in/kirtishinde18/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-purple-300 hover:bg-gradient-to-r from-purple-300 to-indigo-300   transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
        
              <a
                href="mailto:kirtishinde3520@gmail.com"
                className="p-3 rounded-full border border-purple-300 hover:bg-gradient-to-r from-purple-300 to-indigo-300   transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
        
            </div>
          </div>

        </div>

        <hr className="border border-white/10  text-center text-gray-500 mb-10 "/>
        © 2026 Kirti Shinde . All rights Reserved. Design by <p className=" bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent"><b>Kreovate Studio</b></p>
      </footer>
  </>
}

export default Footer