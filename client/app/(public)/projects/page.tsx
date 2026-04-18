"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import { useGetProjectQuery } from "@/redux/apis/admin.api";

const text = "Projects";

const Projects = () => {
  const {data: projectData} = useGetProjectQuery()
  const [activeFilter, setActiveFilter] = useState("all");

  const projectsData = {
    projects: [
      {
        title: "📚 E-Saraswati",
        desc: "E-Saraswati is a modern School Management System",
        image: "/assets/images/project1.png",
        tech: ["React", "Next.js", "Node.js", "MongoDB"],
        category: "web",
        live: "https://e-saraswati.vercel.app/",
        github: "https://github.com/KirtiShinde18/eSaraswati",
      },
      {
        title: "📋 Me Planner",
        desc: "A minimal planner app built to manage your day effortlessly",
        image: "/assets/images/project2.png",
        tech: ["React", "Next.js", "Node.js", "MongoDB"],
        category: "mobile",
        live: "https://meplanner.netlify.app/",
        github: "https://github.com/KirtiShinde18",
      },
      {
        title: "💗 Glamiee",
        desc: "A modern clothing eCommerce platform offering seamless shopping",
        image: "/assets/images/project3.png",
        tech: ["React", "Next.js", "Node.js", "MongoDB"],
        category: "web", 
        live: "",
        github: "https://github.com/KirtiShinde18",
      },
    ],
  };



  return (
    <>
      <div className="min-h-screen md:mt-10 flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto z-10 text-center ">
          
          {/* HEADING */}
                <motion.h1 className="sm:text-5xl text-4xl md:text-7xl font-bold mb-4 leading-tight text-center">
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
                <p className="text-gray-400 text-xl md:text-2xl mt-2 mb-0 md:mb-12">
                  Some Of my Recent Work
                </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                          {
                          projectData && projectData.result.map(item =>  (
                              <div
                                  key={item._id}
                                  className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                              >
          
                                  {/* IMAGE */}
                                  <div className="relative h-56 w-full overflow-hidden">
                                      <img
                                        src={item.hero}
                                        alt={item.title}
                                        className="h-full w-full object-cover group-hover:scale-110 transition"
                                      />
                              
                                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
                                  </div>
          
                                  {/* CONTENT */}
                                  <div className="p-6">
                                      <h3 className="text-xl font-semibold">
                                        {item.title}
                                      </h3>
                  
                                      <p className="mt-2 text-gray-400">
                                        {item.desc}
                                      </p>
              
                                      <div className="mt-4 flex flex-wrap gap-2">
                                          {Array.isArray(item.tech)
                                              ? item.tech.map((t: string, i: number) => (
                                                  <span
                                                    key={i}
                                                    className="px-2 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400"
                                                  >
                                                    {t}
                                                  </span>
                                                ))
                                              : item.tech?.split(",").map((t: string, i: number) => (
                                                  <span
                                                    key={i}
                                                    className="px-2 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400"
                                                  >
                                                    {t.trim()}
                                                  </span>
                                          ))}
                                      </div>
              
                                      <div className="mt-6 flex gap-4">
                                
                                          <a
                                            href={item.liveURL}
                                            target="_blank"
                                            className="px-4 py-2 text-black bg-gradient-to-r from-purple-200 to-indigo-200 hover:scale-105 transition-transform duration-300 shadow-lg rounded-md text-sm"
                                          >
                                            Live Demo
                                          </a>
                          
              
                                          <a
                                            href={item.githubURL}
                                            target="_blank"
                                            className="px-4 py-2 border border-white/20 rounded-md flex items-center gap-2"
                                          >
                                            <Github size={16} /> GitHub
                                          </a>
                                      </div>
              
                                  </div>
                              </div>
                          ))
                      }
                    </div>

        </div>
      </div>
    </>
  );
};

export default Projects;