import axios from 'axios'
// grab info in supplied token (npm install jwt-decode)
import jwt_decode from "jwt-decode";
// used to calculate date diff (better than moment.js) if tokens are expired
import dayjs from 'dayjs'
import {useContext} from 'react'
import {AuthContext} from '../context/AuthProvider'

const baseURL = process.env.REACT_APP_URL_PREFIX || "" // grabs from .env file in root folder

// where the token will be "saved as" in local storage
const tokenName = 'authToken'
const refreshName = 'refreshToken'

// 'AUTH_HEADER_TYPES' specified in settings.py in Django
const headerName = 'Bearer'

// API: token endpoints
const refreshURL = "/api/token/refresh/"
const tokenLoginURL = "/api/token/"
const signupURL = "/api/signup/"

const getLocalToken = () => {
    return localStorage.getItem(tokenName)
}

const getLoginToken = async (formData) => {
    try {
        const axiosInstance = axios.create({baseURL});
        const response = await axiosInstance.post(tokenLoginURL, formData)
        if (response.data) {
            localStorage.setItem(tokenName, response.data.access)
            localStorage.setItem(refreshName, response.data.refresh)
        }
        return response.data.access
    } catch (err) {
        console.log("login error", err)
        return null
    }
}

const signup = async (formData) => {
    try {
        const axiosInstance = axios.create({baseURL});
        const response = await axiosInstance.post(signupURL, formData)
        return response.data
    }catch (err){
        return err
    }
}

const clearToken = () => {
    localStorage.removeItem(tokenName)
    localStorage.removeItem(refreshName)
}


// custom hook
const useAxios = () => {
    const {token, setToken} = useContext(AuthContext)

    const axiosInstance = axios.create({
        baseURL,
        headers: {Authorization: `${headerName} ${token}`}
    });

    // Refresh token if it has expired before sending request
    axiosInstance.interceptors.request.use(async req => {
        // jwt_decode is a non-depreciated version of atob()
        const decodedJWT = jwt_decode(token)

        // dayjs has data comparison functionality based on "exp" supplied in token
        const isExpired = dayjs.unix(decodedJWT.exp).diff(dayjs()) < 1;

        if (!isExpired) return req

        const response = await axios.post(`${baseURL}${refreshURL}`, {
            refresh: localStorage.getItem(refreshName)
        });

        localStorage.setItem(tokenName, response.data.access)

        setToken(response.data.access)

        req.headers.Authorization = `${headerName} ${response.data.access}`
        return req
    })

    return axiosInstance
}

export {useAxios, getLocalToken, getLoginToken, clearToken, signup};