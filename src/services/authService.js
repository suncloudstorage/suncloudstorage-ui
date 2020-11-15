import history from "../utils/history";
import authInterceptor from '../interceptors/authInterceptor'

class UserService {

    login(username, password) {
        return authInterceptor().post(`api/auth/login`, {username, password})
    }

    logout() {
        localStorage.clear();
        sessionStorage.clear();
        history.go("/")
    }
}

export default new UserService();
