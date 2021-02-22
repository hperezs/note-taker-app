import { withAuth0 } from '@auth0/auth0-react';
import React, { Component } from 'react';

class Note extends Component {
    constructor() {
        super();

        this.state = {
            isEditing: false,
            editableNote: {}
        }

        this.toggleisEditing = this.toggleisEditing.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.handleCheckboxChanges = this.handleCheckboxChanges.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    toggleisEditing() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChanges(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        let new_note = this.state.editableNote;
        new_note[name] = value;
        
        this.setState({
            editableNote: new_note
        });

        
    }

    handleCheckboxChanges(event) {
        const name = event.target.name;
        const isChecked = event.target.checked;

        let new_note = this.state.editableNote;
        new_note[name] = isChecked;

        this.setState({
            editableNote: new_note
        })
    }

    copyNote() {
        let copied_text = "Issue: " + this.props.note.issue + "\n" + "Steps Taken: " + this.props.note.stepsTaken;

        navigator.clipboard.writeText(copied_text);
        this.props.displayNotification('note-copied');
    }

    cancelChanges() {
        this.props.fetchNotes();
        this.props.displayNotification('edit-canceled');
    }

    saveChanges() {
        console.log('changes saved');
        this.toggleisEditing();
        let changes = {
            issue: this.state.editableNote.issue,
            stepsTaken: this.state.editableNote.stepsTaken,
            noteId: this.state.editableNote.noteId
        }
        const id = this.props.note._id;
        this.props.editNote(changes, id);
    }

    evaluateEdit() {
        if(this.props.userName == this.props.note.techAgent){
            this.toggleisEditing()
        } else {
            this.props.displayNotification('unable-to-edit')
        }
    }

    evaluateDelete() {
        if(this.props.userName == this.props.note.techAgent){
            this.props.deleteNote(this.props.note);
        } else {
            this.props.displayNotification('unable-to-delete');
        }
    }

    componentDidMount() {
        let noteData = this.props.note;
        this.baseState = noteData;
        this.setState({
            editableNote: noteData
        })
    }

    render() {
        return(
            <div className="note-layout border-bottom row py-3 my-3 col-12">
                <div className="col-12">
                    <div className="note-head d-flex mb-3">
                        <h6 className="customer-name"> 
                            {this.props.note.customerName}
                        </h6>
                        <span className="note-date ml-auto font-italic">
                            {this.props.note.date}
                        </span>
                        <button className={"btn btn-danger btn-small ml-2 " + (this.props.showEditButtons ? '' :'hidden')} 
                                onClick={e => this.evaluateDelete()}
                        >
                            <i className="fas fa-trash-alt"></i>
                        </button> 
                        <button 
                            className={"btn btn-warning btn-small ml-2 " + (this.props.showEditButtons ? '' : 'hidden')}
                            onClick={e => this.evaluateEdit()}
                        >
                            <i className="fas fa-edit text-white"></i>
                        </button>
                    </div>
                    
                    <div className="order-number d-flex mb-3">
                        <span className="label-item text-secondary">Order number:  </span>
                        <span>{this.props.note.orderNumber}</span>
                        <i onClick={e => this.copyNote()} className="clipboard-button far fa-copy ml-auto fa-lg" title="Copy to clipboard"></i>
                    </div>

                    <div className="order-issue d-flex mb-3">
                        <span className="label-item text-secondary">Issue:  </span>
                        <textarea 
                            id={"issue-" + this.props.note.orderNumber} 
                            type="text"
                            name="issue"
                            value={this.state.editableNote.issue} 
                            className="form-control mx-3 p-2 issue-note" 
                            cols="70" 
                            rows="6"
                            readOnly={!this.state.isEditing}
                            onChange={this.handleChanges}
                            />
                    </div>

                    <div className="order-steps d-flex mb-3">
                        <span className="label-item text-secondary">Steps Taken:  </span>
                        <textarea 
                            id={"steps-" + this.props.note.orderNumber} 
                            name="stepsTaken"
                            type="text" value={this.state.editableNote.stepsTaken} 
                            className="form-control mx-3 p-2 stepsTaken-note" 
                            cols="70"
                            rows="6"
                            onChange={this.handleChanges}
                            readOnly={!this.state.isEditing}/>
                    </div>

                    <div className="d-flex mb-3">
                        <span className="label-item text-secondary">Tech Agent:</span>
                        <span>{this.props.note.techAgent}</span>
                    </div>

                    <div className="d-flex mb-3">
                        <span className="label-item text-secondary">RMA created:</span>
                        <input 
                            onChange={this.handleCheckboxChanges} 
                            class="big-checkbox note-checkbox form-check-input" 
                            type="checkbox" 
                            checked={this.props.note.hasRMA}
                            name="hasRMA"
                            disabled={!this.state.isEditing}/>
                    </div>

                    <div className="d-flex mb-3">
                        <span className="label-item text-secondary">Advanced Replacement issued:</span>
                        <input 
                            onChange={this.handleCheckboxChanges} 
                            class="big-checkbox note-checkbox form-check-input" 
                            type="checkbox" 
                            checked={this.props.note.hasAdvancedReplacement}
                            name="hasAdvancedReplacement"
                            disabled={!this.state.isEditing}/>
                    </div>

                    <div className={"edit-actions text-center " + (this.state.isEditing ? '' : ' hidden')}>
                        <button className="btn btn-danger mx-3" onClick={this.cancelChanges}>Cancel</button>
                        <button className="btn btn-success" onClick={this.saveChanges}>Save</button>
                    </div>             
                </div>
            </div>
        )
    }
}

export default Note;