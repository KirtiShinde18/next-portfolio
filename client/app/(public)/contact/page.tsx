"use client"

import React from 'react'
import { motion } from "framer-motion";
import FloatingInput from '@/app/_components/FloatingInput';
import { Github, Linkedin, LocationEdit, Mail, Phone } from 'lucide-react';

const text = "Contact";
const contactData = [
  {
    icon: <Mail />,
    title: "Email",
    value: "kirtishinde3520@gmail.com",
    link: "mailto:kirtishinde3520@gmail.com",
  },
  {
    icon: <Phone />,
    title: "Phone",
    value: "+91-9209123023",
    link: "tel:+919209123023",
  },
  {
    icon: <LocationEdit />,
    title: "Location",
    value: "Chhatrapati Sambhaji Nagar, Maharashtra, India",
  },
]

const Contact = () => {
  return <>
  <div className="min-h-screen md:mt-5  flex items-center justify-center px-4">
    <div className="max-w-7xl mx-auto z-10 text-center my-5">
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
      <p className="text-gray-400 text-xl md:text-2xl mt-2 mb-12">
        Let's get in touch
      </p>

      <div className=' gap-6 grid grid-cols-1 lg:grid-cols-2 mb-10  p-10 items-center'>
        {/* left  */}
        <div className=" 
          w-full max-w-3xl 
          
          bg-white/70 dark:bg-white/10 
          text-black dark:text-white
          
          backdrop-blur-xl 
          
          border border-black/10 dark:border-white/20 
          
          rounded-2xl shadow-xl 
          p-10 md:p-16">
  
          {/* Title */}
          <p className="text-start font-semibold text-2xl md:text-3xl">
            Get In Touch
          </p>

          <div className='mt-10'>
            {
              contactData.map((item , index) => (
                <div className='flex gap-5 items-center text-start mt-5' key={index}>
                  {/* icon  */}
                  <div className='bg-gray-200 dark:bg-white/20 p-3 m-2 rounded-full '>
                    {item.icon}
                  </div>

                  {/* text  */}
                  <div>
                    <h1 className='font-bold text-xl'>{item.title}</h1>

                    {item.link ? (
                      <a href="{item.link}" className='text-lg text-gray-500 hover:text-black'>
                        {item.value}
                      </a>
                    ): (
                      <p className='text-lg text-gray-500'>{item.value}</p>
                    )
                  }
                  </div>
                </div>
              ))
            }
          </div>


          {/* follow me  */}
          <h1 className='text-start text-xl font-bold my-6'>Follow me</h1>

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

        

        {/* right  */}
        <div className="
          w-full max-w-3xl 
          
          bg-white/70 dark:bg-white/10 
          text-black dark:text-white
          
          backdrop-blur-xl 
          
          border border-black/10 dark:border-white/20 
          
          rounded-2xl shadow-xl 
          p-10 md:p-16">
  
          {/* Title */}
          <p className="text-center font-semibold text-2xl md:text-3xl">
            Send Me a Message 💬
          </p>
      
          {/* Form */}
          <div className="mt-10 space-y-6">
            
            <FloatingInput label="Name" type="text" />
            <FloatingInput label="Email" type="email" />
            <FloatingInput label="Subject" type="text" />
        
            {/* Textarea */}
            <textarea
              rows={5}
              placeholder="Enter your message..."
              className="
              w-full px-4 py-3
        
              bg-white dark:bg-white/10
              text-black dark:text-white
        
              border border-black/10 dark:border-white/20
              rounded-lg
        
              focus:outline-none
              focus:ring-2 focus:ring-purple-400
              dark:focus:ring-purple-300
        
              hover:border-black/20 dark:hover:border-white/30
        
              transition-all duration-300
              resize-none
              "
            />
        
            {/* Button */}
            <button className="
              w-full py-4 
              text-lg text-black
              bg-gradient-to-r from-purple-300 to-indigo-300 
              rounded-xl font-semibold 
              hover:scale-105 hover:opacity-90 
              transition-all duration-300
            ">
              Send Message 🚀
            </button>
        
          </div>
        </div>

      </div>

    </div>
  </div>
  </>
}

export default Contact