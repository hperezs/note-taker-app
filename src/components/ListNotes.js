import React, { Component } from 'react';
import Note from './Note';
import SearchNotes from './SearchNotes';
import TechAgentFilter from './TechAgentFilter';
import Skeleton from 'react-loading-skeleton';

class ListNotes extends Component {
    constructor() {
        super();

        this.state = {
            showEditButtons: false
        }

        this.toggleEditButtons = this.toggleEditButtons.bind(this);
    }

    toggleEditButtons() {
        this.setState({
            showEditButtons: !this.state.showEditButtons
        })
    }

    render() {
        if (this.props.isLoading && this.props.listDisplay) {
            return (
                <article className="list-appointments-layout py-3 mb-5">
                    <section className="container col-12 card-header">
                        <div className="">
                            <Skeleton height={50} />
                        </div>

                        <div className="note-list row justify-content-center card-body">
                            <Note isLoading={true} />
                            <Note isLoading={true} />
                            <Note isLoading={true} />
                        </div>

                    </section>
                </article>
            )
        } else {
            return(
                <article className="list-appointments-layout py-3 mb-5">
                    
                    <section className={"container col-12 card-header " + (this.props.listDisplay ? '' : 'hidden')}>
                        <div className="d-flex bg-secondary align-items-center">
                            <div className="search-component col-sm-4 col-6">
                                <SearchNotes searchNotes={this.props.searchNotes} />
                            </div>
                            <div className="align-items-center">
                                <TechAgentFilter filterByAgent={this.props.filterByAgent} userName={this.props.userName} />
                            </div>
                            <button className="btn btn-info ml-auto my-2 mr-2" title="Refresh data" onClick={this.props.fetchNotes}>
                                <i className="fas fa-sync"></i>
                            </button>
                            <button className="btn btn-warning my-2 mr-2" title="Display edit actions" onClick={this.toggleEditButtons}>
                                <h5 className="text-white"><i className="fas fa-edit"></i></h5>
                            </button>
                            <button className={"btn btn-danger my-2 mr-2 "} onClick={this.props.toggleList}><i className="fas fa-times" title="Close list"></i></button>
                        </div>
    
                        <section className="note-list row justify-content-center overflow-auto bg-light card-body">
                            {
                                this.props.notes.length ? '' : 'No notes yet.'
                            }
                            {
                                this.props.notes.map(note => (
                                    <Note 
                                        note={note} 
                                        showEditButtons={this.state.showEditButtons} 
                                        deleteNote={this.props.deleteNote}
                                        editNote={this.props.editNote}
                                        key={note.noteId}
                                        displayNotification={this.props.displayNotification}
                                        userName={this.props.userName}
                                        fetchNotes={this.props.fetchNotes}
                                        />
                                ))
                            } 
                        </section>
                    </section>
                </article>
            )
        }
    }
}

export default ListNotes;