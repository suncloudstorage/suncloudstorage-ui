import React, {Component} from "react";
import {ContextMenuTrigger, MenuItem, ContextMenu} from "react-contextmenu";
import saveAs from 'file-saver';
import "./FileContextMenu.css";
import userService from "../services/userService";
import {CloudDownload, Trash, Pencil} from 'react-bootstrap-icons';
import authService from "../services/authService";
import fileService from "../services/fileService";

class MyFile extends Component {

    downloadFile(filename) {
        console.log("filename", filename)
        fileService.downloadFile(filename).then(response => {
            let url = response.config.url;
            saveAs(response.data, url.slice(url.lastIndexOf("/") + 1));
        })
    }

    deleteFile(filename) {
        console.log("filename", filename)
        fileService.deleteFile(filename)
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
                fileService.deleteFile(this.props.file.name + '.' + this.props.file.extension)
                this.props.removeFileInState(this.props.file.name)
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
                    <img src={'icons/' + this.getIconByExtension()} className="card-img-top w-100 d-block" alt="image"/>
                    <h4 className="card-title text-center">{this.props.file.name + '.' + this.props.file.extension}</h4>
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

    getIconByExtension() {
        let extension = this.props.file.extension;

        if (['png', 'jpg', 'jpeg'].includes(extension)) {
            return 'image.png'
        } else if ('pdf' === extension) {
            return 'pdf.png'
        } else if (['doc', 'docx'].includes(extension)) {
            return 'word.png'
        } else if (['xls', 'xlsx'].includes(extension)) {
            return 'excel.png'
        } else if ('txt' === extension) {
            return 'text.png'
        } else if ('mp3' === extension){
            return 'audio.png'
        } else if ('mp4' === extension){
            return 'video.png'
        } else {
            return 'unknown.png'
        }

        return "";
    }
}

export default MyFile;
