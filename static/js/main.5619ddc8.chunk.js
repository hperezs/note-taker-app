(this["webpackJsonpnote-taker"]=this["webpackJsonpnote-taker"]||[]).push([[0],{34:function(e,t,a){},36:function(e,t,a){},45:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(19),i=a.n(n),c=(a(34),a(23)),o=a.n(c),l=a(25),r=a(8),d=a(9),h=a(7),b=a(12),j=a(11),m=(a(36),a(26)),f=a(10),u=a(1),p=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={customerName:"",orderNumber:"",issue:"",stepsTaken:"",date:""},e.handleChanges=e.handleChanges.bind(Object(h.a)(e)),e.saveNote=e.saveNote.bind(Object(h.a)(e)),e}return Object(d.a)(a,[{key:"handleChanges",value:function(e){var t=e.target,a=t.value,s=t.name;this.setState(Object(m.a)({},s,a))}},{key:"saveNote",value:function(e){e.preventDefault();var t=new Date,a=t.getMonth()+1+"-"+t.getDate()+"-"+t.getFullYear();console.log(a);var s={customerName:this.state.customerName,orderNumber:this.state.orderNumber,issue:this.state.issue,stepsTaken:this.state.stepsTaken,date:a,techAgent:this.props.auth0.user.name};console.log(s),this.props.addNote(s),this.setState({customerName:"",orderNumber:"",issue:"",stepsTaken:"",date:""}),this.props.toggleDisplay()}},{key:"render",value:function(){var e=this;return Object(u.jsx)("article",{className:"",children:Object(u.jsx)("div",{className:"container "+(this.props.formDisplay?"":"hidden"),children:Object(u.jsx)("div",{className:"row justify-content-center ",children:Object(u.jsxs)("section",{className:"col-sm-12 col-md-10 new-note-layout",children:[Object(u.jsx)("div",{className:"card-header text-center",children:Object(u.jsx)("h5",{children:"New Note"})}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("form",{className:"appointment-form",noValidate:!0,onSubmit:function(t){e.saveNote(t),e.props.displayNotification("note-added")},children:[Object(u.jsxs)("div",{className:"form-group form-row",children:[Object(u.jsx)("label",{className:"col-form-label",children:"Tech Agent:"}),Object(u.jsx)("div",{className:"col-md-3 col-sm-5",children:Object(u.jsx)("label",{className:"col-form-label",children:this.props.auth0.user.name})})]}),Object(u.jsxs)("div",{className:"form-group form-row",children:[Object(u.jsx)("label",{className:"col-form-label",children:"Customer Name:"}),Object(u.jsx)("div",{className:"col-md-3 col-sm-5",children:Object(u.jsx)("input",{onChange:this.handleChanges,type:"text",className:"form-control",name:"customerName",id:"customerName"})})]}),Object(u.jsxs)("div",{className:"form-group form-row",children:[Object(u.jsx)("label",{className:"col-form-label",children:"Order number:"}),Object(u.jsx)("div",{className:"col-md-3 col-sm-5",children:Object(u.jsx)("input",{onChange:this.handleChanges,type:"text",className:"form-control",name:"orderNumber",id:"orderNumber"})})]}),Object(u.jsxs)("div",{className:"form-group form-row",children:[Object(u.jsx)("label",{className:"col-form-label",children:"Issue:"}),Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{onChange:this.handleChanges,className:"form-control",rows:"4",cols:"70",name:"issue",id:"issue"})})]}),Object(u.jsxs)("div",{className:"form-group form-row",children:[Object(u.jsx)("label",{className:"col-form-label",children:"Steps Taken:"}),Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{onChange:this.handleChanges,className:"form-control",rows:"4",cols:"70",name:"stepsTaken",id:"stepsTaken"})})]}),Object(u.jsxs)("div",{className:"form-group form-row justify-content-center",children:[Object(u.jsx)("button",{className:"btn btn-danger mx-3",onClick:this.props.toggleDisplay,type:"reset",children:"Cancel"}),Object(u.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save"})]})]})})]})})})})}}]),a}(s.Component),g=Object(f.c)(p),O=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={isEditing:!1,editableNote:{}},e.toggleisEditing=e.toggleisEditing.bind(Object(h.a)(e)),e.handleChanges=e.handleChanges.bind(Object(h.a)(e)),e.cancelChanges=e.cancelChanges.bind(Object(h.a)(e)),e.saveChanges=e.saveChanges.bind(Object(h.a)(e)),e}return Object(d.a)(a,[{key:"toggleisEditing",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleChanges",value:function(e){var t=e.target,a=t.value,s=t.name,n=this.state.editableNote;n[s]=a,this.setState({editableNote:n})}},{key:"copyText",value:function(e){var t=document.getElementById("steps-"+e);t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),this.props.displayNotification("note-copied")}},{key:"cancelChanges",value:function(){this.setState({editableNote:this.props.note}),console.log("Canceled changes"),console.log(this.props.note),this.toggleisEditing()}},{key:"saveChanges",value:function(){console.log("changes saved"),this.toggleisEditing();var e={issue:this.state.editableNote.issue,stepsTaken:this.state.editableNote.stepsTaken,noteId:this.state.editableNote.noteId};this.props.editNote(e)}},{key:"evaluateEdit",value:function(){this.props.auth0.user.name==this.props.note.techAgent?this.toggleisEditing():this.props.displayNotification("unable-to-edit")}},{key:"evaluateDelete",value:function(){this.props.auth0.user.name==this.props.note.techAgent?(this.props.deleteNote(this.props.note),this.props.displayNotification("note-deleted")):this.props.displayNotification("unable-to-delete")}},{key:"componentDidMount",value:function(){var e=this.props.note;this.setState({editableNote:e})}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"note-layout border-bottom row py-3 my-3 col-12",children:Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsxs)("div",{className:"note-head d-flex mb-3",children:[Object(u.jsx)("h6",{className:"customer-name",children:this.props.note.customerName}),Object(u.jsx)("span",{className:"note-date ml-auto font-italic",children:this.props.note.date}),Object(u.jsx)("button",{className:"btn btn-danger btn-small ml-2 "+(this.props.showDeleteBtn?"":"hidden"),onClick:function(t){return e.evaluateDelete()},children:Object(u.jsx)("i",{className:"fas fa-trash-alt"})})]}),Object(u.jsxs)("div",{className:"order-number d-flex mb-3",children:[Object(u.jsx)("span",{className:"label-item text-secondary",children:"Order number:  "}),Object(u.jsx)("span",{children:this.props.note.orderNumber}),Object(u.jsx)("i",{className:"note-edit-button fas fa-pencil-alt fa-md mt-auto ml-auto",onClick:function(t){return e.evaluateEdit()}})]}),Object(u.jsxs)("div",{className:"order-issue d-flex mb-3",children:[Object(u.jsx)("span",{className:"label-item text-secondary",children:"Issue:  "}),Object(u.jsx)("textarea",{type:"text",name:"issue",value:this.state.editableNote.issue,className:"form-control w-50 issue-note",cols:"70",rows:"6",readOnly:!this.state.isEditing,onChange:this.handleChanges})]}),Object(u.jsxs)("div",{className:"order-steps d-flex mb-3",children:[Object(u.jsx)("span",{className:"label-item text-secondary",children:"Steps Taken:  "}),Object(u.jsx)("textarea",{id:"steps-"+this.props.note.orderNumber,name:"stepsTaken",type:"text",value:this.state.editableNote.stepsTaken,className:"form-control w-50 stepsTaken-note",cols:"70",rows:"6",onChange:this.handleChanges,readOnly:!this.state.isEditing}),Object(u.jsx)("i",{onClick:function(t){return e.copyText(e.props.note.orderNumber)},className:"clipboard-button far fa-copy ml-auto fa-lg "})]}),Object(u.jsxs)("div",{className:"d-flex mb-3",children:[Object(u.jsx)("span",{className:"label-item text-secondary",children:"Tech Agent:"}),Object(u.jsx)("span",{children:this.props.note.techAgent})]}),Object(u.jsxs)("div",{className:"edit-actions text-center "+(this.state.isEditing?"":" hidden"),children:[Object(u.jsx)("button",{className:"btn btn-danger mx-3",onClick:this.cancelChanges,children:"Cancel"}),Object(u.jsx)("button",{className:"btn btn-success",onClick:this.saveChanges,children:"Save"})]})]})})}}]),a}(s.Component),x=Object(f.c)(O),N=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"input-group ml-2 mt-2",children:Object(u.jsx)("input",{type:"text",className:"search-bar form-control",placeholder:"Search for...",onChange:function(t){return e.props.searchNotes(t.target.value)}})})}}]),a}(s.Component),y=(a(45),function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"d-flex m-auto",children:Object(u.jsxs)("div",{class:"cssload-loader mt-5",children:[Object(u.jsx)("div",{className:"cssload-inner cssload-one"}),Object(u.jsx)("div",{className:"cssload-inner cssload-two"}),Object(u.jsx)("div",{className:"cssload-inner cssload-three"})]})})}}]),a}(s.Component)),v=a(73),k=a(72),w=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={techAgents:null,techAgentSelected:""},e}return Object(d.a)(a,[{key:"fetchTechAgents",value:function(){var e=this;fetch("https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/tech-agents").then((function(t){t.json().then((function(t){e.setState({techAgents:t}),e.selectDefault(t)}))}))}},{key:"selectDefault",value:function(e){var t=this;e.map((function(e){e.name==t.props.auth0.user.name&&t.setState({techAgentSelected:e.name})}))}},{key:"isSelected",value:function(e){return e==this.state.techAgentSelected}},{key:"selectAgent",value:function(e){this.setState({techAgentSelected:e})}},{key:"render",value:function(){var e=this;return this.state.techAgents?Object(u.jsx)(v.a,{children:Object(u.jsxs)(k.a,{children:[Object(u.jsx)(k.a.Toggle,{id:"dropdown-basic",children:"Filter By Tech Agent"}),Object(u.jsxs)(k.a.Menu,{children:[this.state.techAgents.map((function(t){return Object(u.jsx)(k.a.Item,{children:Object(u.jsx)(v.a.Check,{name:t.name,type:"radio",label:t.name,checked:e.isSelected(t.name),onClick:function(a){return e.selectAgent(t.name)}})})})),Object(u.jsx)(k.a.Item,{children:Object(u.jsx)(v.a.Check,{name:"All",type:"radio",label:"All",checked:!1})})]})]})}):(this.fetchTechAgents(),Object(u.jsx)(y,{}))}}]),a}(s.Component),C=Object(f.c)(w),D=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={showDeleteBtn:!1},e.toggleDeleteBtn=e.toggleDeleteBtn.bind(Object(h.a)(e)),e}return Object(d.a)(a,[{key:"toggleDeleteBtn",value:function(){this.setState({showDeleteBtn:!this.state.showDeleteBtn})}},{key:"render",value:function(){var e=this;return this.props.isLoading?Object(u.jsx)(y,{}):Object(u.jsx)("article",{className:"list-appointments-layout py-3 mb-5",children:Object(u.jsxs)("section",{className:"container card-header "+(this.props.listDisplay?"":"hidden"),children:[Object(u.jsxs)("div",{className:"d-flex bg-secondary align-items-center",children:[Object(u.jsx)("div",{className:"search-component col-6",children:Object(u.jsx)(N,{searchNotes:this.props.searchNotes})}),Object(u.jsx)("div",{className:"align-items-center",children:Object(u.jsx)(C,{})}),Object(u.jsx)("button",{className:"btn btn-info btn-md ml-auto my-2 mr-2",onClick:this.props.fetchNotes,children:Object(u.jsx)("i",{className:"fas fa-sync"})}),Object(u.jsx)("button",{className:"btn btn-warning btn-sm my-2 mr-2",onClick:this.toggleDeleteBtn,children:Object(u.jsx)("h5",{className:"text-white",children:Object(u.jsx)("i",{className:"fas fa-user-times"})})}),Object(u.jsx)("button",{className:"btn btn-danger my-2 mr-2 ",onClick:this.props.toggleList,children:Object(u.jsx)("i",{className:"fas fa-times"})})]}),Object(u.jsx)("section",{className:"note-list row justify-content-center overflow-auto bg-light card-body",children:this.props.notes.map((function(t){return Object(u.jsx)(x,{note:t,showDeleteBtn:e.state.showDeleteBtn,deleteNote:e.props.deleteNote,editNote:e.props.editNote,displayNotification:e.props.displayNotification},t.noteId)}))})]})})}}]),a}(s.Component),_=a(13),A=a.n(_),S=(a(66),function(e){var t=e.newNoteBtnDisplay,a=e.toggleDisplay,s=e.listDisplay,n=e.toggleList,i=Object(f.b)(),c=i.user,o=i.logout;return Object(u.jsxs)("nav",{className:"navbar navbar-light bg-light mb-5",children:[Object(u.jsxs)("span",{className:"navbar-brand mb-0 h1 mr-auto",children:["Welcome, ",c.name]}),Object(u.jsx)("button",{className:"nav-item layout-dropdown btn btn-success btn-lg mr-3 "+(t?"":"hidden"),onClick:a,children:Object(u.jsxs)("h5",{children:["New Note ",Object(u.jsx)("i",{className:"fas fa-plus-circle ml-1"})]})}),Object(u.jsx)("button",{className:"nav-item btn btn-info btn-lg mr-3 "+(s?"hidden":""),onClick:n,children:Object(u.jsxs)("h5",{children:["See Notes ",Object(u.jsx)("i",{className:"far fa-address-book"})]})}),Object(u.jsx)("button",{className:"nav-item btn btn-lg btn-warning text-white",onClick:function(){return o()},children:"Log out"})]})}),T=function(e){var t=e.listDisplay,a=e.formDisplay;return 0==t&&0==a?Object(u.jsxs)("div",{className:"container text-center bg-light p-5",children:[Object(u.jsxs)("svg",{id:"e3f9207d-45bb-4c5f-8073-de7ce7a37f24","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"837.49963",height:"606.99923",viewBox:"0 0 837.49963 606.99923",children:[Object(u.jsx)("path",{d:"M691.25018,146.50039h-501a9.01357,9.01357,0,0,0-9,9v296a9.01357,9.01357,0,0,0,9,9h501a9.01357,9.01357,0,0,0,9-9v-296A9.01357,9.01357,0,0,0,691.25018,146.50039Zm7,305a7.00778,7.00778,0,0,1-7,7h-501a7.00779,7.00779,0,0,1-7-7v-296a7.00778,7.00778,0,0,1,7-7h501a7.00778,7.00778,0,0,1,7,7Z",transform:"translate(-181.25018 -146.50039)",fill:"#3f3d56"}),Object(u.jsx)("rect",{x:"1",y:"34",width:"517",height:"2",fill:"#3f3d56"}),Object(u.jsx)("circle",{cx:"18",cy:"17.5",r:"5",fill:"#ccc"}),Object(u.jsx)("circle",{cx:"33",cy:"17.5",r:"5",fill:"#ccc"}),Object(u.jsx)("circle",{cx:"48",cy:"17.5",r:"5",fill:"#ccc"}),Object(u.jsx)("path",{d:"M561.75018,580.00039h-242a8.50958,8.50958,0,0,1-8.5-8.5v-271a8.50958,8.50958,0,0,1,8.5-8.5h242a8.5095,8.5095,0,0,1,8.5,8.5v271A8.50951,8.50951,0,0,1,561.75018,580.00039Z",transform:"translate(-181.25018 -146.50039)",fill:"#77a7e0"}),Object(u.jsx)("path",{d:"M511.75018,431.00039h-142a12.5,12.5,0,0,1,0-25h142a12.5,12.5,0,0,1,0,25Z",transform:"translate(-181.25018 -146.50039)",fill:"#fff"}),Object(u.jsx)("path",{d:"M511.75018,477.50039h-142a12.5,12.5,0,0,1,0-25h142a12.5,12.5,0,0,1,0,25Z",transform:"translate(-181.25018 -146.50039)",fill:"#fff"}),Object(u.jsx)("path",{d:"M511.75018,524.50039h-142a12.5,12.5,0,1,1,0-25h142a12.5,12.5,0,0,1,0,25Z",transform:"translate(-181.25018 -146.50039)",fill:"#fff"}),Object(u.jsx)("path",{d:"M468.25018,369.50039h-55a12.5,12.5,0,0,1,0-25h55a12.5,12.5,0,0,1,0,25Z",transform:"translate(-181.25018 -146.50039)",fill:"#fff"}),Object(u.jsx)("rect",{x:"43",y:"71",width:"433",height:"21",rx:"10.49999",fill:"#ccc"}),Object(u.jsx)("path",{d:"M920.86746,622.52325a9.69085,9.69085,0,0,0,3.46541-14.45l22.582-124.97534-21.07284-.27771-15.6819,123.58442a9.74338,9.74338,0,0,0,10.70738,16.11866Z",transform:"translate(-181.25018 -146.50039)",fill:"#a0616a"}),Object(u.jsx)("polygon",{points:"674.215 470.097 666.215 508.097 667.215 593.097 682.215 593.097 689.215 510.097 700.215 475.097 674.215 470.097",fill:"#a0616a"}),Object(u.jsx)("polygon",{points:"724.215 470.097 716.215 508.097 717.215 593.097 732.215 593.097 739.215 510.097 750.215 475.097 724.215 470.097",fill:"#a0616a"}),Object(u.jsx)("path",{d:"M843.21636,737.42459h23.64388a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H828.3295a0,0,0,0,1,0,0v0A14.88685,14.88685,0,0,1,843.21636,737.42459Z",transform:"translate(-146.60221 -184.16848) rotate(2.59897)",fill:"#2f2e41"}),Object(u.jsx)("path",{d:"M893.21636,737.42459h23.64388a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H878.3295a0,0,0,0,1,0,0v0A14.88685,14.88685,0,0,1,893.21636,737.42459Z",transform:"translate(-146.55078 -186.43573) rotate(2.59897)",fill:"#2f2e41"}),Object(u.jsx)("circle",{cx:"710.71476",cy:"259.18017",r:"24.56103",fill:"#a0616a"}),Object(u.jsx)("path",{d:"M946.24285,466.42958c-8.12685-12.75218-35.16614-44.52714-75.2779-18.3317,0,0,9.5,79.5-13.5,122.5,0,0,53,16,82,1,0,0-10-67,0-80a53.90371,53.90371,0,0,0,8.01289-13.72626A12.891,12.891,0,0,0,946.24285,466.42958Z",transform:"translate(-181.25018 -146.50039)",fill:"#ccc"}),Object(u.jsx)("path",{d:"M936.465,465.59788l9.81358,4.089a3.7184,3.7184,0,0,1,2.285,3.27758l.9014,21.63343-22-2Z",transform:"translate(-181.25018 -146.50039)",fill:"#ccc"}),Object(u.jsx)("path",{d:"M861.465,568.59788s-22,41-18,79l31,5,22-53-5,54,32,1s21-78,14-85Z",transform:"translate(-181.25018 -146.50039)",fill:"#2f2e41"}),Object(u.jsx)("path",{d:"M855.86746,612.52325a9.69085,9.69085,0,0,0,3.46541-14.45l22.582-124.97534-21.07284-.27771-15.6819,123.58442a9.74338,9.74338,0,0,0,10.70738,16.11866Z",transform:"translate(-181.25018 -146.50039)",fill:"#a0616a"}),Object(u.jsx)("path",{d:"M880.465,448.59788l-9-1s-8-2-11,9-3,33-3,33l28-1Z",transform:"translate(-181.25018 -146.50039)",fill:"#ccc"}),Object(u.jsx)("path",{d:"M895.89936,417.505c.882-3.06179.62715-7.205-2.34125-8.36308-1.54665-.60341-3.27233-.12748-4.92388.04165a13.14141,13.14141,0,0,1-9.08062-2.49947c-3.0705-2.28258-4.96707-5.77162-6.768-9.14722l-2.724-5.10565a22.18019,22.18019,0,0,1-1.5455-3.327c-1.51566-4.50732.13007-9.72558,3.49911-13.08158a18.97565,18.97565,0,0,1,12.96279-5.08228,34.98373,34.98373,0,0,1,13.85112,2.96738,61.26067,61.26067,0,0,1,20.6533,13.875c3.832,3.9201,7.32031,9.02692,6.51966,14.45-.62323,4.22138-3.70027,7.60171-6.63486,10.69956l-10.6447,11.2369c-1.88515,1.99-3.89962,4.06118-6.53184,4.82631s-6.02319-.35883-6.741-3.00434C895.44965,425.99122,895.01733,420.56675,895.89936,417.505Z",transform:"translate(-181.25018 -146.50039)",fill:"#2f2e41"}),Object(u.jsx)("path",{d:"M1018.74982,752.49961a1.00308,1.00308,0,0,1-1,1h-288a1,1,0,0,1,0-2h288A1.00308,1.00308,0,0,1,1018.74982,752.49961Z",transform:"translate(-181.25018 -146.50039)",fill:"#3f3d56"})]}),Object(u.jsx)("h3",{children:"Nothing to show"}),Object(u.jsx)("p",{children:"Click one of the buttons above to get started."})]}):Object(u.jsx)(u.Fragment,{})},I=function(){var e=Object(f.b)().logout;return Object(u.jsxs)("div",{className:"container text-center mt-5",children:[Object(u.jsxs)("svg",{id:"ad38fc70-8020-4243-af0b-1d7dc942eb8a","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"628.95175",height:"540.74875",viewBox:"0 0 628.95175 540.74875",children:[Object(u.jsx)("rect",{id:"ae13a9af-8be6-48d2-be97-15b9bb35f653","data-name":"Rectangle 246",x:"0.32514",y:"0.43193",width:"532.26441",height:"313.47738",fill:"#e6e6e6"}),Object(u.jsx)("rect",{id:"a5b6fe3b-52e9-48cc-a961-c4a66fbfd4e0","data-name":"Rectangle 264",width:"532.26441",height:"32.39915",fill:"#ff6366"}),Object(u.jsx)("rect",{id:"f9022efb-4ab6-4da5-b9f8-05744185cb65","data-name":"Rectangle 247",x:"12.2742",y:"42.35071",width:"507.51155",height:"255.96132",fill:"#fff"}),Object(u.jsx)("circle",{id:"b8863a4f-d6d1-45f4-aeb2-54ce0fc41c58","data-name":"Ellipse 194",cx:"50.43802",cy:"16.1168",r:"5.35947",fill:"#fff"}),Object(u.jsx)("circle",{id:"bbe8bb57-e8a1-4ebb-9530-09dc8d102d8f","data-name":"Ellipse 195",cx:"70.78166",cy:"16.1168",r:"5.35947",fill:"#fff"}),Object(u.jsx)("circle",{id:"e8afff7b-3b6f-4dbf-9548-6e45ece64f65","data-name":"Ellipse 246",cx:"30.04157",cy:"16.1168",r:"5.35947",fill:"#fff"}),Object(u.jsx)("rect",{id:"b1f15dfa-2d28-41bb-b4d1-13ec40007797","data-name":"Rectangle 250",x:"71.46529",y:"86.55195",width:"389.12937",height:"10.16355",fill:"#e6e6e6"}),Object(u.jsx)("rect",{id:"ad95e1cc-3eac-41f8-b758-723622ce1f63","data-name":"Rectangle 251",x:"196.65866",y:"111.96048",width:"138.74262",height:"10.16355",fill:"#e6e6e6"}),Object(u.jsx)("rect",{id:"b780e72c-b22a-4ee2-b16a-5905a6a8a985","data-name":"Rectangle 251",x:"196.65866",y:"163.50023",width:"138.74262",height:"10.16355",fill:"#e6e6e6"}),Object(u.jsx)("rect",{id:"a53233dc-737e-4f4d-ba21-0434f7dacc3a","data-name":"Rectangle 251",x:"196.65866",y:"189.89863",width:"138.74262",height:"10.16355",fill:"#e6e6e6"}),Object(u.jsx)("rect",{id:"a2199747-3d5b-4c24-9aea-bee34d6022f4","data-name":"Rectangle 252",x:"127.82906",y:"137.36902",width:"276.40183",height:"10.16355",fill:"#e6e6e6"}),Object(u.jsx)("rect",{x:"387.59466",y:"236.06219",width:"73",height:"18.0486",fill:"#ff6366"}),Object(u.jsx)("polygon",{points:"531.231 529.365 518.972 529.364 513.139 482.076 531.234 482.077 531.231 529.365",fill:"#9f616a"}),Object(u.jsx)("path",{d:"M510.21452,525.861h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H495.32765a0,0,0,0,1,0,0v0A14.88688,14.88688,0,0,1,510.21452,525.861Z",fill:"#2f2e41"}),Object(u.jsx)("polygon",{points:"577.231 529.365 564.972 529.364 559.139 482.076 577.234 482.077 577.231 529.365",fill:"#9f616a"}),Object(u.jsx)("path",{d:"M556.21449,525.861h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H541.32764a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,556.21449,525.861Z",fill:"#2f2e41"}),Object(u.jsx)("path",{d:"M861.25816,568.15162a10.74271,10.74271,0,0,1-2.06222-16.343l-8.0725-114.55784,23.253,2.25509.63867,112.18666a10.80091,10.80091,0,0,1-13.757,16.45913Z",transform:"translate(-285.52412 -179.62562)",fill:"#9f616a"}),Object(u.jsx)("path",{d:"M816.17638,685.16736,802.68,684.52381a4.499,4.499,0,0,1-4.28589-4.46289l-.9419-136.55665a4.50113,4.50113,0,0,1,5.14649-4.48535l53.99365,7.83789a4.47383,4.47383,0,0,1,3.85352,4.41993l6.94433,126.53418a4.50045,4.50045,0,0,1-4.5,4.53417h-14.55a4.47889,4.47889,0,0,1-4.44531-3.80078s-10.99023-94.91216-12.49927-94.8565c-1.51733.02832-10.53686,97.51959-10.53686,97.51959a4.51711,4.51711,0,0,1-4.46875,3.96582Q816.2838,685.17322,816.17638,685.16736Z",transform:"translate(-285.52412 -179.62562)",fill:"#2f2e41"}),Object(u.jsx)("path",{d:"M856.38719,475.74376a4.48167,4.48167,0,0,1-1.85872-3.40065L852.82462,441.467a12.39863,12.39863,0,0,1,24.34643-3.92684l7.48456,27.60491a4.50508,4.50508,0,0,1-3.16562,5.52076l-21.29064,5.77257A4.4829,4.4829,0,0,1,856.38719,475.74376Z",transform:"translate(-285.52412 -179.62562)",fill:"#3f3d56"}),Object(u.jsx)("circle",{cx:"550.97489",cy:"198.17616",r:"24.56103",fill:"#9f616a"}),Object(u.jsx)("path",{d:"M747.49529,426.05641a10.52722,10.52722,0,0,1,.2393,1.64013l42.95745,24.782,10.44141-6.01093,11.13117,14.57227-22.33714,15.92056-49.00792-38.66268a10.4958,10.4958,0,1,1,6.57573-12.24133Z",transform:"translate(-285.52412 -179.62562)",fill:"#9f616a"}),Object(u.jsx)("path",{d:"M792.22631,450.3712a4.48171,4.48171,0,0,1,1.29315-3.65336l21.86341-21.86849a12.39862,12.39862,0,0,1,19.16808,15.51622l-15.57,23.9922a4.50508,4.50508,0,0,1-6.22448,1.32511l-18.5043-12.00853A4.48292,4.48292,0,0,1,792.22631,450.3712Z",transform:"translate(-285.52412 -179.62562)",fill:"#3f3d56"}),Object(u.jsx)("path",{d:"M853.87961,397.23335c-4.582,4.88079-13.09132,2.26067-13.68835-4.40717a8.05467,8.05467,0,0,1,.01014-1.55569c.30826-2.95357,2.01461-5.635,1.60587-8.7536a4.59038,4.59038,0,0,0-.84011-2.14891c-3.65124-4.88934-12.22227,2.18686-15.6682-2.2393-2.113-2.714.3708-6.98713-1.25065-10.02051-2.14006-4.00358-8.47881-2.0286-12.45388-4.22115-4.42275-2.43949-4.15822-9.22525-1.24686-13.3527,3.55052-5.03359,9.77572-7.71951,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78753,4.88021,6.97317,5.34986,16.34793,2.90917,24.50175C862.68836,387.18848,857.62128,393.24767,853.87961,397.23335Z",transform:"translate(-285.52412 -179.62562)",fill:"#2f2e41"}),Object(u.jsx)("path",{d:"M913.47588,720.18781h-193a1,1,0,0,1,0-2h193a1,1,0,0,1,0,2Z",transform:"translate(-285.52412 -179.62562)",fill:"#3f3d56"}),Object(u.jsx)("path",{d:"M861.01455,418.76893q-.64014-.46-1.30517-.90332a32.36092,32.36092,0,0,0-7.59571-3.72418v-6.45362h-19v5.98767a33.31967,33.31967,0,0,0-24.16308,27.68622l-12.9375,96.05078a4.47759,4.47759,0,0,0,.93066,3.40137,4.41909,4.41909,0,0,0,3.05371,1.67285c4.48291.44727,13.78028,2.18457,25.67969,8.7959a38.12545,38.12545,0,0,0,18.70557,4.77441,45.08927,45.08927,0,0,0,15.22607-2.71093,4.46654,4.46654,0,0,0,2.918-4.00489c.46582-10.33691,3.19043-63.54394,11.124-95.999A33.17758,33.17758,0,0,0,861.01455,418.76893Z",transform:"translate(-285.52412 -179.62562)",fill:"#3f3d56"})]}),Object(u.jsx)("h3",{children:"Error!"}),Object(u.jsx)("p",{className:"my-3",children:"You are not authorized to use this app. If you think this is a mistake, contact the app administrator."}),Object(u.jsx)("button",{className:"nav-item btn btn-lg btn-danger text-white ml-auto",onClick:function(){return e()},children:"Log out"})]})},L=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={notes:[],lastIndex:0,formDisplay:!1,newNoteBtnDisplay:!0,listDisplay:!1,queryText:"",isLoading:!0,isUserAuthorized:null},e.fetchNotes=e.fetchNotes.bind(Object(h.a)(e)),e.toggleDisplay=e.toggleDisplay.bind(Object(h.a)(e)),e.addNote=e.addNote.bind(Object(h.a)(e)),e.toggleList=e.toggleList.bind(Object(h.a)(e)),e.searchNotes=e.searchNotes.bind(Object(h.a)(e)),e.deleteNote=e.deleteNote.bind(Object(h.a)(e)),e.editNote=e.editNote.bind(Object(h.a)(e)),e}return Object(d.a)(a,[{key:"fetchNotes",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/notes").then((function(t){t.json().then((function(t){var a=0,s=t.map((function(e){return e.noteId=a,a+=1,e}));e.setState({notes:s,lastIndex:a,isLoading:!1}),console.log(e.state)}))}))}},{key:"componentDidMount",value:function(){this.fetchNotes()}},{key:"toggleDisplay",value:function(){this.setState({formDisplay:!this.state.formDisplay,newNoteBtnDisplay:!this.state.newNoteBtnDisplay})}},{key:"addNote",value:function(e){e.noteId=this.state.lastIndex;var t=this.state.notes;t.unshift(e),this.setState({notes:t,lastIndex:this.state.lastIndex+1}),fetch("https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/new-note",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}})}},{key:"deleteNote",value:function(e){var t="https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/delete-note?id=";t=t.concat(e.noteId),fetch(t,{method:"POST"}).then((function(e){console.log(e)})),this.fetchNotes()}},{key:"editNote",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(a="https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/edit-note?id=").concat(t.noteId),console.log(t),e.next=5,fetch(a,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){console.log(e)}));case 5:this.displayNotification("note-edited"),this.fetchNotes();case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggleList",value:function(){this.setState({listDisplay:!this.state.listDisplay})}},{key:"searchNotes",value:function(e){this.setState({queryText:e})}},{key:"displayNotification",value:function(e){switch(e){case"note-added":_.store.addNotification({message:"Note added successfully.",type:"success",insert:"top",container:"top-center",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!0}});break;case"note-deleted":_.store.addNotification({message:"Note deleted successfully.",type:"danger",insert:"top",container:"top-center",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!0}});break;case"note-copied":_.store.addNotification({message:"Text copied to clipboard.",type:"info",insert:"top",container:"top-center",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!0}});break;case"note-edited":_.store.addNotification({message:"Note edited successfully.",type:"success",insert:"top",container:"top-center",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!0}});break;case"unable-to-edit":_.store.addNotification({title:"Error",message:"Only the Tech Agent associated with the note is able to edit it.",type:"danger",insert:"top",container:"top-center",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}});break;case"unable-to-delete":_.store.addNotification({title:"Error",message:"Only the Tech Agent associated with the note is able to delete it.",type:"danger",insert:"top",container:"top-center",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}})}}},{key:"getIsUserAuthorized",value:function(){var e=this,t="https://morning-anchorage-80357.herokuapp.com/https://note-taker-api.glitch.me/is-authorized?email="+this.props.auth0.user.email;return fetch(t).then((function(t){t.json().then((function(t){e.setState({isUserAuthorized:t.isAuthorized})}))}))}},{key:"componentDidUpdate",value:function(){console.log("Calling componentDidUpdate..."),console.log(this.state.isUserAuthorized),this.props.auth0.isAuthenticated&&null==this.state.isUserAuthorized&&this.getIsUserAuthorized()}},{key:"render",value:function(){var e=this,t=this.props.auth0,a=t.isAuthenticated,s=t.isLoading,n=t.loginWithRedirect;if(s)return Object(u.jsx)(y,{});if(a){if(null==this.state.isUserAuthorized)return Object(u.jsx)(y,{});if(this.state.isUserAuthorized){var i=this.state.notes;return(i=i.filter((function(t){return t.customerName.toLowerCase().includes(e.state.queryText.toLowerCase())||t.orderNumber.toLowerCase().includes(e.state.queryText.toLowerCase())||t.issue.toLowerCase().includes(e.state.queryText.toLowerCase())||t.stepsTaken.toLowerCase().includes(e.state.queryText.toLowerCase())||t.date.toLowerCase().includes(e.state.queryText.toLowerCase())}))).sort((function(e,t){return t.noteId-e.noteId})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(A.a,{}),Object(u.jsxs)("main",{className:"container col-10 mt-5",children:[Object(u.jsx)(S,{newNoteBtnDisplay:this.state.newNoteBtnDisplay,toggleDisplay:this.toggleDisplay,listDisplay:this.state.listDisplay,toggleList:this.toggleList}),Object(u.jsx)(T,{formDisplay:this.state.formDisplay,listDisplay:this.state.listDisplay}),Object(u.jsx)(g,{formDisplay:this.state.formDisplay,toggleDisplay:this.toggleDisplay,addNote:this.addNote,displayNotification:this.displayNotification}),Object(u.jsx)(D,{notes:i,listDisplay:this.state.listDisplay,toggleList:this.toggleList,searchNotes:this.searchNotes,deleteNote:this.deleteNote,isLoading:this.state.isLoading,editNote:this.editNote,fetchNotes:this.fetchNotes,displayNotification:this.displayNotification})]})]})}return Object(u.jsx)(I,{})}return Object(u.jsx)(u.Fragment,{children:n()})}}]),a}(s.Component),M=Object(f.c)(L),Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};i.a.render(Object(u.jsx)(f.a,{domain:"note-taker-app.us.auth0.com",clientId:"wnu7NsMLv848C9SX3f3GwMmKN1xf3bM6",redirectUri:"https://hperezs.github.io/note-taker-app",children:Object(u.jsx)(M,{})}),document.getElementById("root")),Z()}},[[67,1,2]]]);
//# sourceMappingURL=main.5619ddc8.chunk.js.map