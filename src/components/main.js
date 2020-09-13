import React, {Component} from "react";
import userService from "../services/userService";

class Main extends Component {

    downloadFile() {
        userService.downloadFile().then(response => {
            // var bytes = new Uint8Array(response.data); // pass your byte response to this constructor
            //
            // var blob=new Blob([bytes], {type: response.headers.contentType});// change resultByte to bytes
            //
            // var link=document.createElement('a');
            // link.href=window.URL.createObjectURL(blob);
            // link.download="person-icon.png";
            // link.click();

            let base64ToArrayBuffer = userService.base64ToArrayBuffer(response.data);
            userService.createAndDownloadBlobFile(base64ToArrayBuffer, 'person-icon', 'png' )
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
