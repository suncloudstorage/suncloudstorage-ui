import axios from "axios";

class UserService {
    baseUrl = 'http://localhost:8080';
    requestHeader = {
        responseType: 'blob',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }


    login(username, password) {
        return axios.post(`${this.baseUrl}/api/v1/auth/login`, {username, password})
    }

    downloadFile = () => {
        return  axios.get(`${this.baseUrl}/storage/downloadFile?url=s3://sunadmin/person-icon.png`, this.requestHeader);
    }
}

export default new UserService();
