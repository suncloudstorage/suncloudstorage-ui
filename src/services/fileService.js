import authInterceptor from "../interceptors/authInterceptor";

class FileService {

    username = localStorage.getItem("username");

    downloadHeader = {
        responseType: 'blob',
    }

    uploadHeader = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }

    getFiles() {
        return authInterceptor().get('/storage/files')
    }

    uploadFile(data) {
        return authInterceptor().post('/storage/uploadFile', data, this.uploadHeader)
    }

    editFileName(newName, oldName) {
        let data = {
            newName, oldName
        }
        return authInterceptor().post('/storage/editFileName', data)
    }

    downloadFile = (filename) => {
        return authInterceptor().get(`/storage/downloadFile?url=s3://${this.username}/${filename}`, this.downloadHeader);
    }

    deleteFile = (filename) => {
        return authInterceptor().delete(`/storage/deleteFile?url=s3://${this.username}/${filename}`);
    }
}

export default new FileService();
