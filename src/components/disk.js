import React, {Component} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import fileService from "../services/fileService";
import userService from "../services/userService";
import saveAs  from 'file-saver';

class Disk extends Component {

    downloadFile(filename) {
        console.log("filename", filename)
        userService.downloadFile(filename).then(response => {
            let url = response.config.url;
            saveAs(response.data, url.slice(url.lastIndexOf("/") + 1));
        })
    }

    constructor(props) {
        super(props);

        this.state ={
            files: []
        }
    }

    componentDidMount() {
        fileService.getFiles().then(resp => {
            this.setState({
                files: resp.data
            })
            console.log(resp)
        }).then(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="2">
                        Left bar
                    </Col>
                    <Col md="10">
                        <Container>
                            <Row>
                                {this.state.files.map((file) =>
                                    <Col md="3" key={file.name}>
                                        <Card>
                                            <Card.Img variant="top" src="microsoft-word (1).png"/>
                                            <Card.Body>
                                                <Card.Title>{file.name}</Card.Title>
                                                <Card.Text>{file.extention}</Card.Text>
                                                <Card.Text>{file.size}</Card.Text>
                                                <Card.Text>{file.lastModified}</Card.Text>
                                                <Button variant="primary" onClick={() => this.downloadFile(file.name + "." + file.extension)}>Download</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Disk;
