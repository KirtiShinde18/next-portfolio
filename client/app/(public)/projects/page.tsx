"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useGetProjectQuery } from "@/redux/apis/admin.api";

const text = "Projects";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const { data: projectData } = useGetProjectQuery();

  // 🔥 FILTER LOGIC
  const filteredData = projectData?.result?.filter((item: any) => {
    if (activeTab === "All") return true;
    return item.category === activeTab;
  });

  return (
    <div className="min-h-screen w-full px-4 md:px-8 lg:px-12">
      
      {/* ================= HERO SECTION ================= */}
      <div className="max-w-6xl mx-auto text-center mt-20 md:mt-28">
        
        {/* HEADING */}
        <motion.h1 className="sm:text-5xl text-4xl md:text-7xl font-bold mb-4 leading-tight">
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
        <p className="text-gray-400 text-lg md:text-2xl mt-2">
          Some Of my Recent Work
        </p>
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="max-w-6xl mx-auto mt-10 md:mt-14">

        {/* ================= TABS ================= */}
        <div className="flex justify-center md:justify-start gap-3 flex-wrap mb-8">
          
          <button
            onClick={() => setActiveTab("All")}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === "All"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActiveTab("Web App")}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === "Web App"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            🌐 Website
          </button>

          <button
            onClick={() => setActiveTab("Mobile App")}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === "Mobile App"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            📱 App
          </button>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">

          {filteredData?.length ? (
            filteredData.map((item: any) => (
              <div
                key={item._id}
                className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                
                {/* IMAGE */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.hero}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-1">

                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <p className="mt-2 text-gray-400 text-sm flex-1">
                    {item.desc}
                  </p>

                  {/* TECH */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {Array.isArray(item.tech)
                      ? item.tech.map((t: string, i: number) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400"
                          >
                            {t}
                          </span>
                        ))
                      : item.tech?.split(",").map((t: string, i: number) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400"
                          >
                            {t.trim()}
                          </span>
                        ))}
                  </div>

                  {/* LINKS */}
                  <div className="mt-5 flex gap-3">
                    <a
                      href={item.liveURL}
                      target="_blank"
                      className="flex-1 text-center px-3 py-2 text-black bg-gradient-to-r from-purple-300 to-indigo-300 hover:scale-[1.03] transition rounded-md text-sm"
                    >
                      Live
                    </a>

                    <a
                      href={item.githubURL}
                      target="_blank"
                      className="flex-1 text-center px-3 py-2 border border-white/20 rounded-md text-sm"
                    >
                      GitHub
                    </a>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 mt-10">
              No projects found
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Projects;