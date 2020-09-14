import axios from "axios";

class FileService {
    baseUrl = 'http://localhost:8080';

    accessHeader = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    getFiles() {
        return axios.get(`${this.baseUrl}/storage/files`, this.accessHeader)
    }

}

export default new FileService();
