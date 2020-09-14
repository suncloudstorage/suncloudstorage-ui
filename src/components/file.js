import React, {Component} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";

class File extends Component {
    render() {
        return (
            <Col md="3">
                <Card>
                    <Card.Img variant="top" src="microsoft-word (1).png"/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Button variant="primary">Download</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default File;
