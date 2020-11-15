import axios from "axios";

class UserService {
    baseUrl = 'http://localhost:8080';

    accessHeader = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    getUser(username) {
        return axios.get(`${this.baseUrl}/users/${username}`, this.accessHeader)
    }
}

export default new UserService();
