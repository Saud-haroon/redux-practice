import {SET_USER} from '../constants'

const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: action.payload
            }
            
            
    
        default:
            return state
    }
}