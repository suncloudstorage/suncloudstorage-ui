import axios from "axios";
import jwt from 'jsonwebtoken'
import authService from "../services/authService";

export default () => {
    const baseURL = 'http://localhost:8080/';

    let headers = {};

    const accessToken = localStorage.accessToken;

    if (accessToken) {
        headers.Authorization = `Bearer ${localStorage.accessToken}`;
        headers.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN = '*'
    }

    const authInterceptor = axios.create({
        baseURL: baseURL,
        headers,
    });

    authInterceptor.interceptors.request.use(function (config) {
        const decodedJwtToken = jwt.decode(accessToken);
        if (decodedJwtToken && decodedJwtToken.exp < Date.now().valueOf() / 1000){
            authService.logout();
            window.location = '/';
            return Promise.reject();
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    return authInterceptor;
};