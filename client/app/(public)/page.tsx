
"use client"

import { ArrowRight, ChevronDown, DownloadIcon, Github, Linkedin, MailIcon } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";
import kirti from "./../../public/assets/images/kirti.jpeg"
import Image from 'next/image'
import CountUp from 'react-countup'



/* ===================== CENTRALIZED DATA ===================== */
const profileData = {
  name: "Kirti Shinde",
  role: "Fullstack Web Developer",
  tagline: "Full Stack Developer building scalable and modern web applications",

  aboutTitle: "About Me",
  aboutSubtitle: "Get to know me better",
  aboutDescription: `Full-Stack Developer with a passion for building scalable, user-centric web applications. Expert in bridging the gap between robust backend architecture and intuitive frontend experiences. Proven track record of delivering clean, maintainable code and optimizing performance across the entire stack.`,

  stats: [
    { value: 2, label: "Year's Of Experience" },
    { value: 16, label: "Projects Completed" },
    { value: 15, label: "Technologies" },
    { value: 10, label: "Happy Clients" }
  ],

  social: {
    github: "https://github.com/KirtiShinde18",
    linkedin: "https://www.linkedin.com/in/kirtishinde18/"
  }
}

const skillsData = {
  skillTitle: "Skills",
  skillsSubtitle: "Technologies I work with",

  language: [
    {label: "JavaScript"},
    {label: "React"},
    {label: "Node.js"},
    {label: "TypeScript"},
    {label: "Next.js"},
    {label: "Express"},
    {label: "MongoDB"},
    {label: "Tailwind CSS"},
    {label: "Redux"},
    {label: "Git & GitHub"},
  ]
}

const projectsData = {

  ProjectsTitle: "Featured Projects",
  projectsSubtitle: "Some of my recent work",

  projects : [
    {
      title: "📚 E-Saraswati",
      desc: "E-Saraswati is a modern School Management System",
      image: "/assets/images/project1.png",
      tech: ["React", "Next.js", "Node.js", "MongoDB"],
      live: "https://e-saraswati.vercel.app/",
      github: "https://github.com/KirtiShinde18/eSaraswati",
    },

    {
      title: "👚 Frienzied",
      desc: "A modern clothing eCommerce platform offering seamless shopping and a user-friendly experience",
      image: "/assets/images/project1.png",
      tech: ["React", "Next.js", "Node.js", "MongoDB"],
      live: "https://e-saraswati.vercel.app/",
      github: "https://github.com/KirtiShinde18/eSaraswati",
    },
    
    {
      title: "💗 Glamiee",
      desc: "A modern clothing eCommerce platform offering seamless shopping and a user-friendly experience",
      image: "/assets/images/project1.png",
      tech: ["React", "Next.js", "Node.js", "MongoDB"],
      live: "https://e-saraswati.vercel.app/",
      github: "https://github.com/KirtiShinde18/eSaraswati",
    },

  ]
  
}



/* =========================================================== HOME =========================================================== */

const Home = () => (
  <>
    {/* <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4"> */}
    <div className=" min-h-screen flex items-center justify-center px-4">

      {/* Top-left floating circle */}
      <div className="absolute w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-purple-500/30 rounded-full blur-3xl animate-float top-10 sm:top-16 md:top-20 left-10 sm:left-16 md:left-20 will-change-transform"></div>

      {/* Bottom-right floating circle */}
      <div className="absolute w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-indigo-500/30 rounded-full blur-3xl animate-float bottom-10 sm:bottom-16 md:bottom-20 right-10 sm:right-16 md:right-20 will-change-transform"></div>

      <div className="max-w-7xl mx-auto text-center z-10 ">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          {/* <div className="text-center lg:text-left"> */}
            <motion.div
              className="w-full mt-25 md:mt-10 p-10 text-center lg:text-left"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >

            
              {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-white"> */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                I'm {profileData.name} <br />
                <span className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent">
                  {profileData.role}
                </span>
              </h1>
  
              <p className="text-gray-400 mt-6 text-lg sm:text-xl md:text-2xl">
                {profileData.tagline}
              </p>
  
              
  
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
  
                {/* Download PDF */}
                <a href="/KirtiShindeCV.pdf" download className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-purple-300 to-indigo-300  text-black text-lg sm:text-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                    Download PDF <DownloadIcon size={24} />
                  </button>
                </a>
  
                {/* My Works */}

                <a href="/projects" download className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-purple-300 to-indigo-300 text-black text-lg sm:text-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                    My Works 
                  </button>
                </a>
              </div>
  
              {/* Social Links */}
              <div className="flex gap-4 mt-10 ml-5">
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-purple-300 rounded-full hover:bg-purple-500 transition-all duration-300"
                >
                  <Github className="" size={24} />
                </a>
  
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-purple-300 rounded-full hover:bg-purple-500 transition-all duration-300"
                >
                  <Linkedin className="" size={24} />
                </a>
              </div>

            </motion.div>
          {/* </div> */}

          {/* Right Image */}
          <div className="mb-10 mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 relative rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src={kirti}
              alt="Kirti Shinde"
              fill
              className="object-cover object-center"
              priority
            />
            
          </div>

        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white">
          <span className="animate-bounce text-3xl">
            <ChevronDown />
          </span>
        </div>
      </div>
    </div>

    {/* ===========================================================  ABOUT ===========================================================  */}
    <div className=" min-h-screen flex items-center justify-center px-4
          bg-gradient-to-br from-gray-100 via-white to-gray-200
          dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800">

      <div className="max-w-7xl mx-auto z-10">

        {/* 🔥 TOP SECTION (NO animation, NO shift) */}

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h1 className="mt-10 md:mt-5 sm:text-5xl text-4xl md:text-7xl font-bold leading-tight font-display">
            <span className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent">
              {profileData.aboutTitle}
            </span>
          </h1>
      
          <p className='text-gray-400 text-2xl mt-2'>
            {profileData.aboutSubtitle}
          </p>

        </motion.div>

      
        {/* 🔥 BOTTOM SECTION (animation only here) */}
        <div className="mt-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
          {/* Left */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -80 }}   // 👈 left → right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >

            {/* <p className='text-gray-300 text-xl mb-10'> */}
            <p className='mb-10 text-lg sm:text-xl md:text-2xl'>
              {profileData.aboutDescription}
            </p>
      
            <a href="/about">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-purple-400  font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              More About Me <ArrowRight/>
            </button>
            </a>

          </motion.div>
      
          {/* Right (Animated) */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-6 text-center p-10">
                {profileData.stats.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl  shadow-xl p-8 min-w-[100px]">
                   
                    {/* <CountUp
                      end={item.value}
                      duration={1.5}
                      delay={0.3}
                      enableScrollSpy
                      scrollSpyOnce
                      preserveValue
                      className="text-purple-400 text-4xl font-bold"
                    /> */}
                    <p className='text-4xl font-bold text-purple-400'>{item.value}</p>
                    {/* <p className="mt-2 text-gray-300 text-lg">{item.label}</p> */}
                    <p className="mt-2 text-lg">{item.label}</p>

                  </div>
      
                ))}
              </div>
            </motion.div>
          </div>
      
        </div>
      
      </div>

    </div>


    {/* ===========================================================  Skills ===========================================================  */}
    <div className=" min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto z-10">

        {/* 🔥 TOP SECTION (NO animation, NO shift) */}

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h1 className="mt-10 md:mt-5 sm:text-5xl text-4xl md:text-7xl font-bold leading-tight font-display">
            <span className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent">
              {skillsData.skillTitle}
            </span>
          </h1>

          <p className='text-gray-400 text-2xl mt-2'>
            {skillsData.skillsSubtitle}
          </p>

        </motion.div>

        {/* Bottom  */}
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center p-10">
            {skillsData.language.map((item, index) => (
              
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // 👈 stagger effect
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 min-w-[100px]"
              >
                <p className="mt-2 text-lg">{item.label}</p>
              </motion.div>
        
            ))}
          </div>

          {/* button  */}
          <div className="flex justify-center">
            <a href="/skills">
              <button className="my-10 flex items-center gap-2 px-4 py-2 rounded-xl border border-purple-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                View All Skills <ArrowRight/>
              </button>
            </a>
          </div>

        </div>

      </div>

      
    </div>

    {/* ===========================================================  Featured Projects ===========================================================  */}
    <div className=" min-h-screen flex items-center justify-center px-4
          bg-gradient-to-br from-gray-100 via-white to-gray-200
          dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="max-w-7xl mx-auto z-10">

        {/* 🔥 TOP SECTION (NO animation, NO shift) */}

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h1 className="mt-10 md:mt-5 sm:text-5xl text-4xl md:text-7xl font-bold leading-tight font-display">
            <span className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent">
              {projectsData.ProjectsTitle}
            </span>
          </h1>

          <p className='text-gray-400 text-2xl mt-2'>
            {projectsData.projectsSubtitle}
          </p>

        </motion.div>

        {/* Bottom  projects card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projectsData.projects.map((project, index) => (
        
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
  
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
              </div>
        
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
        
                <p className="mt-2 text-gray-400">{project.desc}</p>
        
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400">
                      {t}
                    </span>
                  ))}
                </div>
        
                <div className="mt-6 flex gap-4">
                  <a href={project.live} target="_blank" className="px-4 py-2 text-black bg-gradient-to-r from-purple-300 to-indigo-300 hover:scale-105 transition-transform duration-300 shadow-lg rounded-md text-sm">
                    Live Demo
                  </a>
        
                  <a href={project.github} target="_blank" className="px-4 py-2 border border-white/20 rounded-md flex items-center gap-2">
                    <Github size={16}/> GitHub
                  </a>
                </div>
              </div>
        
            </motion.div>
        
          ))}

        </div>

        {/* button  */}
          <div className="flex justify-center">
            <a href="/projects">
              <button className="my-10 flex items-center gap-2 px-4 py-2 rounded-xl border border-purple-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                View All Projects <ArrowRight/>
              </button>
            </a>
          </div>
        

      </div>
    </div>


    {/* ===========================================================  Get in Touch ===========================================================  */}
    <div className="min-h-96 flex items-center justify-center px-4 ">

      <div className="w-full flex justify-center text-black">
        <div className="w-full max-w-6xl bg-gradient-to-r from-purple-300 to-indigo-300 text-center p-10 rounded-2xl">
          
          <h1 className="mt-10 md:mt-5 text-4xl md:text-5xl font-bold leading-tight font-display">
            Ready to Work Together?
          </h1>
      
          <p className="mt-6 text-lg sm:text-xl md:text-2xl">
            Your ideas deserve to shine—let’s bring them to life together.
          </p>
      
          <div className="flex justify-center">
            <a href="/contact">
              <button className="mt-10 flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-400 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                Get In Touch <MailIcon />
              </button>
            </a>
          </div>
      
        </div>
      </div>
    </div>
      
  </>
)

export default Home