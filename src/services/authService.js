import axios from "axios";
import history from "../utils/history";
import jwt from "jsonwebtoken";

class UserService {
    baseUrl = 'http://ec2-52-14-241-156.us-east-2.compute.amazonaws.com:8080';

    login(username, password) {
        axios.post(`${this.baseUrl}/api/auth/login`, {username, password}).then(response => {
                const accessToken = response.data.accessToken;
                if (accessToken) {
                    const decodedToken = jwt.decode(accessToken);
                    const username = decodedToken.sub;
                    const role = decodedToken.role;
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('username', username);
                    localStorage.setItem('role', role);
                    history.go('/myDisk');
                }
            },
            error => {
                console.log(error)
            }
        )
    }

    logout() {
        localStorage.clear();
        sessionStorage.clear();
        history.go("/login")
    }
}

export default new UserService();
