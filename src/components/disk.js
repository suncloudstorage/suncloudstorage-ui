import React, {Component} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import fileService from "../services/fileService";
import userService from "../services/userService";
import saveAs from 'file-saver';
import history from "../utils/history";

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

        this.state = {
            files: []
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentDidMount() {
        fileService.getFiles().then(resp => {
            this.setState({
                files: resp.data
            })
            console.log(resp)
        }).then(err => console.log(err));
    }

    handleUploadFile = (event) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');
        data.append('description', 'this file is uploaded by young padawan');
        fileService.uploadFile(data).then((response) => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                //some other error happened
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });
    };

    onChangeHandler = event => {
        const file = event.target.files[0];
        console.log(file)
        fileService.uploadFile(file)
        history.go('/disk')
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="2">
                        <form>
                            <input type="file" name="file" onChange={this.handleUploadFile}/>
                        </form>
                    </Col>
                    <Col md="10">
                        <Container>
                            <Row>
                                {this.state.files.map((file) =>
                                    <Col md="3" key={file.name}>
                                        <Card>
                                            <Card.Img variant="top" src="microsoft-word (1).png"/>
                                            <Card.Body>
                                                {file.editable
                                                    ? <Card.Title><input type="text" value={file.name}/>
                                                        <button onClick={() => this.editFileName(file)}>OK</button>
                                                    </Card.Title>
                                                    : <Card.Title>{file.name}</Card.Title>
                                                }

                                                <Card.Text>{file.extension}</Card.Text>
                                                <Card.Text>{file.size}</Card.Text>
                                                <Card.Text>{file.lastModified}</Card.Text>
                                                <Button variant="primary"
                                                        onClick={() => this.downloadFile(file.name + "." + file.extension)}>Download</Button>
                                                <Button variant="primary"
                                                        onClick={() => this.deleteFile(file.name + "." + file.extension)}>Delete</Button>
                                                {file.editable
                                                    ? <div></div>
                                                    : <Button variant="primary"
                                                              onClick={() => file.editable = !file.editable}>Edit</Button>
                                                }
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

    deleteFile(filename) {
        console.log("filename", filename)
        userService.deleteFile(filename)
    }

    editFileName(file) {
        console.log(file)
        fileService.editFileName(file.name, file.name)
    }

    editFileToggle() {

    }
}

export default Disk;
