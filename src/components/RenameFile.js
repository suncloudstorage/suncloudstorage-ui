import React, {Component} from "react";
import fileService from "../services/fileService";

class RenameFile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newName: ''
        }

        this.handleClickSave = this.handleClickSave.bind(this);
        this.onChangeFileNameHandler = this.onChangeFileNameHandler.bind(this);
    }

    handleClickSave(e) {
        e.preventDefault();
        let oldFileName = document.getElementById("renameFileTitle").innerHTML;
        let extension = oldFileName.substring(oldFileName.lastIndexOf('.'));
        let newFileName = this.state.newName + extension;
        fileService.editFileName(newFileName, oldFileName)
            .then(() => {
                this.props.renameFile(newFileName, oldFileName)
                document.getElementById('closeEditNameButton').click();
            })
            .catch(error =>{
                console.log(error)
            });
    }

    onChangeFileNameHandler(e) {
        this.setState({
            newName: e.target.value
        })
    }

    render() {
        return (
            <div id="renameFile" className="modal fade" role="dialog" tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Edit file: <strong id="renameFileTitle">file name</strong></h1>
                        </div>
                        <div className="modal-body">
                            <form className="d-flex flex-row justify-content-between align-items-center">
                                <input id="renameFileInput" type="text" className="form-control mb-0 mr-2"
                                       onChange={this.onChangeFileNameHandler}/>
                                <button type="submit" className="btn btn-primary" onClick={this.handleClickSave}>Save
                                </button>
                            </form>

                        </div>
                        <button id="closeEditNameButton" type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RenameFile;