"use client"

import { Edit } from "lucide-react"
import React, { useEffect, useState } from "react"
import clsx from "clsx"
import { useAddProfileMutation, useGetProfileQuery, useUpdateProfileMutation } from "@/redux/apis/admin.api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"


const optionalFileList = z.any().refine(
    (files) => !files || files.length === 0 || files[0] instanceof File,
    "Invalid file"
)

type ProfileFormValues = {
  name : string
  title : string
  bio : string
  journey : string
  work : string
  dob : string
  location : string
  email : string
  mobile : string
  language : string
  profilePic? : FileList
  yearExp: string,
  projectsCompleted: string,
  technologies: string,
  happyClients: string,

}



const Profile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [updatePF, setUpdatePF] = useState(false)

  const [addProfile] = useAddProfileMutation()
  const [updateProfile, {isLoading}] = useUpdateProfileMutation()
  
  const { data } = useGetProfileQuery()
  const isProfileExist = (data?.result?.length ?? 0) > 0
  
  const profile = data?.result?.[0]
  const [preview, setPreview] = useState<string | null>(null)
  const [showEditImage, setShowEditImage] = useState(false)

  // ✅ schema
  const profileSchema = z.object({
    name: z.string().min(1),
    title: z.string().min(1),
    bio: z.string().min(1),
    journey: z.string().min(1),
    work: z.string().min(1),
    dob: z.string().min(1),
    location: z.string().min(1),
    email: z.string().email(),
    mobile: z.string().min(1),
    language: z.string().min(1),
    profilePic: optionalFileList.optional(),
    yearExp: z.string().min(1),
    projectsCompleted: z.string().min(1),
    technologies: z.string().min(1),
    happyClients: z.string().min(1),
  }) satisfies z.ZodType<ProfileFormValues>

  const { handleSubmit , register, reset, setValue, formState: {errors, touchedFields}} = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name : "",
      title : "",
      bio : " ",
      journey : "",
      work : "",
      dob : "",
      location : "",
      email : "",
      mobile : "",
      language : "",
      yearExp : "",
      projectsCompleted : "",
      technologies : "",
      happyClients : "",

    }
  })

  // const handleCreate = async(data : ProfileFormValues) => {
  //   try {
  //     const fd = new FormData()

  //     fd.append("name", data.name)
  //     fd.append("title", data.title)
  //     fd.append("bio", data.bio)
  //     fd.append("journey", data.journey)
  //     fd.append("work", data.work)
  //     fd.append("dob", data.dob)
  //     fd.append("location", data.location)
  //     fd.append("email", data.email)
  //     fd.append("mobile", data.mobile)
  //     fd.append("language", data.language)

  //     const file = data.profilePic?.item?.(0)
  //     if(file){
  //       fd.append("profilePic", file)
  //     }

  //     await updateProfile(fd).unwrap()
  //     toast.success('Profile update success')
  //     reset({
  //       name: "",
  //       title: "",
  //       bio: "",
  //       journey: "",
  //       work: "",
  //       dob: "",
  //       location: "",
  //       email: "",
  //       mobile: "",
  //       language: "",
  //     })

  //     setUpdatePF(false)

  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Unable to update Profile")
  //   }
  // }

  // ✅ input class
  const handleClasses = (key: keyof ProfileFormValues) =>
    clsx(
      "peer w-full px-3 pt-5 pb-2 rounded-lg border outline-none transition-all duration-200",
      "border-gray-300 hover:border-gray-400",
      "focus:border-gray-400 focus:ring-2 focus:ring-gray-200",
      errors[key] && "border-red-500 focus:ring-red-200",
      touchedFields[key] && !errors[key] && "border-green-500 focus:ring-green-200"
    )

  // ✅ submit
 const onSubmit = async (data: ProfileFormValues) => {
  try {
    const fd = new FormData()

    fd.append("name", data.name)
    fd.append("title", data.title)
    fd.append("bio", data.bio)
    fd.append("journey", data.journey)
    fd.append("work", data.work)
    fd.append("dob", data.dob)
    fd.append("location", data.location)
    fd.append("email", data.email)
    fd.append("mobile", data.mobile)
    fd.append("language", data.language)
    fd.append("yearExp", data.yearExp)
    fd.append("projectsCompleted", data.projectsCompleted)
    fd.append("technologies", data.technologies)
    fd.append("happyClients", data.happyClients)


    const file = data.profilePic?.[0]
    if (file) fd.append("profilePic", file)

    // ✅ CREATE PROFILE CALL
    // await addProfile(fd).unwrap()
    if (updatePF) {
      await updateProfile(fd).unwrap()
      toast.success("Profile Updated Successfully 🎉")
    } else {
      await addProfile(fd).unwrap()
      toast.success("Profile Created Successfully 🎉")
    }

    // console.log(data);
    // toast.success("Profile Created Successfully 🎉")

    reset()
    setIsOpen(false)

  } catch (err) {
    console.log(err)
    toast.error("Profile creation failed ❌")
  }
}

// useeffect 
useEffect(() => {
  if (updatePF && data?.result?.[0]) {
    const p = data.result[0]

    setValue("name", p.name)
    setValue("title", p.title)
    setValue("bio", p.bio)
    setValue("journey", p.journey)
    setValue("work", p.work)
    setValue("dob", p.dob?.split("T")[0]) // 👈 date fix
    setValue("location", p.location)
    setValue("email", p.email)
    setValue("mobile", p.mobile)
    setValue("language", p.language)
    setValue("yearExp", p.yearExp)
    setValue("projectsCompleted", p.projectsCompleted)
    setValue("technologies", p.technologies)
    setValue("happyClients", p.happyClients)
  }
}, [updatePF, data])

useEffect(() => {
  if (isOpen) {
    setPreview(null)
    setShowEditImage(false)
  }
}, [isOpen])

  return (
    <div className="min-h-screen md:mt-10 px-4">
      <div className="mt-20 max-w-7xl mx-auto text-center text-black">

        
        <div className=" bg-gray-50 rounded-xl shadow text-start p-6">

          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold my-2 ">Profile 👱🏻‍♀️</h2>
              <p className="text-gray-400 text-xl">Edit About Information</p>
            </div>

            {/* <button
              onClick={() => setIsOpen(true)}
              className="px-3 py-2 bg-black text-white rounded-lg flex gap-2 items-center"
            >
              <Edit size={18} /> Create
            </button> */}

            {/* Edit btn  */}
            <button
              onClick={() => {
                setIsOpen(true)
            
                if (isProfileExist) {
                  setUpdatePF(true)   // edit mode
                  setShowEditImage(false)
                } else {
                  setUpdatePF(false)  // create mode
                  reset()             // 🧹 clear form
                }
              }}
                className="px-3 py-2 bg-black text-white rounded-lg flex gap-2 items-center"
            >
              <Edit size={18} />
              {isProfileExist ? "Edit" : "Create"}
            </button>

          </div>

          {/* display  */}
          {data?.result?.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row gap-6 my-6 items-start"
            >
              {/* IMAGE */}
              <img
                src={item.profileImage}
                alt="profile"
                className="w-28 h-28 rounded-full object-cover "
              />
              
          
              {/* DETAILS */}
              <div className="w-full">
          
                {/* NAME + TITLE */}
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#d382c8] bg-clip-text text-transparent mb-3 text-xl font-bold">{item.title}</p>
          
                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm md:text-base ">

                  {/* BASIC INFO */}
                  <p><b>Mobile:</b> {item.mobile}</p>
                  <p><b>Email:</b> {item.email}</p>
                  <p><b>DOB:</b> {item.dob}</p>
                  <p><b>Location:</b> {item.location}</p>
                
                  {/* PROFESSIONAL */}
                  
              
                    <ul>
                      <li><b>Stats</b></li>
                      <li>Year of Experience: {item.yearExp} + </li>
                      <li>Project Completed: {item.projectsCompleted} +</li>
                      <li>Technologies: {item.technologies} +</li>
                      <li> Happy Client: {item.happyClients} +</li>
                    </ul>
     

                  <p><b>Language:</b> {item.language}</p>
                
                  {/* FULL WIDTH CONTENT */}
                  <p className="sm:col-span-2">
                    <b>Work:</b> {item.work}
                  </p>
                
                  <p className="sm:col-span-2">
                    <b>Journey:</b> {item.journey}
                  </p>

                  <p className="sm:col-span-2"> 
                    <b>Bio:</b> {item.bio}
                  </p>

                </div>
          
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="bg-white p-6 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* <h2 className="text-xl font-semibold mb-4">Create Profile</h2> */}
              <h2 className="text-xl font-semibold mb-4">
                {updatePF ? "Update Profile" : "Create Profile"}
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* NAME */}
                <input {...register("name")} placeholder="Name" className={handleClasses("name")} />

                {/* TITLE */}
                <input {...register("title")} placeholder="Title" className={handleClasses("title")} />

                {/* BIO */}
                <textarea {...register("bio")} placeholder="Bio" className={handleClasses("bio")} />

                {/* JOURNEY */}
                <textarea {...register("journey")} placeholder="Journey" className={handleClasses("journey")} />

                {/* WORK */}
                <textarea {...register("work")} placeholder="Work" className={handleClasses("work")} />

                {/* DOB */}
                <input type="date" {...register("dob")} className={handleClasses("dob")} />

                {/* LOCATION */}
                <input {...register("location")} placeholder="Location" className={handleClasses("location")} />

                {/* EMAIL */}
                <input {...register("email")} placeholder="Email" className={handleClasses("email")} />

                {/* MOBILE */}
                <input {...register("mobile")} placeholder="Mobile" className={handleClasses("mobile")} />

                {/* LANGUAGE */}
                <input {...register("language")} placeholder="Language" className={handleClasses("language")} />

                {/* yearExp */}
                <input {...register("yearExp")} placeholder="yearExp" className={handleClasses("yearExp")} />

                {/* projectsCompleted */}
                <input {...register("projectsCompleted")} placeholder="projectsCompleted" className={handleClasses("projectsCompleted")} />

                {/* technologies */}
                <input {...register("technologies")} placeholder="technologies" className={handleClasses("technologies")} />

                {/* happyClients */}
                <input {...register("happyClients")} placeholder="happyClients" className={handleClasses("happyClients")} />

                {/* IMAGE FIELD */}
                <div className="space-y-2">
                
                  {(updatePF && profile?.profileImage && !showEditImage) ? (
                    <>
                      <div className="flex items-center gap-4">
                
                        {/* SHOW IMAGE */}
                        <img
                          src={preview || profile.profileImage}
                          alt="profile"
                          className="w-24 h-24 rounded-full object-cover border"
                        />
                    
                        {/* CHANGE BUTTON */}
                        <button
                          type="button"
                          onClick={() => setShowEditImage(true)}
                          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          Change Image
                        </button>
                
                      </div>
                    </>
                  ) : (
                    <>
                      {/* FILE INPUT */}
                      <input
                        type="file"
                        {...register("profilePic")}
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            setPreview(URL.createObjectURL(file))
                          }
                        }}
                        className={handleClasses("profilePic")}
                      />
                
                      {/* IMAGE + BUTTON SIDE BY SIDE */}
                      <div className="flex items-center gap-4 mt-2">
                        
                        {/* PREVIEW */}
                        {preview && (
                          <img
                            src={preview}
                            alt="preview"
                            className="w-24 h-24 rounded-full object-cover border"
                          />
                        )}
                    
                        {/* CANCEL BUTTON */}
                        {updatePF && (preview || showEditImage) && (
                          <button
                            type="button"
                            onClick={() => {
                              setShowEditImage(false)
                              setPreview(null)
                            }}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            Cancel
                          </button>
                        )}
                    
                      </div>
                    </>
                  )}
                
                </div>
                {/* <input type="file" {...register("profilePic")} className={handleClasses("profilePic")}   /> */}

                {/* BUTTONS */}
                <div className="flex justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>

                  {
                    updatePF 
                    ? <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-lg"
                  >
                    {
                      isLoading
                      ? "Updating..."
                      : "Update"
                    }
                    {/* Save Profile */}
                  </button>
                    : <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-lg"
                  >
                    {
                      isLoading
                      ? "Saving..."
                      : "Save"
                    }
                    {/* Save Profile */}
                  </button>
                  }

                  

                  
                </div>

              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Profile