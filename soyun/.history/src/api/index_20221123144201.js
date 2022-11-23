import axios from "axios";

function apiInstance() { 
    const instance = axios.create({
        serverURL: process.env.VUE_APP_BACKEND_SERVER_URL,
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}