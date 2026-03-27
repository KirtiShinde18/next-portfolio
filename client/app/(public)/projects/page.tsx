"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";

const text = "Projects";

const Projects = () => {
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

  // FILTER LOGIC
  const filteredProjects =
    activeFilter === "all"
      ? projectsData.projects
      : projectsData.projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <>
      <div className="min-h-screen md:mt-10 flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto z-10 text-center ">
          
          {/* HEADING */}
          <motion.h1 className="sm:text-5xl mt-20 text-4xl md:text-7xl font-bold mb-4 leading-tight text-center">
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
          <p className="text-gray-400 text-xl md:text-2xl mt-2 mb-8">
            A showcase of my work
          </p>

          {/* FILTER BUTTONS */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap mt-20">
            {["all", "web", "mobile"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                // className={`px-5 py-2 rounded-full text-sm capitalize transition-all duration-300
                className={`
                  relative 
                  px-2 sm:px-4 md:px-5 
                  py-1.5 sm:py-2 
                  text-xs sm:text-sm md:text-base 
                  font-medium rounded-lg whitespace-nowrap

                  relative px-5 py-2 font-medium bg-white/10 rounded-lg 
                  
                  ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-purple-300 to-indigo-300 text-black py-2 rounded-lg"
                      : "bg-white/10  hover:bg-white/20"
                  }`}
              >
                {filter === "all"
                  ? "All Projects"
                  : filter === "web"
                  ? "Web App"
                  : "Mobile App"}
              </button>
            ))}
          </div>

          {/* PROJECT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {project.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="px-4 py-2 text-black bg-gradient-to-r from-purple-300 to-indigo-300 hover:scale-105 transition-transform duration-300 shadow-lg rounded-md text-sm"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 border border-white/20 rounded-md flex items-center gap-2"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;