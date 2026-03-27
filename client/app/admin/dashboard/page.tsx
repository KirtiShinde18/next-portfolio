"use client"

import React, { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";
import { useSignoutAdminMutation } from '@/redux/apis/auth.api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Edit } from 'lucide-react';

const text = "Admin Dashboard";
const tabs = [ "About", "Stats", "Skills", "Projects", "Experience", ];




const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isOpen, setIsOpen] = useState(false);

  const [logoutAdmin] = useSignoutAdminMutation();
  const router = useRouter()

  // logout 
  const handleLogout = async () => {
  try {
    await logoutAdmin().unwrap(); // 🔥 clears cookie and triggers slice
    toast.success("Logout success");
    router.push("/admin"); // redirect to login page
  } catch (error) {
    toast.error("Unable to logout");
  }
};

  return <>
  <div className="min-h-screen md:mt-10 px-4 ">
 <div className="max-w-7xl mx-auto z-10 text-center ">
     <div className="flex items-center justify-between mt-20">
  
  {/* HEADING */}
  <motion.h1 className="sm:text-2xl text-xl md:text-4xl font-bold leading-tight text-start">
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.h1>

  {/* Logout button */}
  <button 
    onClick={handleLogout}
    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
  >
    Logout
  </button>

</div>
      {/* SUBTEXT */}
      <p className="text-gray-400 text-start text-sm md:text-xl mt-2 mb-12">
        Manage Your Portfolio Content
      </p>

      {/* BUTTONS */}
      <div className="flex justify-between items-center mb-6">
        {/* Tabs */}
        <div className="flex gap-2 bg-gray-100 dark:bg-white/10 p-2 rounded-2xl overflow-x-auto no-scrollbar">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className="relative px-4 py-2 font-medium rounded-lg whitespace-nowrap flex-shrink-0"
    >
      {activeTab === tab && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-lg"
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
        
      </div>

      {/* about  */}
      <div className="mt-6">
        {activeTab === "About" && (
          <div className="p-4 bg-gray-50  dark:bg-white/10 rounded-xl shadow text-start">
            
            <div className='flex justify-between'>

              <h2 className="text-xl font-bold py-2">About Informations </h2>

              {/* Edit button */}
              <button 
  onClick={() => setIsOpen(true)}
  className="px-3 py-2 flex items-center gap-2 
             bg-black text-white rounded-lg 
             hover:bg-black/70
             sm:px-4"
>
  <Edit size={18} />

  {/* Hide text on small screens */}
  <span className="hidden sm:inline">Edit</span>
</button>

              {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  
                  {/* Modal Box */}
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl w-[95%] max-w-2xl shadow-xl max-h-[90vh] flex flex-col">
                    
                    {/* Header */}
                    <div>
                      <h2 className="text-xl font-semibold">Edit About Information</h2>
                      <p className="text-gray-400 mb-4">
                        Update Your Personal and Professional information below
                      </p>
                    </div>
                  
                    {/* Scrollable Content */}
                    <div className="overflow-y-auto pr-2">
                      
                      {/* name */}
                      <input 
                        type="text" 
                        placeholder="Name"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                      />
                  
                      {/* Title */}
                      <input 
                        type="text" 
                        placeholder="Title"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                      />
                  
                      {/* Bio */}
                      <textarea 
                        rows={3}
                        placeholder="Bio"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none"
                      />
                  
                      {/* Journey */}
                      <textarea 
                        rows={4}
                        placeholder="Journey"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none"
                      />
                  
                      {/* Current Work */}
                      <textarea 
                        rows={3}
                        placeholder="Current Work"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none"
                      />
                  
                      {/* DOB */}
                      <input 
                        type="date" 
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                      />
                  
                      {/* Location */}
                      <input 
                        type="text" 
                        placeholder="Location"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                      />
                  
                      {/* Email */}
                      <input 
                        type="email" 
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                      />
                  
                      {/* Phone */}
                      <input 
                        type="number" 
                        placeholder="Phone"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                      />

                      {/* Languages */}
                      {/* <input 
                        type="text" 
                        placeholder="Languages"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                      /> */}

                      {/* Profle Url */}
                      <input 
                        type="text" 
                        placeholder="Profle Url Optional"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                      />
                  
                    </div>
                  
                    {/* Buttons (fixed bottom) */}
                    <div className="flex justify-end gap-3 pt-4  mt-4">
                      <button 
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-gray-300 rounded-lg"
                      >
                        Cancel
                      </button>
                  
                      <button  className="px-4 py-2 bg-black text-white rounded-lg">
                        Update
                      </button>
                    </div>
                  
                  </div>

                </div>
              )}

            </div>
            <p></p>
          </div>
        )}

        {/* Stats  */}
        {activeTab === "Stats" && (
          <div className="p-4 bg-gray-50  dark:bg-white/10 rounded-xl shadow text-start">
            <h2 className="text-xl font-bold">Stats</h2>
            <p></p>
          </div>
        )}

        {/* Skills  */}
        {activeTab === "Skills" && (
          <div className="p-4 bg-gray-50  dark:bg-white/10 rounded-xl shadow text-start">
            <h2 className="text-xl font-bold">Skills</h2>
            <p></p>
          </div>
        )}

        {/* Projects  */}
        {activeTab === "Projects" && (
          <div className="p-4 bg-gray-50  dark:bg-white/10 rounded-xl shadow text-start">
            <h2 className="text-xl font-bold">Projects</h2>
            <p></p>
          </div>
        )}

        {/* Experience  */}
        {activeTab === "Experience" && (
          <div className="p-4 bg-gray-50  dark:bg-white/10 rounded-xl shadow text-start">
            <h2 className="text-xl font-bold">Experience</h2>
            <p></p>
          </div>
        )}
      </div>

   
     

    </div>
  </div>
  </>
}

export default AdminDashboard