import './App.css';
import React, { Component } from 'react';
import NewNote from './components/NewNote';
import ListNotes from './components/ListNotes';
import { withAuth0 } from '@auth0/auth0-react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Nav from './components/Nav';
import GetStarted from './components/GetStarted';
import NotAuthorized from './components/NotAuthorized';
import displayNotification from './lib/notifications';
import { LinearProgress } from '@material-ui/core';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      lastIndex: 0,
      formDisplay: false,
      newNoteBtnDisplay: true,
      listDisplay: false,
      queryText: '',
      techAgentQuery: '',
      isLoading: true,
      isUserAuthorized: 'unknown',
      userName: '',
      showLinearProgress: false
    }

    this.fetchNotes = this.fetchNotes.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.addNote = this.addNote.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.searchNotes = this.searchNotes.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.filterByAgent = this.filterByAgent.bind(this);
  }

  fetchNotes() {
    this.setState({
      isLoading: true,
      showLinearProgress: true
    });

    fetch('https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/notes').then(response => {
      response.json().then(data => {
        let index = 0;
        const temp_notes = data.map(note => {
          note.noteId = index;
          index += 1;
          return note;
        })

        this.setState({ 
          notes: temp_notes, 
          lastIndex: index, 
          isLoading: false, 
          showLinearProgress: false 
        });
      })
    })
  }

  componentDidMount() {
    this.fetchNotes();
  }

  toggleDisplay() {
    this.setState({
      formDisplay: !this.state.formDisplay,
      newNoteBtnDisplay: !this.state.newNoteBtnDisplay
    })
  }

  async addNote(note) {
    this.setState({
      showLinearProgress: true
    })
    let response = await fetch('https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/new-note', {
      method: "POST",
      body: JSON.stringify(note),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });

    if(response.status == "200") {
      displayNotification('note-added');
      this.setState({
        showLinearProgress: false
      })
    } else {
      displayNotification('unknown-error');
    }
    
    this.fetchNotes();
  }

  async deleteNote(note) {
    this.setState({
      showLinearProgress: true
    })
    let url = 'https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/delete-note?id=';
    url = url.concat(note["_id"]);
  
    let response = await fetch(url, {
      method: "POST"
    })

    if (response.status == 200) {
      displayNotification('note-deleted');
      this.setState({
        showLinearProgress: false
      })
    } else {
      displayNotification('unknown-error');
    }

    this.fetchNotes();
  }

  async editNote(changes, id) {
    this.setState({
      showLinearProgress: true
    })
    let url = 'https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/edit-note?id=';
    url = url.concat(id);

    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(changes),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    if (response.status == 200) {
      displayNotification('note-edited');
      this.setState({
        showLinearProgress: false
      })
    } else {
      displayNotification('unknown-error');
    }

    this.fetchNotes();
  }

  toggleList() {
    this.setState({
      listDisplay: !this.state.listDisplay
    })
  }

  searchNotes(text){
    this.setState({
      queryText: text
    })
  }

   getIsUserAuthorized() {
    let url = 'https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/is-authorized?email=' + this.props.auth0.user.email;

    fetch(url).then(response => {
        response.json().then(data => {
        this.setState({
          isUserAuthorized: data.isAuthorized,
          isLoading: false
          })
        })
      });  
  }

  filterByAgent(name) {
    this.setState({
      techAgentQuery: name
    })
  }

  filterNotes(notes) {
    // Filter by the query text and techAgent
    let filteredNotes = notes.filter(note => {
      return(
        (note['customerName'].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
        note['orderNumber'].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
        note['issue'].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
        note['stepsTaken'].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
        note['date'].toLowerCase().includes(this.state.queryText.toLowerCase())) &&
        (note['techAgent'] == this.state.techAgentQuery || this.state.techAgentQuery == 'All')
      )
    })

    // Sort notes by date
    filteredNotes.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date); 
    })

    return filteredNotes;
  }

  componentDidUpdate() {
    // Set the state of the username
    if(!this.state.userName && this.props.auth0.isAuthenticated ){
      let name = this.props.auth0.user.name;

      // In case the name is an email
      let splitName = name.split("@")[0];
      let final_name = splitName.charAt(0).toUpperCase() + splitName.slice(1);

      this.setState({
        userName: final_name
      })
    }

    if(this.props.auth0.isAuthenticated && this.state.isUserAuthorized == 'unknown') {
      this.getIsUserAuthorized();
    }
  }

  render() {
    const { isAuthenticated, isLoading, loginWithRedirect } = this.props.auth0;

    if (!isAuthenticated && !isLoading) {
      return (
          <>
            {loginWithRedirect()}
          </>
        )
    } else if (!this.state.isUserAuthorized && !isLoading && !this.state.isLoading && this.state.isUserAuthorized != 'unknown') {
      return <NotAuthorized />
    } else {

      let filteredNotes = this.filterNotes(this.state.notes);

      return (
        <>
          <ReactNotification />
          <main className="container col-sm-12 col-lg-10 col-xl-6 mt-5">
            <Nav
              newNoteBtnDisplay={this.state.newNoteBtnDisplay}
              toggleDisplay={this.toggleDisplay}  
              listDisplay={this.state.listDisplay}
              toggleList={this.toggleList}
              userName={this.state.userName}
              isLoading={isLoading}
            />
            <div className={this.state.showLinearProgress ? '' : 'hidden'}><LinearProgress /></div>
            <section className="mt-5">
              <GetStarted 
                formDisplay={this.state.formDisplay}
                listDisplay={this.state.listDisplay}
                isLoading={this.state.isLoading || isLoading}
              />
              <NewNote 
                formDisplay={this.state.formDisplay}
                toggleDisplay={this.toggleDisplay}
                addNote={this.addNote}
                displayNotification={displayNotification}
                userName={this.state.userName}
              />
              <ListNotes
                notes={filteredNotes}
                listDisplay={this.state.listDisplay}
                toggleList={this.toggleList}
                searchNotes={this.searchNotes}
                deleteNote={this.deleteNote}
                isLoading={this.state.isLoading || isLoading}
                editNote={this.editNote}
                fetchNotes={this.fetchNotes}
                displayNotification={displayNotification}
                filterByAgent={this.filterByAgent}
                userName={this.state.userName}
              />
            </section>
            
          </main>
        </>
      );
    }
  }
}

export default withAuth0(App);
