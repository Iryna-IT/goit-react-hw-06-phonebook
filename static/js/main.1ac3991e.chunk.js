(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label_contact:"ContactForm_label_contact__3bvPS",input_contact:"ContactForm_input_contact__23IbO",form_contact:"ContactForm_form_contact__3tx-T",btn_add:"ContactForm_btn_add__2ktX8"}},14:function(t,e,n){t.exports={form_search:"Filter_form_search__sNGY4",label_search:"Filter_label_search__2Dz4e",input_search:"Filter_input_search__1QY-j"}},15:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__2y5VG",contact_item:"ContactList_contact_item__33jCU",btn_delete:"ContactList_btn_delete__MlbL0"}},25:function(t,e,n){t.exports={app:"App_app__19vvQ"}},41:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(12),i=n.n(o),s=n(9),l=n(22),u=n(13),b=n(3),d=n(23),m=n.n(d),j=n(8),p=n(24),h=n.n(p),f=n(2),O=n(10),_={addContact:Object(b.b)("items/addContact",(function(t){return{payload:t}})),deleteContact:Object(b.b)("items/deleteContact",(function(t){return{payload:t}}))},C=Object(b.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(O.a)(a,_.addContact,(function(t,e){return[e.payload].concat(Object(u.a)(t))})),Object(O.a)(a,_.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),v=Object(b.b)("filter/filterContacts",(function(t){return{payload:t}})),x=Object(b.c)("",Object(O.a)({},v,(function(t,e){return e.payload}))),y=Object(f.c)({items:C,filter:x}),g=[].concat(Object(u.a)(Object(b.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[m.a]),N={key:"contacts",storage:h.a,blacklist:["filter"]},k=Object(b.a)({reducer:{contacts:Object(j.g)(N,y)},middleware:g,devTools:!1}),S={store:k,persistor:Object(j.h)(k)},F=n(4),D=n(5),A=n(7),X=n(6),w=function(t,e){return!t.find((function(t){return t.name.toUpperCase()===e.toUpperCase()}))},P=n(11),E=n.n(P),T=n(43),U=n(1),L=function(t){Object(A.a)(n,t);var e=Object(X.a)(n);function n(){var t;Object(F.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(O.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props,o=r.onAdd,i=r.existContacts;if(!w(i,t.state.name))return alert("".concat(t.state.name," is already in contacts!"));var s=Object(T.a)();t.setState({id:s}),o({id:s,name:a,number:c}),t.reset()},t.reset=function(){t.setState({id:"",name:"",number:""})},t}return Object(D.a)(n,[{key:"render",value:function(){return Object(U.jsxs)("form",{className:E.a.form_contact,onSubmit:this.handleSubmit,children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("label",{htmlFor:"name",className:E.a.label_contact,children:"Name"}),Object(U.jsx)("input",{type:"text",className:E.a.input_contact,name:"name",value:this.state.name,placeholder:"Enter name",onChange:this.handleChange,required:!0})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("label",{htmlFor:"phone",className:E.a.label_contact,children:"Phone"}),Object(U.jsx)("input",{type:"tel",className:E.a.input_contact,name:"number",value:this.state.number,placeholder:"Enter phone XXX-XX-XX",pattern:"^(\\d{3})-\\d{2}-\\d{2}$",onChange:this.handleChange,required:!0})]}),Object(U.jsx)("button",{type:"submit",className:E.a.btn_add,onSubmit:this.handleSubmit,children:"Add contact"})]})}}]),n}(c.Component);L.defaultProps={existContacts:[]};var q=Object(s.b)((function(t){return{existContacts:t.contacts.items}}),(function(t){return{onAdd:function(e){return t(_.addContact(e))}}}))(L),z=n(14),G=n.n(z),I=function(t){Object(A.a)(n,t);var e=Object(X.a)(n);function n(){return Object(F.a)(this,n),e.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){var t=this.props.onSearch;return Object(U.jsxs)("form",{className:G.a.form_search,children:[Object(U.jsx)("label",{htmlFor:"filter",className:G.a.label_search,children:"Find contacts by name"}),Object(U.jsx)("input",{type:"text",name:"filter",className:G.a.input_search,placeholder:"Enter the name",onChange:t})]})}}]),n}(c.Component),J=Object(s.b)(null,(function(t){return{onSearch:function(e){return t(v(e.currentTarget.value))}}}))(I),M=function(t,e){return""===e?t:t.filter((function(t){return t.name.toUpperCase().includes(e.toUpperCase())}))},Q=n(15),Y=n.n(Q),B=function(t){Object(A.a)(n,t);var e=Object(X.a)(n);function n(){return Object(F.a)(this,n),e.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){var t=this.props.existContacts,e=this.props.onDelete;return 0===t.length?Object(U.jsx)("div",{children:"There are no contacts"}):Object(U.jsx)("ul",{className:Y.a.contact_list,children:t.map((function(t){return Object(U.jsx)(H,{id:t.id,name:t.name,number:t.number,onDelete:e},t.id)}))})}}]),n}(c.Component);B.defaultProps={existContacts:[]};var H=function(t){Object(A.a)(n,t);var e=Object(X.a)(n);function n(){var t;Object(F.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleDelete=function(e){(0,t.props.onDelete)(e.target.parentNode.id)},t}return Object(D.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.name,a=t.number;return Object(U.jsxs)("li",{className:Y.a.contact_item,id:e,children:[" ",n," : ",a,Object(U.jsx)("button",{type:"button",className:Y.a.btn_delete,onClick:this.handleDelete,children:"Delete"})]})}}]),n}(c.Component);H.defaultProps={id:"",name:"",number:""};var K=Object(s.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{existContacts:M(n,a)}}),(function(t){return{onDelete:function(e){return t(_.deleteContact(e))}}}))(B),R=n(25),V=n.n(R),$=function(t){Object(A.a)(n,t);var e=Object(X.a)(n);function n(){return Object(F.a)(this,n),e.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:V.a.app,children:[Object(U.jsx)("h1",{children:"Phonebook"}),Object(U.jsx)(q,{}),Object(U.jsx)("h2",{children:"Contacts"}),Object(U.jsx)(J,{}),Object(U.jsx)(K,{})]})}}]),n}(c.Component);n(40);i.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(s.a,{store:S.store,children:Object(U.jsx)(l.a,{loading:null,persistor:S.persistor,children:Object(U.jsx)($,{})})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.1ac3991e.chunk.js.map