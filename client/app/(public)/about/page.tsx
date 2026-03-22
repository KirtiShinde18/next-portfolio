"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

// image 
import kirti from "./../../../public/assets/images/kirti.jpeg"

const text = "About Me";
const tabs = ["Bio", "Education", "Personal"];

const About = () => {
  const [activeTab, setActiveTab] = useState("Bio");

  return <>
  <div className="min-h-screen md:mt-10 mt-20 flex items-center justify-center px-4">
  <div className="max-w-7xl mx-auto z-10 text-center">

    {/* HEADING */}
    <motion.h1
      className="sm:text-5xl text-4xl md:text-7xl font-bold mb-4 leading-tight font-display text-center"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block bg-gradient-to-t from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>

    {/* SUBTEXT */}
    <p className="text-gray-400 text-xl md:text-2xl mt-2 mb-12">
      Get to know me better
    </p>

    {/* GRID SECTION */}
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
    
      {/* LEFT - IMAGE */}
      <div className="relative w-full max-w-[350px] h-[400px] mx-auto">
        <Image
          src={kirti}
          alt="Kirti Shinde"
          fill
          className="object-cover object-center rounded-2xl shadow-xl"
          priority
        />
      </div>
    
      {/* RIGHT - CONTENT */}
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Hello, I'm Kirti 👋
        </h2>
    
        <p className="text-gray-500 text-lg mb-6">
          I'm a passionate developer who loves building modern web applications with clean UI and smooth animations.
        </p>
    
        {/* BUTTONS */}
        <div className="flex gap-4 mb-6 relative ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-5 py-2 font-medium"
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-300 to-indigo-300 px-4 py-2 rounded-lg "
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
    
              <span
                className={`relative z-10 ${
                  activeTab === tab ? "text-black" : "text-gray-400"
                }`}
              >
                {tab}
              </span>
            </button>
          ))}
        </div>
    
        {/* CONTENT */}
        <div className="relative min-h-[100px]">
          <AnimatePresence mode="wait">
            {activeTab === "Bio" && (
              <motion.div
                key="bio"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className=" text-lg"
              >
                I'm a passionate developer who loves building modern UI and smooth animations.
              </motion.div>
            )}
    
            {activeTab === "Education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className=" text-lg"
              >
                MCA student with strong foundation in web development and problem solving.
              </motion.div>
            )}
    
            {activeTab === "Personal" && (
              <motion.div
                key="personal"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className=" text-lg"
              >
                Worked on multiple projects including full-stack apps and UI/UX designs.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    
    </div>

  </div>
</div>
  </>
}

export default About