import { store } from 'react-notifications-component';

const displayNotification = (type) => {
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
        break;
        case 'edit-canceled':
            store.addNotification({
                message: "Your changes have been canceled.",
                type: "info",
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
      case 'unknown-error':
        store.addNotification({
          message: "An unknown error occurred.",
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
    }
  }

  export default displayNotification;