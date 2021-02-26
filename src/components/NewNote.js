import React, {Component} from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class NewNote extends Component {
    constructor() {
        super();
        this.state = {
            customerName: '',
            orderNumber: '',
            issue: '',
            stepsTaken: '',
            hasRMA: false,
            hasAdvancedReplacement: false
        }

        this.handleChanges = this.handleChanges.bind(this);
        this.handleCheckboxChanges = this.handleCheckboxChanges.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.cancelNote = this.cancelNote.bind(this);
    }

    handleChanges(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value})
    }

    handleCheckboxChanges(event) {
        const name = event.target.name;
        const isChecked = event.target.checked;
        this.setState({[name]: isChecked});
    }

    saveNote(event) {
        event.preventDefault();

        var date = new Date();
        let current_time = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
        
        let new_note = {
            customerName: this.state.customerName,
            orderNumber: this.state.orderNumber,
            issue: this.state.issue,
            stepsTaken: this.state.stepsTaken,
            date: current_time,
            techAgent: this.props.userName,
            hasRMA: this.state.hasRMA,
            hasAdvancedReplacement: this.state.hasAdvancedReplacement
        }

        console.log(new_note);

        this.setState({
            customerName: '',
            orderNumber: '',
            issue: '',
            stepsTaken: '',
            hasRMA: false,
            hasAdvancedReplacement: false
        }, () => {
            this.props.addNote(new_note);
            this.props.toggleDisplay();
        });
    }

    cancelNote() {
        this.setState({
            customerName: '',
            orderNumber: '',
            issue: '',
            stepsTaken: '',
            hasRMA: false,
            hasAdvancedReplacement: false
        }, () => {
            this.props.toggleDisplay();
        });
    }

    
    render() {
        return (<article className="">

            <div className={
                "container " + (
                this.props.formDisplay ? '' : 'hidden'
            )
            }>
                <div className="row justify-content-center ">
                    <section className="col-sm-12 col-md-10 new-note-layout">
                        <div className="card-header text-center">
                            <h5>New Note</h5>
                        </div>
                        <div className="card-body">

                            <form className="appointment-form" noValidate
                                onSubmit={e => {
                                    this.saveNote(e);
                                }}>

                                <div className="form-group form-row">
                                    <label className="col-form-label">Tech Agent:</label>
                                    <div className="col-md-3 col-sm-5">
                                        <label className="col-form-label">{this.props.userName}</label>
                                    </div>
                                </div>

                                <div className="form-group form-row">
                                    <label className="col-form-label">Customer Name:</label>
                                    <div className="col-md-3 col-sm-5">
                                        <input onChange={
                                                this.handleChanges
                                            }
                                            value={this.state.customerName}
                                            type="text"
                                            className="form-control"
                                            name="customerName"
                                            id="customerName"></input>
                                    </div>
                                </div>

                                <div className="form-group form-row">
                                    <label className="col-form-label">Order number:</label>
                                    <div className="col-md-3 col-sm-5">
                                        <input onChange={
                                                this.handleChanges
                                            }
                                            value={this.state.orderNumber}
                                            type="text"
                                            className="form-control"
                                            name="orderNumber"
                                            id="orderNumber"></input>
                                    </div>
                                </div>

                                <div className="form-group form-row">
                                    <label className="col-form-label">Issue:
                                    </label>
                                    <div>
                                        <textarea onChange={
                                                this.handleChanges
                                            }
                                            value={this.state.issue}
                                            className="form-control"
                                            rows="4"
                                            cols="70"
                                            name="issue"
                                            id="issue"></textarea>
                                    </div>
                                </div>

                                <div className="form-group form-row">
                                    <label className="col-form-label">Steps Taken:
                                    </label>
                                    <div>
                                        <textarea onChange={
                                                this.handleChanges
                                            }
                                            value={this.state.stepsTaken}
                                            className="form-control"
                                            rows="4"
                                            cols="70"
                                            name="stepsTaken"
                                            id="stepsTaken"></textarea>
                                    </div>
                                </div>

                                <div className="form-group form-row">
                                    <label class="form-check-label col-form-label">
                                        RMA created
                                    </label>
                                    <input onChange={this.handleCheckboxChanges} class="big-checkbox new-note-checkbox form-check-input" type="checkbox" checked={this.state.hasRMA} name="hasRMA"/>
                                </div>

                                <div className="form-group form-row">
                                    <label class="form-check-label col-form-label">
                                        Advanced replacement issued
                                    </label>
                                    <input onChange={this.handleCheckboxChanges} class="big-checkbox new-note-checkbox form-check-input" type="checkbox" checked={this.state.hasAdvancedReplacement} name="hasAdvancedReplacement"/>
                                </div>

                                <div className="form-group form-row justify-content-center">
                                    <button className="btn btn-danger mx-3"
                                        onClick={e => this.cancelNote()}
                                        type="reset">Cancel</button>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </div>

                            </form>

                        </div>
                    </section>
                </div>
            </div>
        </article>)

    }
}

export default withAuth0(NewNote);
