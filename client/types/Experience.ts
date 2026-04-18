export interface CREATE_EXPERIENCE_REQUEST {
    companyName: string
    role: string
    desc: string
    workingDate: string
    _id?: string
}

export type READ_EXPERIENCE_RESPONSE = {
    result: [{
        companyName: string
        role: string
        desc: string
        workingDate: string
        _id: string
    }]
}
export interface UPDATE_EXPERIENCE_REQUEST extends CREATE_EXPERIENCE_REQUEST {
    _id: string
}
export type DELETE_EXPERIENCE_REQUEST = {
    _id: string
}