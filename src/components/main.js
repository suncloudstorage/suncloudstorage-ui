import React, {Component} from "react";
import userService from "../services/userService";
import saveAs  from 'file-saver';

class Main extends Component {
    downloadFile() {
        userService.downloadFile().then(response => {
            let url = response.config.url;
            saveAs(response.data, url.slice(url.lastIndexOf("/") + 1));
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.downloadFile}>Download file</button>
            </div>
        )
    }
}

export default Main;
