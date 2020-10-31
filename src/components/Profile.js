import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Upload, Download, Pencil, Cart3} from "react-bootstrap-icons"
import {Redirect} from "react-router-dom";
import userService from "../services/userService";
import Header from "./Header";

class Profile extends Component {

    constructor(props) {
        super(props);
        if (!localStorage.getItem("username")) {
            return <Redirect to="/login"/>
        }

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: ''
        }

        userService.getUser(localStorage.getItem("username")).then(resp => {
            let resp1 = resp;
            this.setState({
                firstName: resp1.data.firstName,
                lastName: resp1.data.lastName,
                username: resp1.data.username,
                email: resp1.data.email
            })
            console.log(resp)
        }).then(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Row>
                        <div className="card col-4 m-3">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                         className="rounded-circle" width="150"/>
                                    <div className="mt-3">
                                        <h4>{this.state.firstName} {this.state.lastName}</h4>
                                        <p className="text-secondary mb-1">Full Stack Developer</p>
                                        <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                        <button className="btn btn-primary">Follow</button>
                                        <button className="btn btn-outline-primary">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-6 m-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.firstName} {this.state.lastName}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Username</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.username}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.email}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        (239) 816-9029
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Mobile</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        (320) 380-4539
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="card col-4 m-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <Cart3/> All
                                    </h6>
                                    <span className="text-secondary">900 files</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <Upload/> Uploaded
                                    </h6>
                                    <span className="text-secondary">100 files</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <Download/> Downloaded
                                    </h6>
                                    <span className="text-secondary">200 files</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <Pencil/> Changed
                                    </h6>
                                    <span className="text-secondary">300 files</span>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Profile;
