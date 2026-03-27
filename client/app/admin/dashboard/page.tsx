"use client"

import React, { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";
import { useSignoutAdminMutation } from '@/redux/apis/auth.api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const text = "Admin Dashboard";
const tabs = ["Bio", "Education", "Personal"];




const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Education");
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
 <div className="max-w-7xl mx-auto z-10 text-center bg-red-50">
     {/* HEADING */}
      <motion.h1 className="sm:text-2xl mt-20 text-xl md:text-4xl font-bold mb-4 leading-tight text-start">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
  
      {/* SUBTEXT */}
      <p className="text-gray-400 text-start text-sm md:text-xl mt-2 mb-12">
        Manage Your Portfolio Content
      </p>

      {/* BUTTONS */}
      <div className="flex justify-between items-center mb-6">
        {/* Tabs */}
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-5 py-2 font-medium bg-white/10 hover:bg-white/20 rounded-lg"
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-300 to-indigo-300 px-4 py-2 rounded-lg"
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

        {/* Logout button */}
        <button 
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>

   
     

    </div>
  </div>
  </>
}

export default AdminDashboard