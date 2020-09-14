import axios from "axios";
import history from "../utils/history";

class UserService {
    baseUrl = 'http://localhost:8080';
    downloadHeader = {
        responseType: 'blob',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    accessHeader = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }


    login(username, password) {
        return axios.post(`${this.baseUrl}/api/v1/auth/login`, {username, password})
    }

    logout() {
        localStorage.clear();
        sessionStorage.clear();
        history.go("/login")
    }

    downloadFile = (filename) => {
        return axios.get(`${this.baseUrl}/storage/downloadFile?url=s3://${localStorage.getItem("username")}/${filename}`, this.downloadHeader);
    }

    getUser(username) {
        return axios.get(`${this.baseUrl}/users/${username}`, this.accessHeader)
    }
}

export default new UserService();
