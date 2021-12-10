import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUser} from '../services/actions/action'
import UserComponent from './UserComponent'

const UserListing = () => {
    const users = useSelector((state) => state.allUsers.users)
    const dispatch = useDispatch()

    const fetchUsers = async () => {
        const response = await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .catch((err) => {
            console.log('Err', err);
        })
    // console.log(response.data);
    dispatch(setUser(response.data))
    }

    useEffect(() =>{
        fetchUsers()
        
    }, [])
    
    return (
        <div>
            <UserComponent/>
        </div>
    )
}

export default UserListing
