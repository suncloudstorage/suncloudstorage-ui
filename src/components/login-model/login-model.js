import React, {Component} from "react";
import {Link} from "react-router-dom";
import './login-model.css';
import authService from "../../services/authService";
import jwt from "jsonwebtoken";
import history from "../../utils/history";

class LoginModel extends Component {

    constructor(args) {
        super(args);

        this.state = {
            username: '',
            password: '',
            authError: false,
            serverError: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit(e) {
        e.preventDefault();
        authService.login(this.state.username, this.state.password).then(response => {
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
                if (error.response.status === 403) {
                    this.setState({
                        authError: true
                    })
                } else {
                    this.setState({
                        serverError: true
                    })
                }
                console.log(error)
            }
        )
    }

    render() {
        return (
            <div id="loginModel" className="modal fade" role="dialog" tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <h3 className="text-center">Sign in</h3>
                                <div className="form-group pt-3">
                                    {this.state.authError
                                        ? <h6 className="text-danger text-center">Username or password invalid</h6>
                                        : null}
                                    {this.state.serverError
                                        ? <h6 className="text-danger text-center">Server side error</h6>
                                        : null}

                                    <input className="form-control email-signup"
                                           type="username"
                                           placeholder="Username"
                                           name="username"
                                           onChange={this.onChange}
                                    />
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.onChange}
                                    />
                                    <div className="form-check d-flex justify-content-between align-items-center">
                                        <div className="remember-me">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="formCheck-1"
                                            />
                                            <label className="form-check-label terms-label">Remember me</label>
                                        </div>
                                        <div className="forgot-password">
                                            <Link to="#">Forgot Password</Link>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-block btn-signup"
                                            type="button"
                                            onClick={this.onSubmit}
                                    >
                                        Log in
                                    </button>
                                </div>
                                <p className="text-center continue-service-label">or continue with:</p>
                                <div className="form-group">
                                    <div className="btn-group d-flex justify-content-between" role="group">
                                        <button className="btn btn-primary service-continue" type="button"><i
                                            className="fa fa-apple"/></button>
                                        <button className="btn btn-primary service-continue" type="button"><i
                                            className="fa fa-facebook-square"/></button>
                                        <button className="btn btn-primary service-continue"
                                                type="button"><i className="fa fa-google"/></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModel
