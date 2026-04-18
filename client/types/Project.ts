export type Project = {
    _id?: string
    title: string
    desc: string
    category: string
    hero?: string
    tech: string
    liveURL: string
    githubURL: string
}

export type COMMON_RESPONSE = {
    message: string
}

export interface CREATE_PROJECT_REQUEST { 
    title : string
    desc: string
    category: string
    hero?: string
    tech: string
    liveURL: string
    githubURL: string
    
}

export interface READ_PROJECT_RESPONSE {
    result: [{
        _id : string
        title : string
        desc: string
        category: string
        hero: string
        tech: string
        liveURL: string
        githubURL: string
    }]
}

export interface UPDATE_PROJECT_REQUEST {
    _id: string,
    body : FormData,
}

export interface DELETE_PROJECT_REQUEST {
    _id: string
}