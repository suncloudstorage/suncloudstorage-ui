import authInterceptor from "../interceptors/authInterceptor";

class UserService {

    getUser(username) {
        return authInterceptor().get(`/users/${username}`)
    }
}

export default new UserService();
