import config from 'config';
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

    downloadHeader = {
        responseType: 'blob',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    uploadHeader = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    getFiles() {
        return axios.get(`${config.apiUrl}/storage/files`, this.accessHeader)
    }

    uploadFile(data) {
        return axios.post(`${config.apiUrl}/storage/uploadFile`, data, this.loadFileHeader)
    }

    editFileName(newFileName, oldFileName) {
        let data = {
            newFileName, oldFileName
        }
        axios.post(`${config.apiUrl}/storage/editFileName`, data, this.accessHeader)
    }

    downloadFile = (filename) => {
        return axios.get(`${config.apiUrl}/storage/downloadFile?url=s3://${localStorage.getItem("username")}/${filename}`, this.downloadHeader);
    }

    deleteFile = (filename) => {
        axios.delete(`${config.apiUrl}/storage/deleteFile?url=s3://${localStorage.getItem("username")}/${filename}`, this.uploadHeader).then(resp => console.log(resp)).then(err => console.log(err))
    }
}

export default new FileService();
