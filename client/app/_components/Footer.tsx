"use client"

import React from 'react'
import { motion } from "framer-motion";

const Footer = () => {

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Features", href: "/#features" },
  { name: "Contact", href: "/#contact" },
];

const text = "Kirti";

  return <>
      <footer className="p-10 text-center border-t border-white/10 py-12  bg-gradient-to-br from-gray-100 via-white to-gray-200
          dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 text-lg">

      <div className="my-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Brand */}

        <div className="flex flex-col md:w-1/3 text-start ">
            <motion.h1
              className="sm:text-5xl text-3xl md:text-4xl font-bold mb-4 leading-tight font-display flex gap-1"
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-t from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

          <p className="text-gray-500 text-lg">
            Thank You For Visiting our website. Please submit your suggestion & query using the contact form or connect with sales team.
          </p>
        </div>

        
 

        {/* Useful Links */}
        <div className="flex flex-col md:w-1/3 text-lg">
          <h3 className="text-lg font-semibold font-display mb-2">Useful Links</h3>
          <ul className=" space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Us */}
        <div className="flex flex-col md:w-1/3 text-lg">
          <h3 className="text-lg font-semibold font-display mb-2">Contact Us</h3>
          <p><a href="tel:+9209123023" className="hover:text-purple-400 transition-colors duration-300">+91-9209123023</a></p>
          <p> 
            <a href="mailto:kirtishinde3520@gmail.com" className="block hover:text-purple-400 transition-colors duration-300">
              kirtishinde3520@gmail.com
            </a></p>
          <p className="text-gray-500 text-lg">Chh. Sambhaji Nagar , Maharashtra - 431001</p>
        </div>

    </div>

      <hr className="border border-white/10  text-center text-gray-500 mb-10 "/>
      © 2026 Kirti Shinde . All rights Reserved. Design by <p className=" bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent"><b>Kreovate Studio</b></p>
    </footer>
  </>
}

export default Footer