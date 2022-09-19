import axios from "axios";
import { API_KEY, SOCCER_API_BASE_URL } from "../../config/api";

const soccerApi = axios.create({
    baseURL: SOCCER_API_BASE_URL
})

soccerApi.interceptors.request.use( config => { 
    if (!config.headers) {
        config.headers = {}    
    }

    config.headers.apikey = API_KEY
    return config 
})

export default soccerApi