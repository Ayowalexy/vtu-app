import urls from "./routes";
import axios from "axios";
import { auth } from "./routes";


const signUp = async (data) => {
    // const url = 'http://localhost:8000/request'
    const url = urls.SIGN_UP
   try {
    const response = await axios.post(
        url, 
        JSON.stringify(data),
         {
             auth,
            headers: {'Content-Type': 'application/json'},
          }
        )
        return response
   } catch (error){
       return error
   }
}

const login = async (data) => {
    const url = urls.LOGIN
    console.log(url)
    try {
        const response = await axios.post(
            url, 
            JSON.stringify(data),
            
            {
                auth,
                headers: {'Content-Type': 'application/json'},
            }
        )
        return response
    } catch (error){
        return error
    }
}


const getuserProfile = async (data) => {
    const url = urls.FETCH_USER_PROFILE

    try {
        const response = await axios.post(
            url, 
            JSON.stringify(data),
            {
                auth,
                headers: {'Content-Type': 'application/json'},
            }
            )
            return response
    } catch (error){
        return error
    }
}

const updateUserProfile = async (data) => {
    const url = urls.UPDATE_PROFILE
    try {
        const response = await axios.post(
            url, 
            JSON.stringify(data),
            {
                headers: {'Content-Type': 'application/json'},
            }
            )
            return response
    } catch (error){
        return error
    }
}


const updatePassword =  async (data) => {
    const url = urls.UPDATE_PASSWORD
    try {
        const response = await axios.post(
            url, 
            JSON.stringify(data),
            {
                headers: {'Content-Type': 'application/json'},
            }
            )
            return response
    } catch (error){
        return error
    }
}

const userToken = async (data) => {
    const url = urls.GET_TOKEN
    try {
        const response = await axios.post(
            url, 
            JSON.stringify(data),
            {
                auth,
                headers: {'Content-Type': 'application/json'},
            }
            )
            return response
    } catch (error){
        return error
    }
}


export {
    signUp,
    login,
    updateUserProfile,
    getuserProfile,
    updatePassword,
    userToken
}