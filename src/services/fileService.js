import axios from "axios";

class FileService {
    baseUrl = 'http://ec2-3-20-234-98.us-east-2.compute.amazonaws.com:8080';

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
        return axios.get(`${this.baseUrl}/storage/files`, this.accessHeader)
    }

    uploadFile(data) {
        return axios.post(`${this.baseUrl}/storage/uploadFile`, data, this.loadFileHeader)
    }

    editFileName(newName, oldName) {
        let data = {
            newName, oldName
        }
        return axios.post(`${this.baseUrl}/storage/editFileName`, data, this.accessHeader)
    }

    downloadFile = (filename) => {
        return axios.get(`${this.baseUrl}/storage/downloadFile?url=s3://${localStorage.getItem("username")}/${filename}`, this.downloadHeader);
    }

    deleteFile = (filename) => {
        axios.delete(`${this.baseUrl}/storage/deleteFile?url=s3://${localStorage.getItem("username")}/${filename}`, this.uploadHeader).then(resp => console.log(resp)).then(err => console.log(err))
    }
}

export default new FileService();
