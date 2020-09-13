import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";

class Registration extends Component{
    render() {
        return(
            <Container>
                <Row>
                    <Col className="login login-form col-4">
                        <form method="post">
                            <h2 className="text-center">Registration</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter your username"
                                       required="required"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter your first name"
                                       required="required"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter your last name"
                                       required="required"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter your email"
                                       required="required"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"
                                       required="required"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"
                                       required="required"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark btn-block">Registration</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Registration;
