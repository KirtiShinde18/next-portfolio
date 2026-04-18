export type COMMON_RESPONSE = {
    message: string
}

export type Profile = {
    _id?: string
    name: string
    title: string
    bio: string
    journey: string
    work: string
    dob: string
    location: string
    email: string
    mobile: string
    language: string
    profileImage?: string
    yearExp: string
    projectsCompleted: string
    technologies: string
    happyClients: string
}


export interface CREATE_PROFILE_REQUEST {
    _id?: string
    name: string
    title: string
    bio: string
    journey: string
    work: string
    dob: string
    location: string
    email: string
    mobile: string
    language: string
    profileImage?: string
    yearExp: string
    projectsCompleted: string
    technologies: string
    happyClients: string
}

export type READ_PROFILE_RESPONSE = {
    result: [{
        _id?: string
        name: string
        title: string
        bio: string
        journey: string
        work: string
        dob: string
        location: string
        email: string
        mobile: string
        language: string
        profileImage?: string
        yearExp: string
        projectsCompleted: string
        technologies: string
        happyClients: string
    }]
}


export interface UPDATE_PROFILE_REQUEST extends CREATE_PROFILE_REQUEST{
    _id: string,
}

export type DELETE_PROFLE_REQUEST = {
    _id: string,
}