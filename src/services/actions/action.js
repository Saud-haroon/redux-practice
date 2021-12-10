import {SET_USER} from '../constants'

export const setUser = (users) => {
    return {
        type: SET_USER,
        payload: users,
    }
}