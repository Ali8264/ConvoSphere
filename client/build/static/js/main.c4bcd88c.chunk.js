(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{146:function(e,a,t){e.exports=t.p+"static/media/memories-Logo.e342bbed.png"},147:function(e,a,t){e.exports=t.p+"static/media/memories-Text.fcbcfa5a.png"},174:function(e,a,t){e.exports=t(228)},227:function(e,a,t){},228:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),o=t.n(r),s=t(21),i=t(70),c=t(162);var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify({...null===a||void 0===a?void 0:a.data})),{...e,authData:null===a||void 0===a?void 0:a.data};case"LOGOUT":return localStorage.clear(),{...e,authData:null};default:return e}};const d=Object(i.b)({posts:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"START_LOADING":return{...e,isLoading:!0};case"END_LOADING":return{...e,isLoading:!1};case"FETCH_ALL":return{...e,posts:a.payload.data,currentPage:a.payload.currentPage,numberOfPages:a.payload.numberOfPages};case"FETCH_BY_SEARCH":return{...e,posts:a.payload};case"FETCH_POST":return{...e,post:a.payload};case"LIKE":case"COMMENT":return{...e,posts:e.posts.map(e=>e._id===a.payload._id?a.payload:e)};case"CREATE":return{...e,posts:[...e.posts,a.payload]};case"UPDATE":return{...e,posts:e.posts.map(e=>e._id===a.payload._id?a.payload:e)};case"DELETE":return{...e,posts:e.posts.filter(e=>e._id!==a.payload)};default:return e}},auth:m});var p=t(31),u=t(6),g=t(264),E=t(255),h=t(256),b=t(273),v=t(233),y=t(257),f=t(252),x=t(254),C=Object(f.a)(e=>({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px",[e.breakpoints.down("sm")]:{flexDirection:"column"}},heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px",[e.breakpoints.down("sm")]:{width:"auto"}},profile:{display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center",[e.breakpoints.down("sm")]:{width:"auto",marginTop:20,justifyContent:"center"}},logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(x.a[500]),backgroundColor:x.a[500]}})),O=t(98),N=t(146),w=t.n(N),j=t(147),S=t.n(j);var I=()=>{const e=C(),[a,t]=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),r=Object(s.b)(),o=Object(u.p)(),i=Object(u.n)(),c=()=>{r({type:"LOGOUT"}),t(null),o("/")};return Object(n.useEffect)(()=>{const e=null===a||void 0===a?void 0:a.token;if(e){1e3*Object(O.a)(e).exp<(new Date).getTime()&&c()}t(JSON.parse(localStorage.getItem("profile")))},[i]),l.a.createElement(E.a,{className:e.appBar,position:"static",color:"inherit"},l.a.createElement(p.b,{to:"/posts",className:e.brandContainer},l.a.createElement("img",{src:S.a,alt:"icon",height:"45px"}),l.a.createElement("img",{className:e.image,src:w.a,alt:"icon",height:"40px"})),l.a.createElement(h.a,{className:e.toolbar},a?l.a.createElement("div",{className:e.profile},l.a.createElement(b.a,{className:e.purple,alt:a.result.name,src:a.result.imageUrl},a.result.name.charAt(0)),l.a.createElement(v.a,{className:e.userName,variant:"h6"},a.result.name),l.a.createElement(y.a,{variant:"contained",className:e.logout,color:"secondary",onClick:c},"Logout")):l.a.createElement(y.a,{component:p.b,to:"/auth",variant:"contained",color:"primary"},"Sign in")))},k=t(262),T=t(263),A=t(258),D=t(166),_=t(259),L=t(260),P=t(261),B=t(103),R=t.n(B),F=t(150),W=t.n(F),H=t(149),U=t.n(H),z=t(99),G=t.n(z),M=t(148);const J=t.n(M).a.create({baseURL:"http://localhost:5000"});J.interceptors.request.use(e=>(localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e));const Y=e=>async a=>{try{a({type:"START_LOADING"});const{data:t}=await(e=>J.get("/posts/".concat(e)))(e);a({type:"FETCH_POST",payload:t}),a({type:"END_LOADING"})}catch(t){console.log(t.message)}},K=e=>async a=>{try{a({type:"START_LOADING"});const{data:t}=await(e=>J.get("/posts?page=".concat(e)))(e);a({type:"FETCH_ALL",payload:t}),a({type:"END_LOADING"})}catch(t){console.log(t.message)}},Q=e=>async a=>{try{a({type:"START_LOADING"});const{data:{data:t}}=await(e=>J.get("/posts/search?searchQuery=".concat(e.search||"none"," &tags=").concat(e.tags)))(e);a({type:"FETCH_BY_SEARCH",payload:t}),a({type:"END_LOADING"})}catch(t){console.log(t)}},q=(e,a)=>async t=>{try{t({type:"START_LOADING"});const{data:l}=await(n=e,J.post("/posts",n));a("/posts/".concat(l._id)),t({type:"CREATE",payload:l}),t({type:"END_LOADING"})}catch(l){console.log(l.message)}var n},V=(e,a)=>async t=>{try{const{data:n}=await((e,a)=>J.patch("/posts/".concat(e),a))(e,a);t({type:"UPDATE",payload:n})}catch(n){console.log(n.message)}},X=e=>async a=>{try{const{data:t}=await(e=>J.patch("/posts/".concat(e,"/likePost")))(e);a({type:"LIKE",payload:t})}catch(t){console.log(t.message)}},Z=e=>async a=>{try{await(e=>J.delete("/posts/".concat(e)))(e),a({type:"DELETE",payload:e})}catch(t){console.log(t.message)}},$=(e,a)=>async t=>{try{const{data:n}=await((e,a)=>J.post("/posts/".concat(a,"/commentPost"),{value:e}))(e,a);return t({type:"COMMENT",payload:n}),n.comments}catch(n){console.log(n)}};var ee=Object(f.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}});var ae=e=>{var a,t,n,r;let{post:o,setCurrentId:i}=e;const c=Object(s.b)(),m=ee(),d=Object(u.p)(),p=JSON.parse(localStorage.getItem("profile")),g=()=>o.likes.length>0?o.likes.find(e=>{var a,t;return e===((null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.googleId)||(null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t._id))})?l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{fontSize:"small"})," \xa0",o.likes.length>2?"You and ".concat(o.likes.length-1," others"):"".concat(o.likes.length," like").concat(o.likes.length>1?"s":"")):l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{fontSize:"small"})," \xa0",o.likes.length," ",1===o.likes.length?"Like":"Likes"):l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{fontSize:"small"}),"\xa0Like");return l.a.createElement(A.a,{className:m.card,raised:!0,elevation:6},l.a.createElement(D.a,{className:m.cardAction,onClick:()=>{d("/posts/".concat(o._id))}},l.a.createElement(_.a,{className:m.media,image:o.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:o.title}),l.a.createElement("div",{className:m.overlay},l.a.createElement(v.a,{variant:"h6"},o.name),l.a.createElement(v.a,{variant:"body2"},G()(o.createdAt).fromNow())),((null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t._id)===(null===o||void 0===o?void 0:o.creator))&&l.a.createElement("div",{className:m.overlay2,name:"edit"},l.a.createElement(y.a,{onClick:e=>{e.stopPropagation(),i(o._id)},style:{color:"white"},size:"small"},l.a.createElement(U.a,{fontSize:"default"}))),l.a.createElement("div",{className:m.details},l.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"h2"},o.tags.map(e=>"#".concat(e," ")))),l.a.createElement(v.a,{className:m.title,gutterBottom:!0,variant:"h5",component:"h2"},o.title),l.a.createElement(L.a,null,l.a.createElement(v.a,{variant:"body2",color:"textPrimary",component:"p"},o.message))),l.a.createElement(P.a,{className:m.cardActions},l.a.createElement(y.a,{size:"small",color:"primary",disabled:!(null===p||void 0===p?void 0:p.result),onClick:()=>c(X(o._id))},l.a.createElement(g,null)),((null===p||void 0===p||null===(n=p.result)||void 0===n?void 0:n.googleId)===(null===o||void 0===o?void 0:o.creator)||(null===p||void 0===p||null===(r=p.result)||void 0===r?void 0:r._id)===(null===o||void 0===o?void 0:o.creator))&&l.a.createElement(y.a,{size:"small",color:"primary",onClick:()=>c(Z(o._id))},l.a.createElement(W.a,{fontSize:"small"})," Delete")))},te=Object(f.a)(e=>({mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(x.a[500]),backgroundColor:x.a[500]},[e.breakpoints.down("sm")]:{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}},actionDiv:{textAlign:"center"}}));var ne=e=>{let{setCurrentId:a}=e;const{posts:t,isLoading:n}=Object(s.c)(e=>e.posts),r=te();return t.length||n?n?l.a.createElement(k.a,null):l.a.createElement(T.a,{className:r.container,container:!0,alignItems:"stretch",spacing:3},t.map(e=>l.a.createElement(T.a,{key:e._id,item:!0,xs:12,sm:12,md:6},l.a.createElement(ae,{post:e,setCurrentId:a})))):"No posts"},le=t(164),re=t(270),oe=t(151),se=t.n(oe),ie=Object(f.a)(e=>({root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}));var ce=e=>{var a;let{currentId:t,setCurrentId:r}=e;const[o,i]=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),c=Object(s.c)(e=>t?e.posts.posts.find(e=>e._id===t):null),m=Object(s.b)(),d=Object(u.p)(),p=ie(),g=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)(()=>{c&&i(c)},[c]);const E=()=>{r(0),i({title:"",message:"",tags:"",selectedFile:""})};return(null===g||void 0===g||null===(a=g.result)||void 0===a?void 0:a.name)?l.a.createElement(le.a,{className:p.paper},l.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:async e=>{var a,n;(e.preventDefault(),0===t)?(m(q({...o,name:null===g||void 0===g||null===(a=g.result)||void 0===a?void 0:a.name},d)),E()):(m(V(t,{...o,name:null===g||void 0===g||null===(n=g.result)||void 0===n?void 0:n.name})),E())}},l.a.createElement(v.a,{variant:"h6"},t?'Editing "'.concat(c.title,'"'):"Creating a Memory"),l.a.createElement(re.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:e=>i({...o,title:e.target.value})}),l.a.createElement(re.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,minRows:4,value:o.message,onChange:e=>i({...o,message:e.target.value})}),l.a.createElement(re.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:o.tags,onChange:e=>i({...o,tags:e.target.value.split(",")})}),l.a.createElement("div",{className:p.fileInput},l.a.createElement(se.a,{type:"file",multiple:!1,onDone:e=>{let{base64:a}=e;return i({...o,selectedFile:a})}})),l.a.createElement(y.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),l.a.createElement(y.a,{variant:"contained",color:"secondary",size:"small",onClick:E,fullWidth:!0},"Clear"))):l.a.createElement(le.a,{className:p.paper},l.a.createElement(v.a,{variant:"h6",align:"center"},"Please Signin to create your own memory"))},me=t(274),de=t(272),pe=Object(f.a)(()=>({ul:{justifyContent:"space-around"}}));var ue=e=>{let{page:a}=e;const{numberOfPages:t}=Object(s.c)(e=>e.posts),r=pe(),o=Object(s.b)();return Object(n.useEffect)(()=>{a&&o(K(a))},[a]),l.a.createElement(me.a,{classes:{ul:r.ul},count:t,page:Number(a)||1,variant:"outlined",color:"primary",renderItem:e=>l.a.createElement(de.a,Object.assign({},e,{component:p.b,to:"/posts?page=".concat(e.page)}))})},ge=t(152),Ee=t.n(ge),he=t(271),be=Object(f.a)(e=>({appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:{[e.breakpoints.down("xs")]:{flexDirection:"column-reverse"}}}));var ve=()=>{const[e,a]=Object(n.useState)(0),t=Object(s.b)(),[r,o]=Object(n.useState)(""),[i,c]=Object(n.useState)([]),m=new URLSearchParams(Object(u.n)().search),d=Object(u.p)(),p=be(),h=m.get("page")||1,b=(m.get("searchQuery"),()=>{r.trim()||i?(t(Q({search:r,tags:i.join(",")})),d("/posts/search?searchQuery=".concat(r||"none","&tags=").concat(i.join(",")))):d("/")});return l.a.createElement(he.a,{in:!0},l.a.createElement(g.a,{maxWidth:"xl"},l.a.createElement(T.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,className:p.gridContainer},l.a.createElement(T.a,{item:!0,xs:12,sm:6,md:9},l.a.createElement(ne,{setCurrentId:a})),l.a.createElement(T.a,{item:!0,xs:12,sm:6,md:3},l.a.createElement(E.a,{className:p.appBarSearch,position:"static",color:"inherit"},l.a.createElement(re.a,{name:"search",variant:"outlined",label:"Sarch Memories",onKeyDown:e=>{"13"===e.key&&b()},fullWidth:!0,value:r,onChange:e=>o(e.target.value)}),l.a.createElement(Ee.a,{style:{margin:"10px 0"},value:i,onAdd:e=>c([...i,e]),onDelete:e=>c(i.filter(a=>a!==e)),label:"Search Tags",variant:"outlined"}),l.a.createElement(y.a,{onClick:b,className:p.searchButton,variant:"contained",color:"primary"},"Search")),l.a.createElement(ce,{currentId:e,setCurrentId:a}),l.a.createElement(le.a,{elevation:6},l.a.createElement(ue,{page:h}))))))},ye=Object(f.a)(e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}})),fe=t(161),xe=t.n(fe),Ce=t(265),Oe=t(266),Ne=t(153),we=t.n(Ne),je=t(154),Se=t.n(je);var Ie=e=>{let{name:a,handleChange:t,label:n,half:r,autoFocus:o,type:s,handleShowPassword:i}=e;return l.a.createElement(T.a,{item:!0,xs:12,sm:r?6:12},l.a.createElement(re.a,{name:a,onChange:t,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:o,type:s,InputProps:"password"===a&&{endAdornment:l.a.createElement(Ce.a,{position:"end"},l.a.createElement(Oe.a,{onClick:i},"password"===s?l.a.createElement(we.a,null):l.a.createElement(Se.a,null)))}}))},ke=t(269);const Te=(e,a)=>async t=>{try{const{data:n}=await(e=>J.post("/user/signin",e))(e);t({type:"AUTH",data:n}),a("/posts")}catch(n){ke.a.error(n.message)}},Ae=(e,a)=>async t=>{try{const{data:n}=await(e=>J.post("/user/signup",e))(e);t({type:"AUTH",data:n}),a("/posts")}catch(n){ke.a.error(n.message)}};var De=t(100);const _e={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};var Le=()=>{const e=ye(),[a,t]=Object(n.useState)(!1),[r,o]=Object(n.useState)(!1),[i,c]=Object(n.useState)(_e),m=Object(s.b)(),d=Object(u.p)(),p=e=>{c({...i,[e.target.name]:e.target.value})};return l.a.createElement(g.a,{component:"main",maxWidth:"xs"},l.a.createElement(le.a,{className:e.paper,elevation:3},l.a.createElement(b.a,{className:e.avatar},l.a.createElement(xe.a,null)),l.a.createElement(v.a,{variant:"h5"},r?"Sign Up":"Sign In"),l.a.createElement("form",{className:e.form,onSubmit:e=>{e.preventDefault(),m(r?Ae(i,d):Te(i,d))}},l.a.createElement(T.a,{container:!0,spacing:2},r&&l.a.createElement(l.a.Fragment,null,l.a.createElement(Ie,{name:"firstName",label:"First Name",handleChange:p,autoFocus:!0,half:!0}),l.a.createElement(Ie,{name:"lastName",label:"Last Name",handleChange:p,half:!0})),l.a.createElement(Ie,{name:"email",label:"Email Address",handleChange:p,type:"email"}),l.a.createElement(Ie,{name:"password",label:"Password",handleChange:p,type:a?"text":"password",handleShowPassword:()=>t(e=>!e)}),r&&l.a.createElement(Ie,{name:"confirmPassword",label:"Repeat Password",handleChange:p,type:"password"})),l.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},r?"Sign Up":"Sign In"),l.a.createElement(De.a,{onSuccess:async e=>{const a=null===e||void 0===e?void 0:e.credential,t=Object(O.a)(null===e||void 0===e?void 0:e.credential);try{m({type:"AUTH",data:{result:t,token:a}}),d("/")}catch(n){console.log(n)}},onError:()=>{console.log("Google Sign in was unsuccessful.Try Again later")},state_cookie_domain:"single_host_origin"}),l.a.createElement(T.a,{container:!0,justify:"flex-end"},l.a.createElement(T.a,{item:!0},l.a.createElement(y.a,{onClick:()=>{o(e=>!e),t(!1)}},r?"Already have an account? Sign In":"Dont have an account? Sign Up"))))))},Pe=t(268),Be=Object(f.a)(e=>({media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"300px"},card:{display:"flex",width:"100%",[e.breakpoints.down("sm")]:{flexWrap:"wrap",flexDirection:"column"}},section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:{marginLeft:"20px",[e.breakpoints.down("sm")]:{marginLeft:0}},recommendedPosts:{display:"flex",[e.breakpoints.down("sm")]:{flexDirection:"column"}},loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"},commentsOuterContainer:{display:"flex",justifyContent:"space-between"},commentsInnerContainer:{height:"200px",overflow:"auto",marginRight:"30PX"}}));var Re=e=>{var a;let{post:t}=e;const r=Be(),o=Object(s.b)(),[i,c]=Object(n.useState)(null===t||void 0===t?void 0:t.comments),[m,d]=Object(n.useState)(""),p=JSON.parse(localStorage.getItem("profile"));return l.a.createElement("div",null,l.a.createElement("div",{className:r.commentsOuterContainer},l.a.createElement("div",{className:r.commentsInnerContainer},l.a.createElement(v.a,{gutterBottom:!0,variant:"h6"},"Comments"),i.map((e,a)=>l.a.createElement(v.a,{key:a,gutterBottom:!0,variant:"subtitle1"},e))),(null===p||void 0===p||null===(a=p.result)||void 0===a?void 0:a.name)&&l.a.createElement("div",{style:{width:"70%"}},l.a.createElement(v.a,{gutterBottom:!0,variant:"h6"},"Write a Comment"),l.a.createElement(re.a,{fullWidth:!0,rows:4,variant:"outlined",label:"Comment",multiline:!0,value:m,onChange:e=>d(e.target.value)}),l.a.createElement(y.a,{style:{marginTop:"10px"},fullWidth:!0,disabled:!m,variant:"contained",color:"primary",onClick:async()=>{const e="".concat(p.result.name,":").concat(m),a=await o($(e,t._id));console.log(a),c(a),d("")}},"Comment"))))};var Fe=()=>{const{post:e,posts:a,isLoading:t}=Object(s.c)(e=>e.posts),r=Object(s.b)(),o=Object(u.p)(),i=Be(),{id:c}=Object(u.r)();if(Object(n.useEffect)(()=>{r(Y(c))},[c]),Object(n.useEffect)(()=>{e&&r(Q({search:"none",tags:null===e||void 0===e?void 0:e.tags.join(",")}))},[e]),!e)return null;if(t)return l.a.createElement(le.a,{elevation:6,className:i.loadingPaper},l.a.createElement(k.a,{size:"7em"}));const m=a.filter(a=>{let{_id:t}=a;return t!==e._id});return l.a.createElement(le.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},l.a.createElement("div",{className:i.card},l.a.createElement("div",{className:i.section},l.a.createElement(v.a,{variant:"h3",component:"h2"},e.title),l.a.createElement(v.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},e.tags.map(e=>"#".concat(e," "))),l.a.createElement(v.a,{gutterBottom:!0,variant:"body1",component:"p"},e.message),l.a.createElement(v.a,{variant:"h6"},"Created by: ",e.name),l.a.createElement(v.a,{variant:"body1"},G()(e.createdAt).fromNow()),l.a.createElement(Pe.a,{style:{margin:"20px 0"}}),l.a.createElement(v.a,{variant:"body1"},l.a.createElement("strong",null,"Realtime Chat - coming soon!")),l.a.createElement(Pe.a,{style:{margin:"20px 0"}}),l.a.createElement(Re,{post:e}),l.a.createElement(Pe.a,{style:{margin:"20px 0"}})),l.a.createElement("div",{className:i.imageSection},l.a.createElement("img",{className:i.media,src:e.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:e.title}))),m.length&&l.a.createElement("div",{className:i.section},l.a.createElement(v.a,{gutterBottom:!0,variant:"h5"}," You might also like"),l.a.createElement(Pe.a,null),l.a.createElement("div",{className:i.recommendedPosts},m.map(e=>{let{title:a,message:t,name:n,likes:r,selectedFile:s,_id:i}=e;return l.a.createElement("div",{style:{margin:"20px",cursor:"pointer"},onClick:()=>(e=>o("/posts/".concat(e)))(i),key:i},l.a.createElement(v.a,{gutterBottom:!0,variant:"h6"},a),l.a.createElement(v.a,{gutterBottom:!0,variant:"subtitle2"},n),l.a.createElement(v.a,{gutterBottom:!0,variant:"subtitle2"},t),l.a.createElement(v.a,{gutterBottom:!0,variant:"subtitle1"},"Likes:",r.length),l.a.createElement("img",{src:s,width:"200px"}))}))))};var We=()=>{const e=JSON.parse(localStorage.getItem("profile"));return l.a.createElement(De.b,{clientId:"157030834651-9vacr8doo6tcetjm8lb2sdr1cu2dm582.apps.googleusercontent.com"},l.a.createElement(p.a,null,l.a.createElement(g.a,{maxWidth:"lg"},l.a.createElement(I,null),l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/",element:l.a.createElement(ve,null)}),l.a.createElement(u.b,{path:"/posts",element:l.a.createElement(ve,null)}),l.a.createElement(u.b,{path:"/posts/search",element:l.a.createElement(ve,null)}),l.a.createElement(u.b,{path:"/auth",element:e?l.a.createElement(u.a,{to:"/posts",replace:!0}):l.a.createElement(Le,null)}),l.a.createElement(u.b,{path:"/posts/:id",element:l.a.createElement(Fe,null)})))))};t(227);const He=Object(i.d)(d,Object(i.c)(Object(i.a)(c.a)));o.a.render(l.a.createElement(s.a,{store:He},l.a.createElement(We,null)),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.c4bcd88c.chunk.js.map