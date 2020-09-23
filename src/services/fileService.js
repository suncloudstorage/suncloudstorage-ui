import axios from "axios";

class FileService {
    baseUrl = 'http://localhost:8080';

    accessHeader = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    loadFileHeader = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    getFiles() {
        return axios.get(`${this.baseUrl}/storage/files`, this.accessHeader)
    }

    uploadFile(data) {
        console.log(data)
        return axios.post(`${this.baseUrl}/storage/uploadFile`, data, this.loadFileHeader)
    }

    editFileName(newFileName, oldFileName) {
        let data = {
            newFileName, oldFileName
        }
        axios.post(`${this.baseUrl}/storage/editFileName`, data, this.accessHeader)
    }

}

export default new FileService();
