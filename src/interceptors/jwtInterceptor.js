import axios from "axios";

axios.interceptors.request.use(function (config) {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Access-Control-Allow-Origin'] = '*';
        let accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers['Authorization'] = accessToken;
        }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
