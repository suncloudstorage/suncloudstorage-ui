import React, {Component} from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './login.css';
import {Link} from "react-router-dom";
import UserService from "../services/userService";

class Login extends Component {

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
        UserService.login(this.state.username, this.state.password)
            .then(resp => {
                if (resp.data.accessToken) {
                    localStorage.setItem("accessToken", resp.data.accessToken)
                }
            })
            .then(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="login login-form col-4">
                        <form>
                            <h2 className="text-center">Log in</h2>
                            <div className="form-group">
                                <input type="text" name="username" className="form-control" placeholder="Username"
                                       required="required" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="Password"
                                       required="required" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-dark btn-block" onClick={this.onSubmit}>Log in</button>
                            </div>
                            <div className="d-flex justify-content-between">
                                <label className="form-check-label"><input type="checkbox"/> Remember
                                    me</label>
                                <Link className="" to="#">Forgot Password?</Link>
                            </div>
                        </form>
                        <p className="text-center"><Link to="#">Create an Account</Link></p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;
