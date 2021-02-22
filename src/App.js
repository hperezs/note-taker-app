import './App.css';
import React, { Component } from 'react';
import NewNote from './components/NewNote';
import ListNotes from './components/ListNotes';
import { withAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import Nav from './components/Nav';
import GetStarted from './components/GetStarted';
import NotAuthorized from './components/NotAuthorized';


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
      isUserAuthorized: null,
      userName: ''
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
      isLoading: true
    });

    fetch('https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/notes').then(response => {
      response.json().then(data => {
        let index = 0;
        const temp_notes = data.map(note => {
          note.noteId = index;
          index += 1;
          return note;
        })

        this.setState({ notes: temp_notes, lastIndex: index, isLoading: false });
        console.log(this.state);
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

  addNote(note) {
    fetch('https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/new-note', {
      method: "POST",
      body: JSON.stringify(note),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });

    this.fetchNotes();
  }

  deleteNote(note) {
    let url = 'https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/delete-note?id=';
    url = url.concat(note["_id"]);
  
    fetch(url, {
      method: "POST"
    }).then(response => {
      console.log(response);
    })
    this.fetchNotes();
  }

  async editNote(changes, id) {
    let url = 'https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/edit-note?id=';
    url = url.concat(id);
    console.log(changes);
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(changes),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => {
      console.log(response);
    })

    this.displayNotification('note-edited');

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

  displayNotification(type) {
    switch(type) {
      case 'note-added':
        store.addNotification({
          message: "Note added successfully.",
          type: "success",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true
          }
        });
        break;
      case 'note-deleted':
        store.addNotification({
          message: "Note deleted successfully.",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true
          }
        });
        break;
      case 'note-copied':
        store.addNotification({
          message: "Text copied to clipboard.",
          type: "info",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true
          }
        });
        break;
      case 'note-edited':
        store.addNotification({
          message: "Note edited successfully.",
          type: "success",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true
          }
        });
        break;
      case 'unable-to-edit':
        store.addNotification({
          title: "Error",
          message: "Only the Tech Agent associated with the note is able to edit it.",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        }); 
        break;
      case 'unable-to-delete':
        store.addNotification({
          title: "Error",
          message: "Only the Tech Agent associated with the note is able to delete it.",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });       
    }
  }

   getIsUserAuthorized() {
    let url = 'https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/is-authorized?email=' + this.props.auth0.user.email;
    return fetch(url).then(response => {
        response.json().then(data => {
        this.setState({
          isUserAuthorized: data.isAuthorized
        })
      })
    });
  }

  filterByAgent(name) {
    console.log('Calling filter by agent');
    this.setState({
      techAgentQuery: name
    })
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

    if(this.props.auth0.isAuthenticated && this.state.isUserAuthorized == null) {
      this.getIsUserAuthorized();
    }
  }

  render() {
    const { isAuthenticated, isLoading, loginWithRedirect } = this.props.auth0;
    if(isLoading) {
      return <Loading />
    } 
    else if (!isAuthenticated) {
      return (
          <>
            {loginWithRedirect()}
          </>
        )
    } else if (this.state.isUserAuthorized == null) {
      return <Loading />
    } else if (!this.state.isUserAuthorized) {
      return <NotAuthorized />
    } else {
      // Filter notes using the search query and the techAgentQuery
      let filteredNotes = this.state.notes;
      filteredNotes = filteredNotes.filter(note => {
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
            />
            <GetStarted 
              formDisplay={this.state.formDisplay}
              listDisplay={this.state.listDisplay}
            />
            <NewNote 
              formDisplay={this.state.formDisplay}
              toggleDisplay={this.toggleDisplay}
              addNote={this.addNote}
              displayNotification={this.displayNotification}
              userName={this.state.userName}
            />
            <ListNotes
              notes={filteredNotes}
              listDisplay={this.state.listDisplay}
              toggleList={this.toggleList}
              searchNotes={this.searchNotes}
              deleteNote={this.deleteNote}
              isLoading={this.state.isLoading}
              editNote={this.editNote}
              fetchNotes={this.fetchNotes}
              displayNotification={this.displayNotification}
              filterByAgent={this.filterByAgent}
              userName={this.state.userName}
            />
          </main>
        </>
      );
    }
  }
}

export default withAuth0(App);
