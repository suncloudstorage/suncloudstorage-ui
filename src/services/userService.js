import axios from "axios";

class UserService {
    baseUrl = 'http://localhost:8080';
    requestHeader = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }


    login(username, password) {
        return axios.post(`${this.baseUrl}/api/v1/auth/login`, {username, password})
    }

    base64ToArrayBuffer(base64: string) {
        // const binaryString = window.atob(base64); // Comment this if not using base64
        const bytes = new Uint8Array(base64.length);
        return bytes.map((byte, i) => base64.charCodeAt(i));
    }

    createAndDownloadBlobFile(body, filename, extension = 'pdf') {
        const blob = new Blob([body]);
        const fileName = `${filename}.${extension}`;
        if (navigator.msSaveBlob) {
            // IE 10+
            navigator.msSaveBlob(blob, fileName);
        } else {
            const link = document.createElement('a');
            // Browsers that support HTML5 download attribute
            if (link.download !== undefined) {
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', fileName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }

    downloadFile() {
        // return axios({
        //     method: 'get',
        //     url: `${this.baseUrl}/storage/downloadFile`,
        //     params: {url: "s3://sunadmin/person-icon.png"},
        //     header: this.headers
        // });
        return axios.get(`${this.baseUrl}/storage/downloadFile?url=s3://sunadmin/person-icon.png`, this.requestHeader);
    }
}

export default new UserService();
