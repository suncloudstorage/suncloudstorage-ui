import React, {Component} from "react";
import Header from "./Header";
import {Link, Redirect} from "react-router-dom";
import MyFile from "./MyFile";
import fileService from "../services/fileService";

class MyDisk extends Component {

    constructor(props) {
        super(props);

        this.state = {
            files: [],
            filteredFiles: []
        }

        this.onChange = this.onChange.bind(this);
        this.searchFile = this.searchFile.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.removeFileInState = this.removeFileInState.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    handleUploadFile(event) {
        const data = new FormData();
        let file = event.target.files[0];
        if (!file){
            return;
        }
        data.append('file', file);
        fileService.uploadFile(data).then(response => {
            let files = this.state.files;
            let createdFile = {
                bucketName: localStorage.getItem("username"),
                extension: file.name.substring(file.name.lastIndexOf('.') + 1),
                lastModified: file.lastModified,
                name: file.name.substring(0, file.name.lastIndexOf('.')),
                size:file.size
            }
            files.push(createdFile)
            this.setState({
                files
            })
        }).catch(error => {
            console.log(error)
        });

    };

    componentDidMount() {
        fileService.getFiles().then(resp => {
            this.setState({
                files: resp.data
            })
            console.log(resp)
        }).then(err => console.log(err));
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    };

    searchFile(e) {
        e.preventDefault();
        let filterFiles = this.state.files.filter(file => file.name.includes(this.state.searchedFile));
        this.setState({
            filteredFiles: filterFiles
        })
    }

    changeSort(e) {
        let files = this.state.files;
        switch (e.target.value) {
            case ("ascending"): {
                files = files.sort((a, b) => a.name.localeCompare(b.name));
                break;
            }
            case ("descending"): {
                let sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name));
                files = sortedFiles.reverse();
                break;
            }
            case ("newestTop"): {
                files = files.sort((a, b) => a.lastModified.localeCompare(b.lastModified));
                break;
            }
            case ("olderTop"): {
                let sortedFiles = files.sort((a, b) => a.lastModified.localeCompare(b.lastModified));
                files = sortedFiles.reverse();
                break;
            }
            default: {
                break
            }
        }
        this.setState({
            files: files
        })
    }

    removeFileInState(name) {
        let files = this.state.files.filter(file => file.name !== name);
        this.setState({
            files
        })
    }

    render() {
        if (!localStorage.getItem("username")) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="btn-group d-flex justify-content-center align-items-center" role="group">
                                <button className="btn btn-primary m-4 btn-upload"
                                        type="button"
                                        onClick={() => document.getElementById("uploadFile").click()}
                                >
                                    Upload
                                </button>
                                <input id="uploadFile" type="file" name="file" hidden onChange={this.handleUploadFile}/>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="#">
                                        <i className="fa fa-file mr-2"/>
                                        <span>My files</span>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="#">
                                        <i className="fa fa-clock-o mr-2"/>
                                        <span>Recent</span>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="#">
                                        <i className="fa fa-trash mr-2"/>
                                        <span>Trash</span>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <ul className="list-group">
                                    <li className="list-group-item"><i
                                        className="fa fa-jsfiddle mr-2"/><span>Storage</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="search d-flex justify-content-between align-items-center">
                                <h2 className="ml-3 mt-3">My Files</h2>
                                <form className="form-inline p-3">
                                    <input className="form-control mb-0 mr-2"
                                           name="searchedFile"
                                           type="search"
                                           placeholder="Search"
                                           aria-label="Search"
                                           onChange={this.onChange}
                                    />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                                            onClick={this.searchFile}>
                                        Search
                                    </button>
                                </form>
                            </div>
                            <div className="sorting d-flex justify-content-end align-items-center">
                                <form className="form-inline">
                                    <select className="form-control"
                                            name="sortBy"
                                            id="sortBy"
                                            onChange={this.changeSort}>
                                        <option value="ascending" defaultValue>Ascending</option>
                                        <option value="descending">Descending</option>
                                        <option value="newestTop">Newest Top</option>
                                        <option value="olderTop">Older Top</option>
                                    </select>
                                </form>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    {this.state.filteredFiles.length !== 0
                                        ? this.state.filteredFiles.map((file, index) =>
                                            <MyFile file={file} index={index} key={index}
                                                    removeFileInState={this.removeFileInState}/>
                                        )
                                        : this.state.files.map((file, index) =>
                                            <MyFile file={file} index={index} key={index}
                                                    removeFileInState={this.removeFileInState}/>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyDisk;
