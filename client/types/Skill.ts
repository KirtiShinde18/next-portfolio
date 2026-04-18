export interface CREATE_SKILL_REQUEST {
    skill: string
}

export type READ_SKILL_RESPONSE = {
    result: [{
        _id: string
        skill: string
    }]
}
export interface UPDATE_SKILL_REQUEST extends CREATE_SKILL_REQUEST {
    _id: string
}
export type DELETE_SKILL_REQUEST = {
    _id: string
}