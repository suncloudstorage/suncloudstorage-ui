import axios from "axios";
import config from 'config';

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
        return axios.get(`${config.apiUrl}/users/${username}`, this.accessHeader)
    }
}

export default new UserService();
