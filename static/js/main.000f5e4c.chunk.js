(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),i=t.n(l),o=(t(91),t(32)),c=(t(71),t(22)),s=t(20),m=t(36),u=t(4),p=t(33),d=t(128),E=t(130),h=t(124),g=t(131),b=t(132),f=t(25),y=t(126),v=t(113),A="#FFFFFF";var w=function(e){return r.a.createElement(p.a,{fill:"horizontal",background:"#FFFFFF",gridArea:"side",pad:"small",margin:"small"},r.a.createElement(p.a,{direction:"row",gap:"small"},r.a.createElement(y.a,{src:e.recruiter.profile_picture,size:"large"}),r.a.createElement("div",null,r.a.createElement("div",null,e.recruiter.name),r.a.createElement("div",{style:{fontWeight:"bold",fontSize:14,color:"#7D7D7D"}},e.recruiter.title," @ ",e.recruiter.organization),r.a.createElement("div",null,Object(f.a)(Array(e.recruiter.rating)).map((function(e){return r.a.createElement(v.a,{color:"#7D7D7D",size:"small"})}))))))},j=t(127),k=t(84);var x=function(e){return r.a.createElement("div",{style:{backgroundColor:"#956EDC",border:"none",color:A,margin:4,padding:"4px 8px",textAlign:"center",textDecoration:"none",display:"inline-block",borderRadius:"16px",fontSize:"12px"}},e.label)};var F=function(e){return r.a.createElement("a",{style:{color:"#08CAA1",textDecoration:"none"},href:e.href,target:"_blank",rel:"noopener noreferrer"},e.href)};var S=function(e){return r.a.createElement(p.a,{fill:"horizontal",background:"#FFFFFF",gridArea:"side",pad:"small",margin:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"WEBSITE"),r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(F,{href:e.website})),r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"TECH STACK"),r.a.createElement(p.a,{align:"center",direction:"row"},e.techStack&&e.techStack.map((function(e){return r.a.createElement(x,{label:e})}))),r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"LOCATION"),r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(k.a,null,e.location)))},O=t(114),C=t(115),B=t(116);var T=function(e){return r.a.createElement(p.a,{fill:"horizontal",background:"#FFFFFF",gridArea:"side",pad:"small",margin:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"SOCIAL"),r.a.createElement(p.a,{pad:"none",direction:"row"},r.a.createElement(p.a,{pad:"small"},r.a.createElement(d.a,{plain:!0,icon:r.a.createElement(O.a,{color:"#03A9F3"}),href:e.social.twitter,target:"_blank"})),r.a.createElement(p.a,{pad:"small"},r.a.createElement(d.a,{plain:!0,icon:r.a.createElement(C.a,{color:"#006699"}),href:e.social.linkedin,target:"_blank"})),r.a.createElement(p.a,{pad:"small"},r.a.createElement(d.a,{plain:!0,icon:r.a.createElement(B.a,{color:"#FF0700"}),href:e.social.instagram,target:"_blank"}))),r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"POSTED"),r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(k.a,null,"New - 2 hours ago")),r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"EMPLOYMENT"),r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(k.a,null,"Permanent")))},z=t(117);var R=function(e){return r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement("p",null,e.description),r.a.createElement("h3",null,"Job Responsibilities:"),r.a.createElement("p",null,e.responsibilities.map((function(e){return r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(z.a,{color:"#08CAA1",size:"small",style:{marginTop:4}}),r.a.createElement("div",{style:{marginLeft:4,lineHeight:1}},e))}))),r.a.createElement("h3",null,"Required Experience:"),r.a.createElement("p",null,e.experiences.map((function(e){return r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(z.a,{color:"#08CAA1",size:"small",style:{marginTop:4}}),r.a.createElement("div",{style:{marginLeft:4,lineHeight:1}},e))}))),e.businessTravel&&"0"!==e.businessTravel&&r.a.createElement("h3",null," Business Travel: ",e.businessTravel,"%"))};var P=function(e){return"GBP"===e.currency?r.a.createElement("span",null,"\xa3"):"USD"===e.currency?r.a.createElement("span",null,"$"):"EUR"===e.currency?r.a.createElement("span",null,"\u20ac"):r.a.createElement("span",null)};var D=function(e){return r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(p.a,{pad:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"SALARY"),r.a.createElement(p.a,{direction:"row"},r.a.createElement(P,{currency:e.benefits.salary.currency}),e.benefits.salary.min," - ",r.a.createElement(P,{currency:e.benefits.salary.currency}),e.benefits.salary.max)),r.a.createElement(p.a,{pad:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"REMOTE WORKING"),e.benefits.remote),r.a.createElement(p.a,{pad:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"BONUS STRUCTURE"),e.benefits.bonus),r.a.createElement(p.a,{pad:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"HOLIDAY"),e.benefits.holiday),r.a.createElement(p.a,{pad:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"EQUITY"),e.benefits.equity),r.a.createElement(p.a,{pad:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"PRIVATE HEALTH CARE"),e.benefits.healthcare),r.a.createElement(p.a,{pad:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"CAR (ALLOWANCE)"),e.benefits.carAllowance),r.a.createElement(p.a,{pad:"small"},r.a.createElement(j.a,{size:"18px",margin:"none",color:"#BABABA"},"OTHER BENEFITS"),e.benefits.other.map((function(e){return r.a.createElement("div",null,e)}))))},N=t(129);var W=function(e){return r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(N.a,{fit:"cover",src:e.company.profile_picture}),r.a.createElement("h3",null,e.company.elevatorPitch),r.a.createElement("p",null,e.company.info))},q=t(1),M=t(42),H={global:{colors:{brand:"#08CAA1","accent-1":"#956EDC",text:{light:"#444444"}},font:{family:"Source Sans Pro"}},button:{color:A,disabled:{color:"orange",border:{color:"orange"},extend:"border: 10px dashed red;"}}},_=function(e){return console.log(Object(o.a)({},H,{},e)),Object(o.a)({},M.grommet,{},H,{},e)};function I(){var e=Object(m.a)(["\n      font-weight: bold;\n      width: 200px;\n    "]);return I=function(){return e},e}var J=["Jadon Kaufman","Ellesse Bravo","Claudia Sheldon","Kelsi Huffman","Jamelia Arroyo","Armaan Barr","Arielle Zavala","Ronny Talley","Federico Hooper","Beverly O'Reilly"],U=["https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70","https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png","https://www.suelaceyphotography.com/v/p/QDTKd4AO9ofE9HwbZ5v5anz7-business-profile-shots-img-0241-1582334654.jpg","https://i.insider.com/5899ffcf6e09a897008b5c04?width=600&format=jpeg&auto=webp","https://sites.psu.edu/iabcpennstate/wp-content/uploads/sites/18140/2015/01/professional-woman-4.jpg","https://cathleo.com.au/wp-content/uploads/2016/03/Profiles-UnisA-5.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsBvTHtysWxzGWd0e3yTig65uzlDf1ZsBUKoDhB-w7nkyVyOV9&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwNvj0HEnOYsY5Ny0qcuf1BDJXOEQnMEqHsHQC4ocbMR6FSwpP&usqp=CAU","https://ocbj.media.clients.ellingtoncms.com/img/photos/2011/06/03/SR_Profile_Ken_Sullivan_6-6_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d","https://www.joscottimages.co.uk/_webedit/cached-images/263-0-0-893-10000-7451-612.jpg"];function Q(e,a){return e=Math.ceil(e),a=Math.floor(a),Math.floor(Math.random()*(a-e+1))+e}var L=function(e){Object(s.e)().id,fetch("https://qi827wd4q4.execute-api.eu-west-1.amazonaws.com/api/sboj-job-function").then((function(e){return e.json()})).then((function(e){console.log(e)}));var a=r.a.useState(),t=Object(u.a)(a,2),n=t[0],l=t[1],i={tab:{active:{color:"dark-1"},color:"accent-1",border:{color:"accent-1"},size:"250px",extend:function(e){e.theme;return Object(q.css)(I())}},tabs:{gap:"medium"}},o=J[Math.floor(Math.random()*J.length)],c=U[Math.floor(Math.random()*U.length)];e.job||((e={}).job={company:{name:"SAP Company",website:"http://www.sapcompany.com",location:"London, UK",techStack:["SAP","ABAP","Ui5"],elevatorPitch:"This is the elevator pitch of the company, and shouldn\u2019t be more than a sentence",info:"This is is the section where the company can go into a little bit more detail regarding their beliefs, what they are looking to solve, their product and what the goal is for the future. This sections should ideally be very limited and restricted to only a paragraph.",size:"+100",founded:"2009",profile_picture:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2n9qw?ver=66ab&q=90&m=6&h=720&w=1280&b=%23FFFFFFFF&f=jpg&o=f&aim=true"},recruiter:{name:o,title:"Head of Recruiting",organization:"Sboj.io",rating:Q(1,5),profile_picture:c},benefits:{salary:{currency:"GBP",min:"40,000",max:"50,000"},remote:"",bonus:"",holiday:28,equity:"",healthcare:"",carAllowance:"",other:["Health Care (Private)","Free Fruit and Coffee","Travel loan","Quarterly company parties","Gym Membership"]},position:"Inhouse SAP ABAP Developer",description:"A global end user in the Consulting industry is seeking a talented and professional ABAP developer for their HQ in the Cologne Area.",responsibilities:["Software development in the SAP ERP environment with the aid of all available development environments","Customisation of the functional SAP modules FI/CO","Interface programming and form design with SAP Script / Smartforms","Ensuring stability and availability of the SAP environment including the interfaces through standardised change and test management","Provide 1st and 2nd level support"],experiences:["2-5 Years Cross-Module customisation Ideally with in FI/CO","Excellent understanding of ABAP and ABAP OO as well as project management knowledge","Able to work independently ","A hunger to grow and learn newer technologies","Conversational German and Fluent English"],employment:"Permanent",businessTravel:"0"});var m=r.a.useState(!1),f=Object(u.a)(m,2),y=f[0],v=f[1];return r.a.createElement("div",null,r.a.createElement(p.a,{direction:"row"},r.a.createElement(p.a,{fill:!0,size:"large"},r.a.createElement("div",null,r.a.createElement("h1",null,e.job.position),r.a.createElement("h2",{style:{color:"#BABABA"}},e.job.company.name))),r.a.createElement(p.a,{fill:!0,align:"end"},r.a.createElement(p.a,{width:"small",pad:"large"},!y&&r.a.createElement(d.a,{primary:!0,label:"Apply",onClick:function(){v(!0)}}),y&&r.a.createElement(d.a,{primary:!0,label:"Applied",onClick:function(){}})))),r.a.createElement(E.a,{rows:["auto","flex"],columns:["auto","1/4"],areas:[{name:"header",start:[0,0],end:[1,0]},{name:"main",start:[0,1],end:[0,1]},{name:"side",start:[1,1],end:[1,1]}]},r.a.createElement(p.a,{gridArea:"header",direction:"row",align:"center",justify:"between",pad:{horizontal:"small",vertical:"small"}}),r.a.createElement(h.a,{theme:_(i)},r.a.createElement(g.a,{activeIndex:n,onActive:function(e){return l(e)},justify:"left"},r.a.createElement(b.a,{title:"The Job"},r.a.createElement(p.a,{gridArea:"main"},r.a.createElement(R,{description:e.job.description,responsibilities:e.job.responsibilities,experiences:e.job.experiences,businessTravel:e.job.businessTravel}))),r.a.createElement(b.a,{title:"The Benefits"},r.a.createElement(p.a,{gridArea:"main"},r.a.createElement(D,{benefits:e.job.benefits}))),r.a.createElement(b.a,{title:"The Company"},r.a.createElement(p.a,{gridArea:"main"},r.a.createElement(W,{company:e.job.company}))))),r.a.createElement(p.a,{fill:!0,gridArea:"side",justify:"top",align:"center",pad:{horizontal:"medium",vertical:"none"}},r.a.createElement(w,{recruiter:e.job.recruiter}),r.a.createElement(S,{website:e.job.company.website,techStack:e.job.company.techStack,location:e.job.company.location}),r.a.createElement(T,{social:{linkedin:"https://www.linkedin.com/in/ben-cockin/",twitter:"https://twitter.com/BurgerKing",instagram:"https://www.instagram.com/realsophiarobot/?hl=en"}}))))},Y=t(119),K=[{name:"Awesome job one",to:"/job/abc",profile_picture:"https://sboj.io/static/icons/apple-icon-152x152.png"},{name:"Awesome job two",to:"/job/cde",profile_picture:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0008/9493/brand.gif?itok=690RQQCd"},{name:"Awesome job three",to:"/job/xyz",profile_picture:"https://lh3.googleusercontent.com/proxy/AoCp1qwP0kcqdtZDLob4-Wqg9SyWxsEiPsc2YHBOoJUw1TxMJZgR3HaNVwujbDi-lsWF9wQu2J1naLQQ3GoQO6TMdvPf8saMukMb"}];var G=function(){return r.a.createElement(p.a,{gridArea:"main"},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement("h1",null,"Jobs"),r.a.createElement(Y.a,{data:K,pad:"medium"},(function(e,a){return r.a.createElement(p.a,{key:a,direction:"row-responsive",gap:"large",size:"xsmall",align:"center"},r.a.createElement(c.b,{to:e.to},r.a.createElement(p.a,{direction:"row",gap:"small",justify:"center"},r.a.createElement(y.a,{src:e.profile_picture,size:"large"}),r.a.createElement(k.a,{weight:"bold"},e.name))))}))))},V=t(82),Z=t(133),$=t(134),X=t(135),ee=t(120);var ae=function(e){return r.a.createElement("div",{style:{backgroundColor:"#956EDC",border:"none",color:A,margin:4,padding:"4px 8px",textAlign:"center",textDecoration:"none",display:"inline-block",borderRadius:"16px",fontSize:"12px"}},r.a.createElement(p.a,{direction:"row"},e.label," ",r.a.createElement(ee.a,{pad:{left:"large"},color:A,onClick:e.onClick})))};var te=function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Position"),r.a.createElement(p.a,{width:"medium"},r.a.createElement(Z.a,{value:e.position,onChange:function(a){return e.setPosition(a.target.value)},placeholder:"Java developer"})),r.a.createElement("h3",null,"Tech Stack"),r.a.createElement(p.a,{width:"medium"},r.a.createElement(Z.a,{value:l,onChange:function(e){return i(e.target.value)},onKeyPress:function(a){if("Enter"===a.key){var t=Object(f.a)(e.techStack);t.push(l),e.setTechStack(t),i("")}},placeholder:"Type a technology"})),"Smart suggestions based n other positions like yours",r.a.createElement("br",null),r.a.createElement(x,{label:"Java"}),r.a.createElement(x,{label:"Spring Framework"}),r.a.createElement(x,{label:"Postgres"}),r.a.createElement("br",null),e.techStack&&e.techStack.map((function(a,t){return r.a.createElement(ae,{label:a,onClick:(n=t,function(a){var t=Object(f.a)(e.techStack);t.splice(n,1),e.setTechStack(t)})});var n})),r.a.createElement("h3",null,"Employment Type"),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"Permanent",name:"employmentType",value:"permanent",checked:"permanent"===e.employmentType,onChange:function(a){return e.setEmploymentType(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"Freelance",name:"employmentType",value:"freelance",checked:"freelance"===e.employmentType,onChange:function(a){return e.setEmploymentType(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"Part-time",name:"employmentType",value:"parttime",checked:"parttime"===e.employmentType,onChange:function(a){return e.setEmploymentType(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"Internship",name:"employmentType",value:"internship",checked:"internship"===e.employmentType,onChange:function(a){return e.setEmploymentType(a.target.value)}}))),r.a.createElement("h3",null,"Holiday"),r.a.createElement(p.a,{width:"medium",direction:"row"},r.a.createElement(X.a,{mask:[{regexp:/^[0-9]{1,3}$/,placeholder:"28"}],value:e.holiday,onChange:function(a){return e.setHoliday(a.target.value)}}),"Days"),r.a.createElement("h3",null,"Remote Working"),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"Fully",name:"remote",value:"fully",checked:"fully"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"Mostly",name:"remote",value:"mostly",checked:"mostly"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"Once a week",name:"remote",value:"once",checked:"once"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"When needed",name:"remote",value:"when",checked:"when"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"Very rarely",name:"remote",value:"rarely",checked:"rarely"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"None",name:"remote",value:"none",checked:"none"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}}))),r.a.createElement("h3",null,"Business Travel"),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"100%",name:"businessTravel",value:"100",checked:"100"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"75%",name:"businessTravel",value:"75",checked:"75"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"50%",name:"businessTravel",value:"50",checked:"50"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"25%",name:"businessTravel",value:"25",checked:"25"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"None",name:"businessTravel",value:"0",checked:"0"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}}))))},ne=t(123);var re=function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Salary"),r.a.createElement(p.a,{width:"small"},r.a.createElement(ne.a,{options:["GBP","EUR","USD"],value:e.currency,onChange:function(a){var t=a.option;return e.setCurrency(t)},placeholder:"Currency"})),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(X.a,{mask:[{regexp:/^[0-9]{1,7}$/,placeholder:"50000"}],value:e.minSalary,onChange:function(a){return e.setMinSalary(a.target.value)}}),r.a.createElement(X.a,{mask:[{regexp:/^[0-9]{1,7}$/,placeholder:"60000"}],value:e.maxSalary,onChange:function(a){return e.setMaxSalary(a.target.value)}})),r.a.createElement("h3",null,"Equity"),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"Yes",name:"equity",value:"true",checked:"true"===e.equity,onChange:function(a){return e.setEquity(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement($.a,{label:"No",name:"equity",value:"false",checked:"false"===e.equity,onChange:function(a){return e.setEquity(a.target.value)}}))),r.a.createElement("h3",null,"Other Benefits"),r.a.createElement(p.a,{width:"medium"},r.a.createElement(Z.a,{value:l,onChange:function(e){return i(e.target.value)},onKeyPress:function(a){if("Enter"===a.key){var t=Object(f.a)(e.otherBenefits);t.push(l),e.setOtherBenefits(t),i("")}},placeholder:"Personal Performance, Stocks..."})),e.otherBenefits&&e.otherBenefits.map((function(e){return r.a.createElement("p",null,e)})))},le=t(136);var ie=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Description"),r.a.createElement(p.a,{width:"xlarge"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(le.a,{placeholder:"Describe a little about the project your company/client is going through. Be concise. You only have 80 words!",value:e.description,onChange:function(a){return e.setDescription(a.target.value)},resize:!1})),e.description.length," / 80"),r.a.createElement("h3",null,"Job Responsibilities"),"You can have up to five",r.a.createElement(p.a,{width:"xlarge"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.responsibility1,onChange:function(a){return e.setResponsibility1(a.target.value)},placeholder:"Type job responsibility here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.responsibility2,onChange:function(a){return e.setResponsibility2(a.target.value)},placeholder:"Type job responsibility here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.responsibility3,onChange:function(a){return e.setResponsibility3(a.target.value)},placeholder:"Type job responsibility here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.responsibility4,onChange:function(a){return e.setResponsibility4(a.target.value)},placeholder:"Type job responsibility here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.responsibility5,onChange:function(a){return e.setResponsibility5(a.target.value)},placeholder:"Type job responsibility here"}))),r.a.createElement("h3",null,"Required Experience"),"You can have up to five",r.a.createElement(p.a,{width:"xlarge"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.experience1,onChange:function(a){return e.setExperience1(a.target.value)},placeholder:"Type previous experience here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.experience2,onChange:function(a){return e.setExperience2(a.target.value)},placeholder:"Type previous experience here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.experience3,onChange:function(a){return e.setExperience3(a.target.value)},placeholder:"Type previous experience here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.experience4,onChange:function(a){return e.setExperience4(a.target.value)},placeholder:"Type previous experience here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(Z.a,{value:e.experience5,onChange:function(a){return e.setExperience5(a.target.value)},placeholder:"Type previous experience here"}))))};var oe=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Read to Post?"))},ce=t(122),se=t(121);var me=function(e){return r.a.createElement(h.a,{theme:_({button:{color:"brand"}})},r.a.createElement(d.a,{label:"Back",icon:r.a.createElement(se.a,{color:"brand"}),onClick:e.onClick}))};function ue(){var e=Object(m.a)(["\n      font-weight: bold;\n    "]);return ue=function(){return e},e}var pe=function(e){e.checked,Object(V.a)(e,["checked"]);var a=r.a.useState(),t=Object(u.a)(a,2),l=t[0],i=t[1],o={tab:{active:{color:"dark-1"},color:"accent-1",border:{color:"accent-1"},size:"250px",extend:function(e){e.theme;return Object(q.css)(ue())}},tabs:{gap:"medium"}},c=Object(n.useState)(""),s=Object(u.a)(c,2),m=s[0],E=s[1],f=Object(n.useState)([]),y=Object(u.a)(f,2),v=y[0],w=y[1],j=Object(n.useState)(),k=Object(u.a)(j,2),x=k[0],F=k[1],S=Object(n.useState)(),O=Object(u.a)(S,2),C=O[0],B=O[1],T=Object(n.useState)(),z=Object(u.a)(T,2),R=z[0],P=z[1],D=Object(n.useState)(),N=Object(u.a)(D,2),W=N[0],M=N[1],H=Object(n.useState)(""),I=Object(u.a)(H,2),J=I[0],U=I[1],Q=Object(n.useState)(""),Y=Object(u.a)(Q,2),K=Y[0],G=Y[1],Z=Object(n.useState)(""),$=Object(u.a)(Z,2),X=$[0],ee=$[1],ae=Object(n.useState)(""),ne=Object(u.a)(ae,2),le=ne[0],se=ne[1],pe=Object(n.useState)(),Ee=Object(u.a)(pe,2),he=Ee[0],ge=Ee[1],be=Object(n.useState)([]),fe=Object(u.a)(be,2),ye=fe[0],ve=fe[1],Ae=Object(n.useState)(""),we=Object(u.a)(Ae,2),je=we[0],ke=we[1],xe=Object(n.useState)(""),Fe=Object(u.a)(xe,2),Se=Fe[0],Oe=Fe[1],Ce=Object(n.useState)(""),Be=Object(u.a)(Ce,2),Te=Be[0],ze=Be[1],Re=Object(n.useState)(""),Pe=Object(u.a)(Re,2),De=Pe[0],Ne=Pe[1],We=Object(n.useState)(""),qe=Object(u.a)(We,2),Me=qe[0],He=qe[1],_e=Object(n.useState)(""),Ie=Object(u.a)(_e,2),Je=Ie[0],Ue=Ie[1],Qe=Object(n.useState)(""),Le=Object(u.a)(Qe,2),Ye=Le[0],Ke=Le[1],Ge=Object(n.useState)(""),Ve=Object(u.a)(Ge,2),Ze=Ve[0],$e=Ve[1],Xe=Object(n.useState)(""),ea=Object(u.a)(Xe,2),aa=ea[0],ta=ea[1],na=Object(n.useState)(""),ra=Object(u.a)(na,2),la=ra[0],ia=ra[1],oa={company:{name:"Not set",website:"Not set",location:"Not set",techStack:v,elevatorPitch:"Not set",info:"Not set",size:"Not set",founded:"Not set",profile_picture:"Not set"},recruiter:{name:"You",title:"Head of Recruiting",organization:"Sboj.io",rating:5,profile_picture:""},benefits:{salary:{currency:K,min:X,max:le},remote:"Not set",bonus:"Not set",equity:he,holiday:C,healthcare:"Not set",carAllowance:"Not set",other:ye},position:m,description:J,responsibilities:[je,Se,Te,De,Me],experiences:[Je,Ye,Ze,aa,la],employment:x,businessTravel:W,remoteWorking:R};return r.a.createElement(h.a,{theme:_(o)},r.a.createElement(g.a,{activeIndex:l,onActive:function(e){return i(e)},justify:"left"},r.a.createElement(b.a,{title:r.a.createElement(de,{label:"1: Basic Info"})},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(te,{position:m,setPosition:E,techStack:v,setTechStack:w,employmentType:x,setEmploymentType:F,holiday:C,setHoliday:B,remoteWorking:R,setRemoteWorking:P,businessTravel:W,setBusinessTravel:M}),r.a.createElement(p.a,{direction:"row",justify:"end"},r.a.createElement(p.a,{width:"small"},r.a.createElement(d.a,{primary:!0,label:"Continue",icon:r.a.createElement(ce.a,{color:A}),reverse:!0,onClick:function(){i(1)}}))))),r.a.createElement(b.a,{title:r.a.createElement(de,{label:"2: Salary and benefits"})},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(re,{currency:K,setCurrency:G,minSalary:X,setMinSalary:ee,maxSalary:le,setMaxSalary:se,equity:he,setEquity:ge,otherBenefits:ye,setOtherBenefits:ve}),r.a.createElement(p.a,{direction:"row",justify:"end"},r.a.createElement(p.a,{width:"small"},r.a.createElement(me,{onClick:function(){i(0)}})),r.a.createElement(p.a,{width:"small"},r.a.createElement(d.a,{primary:!0,label:"Continue",icon:r.a.createElement(ce.a,{color:A}),reverse:!0,onClick:function(){i(2)}}))))),r.a.createElement(b.a,{title:r.a.createElement(de,{label:"3: Job Description"})},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(ie,{description:J,setDescription:U,responsibility1:je,setResponsibility1:ke,responsibility2:Se,setResponsibility2:Oe,responsibility3:Te,setResponsibility3:ze,responsibility4:De,setResponsibility4:Ne,responsibility5:Me,setResponsibility5:He,experience1:Je,setExperience1:Ue,experience2:Ye,setExperience2:Ke,experience3:Ze,setExperience3:$e,experience4:aa,setExperience4:ta,experience5:la,setExperience5:ia}),r.a.createElement(p.a,{direction:"row",justify:"end"},r.a.createElement(p.a,{width:"small"},r.a.createElement(me,{onClick:function(){i(1)}})),r.a.createElement(p.a,{width:"small"},r.a.createElement(d.a,{primary:!0,label:"Continue",icon:r.a.createElement(ce.a,{color:A}),reverse:!0,onClick:function(){i(3)}}))))),r.a.createElement(b.a,{title:r.a.createElement(de,{label:"4: Publish"})},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(oe,null),r.a.createElement("div",{hidden:!0},r.a.createElement("pre",null,JSON.stringify({job:oa},null,2))),r.a.createElement(p.a,{direction:"row",justify:"end"},r.a.createElement(p.a,{width:"small"},r.a.createElement(me,{onClick:function(){i(2)}})))),r.a.createElement(L,{job:oa}))))},de=function(e){var a=e.icon,t=e.label;return r.a.createElement(p.a,{direction:"row",align:"center",gap:"xsmall",width:"250px"},r.a.createElement("span",{style:{color:"#956EDC"}},t),a)};var Ee=function(){return r.a.createElement("h1",{style:{fontFamily:"Righteous, cursive",fontSize:58,fontWeight:400,color:"#424242",userSelect:"none"}},"Sb",r.a.createElement("span",{style:{color:"#08CAA1"}},"o"),"j")};var he=function(){return r.a.createElement(p.a,{gridArea:"sidebar",background:"#FFFFFF"},r.a.createElement(p.a,{justify:"center",align:"center"},r.a.createElement(Ee,null)),r.a.createElement(p.a,{justify:"center",pad:{top:"large"}},[{text:"Jobs",href:"/jobs"},{text:"Post a Job",href:"/post"}].map((function(e){return r.a.createElement(c.c,{className:"side_link",to:e.href},e.text)}))))};var ge=function(){return fetch("https://0jzvzdhkz4.execute-api.eu-west-1.amazonaws.com/prod/testing").then((function(e){return e.json()})).then((function(e){console.log(e)})),r.a.createElement(c.a,{basename:"/dev"},r.a.createElement(h.a,{full:!0,theme:Object(o.a)({},M.grommet,{},H)},r.a.createElement(E.a,{fill:!0,rows:["auto","flex"],columns:["250px","flex"],areas:[{name:"sidebar",start:[0,1],end:[0,1]},{name:"main",start:[1,1],end:[1,1]}]},r.a.createElement(he,null),r.a.createElement(p.a,{gridArea:"main",pad:"medium"},r.a.createElement(s.a,{exact:!0,path:"/",component:G}),r.a.createElement(s.a,{exact:!0,path:"/jobs",component:G}),r.a.createElement(s.a,{exact:!0,path:"/post",component:pe}),r.a.createElement(s.a,{exact:!0,path:"/job/:id",component:L})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,a,t){},86:function(e,a,t){e.exports=t(105)},91:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.000f5e4c.chunk.js.map