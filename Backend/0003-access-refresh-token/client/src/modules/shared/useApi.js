import axios  from "axios";
import { useAuthContext } from "../auth/context/useAuthContext";    


export default function useApi() {
    const authContext = useAuthContext();
    
    const api = axios.create({
        baseURL: "http://localhost:5173/api",
        withCredentials: true,
    });

    api.interceptors.request.use(
        (config) => {
            const token = authContext?.authState?.accessToken;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;


        },  


        (error) => {
            return Promise.reject(error);
        }
    );

    return api;
}   
