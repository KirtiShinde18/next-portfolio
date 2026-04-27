import { APP_URL } from "@/constants/config"
import { CREATE_CONTACT_REQUEST } from "@/types/Contact"
import { CREATE_EXPERIENCE_REQUEST,  DELETE_EXPERIENCE_REQUEST, READ_EXPERIENCE_RESPONSE, UPDATE_EXPERIENCE_REQUEST } from "@/types/Experience"
import { COMMON_RESPONSE, DELETE_PROFLE_REQUEST, READ_PROFILE_RESPONSE } from "@/types/Profile"
import { DELETE_PROJECT_REQUEST,  READ_PROJECT_RESPONSE,  UPDATE_PROJECT_REQUEST } from "@/types/Project"
import { CREATE_SKILL_REQUEST, DELETE_SKILL_REQUEST, READ_SKILL_RESPONSE, UPDATE_SKILL_REQUEST } from "@/types/Skill"

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: `${APP_URL}/api/admin`,
        baseUrl: "/api/admin",
        credentials: "include",
    }),
    tagTypes: ["profile", "project", "skill", "experience", "contact"],
    endpoints: (builder) => {
        return {

            // 🔍 GET Profile API
            getProfile: builder.query<READ_PROFILE_RESPONSE , void>({
                query: () => {
                    return {
                        url: "/readProfile",
                        method: "GET",
                    }
                },
                providesTags: ["profile"],
            }),

            // ➕ CREATE Profile API
            addProfile: builder.mutation<COMMON_RESPONSE, FormData>({
                query: (profileData) => {
                    return {
                        url: "/createProfile",
                        method: "POST",
                        body: profileData,
                    }
                },
                invalidatesTags: ["profile"],
            }),

            // 🔄 UPDATE Profile API
            updateProfile: builder.mutation<COMMON_RESPONSE, FormData>({
                query: (profileData) => {
                    return {
                        url: "/updateProfile",
                        method: "PUT",
                        body: profileData,
                    }
                },
                invalidatesTags: ["profile"],
            }),

            // ✏️ DELETE Profile API
            deleteProfile: builder.mutation<COMMON_RESPONSE, DELETE_PROFLE_REQUEST>({
                query: ({_id}) => {
                    return {
                        url: "/deleteProfile"+ _id,
                        method: "PUT",

                    }
                },
                invalidatesTags: ["profile"],
            }),


// =============================================== PROJECT ============================================
            // read Project
            getProject: builder.query<READ_PROJECT_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/readProject",
                        method: "GET"
                    }
                },
                providesTags: ["project"]
            }),

            // ➕ ADD PROJECT API
            addProject: builder.mutation<COMMON_RESPONSE , FormData>({
                query: projectData => {
                    return {
                        url: "/createProject",
                        method: "POST",
                        body: projectData
                    }
                },
                invalidatesTags: ["project"],
            }),

            // ✏️ update PROJECT API
            updateProject: builder.mutation<COMMON_RESPONSE , UPDATE_PROJECT_REQUEST>({
                query: ({_id, body}) => {
                    return {
                        url: `/updateProject/${_id}`,
                        method: "PUT",
                        body
                    }
                },
                invalidatesTags: ["project"],
            }),

            // ✏️ delete PROJECT API
            deleteProject: builder.mutation<COMMON_RESPONSE , DELETE_PROJECT_REQUEST>({
                query: ({_id}) => {
                    return {
                        url: "/deleteProject/" + _id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["project"],
            }),

// =============================================== SKILL ============================================

            // get SKILLS
            getSkill: builder.query<READ_SKILL_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/readSkill",
                        method: "GET"
                    }
                },
                providesTags: ["skill"]
            }),

            // ADD SKILLS
            addSkill: builder.mutation<COMMON_RESPONSE, CREATE_SKILL_REQUEST>({
                query: skillData => {
                    return {
                        url: "/createSkill",
                        method: "POST",
                        body: skillData
                    }
                },
                invalidatesTags: ["skill"]
            }),

            // UPDATE SKILLS
            updateSkill: builder.mutation<COMMON_RESPONSE, UPDATE_SKILL_REQUEST>({
                query: skillData => {
                    return {
                        url: "/updateSkill/" + skillData._id,
                        method: "PUT",
                        body: skillData
                    }
                },
                invalidatesTags: ["skill"]
            }),

            // DELETE SKILLS
            deleteSkill: builder.mutation<COMMON_RESPONSE, DELETE_SKILL_REQUEST>({
                query: ({ _id }) => {
                    return {
                        url: "/deleteSkill/" + _id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["skill"]
            }),

// =============================================== EXP ============================================

            // GET EXP
            getExperience: builder.query<READ_EXPERIENCE_RESPONSE, void>({
                query: () => {
                    return {
                        url: "/readExperience",
                        method: "GET"
                    }
                },
                providesTags: ["experience"]
            }),

            // ADD EXP
            addExperience: builder.mutation<COMMON_RESPONSE, CREATE_EXPERIENCE_REQUEST>({
                query: experienceData => {
                    return {
                        url: "/createExperience",
                        method: "POST",
                        body: experienceData
                    }
                },
                invalidatesTags: ["experience"]
            }),

            // UPDATE EXP 
            updateExperience: builder.mutation<COMMON_RESPONSE, UPDATE_EXPERIENCE_REQUEST>({
                query: experienceData => {
                    return {
                        url: "/updateExperience/" + experienceData._id,
                        method: "PUT",
                        body: experienceData
                    }
                },
                invalidatesTags: ["experience"]
            }),

            // DELETE EXP
            deleteExperience: builder.mutation<COMMON_RESPONSE, DELETE_EXPERIENCE_REQUEST>({
                query: ({ _id }) => {
                    return {
                        url: "/deleteExperience/" + _id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["experience"]
            }),

// =============================================== CONTACT ============================================


            // CONTACT
            addContact: builder.mutation<COMMON_RESPONSE, CREATE_CONTACT_REQUEST>({
                query: contactData => {
                    return {
                        url: "/createContact",
                        method: "POST",
                        body: contactData
                    }
                },
                invalidatesTags: ["contact"]
            }),

        }
    },
})

export const {
    useGetProfileQuery,
    useAddProfileMutation,
    useUpdateProfileMutation,

    useGetProjectQuery,
    useAddProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,

    useGetSkillQuery,
    useAddSkillMutation,
    useUpdateSkillMutation,
    useDeleteSkillMutation,

    useGetExperienceQuery,
    useAddExperienceMutation,
    useUpdateExperienceMutation,
    useDeleteExperienceMutation,

    useAddContactMutation

} = adminApi
