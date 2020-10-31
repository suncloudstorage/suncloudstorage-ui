import React, {Component} from "react";
import {Link} from "react-router-dom";
import './LoginModel.css';
import authService from "../services/authService";

class LoginModel extends Component {

    constructor(args) {
        super(args);

        this.state = {
            username: '',
            password: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit(e) {
        e.preventDefault();
        authService.login(this.state.username, this.state.password)
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
