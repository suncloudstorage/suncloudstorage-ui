import React, {Component} from "react";
import {ContextMenuTrigger, MenuItem, ContextMenu} from "react-contextmenu";
import saveAs from 'file-saver';
import "./FileContextMenu.css";
import userService from "../services/userService";
import {CloudDownload, Trash, Pencil} from 'react-bootstrap-icons';

class MyFile extends Component {

    downloadFile(filename) {
        console.log("filename", filename)
        userService.downloadFile(filename).then(response => {
            let url = response.config.url;
            saveAs(response.data, url.slice(url.lastIndexOf("/") + 1));
        })
    }

    deleteFile(filename) {
        console.log("filename", filename)
        userService.deleteFile(filename)
    }

    handleClick = (e, data) => {
        switch (data.name) {
            case 'Download': {
                console.log('Download')
                this.downloadFile(this.props.file.name + '.' + this.props.file.extension)
                break;
            }
            case 'Delete': {
                console.log('Delete')
                userService.deleteFile(this.props.file.name + '.' + this.props.file.extension)
                window.location.reload();
                break;
            }
            case 'Rename': {
                console.log('Rename')
                break;
            }
            default: {
                break;
            }
        }
    }

    render() {
        return (
            <div className="card col-2 p-4 mr-4 mb-4">
                <ContextMenuTrigger id={"same_unique_identifier" + this.props.index}>
                    <img src="microsoft-word.png" className="card-img-top w-100 d-block" alt="image"/>
                    <h4 className="card-title text-center">{this.props.file.name + this.props.index}</h4>
                </ContextMenuTrigger>

                <ContextMenu id={"same_unique_identifier" + this.props.index}>
                    <MenuItem data={{name: 'Rename'}} onClick={this.handleClick}>
                        <Pencil/> Rename
                    </MenuItem>
                    <MenuItem data={{name: 'Download'}} onClick={this.handleClick}>
                        <CloudDownload/> Download
                    </MenuItem>
                    <MenuItem data={{name: 'Delete'}} onClick={this.handleClick}>
                        <Trash/> Delete
                    </MenuItem>
                </ContextMenu>
            </div>
        )
    }
}

export default MyFile;
