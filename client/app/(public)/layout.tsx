
import React from "react"
import PublicNavbar from "../_components/PublicNavbar"

const Layout = ({ children }: { children: React.ReactNode }) => {


  return (
    <>
    <PublicNavbar/>
    {children}
    </>
    // <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-start m-2">

    //   {/* LEFT SIDEBAR */}
    //   <div className="space-y-4 z-1">
    //     {data?.result?.map((item: any) => (
    //       <div
    //         key={item._id}
    //         className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl shadow-md p-6 m-5 flex flex-col items-center text-center 
    //         transition-all "
    //       >

    //         {/* NAME */}
    //         {/* <p className="text-lg font-semibold"></p> */}
    //         <img src={item.profileImage} alt="" width={250} className=" rounded-full"/>
    //         <h1 className="text-2xl mt-5 font-bold ">
    //             {item.name}
    //         </h1>

    //         {/* image  */}
    //         <p className="text-2xl md:text-2xl  mb-5 font-bold bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent">
    //             {item.title}
    //         </p>

    //         <ul className="my-5 text-start ">
    //             <li><b>Contact Info :</b></li>
    //             <li className="mt-2 "><b>Email :</b> {item.email}</li>
    //             <li className="mt-2 "><b>Mobile :</b> {item.mobile}</li>
    //             <li className="mt-2 "><b>DOB :</b> {item.dob}</li>
    //             <li className="mt-2 "><b>Address :</b> {item.location}</li>
    //         </ul>

    //         <div  className="flex gap-5 justify-start md:justify-start  ">
    //             <a
    //                 href="https://github.com/KirtiShinde18"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="p-3 rounded-full border border-purple-300 hover:bg-gradient-to-r from-purple-300 to-indigo-300   transition-all duration-300 hover:scale-110"
    //             >
    //                 <Github size={20} />
    //             </a>
    //             <a
    //                 href="https://www.linkedin.com/in/kirtishinde18/"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="p-3 rounded-full border border-purple-300 hover:bg-gradient-to-r from-purple-300 to-indigo-300   transition-all duration-300 hover:scale-110"
    //             >
    //                 <Linkedin size={20} />
    //             </a>
    //         </div>

    //         {/* contact */}
    //         <a href="/contact" download className="w-full sm:w-auto mt-5">
    //           <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-purple-200 to-indigo-200  text-black text-lg sm:text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
    //             Lets Work Together ! 
    //           </button>
    //         </a>

    //       </div>
    //     ))}
    //   </div>

    //   {/* RIGHT CONTENT */}
    //   <div className=" p-6">
    //     <PublicNavbar />
    //     {children}
    //   </div>

    // </div>
  )
}

export default Layout