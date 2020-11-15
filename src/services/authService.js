import history from "../utils/history";
import axiosInstance from '../interceptors/authInterceptor'
import axios from "axios";

class UserService {
    baseUrl = 'http://localhost:8080';

    login(username, password) {
        return axios.post(`${this.baseUrl}/api/auth/login`, {username, password})
    }

    logout() {
        localStorage.clear();
        sessionStorage.clear();
        history.go("/login")
    }
}

export default new UserService();
