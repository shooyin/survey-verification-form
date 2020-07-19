(this["webpackJsonpinput-form"]=this["webpackJsonpinput-form"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),i=a.n(r),o=(a(19),a(3)),s=a(4),m=a(6),c=a(5),u=a(2),d=a.n(u),h=a(13);d.a.setApiKey("AIzaSyCQldl1eVtGg5Y6OgjJ8_sZITLWmY7WEH0"),d.a.setLanguage("en");var p=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChangeFirstName=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({firstName:r})},n.handleChangeLastName=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({lastName:r})},n.handleChangeDateOfBirth=function(e){var t=e.target.value;n.setState({dateOfBirth:t})},n.handleChangeFeet=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({foot:r})},n.handleChangeInches=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({inch:r})},n.handleChangeEducation=function(e){var t=e.target.value;n.setState({education:t})},n.handleChangeAddress1=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({street:r})},n.handleChangeAddress2=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({street2:r})},n.handleChangeCity=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({city:r})},n.handleChangeState=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({state:r})},n.handleChangeZipCode=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({zip:r})},n.handleChangeEmail=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({email:r})},n.handleChangeEmailConfirmation=function(e){var t=e.target,a=t.value,l=t.maxLength,r=a.slice(0,l);n.setState({emailConfirmation:r})},n.handleChangeCaptcha=function(e){n.setState({captchaInvalidFlag:!1,captchaValue:e})},n.handleSubmit=function(e){e.preventDefault();var t,a=n.state,l=a.email,r=a.emailConfirmation,i=a.captchaValue;n.validateLocation(),l===r?""!==i?(t={firstName:n.state.firstName,lastName:n.state.lastName,dateOfBirth:n.state.dateOfBirth,foot:n.state.foot,inch:n.state.inch,education:n.state.education,street:n.state.street,street2:n.state.street2,city:n.state.street2,state:n.state.state,zip:n.state.zip,email:n.state.email},n.props.onSubmit(e,t)):n.setState({captchaInvalidFlag:!0}):n.setState({validEmailConfirmation:!1})},n.state={firstName:"",lastName:"",dateOfBirth:"",foot:"",inch:"",education:"",street:"",street2:"",city:"",state:"",zip:"",email:"",emailConfirmation:"",captchaValue:"",captchaInvalidFlag:!1,validDateOfBirth:!0,validAddress:!0,validEmailConfirmation:!0},n}return Object(s.a)(a,[{key:"todaysDate",value:function(){var e=new Date,t=e.getMonth()+1,a=e.getDate(),n=e.getFullYear();return t<10&&(t="0"+t.toString()),a<10&&(a="0"+a.toString()),n+"-"+t+"-"+a}},{key:"validateLocation",value:function(){var e=this,t=this.state.street+" "+this.state.street2+" "+this.state.city+" "+this.state.state+" "+this.state.zip;d.a.fromAddress(t).then((function(t){e.setState({validAddress:!0})}),(function(t){console.error(t),e.setState({validAddress:!1})}))}},{key:"render",value:function(){var e="text-danger bold";return l.a.createElement("div",{className:"d-flex flex-column w-100"},l.a.createElement("div",{className:"text-center p-1 bg-info"},l.a.createElement("h4",null,"CSC 642 Summer 2020 Individual Assignment: John Le")),l.a.createElement("form",{id:"survey-form-container",onSubmit:this.handleSubmit,className:"m-4"},l.a.createElement("p",{className:"text-center display-4"},"Data Survey Form"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name*"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{type:"text",className:"form-control",id:"firstName",placeholder:"First name",value:this.state.firstName,onChange:this.handleChangeFirstName,maxLength:"40",required:!0})),l.a.createElement("div",{className:"col"},l.a.createElement("input",{type:"text",className:"form-control",id:"lastName",placeholder:"Last name",value:this.state.lastName,onChange:this.handleChangeLastName,maxLength:"40",required:!0})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-3"},l.a.createElement("label",{htmlFor:"dateOfBirth"},"Date of Birth*"),l.a.createElement("input",{type:"date",className:"form-control",id:"dateOfBirth",value:this.state.dateOfBirth,onChange:this.handleChangeDateOfBirth,max:this.todaysDate(),required:!0})),l.a.createElement("div",{className:"form-group col-md-3"},l.a.createElement("label",null,"Height"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("input",{type:"number",className:"form-control",id:"foot",placeholder:"feet",value:this.state.foot,onChange:this.handleChangeFeet,min:"0",max:"9",maxLength:"2"})),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("input",{type:"number",className:"form-control",id:"inch",placeholder:"inches",value:this.state.inch,onChange:this.handleChangeInches,min:"0",max:"11",maxLength:"2"})))),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"educationLevel"},"Education Level"),l.a.createElement("select",{id:"educationLevel",className:"form-control",defaultValue:"n/a",onChange:this.handleChangeEducation},l.a.createElement("option",{value:"n/a"},"Choose..."),l.a.createElement("option",{value:"High School"},"High School"),l.a.createElement("option",{value:"College"},"College"),l.a.createElement("option",{value:"Graduate Studies"},"Graduate Studies"),l.a.createElement("option",{value:"Ph.D"},"Ph.D")))),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group"},this.state.validAddress?"":l.a.createElement("div",{className:"text-center"},l.a.createElement("small",{className:e},l.a.createElement("b",null,"Invalid Address: Please double-check the spelling and try again.")),l.a.createElement("br",null)),l.a.createElement("label",{htmlFor:"inputAddress",className:this.state.validAddress?"":e},"Address*"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputAddress",placeholder:"1234 Main St",value:this.state.address,onChange:this.handleChangeAddress1,maxLength:"40",required:!0})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-2"},l.a.createElement("label",{htmlFor:"inputAddress2",className:this.state.validAddress?"":e},"Address 2"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputAddress2",placeholder:"Apartment, studio, or floor",value:this.state.address2,onChange:this.handleChangeAddress2,maxLength:"15"})),l.a.createElement("div",{className:"form-group col-md-7"},l.a.createElement("label",{htmlFor:"inputCity",className:this.state.validAddress?"":e},"City*"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputCity",value:this.state.city,onChange:this.handleChangeCity,maxLength:"40",required:!0})),l.a.createElement("div",{className:"form-group col-md-1"},l.a.createElement("label",{htmlFor:"inputState",className:this.state.validAddress?"":e},"State*"),l.a.createElement("select",{id:"inputState",className:"form-control",value:this.state.state,onChange:this.handleChangeState,required:!0},l.a.createElement("option",{defaultValue:"n/a"},"Choose..."),l.a.createElement("option",{value:"AL"},"AL"),l.a.createElement("option",{value:"AK"},"AK"),l.a.createElement("option",{value:"AR"},"AR"),l.a.createElement("option",{value:"AZ"},"AZ"),l.a.createElement("option",{value:"CA"},"CA"),l.a.createElement("option",{value:"CO"},"CO"),l.a.createElement("option",{value:"CT"},"CT"),l.a.createElement("option",{value:"DC"},"DC"),l.a.createElement("option",{value:"DE"},"DE"),l.a.createElement("option",{value:"FL"},"FL"),l.a.createElement("option",{value:"GA"},"GA"),l.a.createElement("option",{value:"HI"},"HI"),l.a.createElement("option",{value:"IA"},"IA"),l.a.createElement("option",{value:"ID"},"ID"),l.a.createElement("option",{value:"IL"},"IL"),l.a.createElement("option",{value:"IN"},"IN"),l.a.createElement("option",{value:"KS"},"KS"),l.a.createElement("option",{value:"KY"},"KY"),l.a.createElement("option",{value:"LA"},"LA"),l.a.createElement("option",{value:"MA"},"MA"),l.a.createElement("option",{value:"MD"},"MD"),l.a.createElement("option",{value:"ME"},"ME"),l.a.createElement("option",{value:"MI"},"MI"),l.a.createElement("option",{value:"MN"},"MN"),l.a.createElement("option",{value:"MO"},"MO"),l.a.createElement("option",{value:"MS"},"MS"),l.a.createElement("option",{value:"MT"},"MT"),l.a.createElement("option",{value:"NC"},"NC"),l.a.createElement("option",{value:"NE"},"NE"),l.a.createElement("option",{value:"NH"},"NH"),l.a.createElement("option",{value:"NJ"},"NJ"),l.a.createElement("option",{value:"NM"},"NM"),l.a.createElement("option",{value:"NV"},"NV"),l.a.createElement("option",{value:"NY"},"NY"),l.a.createElement("option",{value:"ND"},"ND"),l.a.createElement("option",{value:"OH"},"OH"),l.a.createElement("option",{value:"OK"},"OK"),l.a.createElement("option",{value:"OR"},"OR"),l.a.createElement("option",{value:"PA"},"PA"),l.a.createElement("option",{value:"RI"},"RI"),l.a.createElement("option",{value:"SC"},"SC"),l.a.createElement("option",{value:"SD"},"SD"),l.a.createElement("option",{value:"TN"},"TN"),l.a.createElement("option",{value:"TX"},"TX"),l.a.createElement("option",{value:"UT"},"UT"),l.a.createElement("option",{value:"VT"},"VT"),l.a.createElement("option",{value:"VA"},"VA"),l.a.createElement("option",{value:"WA"},"WA"),l.a.createElement("option",{value:"WI"},"WI"),l.a.createElement("option",{value:"WV"},"WV"),l.a.createElement("option",{value:"WY"},"WY"))),l.a.createElement("div",{className:"form-group col-md-2"},l.a.createElement("label",{htmlFor:"inputZip",className:this.state.validAddress?"":e},"Zip*"),l.a.createElement("input",{type:"text",className:"form-control",id:"inputZip",value:this.state.zip,onChange:this.handleChangeZipCode,minLength:"5",maxLength:"5",required:!0}))),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group"},this.state.validEmailConfirmation?"":l.a.createElement("div",{className:"text-center"},l.a.createElement("small",{className:e},l.a.createElement("b",null,"Invalid Email Confirmation: Please double-check the spelling and try again.")),l.a.createElement("br",null)),l.a.createElement("label",{htmlFor:"email",className:this.state.validEmailConfirmation?"":e},"Email*"),l.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter Email",value:this.state.email,onChange:this.handleChangeEmail,maxLength:"40",required:!0}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group pb-4"},l.a.createElement("label",{htmlFor:"emailConfirmation",className:this.state.validEmailConfirmation?"":e},"Confirm Email*"),l.a.createElement("input",{type:"email",className:"form-control",id:"emailConfirmation",placeholder:"Re-enter Email","aria-describedby":"errorConfirmingEmail",value:this.state.emailConfirmation,onChange:this.handleChangeEmailConfirmation,maxLength:"40",required:!0}),this.state.validEmailConfirmation?"":l.a.createElement("small",{id:"errorConfirmingEmail",className:"form-text text-danger"},"Your email and confirmed email does not match.")),l.a.createElement("div",{className:"mt-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"agreeCheck",required:!0}),l.a.createElement("label",{className:"form-check-label",htmlFor:"agreeCheck"},"I agree with the"," ",l.a.createElement("a",{href:"javascript:void(0)"},"Terms and Conditions")))),this.state.captchaInvalidFlag?l.a.createElement("div",null,l.a.createElement("small",{className:e},l.a.createElement("b",null,"Captcha Error: Try Again")),l.a.createElement("br",null)):"",l.a.createElement(h.a,{sitekey:"6Ld0ZrIZAAAAAEbcZZPxtxtYXZoOxbsOpnKfbd1C",onChange:this.handleChangeCaptcha}),l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-4"},"Submit"))))}}]),a}(n.Component),v=a(7),f=a.n(v),E=a(12);var g=function(e){var t={width:"100%",height:e.mapHeight},a=l.a.createRef(),r=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(n.useEffect)((function(){var t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyCQldl1eVtGg5Y6OgjJ8_sZITLWmY7WEH0","&libraries=places"),window.document.body.appendChild(t),t.addEventListener("load",(function(){r.current=new window.google.maps.Map(a.current,{zoom:15,center:{lat:e.lat,lng:e.lng}}),i.current=new window.google.maps.Marker({position:{lat:e.lat,lng:e.lng},map:r.current})}))})),l.a.createElement("div",{id:"google-map",ref:a,style:t})};d.a.setApiKey("AIzaSyCQldl1eVtGg5Y6OgjJ8_sZITLWmY7WEH0"),d.a.setLanguage("en");var N=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",dateOfBirth:"",foot:"",inch:"",education:"",street:"",street2:"",city:"",state:"",zip:"",fullAddress:"",email:"",lat:"",lng:"",mapHeight:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadFormData(),this.setMapHeight()}},{key:"loadFormData",value:function(){var e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({firstName:this.props.form.firstName,lastName:this.props.form.lastName,dateOfBirth:this.props.form.dateOfBirth,foot:this.props.form.foot,inch:this.props.form.inch,education:this.props.form.education,street:this.props.form.street,street2:this.props.form.street2,city:this.props.form.city,state:this.props.form.state,zip:this.props.form.zip,fullAddress:this.props.form.street+" "+this.props.form.street2+" "+this.props.form.city+" "+this.props.form.state+" "+this.props.form.zip,email:this.props.form.email,lat:"",lon:""});case 2:this.retrieveLocationCoordinates();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"retrieveLocationCoordinates",value:function(){var e=this;d.a.fromAddress(this.state.fullAddress).then((function(t){var a=t.results[0].geometry.location,n=a.lat,l=a.lng;e.setState({lat:n,lng:l})}),(function(e){console.error(e)}))}},{key:"setMapHeight",value:function(){var e=document.getElementById("title-container").clientHeight,t=window.innerHeight-e;this.setState({mapHeight:t})}},{key:"dateToString",value:function(e){var t=new Date(e.replace("-","/"));return t=t.toDateString().slice(4,t.toDateString().length)}},{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.dateOfBirth,r=e.foot,i=e.inch,o=e.education,s=e.street,m=e.street2,c=e.city,u=e.state,d=e.zip,h=e.email,p=e.lat,v=e.lng,f=e.mapHeight;return l.a.createElement("div",{id:"page-container",className:"d-flex flex-column"},l.a.createElement("div",{id:"title-container",className:"text-center w-100 bg-info"},l.a.createElement("h2",null,"Results Verification Page: John Le")),l.a.createElement("div",{className:"d-flex w-100"},l.a.createElement("div",{className:"d-flex flex-column justify-content-between text-center"},l.a.createElement("div",null,l.a.createElement("span",{className:"d-inline-block display-4 m-4"},l.a.createElement("u",null,t," ",a)),l.a.createElement("b",null,"Address:"),l.a.createElement("p",null,s," ",Number.isInteger(parseInt(m))?"#":""," ",m,l.a.createElement("br",null)," ",c," ",u," ",d),l.a.createElement("b",null,"Email: "),l.a.createElement("p",null,h),l.a.createElement("b",null,"Date of Birth: "),l.a.createElement("p",null,this.dateToString(n)),l.a.createElement("b",null,"Height: "),l.a.createElement("p",null,r>0?"".concat(r," ft."):""," ",i>0?"".concat(i," in."):""),l.a.createElement("b",null,"Education Level:"),l.a.createElement("p",null,o)),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary mb-4",onClick:this.props.resetForm},"Try Again"))),l.a.createElement("div",{id:"map-container",className:"d-flex flex-column text-center w-100"},l.a.createElement(g,{lat:p,lng:v,mapHeight:f,className:"border border-success"}))))}}]),a}(n.Component),C=(a(24),function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={formSubmitted:!1,form:null},n}return Object(s.a)(a,[{key:"handleReceivedForm",value:function(e,t){e.preventDefault(),this.setState({formSubmitted:!0,form:t})}},{key:"handleReset",value:function(e){e.preventDefault(),this.setState({formSubmitted:!1,form:null})}},{key:"render",value:function(){var e=this,t=this.state.formSubmitted;return l.a.createElement("div",{className:"App bg-light"},t?l.a.createElement(N,{form:this.state.form,resetForm:function(t){return e.handleReset(t)}}):l.a.createElement(p,{onSubmit:function(t,a){return e.handleReceivedForm(t,a)}}))}}]),a}(n.Component));a(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.b73fc3e6.chunk.js.map