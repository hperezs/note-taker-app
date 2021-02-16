(this["webpackJsonpnote-taker"]=this["webpackJsonpnote-taker"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},19:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(10),o=s.n(a),c=(s(16),s(3)),i=s(4),l=s(2),r=s(6),d=s(5),h=(s(17),s(11)),b=s(0),j=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={customerName:"",orderNumber:"",issue:"",stepsTaken:"",date:""},e.handleChanges=e.handleChanges.bind(Object(l.a)(e)),e.saveNote=e.saveNote.bind(Object(l.a)(e)),e}return Object(i.a)(s,[{key:"handleChanges",value:function(e){var t=e.target,s=t.value,n=t.name;this.setState(Object(h.a)({},n,s))}},{key:"saveNote",value:function(e){e.preventDefault();var t=new Date,s=t.getMonth()+1+"-"+t.getDate()+"-"+t.getFullYear();console.log(s);var n={customerName:this.state.customerName,orderNumber:this.state.orderNumber,issue:this.state.issue,stepsTaken:this.state.stepsTaken,date:s};console.log(n),this.props.addNote(n),this.setState({customerName:"",orderNumber:"",issue:"",stepsTaken:"",date:""}),this.props.toggleDisplay()}},{key:"render",value:function(){return Object(b.jsxs)("article",{className:"",children:[Object(b.jsx)("div",{className:"d-flex justify-content-end mr-5",children:Object(b.jsx)("button",{className:"layout-dropdown btn btn-success btn-lg "+(this.props.aptBtnDisplay?"":"hidden"),onClick:this.props.toggleDisplay,children:Object(b.jsxs)("h5",{children:["New Note ",Object(b.jsx)("i",{className:"fas fa-plus-circle ml-1"})]})})}),Object(b.jsx)("div",{className:"container "+(this.props.formDisplay?"":"hidden"),children:Object(b.jsx)("div",{className:"row justify-content-center ",children:Object(b.jsxs)("section",{className:"col-sm-12 col-md-10 new-note-layout",children:[Object(b.jsx)("div",{className:"card-header text-center",children:Object(b.jsx)("h5",{children:"New Note"})}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("form",{className:"appointment-form",noValidate:!0,onSubmit:this.saveNote,children:[Object(b.jsxs)("div",{className:"form-group form-row",children:[Object(b.jsx)("label",{className:"col-form-label",children:"Customer Name:"}),Object(b.jsx)("div",{className:"col-md-3 col-sm-5",children:Object(b.jsx)("input",{onChange:this.handleChanges,type:"text",className:"form-control",name:"customerName",id:"customerName"})})]}),Object(b.jsxs)("div",{className:"form-group form-row",children:[Object(b.jsx)("label",{className:"col-form-label",children:"Order number:"}),Object(b.jsx)("div",{className:"col-md-3 col-sm-5",children:Object(b.jsx)("input",{onChange:this.handleChanges,type:"text",className:"form-control",name:"orderNumber",id:"orderNumber"})})]}),Object(b.jsxs)("div",{className:"form-group form-row",children:[Object(b.jsx)("label",{className:"col-form-label",children:"Issue:"}),Object(b.jsx)("div",{children:Object(b.jsx)("textarea",{onChange:this.handleChanges,className:"form-control",rows:"4",cols:"70",name:"issue",id:"issue"})})]}),Object(b.jsxs)("div",{className:"form-group form-row",children:[Object(b.jsx)("label",{className:"col-form-label",children:"Steps Taken:"}),Object(b.jsx)("div",{children:Object(b.jsx)("textarea",{onChange:this.handleChanges,className:"form-control",rows:"4",cols:"70",name:"stepsTaken",id:"stepsTaken"})})]}),Object(b.jsxs)("div",{className:"form-group form-row justify-content-center",children:[Object(b.jsx)("button",{className:"btn btn-danger mx-3",onClick:this.props.toggleDisplay,type:"reset",children:"Cancel"}),Object(b.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save"})]})]})})]})})})]})}}]),s}(n.Component),u=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={isEditing:!1,editableNote:{}},e.toggleisEditing=e.toggleisEditing.bind(Object(l.a)(e)),e.handleChanges=e.handleChanges.bind(Object(l.a)(e)),e.cancelChanges=e.cancelChanges.bind(Object(l.a)(e)),e.saveChanges=e.saveChanges.bind(Object(l.a)(e)),e}return Object(i.a)(s,[{key:"toggleisEditing",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleChanges",value:function(e){var t=e.target,s=t.value,n=t.name,a=this.state.editableNote;a[n]=s,this.setState({editableNote:a})}},{key:"copyText",value:function(e){var t=document.getElementById("steps-"+e);t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")}},{key:"cancelChanges",value:function(){this.setState({editableNote:this.props.note}),console.log("Canceled changes"),console.log(this.props.note),this.toggleisEditing()}},{key:"saveChanges",value:function(){console.log("changes saved"),this.toggleisEditing(),this.props.editNote(this.state.editableNote)}},{key:"componentDidMount",value:function(){var e=this.props.note;this.setState({editableNote:e})}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"note-layout row py-3 col-12",children:Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsxs)("div",{className:"note-head d-flex mb-3",children:[Object(b.jsx)("h6",{className:"customer-name",children:this.props.note.customerName}),Object(b.jsx)("span",{className:"note-date ml-auto font-italic",children:this.props.note.date}),Object(b.jsx)("button",{className:"btn btn-danger btn-small ml-2 "+(this.props.showDeleteBtn?"":"hidden"),onClick:function(t){return e.props.deleteNote(e.props.note)},children:Object(b.jsx)("i",{className:"fas fa-trash-alt"})})]}),Object(b.jsxs)("div",{className:"order-number d-flex mb-3",children:[Object(b.jsx)("span",{className:"label-item text-secondary",children:"Order number:  "}),Object(b.jsx)("span",{children:this.props.note.orderNumber}),Object(b.jsx)("i",{className:"note-edit-button fas fa-pencil-alt fa-md mt-auto ml-auto",onClick:this.toggleisEditing})]}),Object(b.jsxs)("div",{className:"order-issue d-flex mb-3",children:[Object(b.jsx)("span",{className:"label-item text-secondary",children:"Issue:  "}),Object(b.jsx)("textarea",{type:"text",name:"issue",value:this.state.editableNote.issue,className:"form-control w-50 issue-note",cols:"70",rows:"6",readOnly:!this.state.isEditing,onChange:this.handleChanges})]}),Object(b.jsxs)("div",{className:"order-steps d-flex mb-3",children:[Object(b.jsx)("span",{className:"label-item text-secondary",children:"Steps Taken:  "}),Object(b.jsx)("textarea",{id:"steps-"+this.props.note.orderNumber,name:"stepsTaken",type:"text",value:this.state.editableNote.stepsTaken,className:"form-control w-50 stepsTaken-note",cols:"70",rows:"6",onChange:this.handleChanges,readOnly:!this.state.isEditing}),Object(b.jsx)("i",{onClick:function(t){return e.copyText(e.props.note.orderNumber)},className:"clipboard-button far fa-copy ml-auto fa-lg "})]}),Object(b.jsxs)("div",{className:"edit-actions text-center "+(this.state.isEditing?"":" hidden"),children:[Object(b.jsx)("button",{className:"btn btn-danger mx-3",onClick:this.cancelChanges,children:"Cancel"}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.saveChanges,children:"Save"})]})]})})}}]),s}(n.Component),m=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"input-group ml-2 mt-2",children:Object(b.jsx)("input",{type:"text",className:"search-bar form-control",placeholder:"Search for...",onChange:function(t){return e.props.searchNotes(t.target.value)}})})}}]),s}(n.Component),p=(s(19),function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"d-flex m-auto",children:Object(b.jsxs)("div",{class:"cssload-loader mt-5",children:[Object(b.jsx)("div",{class:"cssload-inner cssload-one"}),Object(b.jsx)("div",{class:"cssload-inner cssload-two"}),Object(b.jsx)("div",{class:"cssload-inner cssload-three"})]})})}}]),s}(n.Component)),g=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={showDeleteBtn:!1},e.toggleDeleteBtn=e.toggleDeleteBtn.bind(Object(l.a)(e)),e}return Object(i.a)(s,[{key:"toggleDeleteBtn",value:function(){this.setState({showDeleteBtn:!this.state.showDeleteBtn})}},{key:"render",value:function(){var e=this;return this.props.isLoading?Object(b.jsx)(p,{}):Object(b.jsxs)("article",{className:"list-appointments-layout py-3 mb-5",children:[Object(b.jsx)("div",{className:"d-flex justify-content-end mr-5",children:Object(b.jsx)("button",{className:"btn btn-info btn-lg "+(this.props.listDisplay?"hidden":""),onClick:this.props.toggleList,children:Object(b.jsxs)("h6",{children:["See Notes ",Object(b.jsx)("i",{className:"far fa-address-book"})]})})}),Object(b.jsxs)("section",{className:"container card-header "+(this.props.listDisplay?"":"hidden"),children:[Object(b.jsxs)("div",{className:"d-flex bg-secondary",children:[Object(b.jsx)("div",{className:"search-component col-6",children:Object(b.jsx)(m,{searchNotes:this.props.searchNotes})}),Object(b.jsx)("button",{className:"btn btn-info btn-md ml-auto my-2 mr-2",onClick:this.props.fetchNotes,children:Object(b.jsx)("i",{className:"fas fa-sync"})}),Object(b.jsx)("button",{className:"btn btn-warning btn-sm my-2 mr-2",onClick:this.toggleDeleteBtn,children:Object(b.jsx)("h5",{className:"text-white",children:Object(b.jsx)("i",{className:"fas fa-user-times"})})}),Object(b.jsx)("button",{className:"btn btn-danger my-2 mr-2 ",onClick:this.props.toggleList,children:Object(b.jsx)("i",{className:"fas fa-times"})})]}),Object(b.jsx)("section",{className:"note-list row overflow-auto bg-light card-body",children:this.props.notes.map((function(t){return Object(b.jsx)(u,{note:t,showDeleteBtn:e.state.showDeleteBtn,deleteNote:e.props.deleteNote,editNote:e.props.editNote},t.noteId)}))})]})]})}}]),s}(n.Component),N=s(7),f=function(){var e=Object(N.b)().loginWithRedirect;return Object(b.jsx)("div",{className:"row justify-content-center mt-5 h-50vh",children:Object(b.jsxs)("div",{className:"col-8 justify-content-center text-center",children:[Object(b.jsx)("h1",{children:"Welcome"}),Object(b.jsx)("p",{children:"You need to be logged in to see this page."}),Object(b.jsx)("button",{className:"btn btn-lg btn-primary",onClick:function(){return e()},children:"Log in"})]})})},O=function(){var e=Object(N.b)().logout;return Object(b.jsx)("div",{className:"d-flex justify-content-end mb-5 mr-2",children:Object(b.jsx)("button",{className:"btn btn-lg btn-danger",onClick:function(){return e()},children:"Log out"})})},x=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={notes:[],lastIndex:0,formDisplay:!0,aptBtnDisplay:!1,listDisplay:!0,queryText:"",isLoading:!0},e.fetchNotes=e.fetchNotes.bind(Object(l.a)(e)),e.toggleDisplay=e.toggleDisplay.bind(Object(l.a)(e)),e.addNote=e.addNote.bind(Object(l.a)(e)),e.toggleList=e.toggleList.bind(Object(l.a)(e)),e.searchNotes=e.searchNotes.bind(Object(l.a)(e)),e.deleteNote=e.deleteNote.bind(Object(l.a)(e)),e.editNote=e.editNote.bind(Object(l.a)(e)),e}return Object(i.a)(s,[{key:"fetchNotes",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/notes").then((function(t){t.json().then((function(t){var s=0,n=t.map((function(e){return e.noteId=s,s+=1,e}));e.setState({notes:n,lastIndex:s,isLoading:!1}),console.log(e.state)}))}))}},{key:"componentDidMount",value:function(){this.fetchNotes()}},{key:"toggleDisplay",value:function(){this.setState({formDisplay:!this.state.formDisplay,aptBtnDisplay:!this.state.aptBtnDisplay})}},{key:"addNote",value:function(e){e.noteId=this.state.lastIndex;var t=this.state.notes;t.unshift(e),this.setState({notes:t,lastIndex:this.state.lastIndex+1}),fetch("https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/new-note",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}})}},{key:"deleteNote",value:function(e){var t="https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/delete-note?id=";t=t.concat(e.orderNumber),fetch(t,{method:"POST"}).then((function(e){console.log(e)})),this.fetchNotes()}},{key:"editNote",value:function(e){var t="https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/edit-note?id=";t=t.concat(e.orderNumber),console.log(e),fetch(t,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){console.log(e)})),this.fetchNotes()}},{key:"toggleList",value:function(){this.setState({listDisplay:!this.state.listDisplay})}},{key:"searchNotes",value:function(e){this.setState({queryText:e})}},{key:"render",value:function(){var e=this,t=this.props.auth0,s=t.isAuthenticated;if(t.isLoading)return Object(b.jsx)(p,{});if(!s)return Object(b.jsx)(f,{});var n=this.state.notes;return(n=n.filter((function(t){return t.customerName.toLowerCase().includes(e.state.queryText.toLowerCase())||t.orderNumber.toLowerCase().includes(e.state.queryText.toLowerCase())||t.issue.toLowerCase().includes(e.state.queryText.toLowerCase())||t.stepsTaken.toLowerCase().includes(e.state.queryText.toLowerCase())||t.date.toLowerCase().includes(e.state.queryText.toLowerCase())}))).sort((function(e,t){return t.noteId-e.noteId})),Object(b.jsxs)("main",{className:"container mt-5",children:[s&&Object(b.jsx)(O,{}),Object(b.jsx)(j,{formDisplay:this.state.formDisplay,aptBtnDisplay:this.state.aptBtnDisplay,toggleDisplay:this.toggleDisplay,addNote:this.addNote}),Object(b.jsx)(g,{notes:n,listDisplay:this.state.listDisplay,toggleList:this.toggleList,searchNotes:this.searchNotes,deleteNote:this.deleteNote,isLoading:this.state.isLoading,editNote:this.editNote,fetchNotes:this.fetchNotes})]})}}]),s}(n.Component),v=Object(N.c)(x),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,28)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),o(e),c(e)}))};o.a.render(Object(b.jsx)(N.a,{domain:"note-taker-app.us.auth0.com",clientId:"wnu7NsMLv848C9SX3f3GwMmKN1xf3bM6",redirectUri:window.location.origin,children:Object(b.jsx)(v,{})}),document.getElementById("root")),y()}},[[27,1,2]]]);
//# sourceMappingURL=main.c5ed6591.chunk.js.map