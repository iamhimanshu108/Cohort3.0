import axios  from "axios";
import { useAuthContext } from "../auth/context/useAuthContext";    


export default function useApi() {
    const authContext = useAuthContext();
    
    const api = axios.create({
        baseURL: "http://localhost:5173/api",
        withCredentials: true,
    });

    api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${authContext.accessToken}`

        return config;
    })

    api.interceptors.response.use(async response =>{
        if(response.status === 401){
          const res = await api.post('/auth/refresh')

          authContext.setAccessToken(res.data.data.accessToken)

          return 
        }
    })

    return api;
}   
