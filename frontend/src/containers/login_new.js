// import React, { useState ,useEffect,useRef} from 'react'
// import { useLocation,useNavigate } from 'react-router-dom'
// import login from'./css/login.module.css'
// import { useApp } from '../hook'
// import api from '../connection';
// import styled from 'styled-components'
// import { ReactComponent as Smile } from '../components/loading_smile.svg';
// //import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import Loading from '../components/Loading'
// //import { fab } from '@fortawesome/free-brands-svg-icons'
// //import { fafacebook } from '@fortawesome/free-solid-svg-icons'
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// const Mh1=styled.h1`
// 	font-weight: bold;
// 	margin: 0;
// `;
// const Mh2=styled.h2`
// 	text-align: center;
// `
// const Mp=styled.p`
// 	font-size: 14px;
// 	font-weight: 100;
// 	line-height: 20px; 
// 	letter-spacing: 0.5px;
// 	margin: 20px 0 30px;
// `;
// const Mspan=styled.span`
// 	font-size: 12px;
// `;
// const Ma=styled.a`
// 	color: #333;
// 	font-size: 14px;
// 	text-decoration: none;
// 	margin: 15px 0;
// `;
// const Mbutton=styled.button`
// 	border-radius: 20px;
// 	border: 1px solid #1a4d86;
// 	background-color: #1a4d86;
// 	color: #FFFFFF;
// 	font-size: 12px;
// 	font-weight: bold;
// 	padding: 12px 45px;
// 	letter-spacing: 1px;
// 	text-transform: uppercase;
// 	transition: transform 80ms ease-in;
// 	opacity:0.5;
// 	&:hover{
// 		opacity: 1;
// 		transition: all .3s ease;
// 		background-color: #1a4d86;
// 	}
// 	&:active{
// 		transform: scale(0.95);
// 	}
// 	&:focus{
// 		outline: none;
// 	}
// `;
// const Mgbutton=styled(Mbutton)`
// 	background-color: transparent;
// 	border-color: #FFFFFF;
// `;
// const MAlert=styled.div`
// 	background: -webkit-linear-gradient(to bottom, #2bffd1, #41aaff);
// 	background: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.5));
// 	color:#ffffff
// 	font-size:300$;
// 	opacity:1;
// 	z-index:900;
// 	width:100%;
// 	height:20%;
// 	display:flex;
// 	justify-content:center;
// 	align-items:center;
// 	position:absolute;
// 	letter-spacing:2px;
// 	transition: 0.2s all;
	
// `;
// const Mi=styled.i`
// 	transform:translate(10%,0);
// `;
// const MAp=styled.p`
// 	color:#fff;
// 	font-size:20px;
// `
// const N = {
//     clamp: (min, value, max) => Math.min(Math.max(min, value), max),
//     rand: (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
//   };
// const Warning=styled.p`
// 	font-family:'Ubuntu', sans-serif;
// 	color:rgb(207, 2, 2);
// 	font-size:12px;
// 	transition:linear 100ms ease-in;
// 	font-weight:700;
// 	&:hover{
// 	font-weight:800;
// 	text-shadow: 0.05em 0.05em 0.01em black
// 	}
// // `;
// // const API_KEY = 'ac1189da6b8f1cd875f8fb7f7c859493-cc9b2d04-920e1ef8';
// // const DOMAIN = 'sandbox2ea62caf332f40028100b753f06187f9.mailgun.org';

// // const mailgun = require("mailgun-js");

// // const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});
// // const data = {
// // 	from: 'Excited User <me@samples.mailgun.org>',
// // 	to: 'jeffjeff050260612@gmail.com, Fang@sandbox2ea62caf332f40028100b753f06187f9.mailgun.org',
// // 	subject: 'Hello',
// // 	text: 'Testing some Mailgun awesomness!'
// // };
// // mg.messages().send(data, function (error, body) {
// // 	console.log(body);
// // });
// const TOKEN_KEY ='token';

// const LoginPage=()=>{
//     const [inup,setInup]=useState(true);
// 	const [password, setPassword] = useState("");
// 	const [email,setEmail]=useState('');
// 	const [loading,setLoading]=useState(false);
// 	const [names,setNames]=useState('');
// 	const [emails,setEmails]=useState('');
// 	const [passwords,setPasswords]=useState('');
// 	const iref=useRef(null);
// 	const iref2=useRef(null);
//     // const ref = React.useRef(null);
// 	let location=useLocation();
// 	const {status,setStatus,data,handlelogin,handlesignup,handleUpdateInfo,err,setErr,setMe}=useApp();
// 	const navigate=useNavigate();
// 	useEffect(()=>{
// 		iref.current.focus();
// 	},[email])
// 	const handlekeydown=(e)=>{
// 		console.log(e.key)
// 		if(e.key==='Enter'){
// 			iref2.current.focus();
// 		}
// 	}
// 	useEffect(()=>{
// 		if(err==='n'){
// 			setInup(true);
// 			setTimeout(() => {
// 				setErr('');
// 			}, 3000);
// 		}
// 		console.log('err: '+err);
// 	},[err])
// 	const handlesubmitl=async(e)=>{
// 		e.preventDefault();
// 		// handlelogin(email,password);
// 		try{
// 			setLoading(true);
// 			const {data:{user,token}}=await api.post('/users/login',{email,password})
// 			setLoading(false);
// 			if(token){
// 				localStorage.setItem(TOKEN_KEY,token);
// 				setStatus('LoggedIn');
// 				setMe(user);
				
// 				console.log(user);
// 			}
// 		}catch(e){
// 			setErr('l')
// 		}
// 	}
// 	const handlesubmits=async(e)=>{
// 		e.preventDefault();
// 		// handlesignup(names,emails,passwords);
// 		try{
// 			setLoading(true);
// 			const {data:{user,token}}= await api.post('/users/',{name:names,email:emails,password:passwords})
// 			setErr('n');
// 			setLoading(false);
// 		}catch(e){
// 			console.log(e);
// 			setErr('s');
// 		}
// 	}
// 	useEffect(()=>{
// 	  console.log(location);
// 	},[location])
//    return ( 
//     <div className={login.body_div} >
// 		<Loading loading={loading}/>
// 	{/* <MAlert>apple</MAlert> */}
// 	{/* <Smile/> */}
// {/* (inup?"":" "+login.["right-panel-active"]){login.container+" "+login.["right-panel-active"]} */}
// {/* {className={err==='n'?"":login.malert}} */}
// <div className={login.container+(inup?"":" "+login.rightpanelactive)} id="container">
// {<MAlert className={err==='n'?"":login.sochilai}><MAp><i className={login.ii+" fa-solid fa-check"}></i>Successfully signup!</MAp></MAlert>}
// <img src='loading_smile.svg' width="100px" height='100px' /> 
// 	<div className={login["form-container"]+" "+login["sign-up-container"]}>
// 		<form action="#" className={login.form} onSubmit={handlesubmits}>
// 			<Mh1>Create Account</Mh1>
// 			{/* <div className={login["social-container"]}>
// 				<Ma href="#" className="social"><i className="fab fa-facebook-f"></i></Ma>
// 				<Ma href="#" className="social"><i className="fab fa-google-plus-g"></i></Ma>
// 				<Ma href="#" className="social"><i className="fab fa-linkedin-in"></i></Ma>
// 			</div> */}
// 			<Mspan> use your email for registration</Mspan>
// 			<input type="text" placeholder="Name" className={login.apple} onChange={(e)=>{setNames(e.target.value)}}/>
// 			<input type="email" placeholder="Email" className={login.apple} onChange={(e)=>{setEmails(e.target.value)}}/>
// 			<input type="password" placeholder="Password" className={login.apple} onChange={(e)=>{setPasswords(e.target.value)}}/>
// 			{err==='s'?<Warning>Email or name duplicate!</Warning>:<></>}
// 			<Mbutton >Sign Up</Mbutton>
// 		</form>
// 	</div>
// 	<div className={login["form-container"]+" "+ login["sign-in-container"]}>
// 		<form action='#' className={login.form} onSubmit={handlesubmitl}>
			
// 			<Mh1>Sign in</Mh1>
// 			{/* <div className={login["social-container"]}>
// 				<Ma href="#" className="social"><i className="fab fa-facebook-f"></i></Ma>
// 				<Ma href="#" className="social"><i className="fab fa-google-plus-g"></i></Ma>
// 				<Ma href="#" className="social"><i className="fab fa-linkedin-in"></i></Ma>
// 			</div> */}
// 			<Mspan>use your account</Mspan>
// 			<input type="email" placeholder="Email" className={login.apple} onChange={(e)=>{setEmail(e.target.value)}} ref={iref} onKeyDown={(e)=>{handlekeydown(e)}}/>
// 			<input type="password" placeholder="Password" className={login.apple} onChange={(e)=>{setPassword(e.target.value)}} ref={iref2} />
// 			{err==='l'?<Warning>Worng email or password!</Warning>:<></>}
// 			{/* <Ma href="#">Forgot your password?</Ma> */}
// 			<Mbutton>Sign In</Mbutton>
// 		</form>
// 	</div>
// 	<div className={login["overlay-container"]}>
// 		<div className={login.overlay}>
// 			<div className={login["overlay-panel"]+" "+login["overlay-left"]}>
// 				<Mh1>Welcome Back!</Mh1>
// 				<Mp>To keep connected with us please login with your personal info</Mp>
// 				<Mgbutton id="signIn" onClick={()=>{setInup(true)}}>Sign In</Mgbutton>
// 			</div>
// 			<div className={login["overlay-panel"]+" "+ login["overlay-right"]}>
// 				<Mh1>Hello, Friend!</Mh1>
// 				<Mp>Enter your personal details and start journey with us</Mp>
// 				<Mgbutton id="signUp" onClick={()=>{setInup(false)}}>Sign Up</Mgbutton>
// 			</div>
// 		</div>
// 	</div>
	
// </div>


// </div>
// )
// }

// export default LoginPage;
import React, { useState ,useEffect,useRef} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import login from'./css/login.module.css'
import { useApp } from '../hook'
import api from '../connection';
import styled from 'styled-components'
import { ReactComponent as Smile } from '../components/loading_smile.svg';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Loading from '../components/Loading'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { fafacebook } from '@fortawesome/free-solid-svg-icons'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
const Mh1=styled.h1`
	font-weight: bold;
	margin: 0;
`;
const Mh2=styled.h2`
	text-align: center;
`
const Mp=styled.p`
	font-size: 14px;
	font-weight: 100;
	line-height: 20px; 
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
`;
const Mspan=styled.span`
	font-size: 12px;
`;
const Ma=styled.a`
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
`;
const Mbutton=styled.button`
	border-radius: 20px;
	border: 1px solid #1a4d86;
	background-color: #1a4d86;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	opacity:0.5;
	&:hover{
		opacity: 1;
		transition: all .3s ease;
		background-color: #1a4d86;
	}
	&:active{
		transform: scale(0.95);
	}
	&:focus{
		outline: none;
	}
`;
const Mgbutton=styled(Mbutton)`
	background-color: transparent;
	border-color: #FFFFFF;
`;
const MAlert=styled.div`
	background: -webkit-linear-gradient(to bottom, #2bffd1, #41aaff);
	background: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.5));
	color:#ffffff
	font-size:300$;
	opacity:1;
	z-index:900;
	width:100%;
	height:20%;
	display:flex;
	justify-content:center;
	align-items:center;
	position:absolute;
	letter-spacing:2px;
	transition: 0.2s all;
	
`;
const Mi=styled.i`
	transform:translate(10%,0);
`;
const MAp=styled.p`
	color:#fff;
	font-size:20px;
`
const N = {
    clamp: (min, value, max) => Math.min(Math.max(min, value), max),
    rand: (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  };
const Warning=styled.p`
	font-family:'Ubuntu', sans-serif;
	color:rgb(207, 2, 2);
	font-size:12px;
	transition:linear 100ms ease-in;
	font-weight:700;
	&:hover{
	font-weight:800;
	text-shadow: 0.05em 0.05em 0.01em black
	}
// `;
// const API_KEY = 'ac1189da6b8f1cd875f8fb7f7c859493-cc9b2d04-920e1ef8';
// const DOMAIN = 'sandbox2ea62caf332f40028100b753f06187f9.mailgun.org';

// const mailgun = require("mailgun-js");

// const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});
// const data = {
// 	from: 'Excited User <me@samples.mailgun.org>',
// 	to: 'jeffjeff050260612@gmail.com, Fang@sandbox2ea62caf332f40028100b753f06187f9.mailgun.org',
// 	subject: 'Hello',
// 	text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });
const TOKEN_KEY ='token';
const alert={
	'':'',
	's':"Email duplicate!",
	'sn':"Name cannot be empty!",
	'se':"Email cannot be empty!",
	'sp':"Password cannot be empty!",
	'sps':"Password must be at least 6 characters long!",

}
const LoginPage=()=>{
    const [inup,setInup]=useState(true);
	const [password, setPassword] = useState("");
	const [email,setEmail]=useState('');
	const [loading,setLoading]=useState(false);
	const [names,setNames]=useState('');
	const [emails,setEmails]=useState('');
	const [passwords,setPasswords]=useState('');
	const iref=useRef(null);
	const iref2=useRef(null);
	const irefn=useRef(null);
	const irefe=useRef(null);
	const irefp=useRef(null);
    // const ref = React.useRef(null);
	let location=useLocation();
	const {status,setStatus,data,handlelogin,handlesignup,handleUpdateInfo,err,setErr,setMe}=useApp();
	const navigate=useNavigate();
	
	useEffect(()=>{
		if(inup){
			iref.current.focus();
		}else{
			irefn.current.focus();
		}
	},[inup])
	const handlekeydown=(e,r)=>{
		
		if(e.key==='Enter'){
			r.current.focus();
		}
	}
	useEffect(()=>{
		if(err==='n'){
			setInup(true);
			setTimeout(() => {
				setErr('');
			}, 3000);
		}
		console.log('err: '+err);
	},[err])
	const handlesubmitl=async(e)=>{
		e.preventDefault();
		// handlelogin(email,password);
		try{
			setLoading(true);
			const {data:{user,token}}=await api.post('/users/login',{email,password})
			if(token){
				localStorage.setItem(TOKEN_KEY,token);
				setStatus('LoggedIn');
				setMe(user);
				
				console.log(user);
			}
		}catch(e){
			setErr('l');
		}
		setLoading(false);

	}
	const handlesubmits=async(e)=>{
		e.preventDefault();
		// handlesignup(names,emails,passwords);
		if(!names) setErr('sn');
		else if(!emails) setErr('se');
		else if(!passwords)setErr('sp');
		else if(passwords.length<6) setErr('sps');
		else{
		try{
			setLoading(true);
			const {data:{user,token}}= await api.post('/users/',{name:names,email:emails,password:passwords})
			setErr('n');
			setPassword(passwords);setEmail(emails);
			setNames('');setEmails('');setPasswords('');
		}catch(e){
			console.log(e);
			setErr('s');
		}
		setLoading(false);
		}
	}
	useEffect(()=>{
	  console.log(location);
	},[location])
   return ( 
    <div className={login.body_div} >
		<Loading loading={loading}/>
	{/* <MAlert>apple</MAlert> */}
	{/* <Smile/> */}
{/* (inup?"":" "+login.["right-panel-active"]){login.container+" "+login.["right-panel-active"]} */}
{/* {className={err==='n'?"":login.malert}} */}
<div className={login.container+(inup?"":" "+login.rightpanelactive)} id="container">
{<MAlert className={err==='n'?"":login.sochilai}><MAp><i className={login.ii+" fa-solid fa-check"}></i>Successfully signup!</MAp></MAlert>}
<img src='loading_smile.svg' width="100px" height='100px' /> 
	<div className={login["form-container"]+" "+login["sign-up-container"]}>
		<form action="#" className={login.form} onSubmit={handlesubmits}>
			<Mh1>Create Account</Mh1>
			{/* <div className={login["social-container"]}>
				<Ma href="#" className="social"><i className="fab fa-facebook-f"></i></Ma>
				<Ma href="#" className="social"><i className="fab fa-google-plus-g"></i></Ma>
				<Ma href="#" className="social"><i className="fab fa-linkedin-in"></i></Ma>
			</div> */}
			<Mspan> use your email for registration</Mspan>
			<input type="text" placeholder="Name*" className={login.apple} onChange={(e)=>{setNames(e.target.value)}} value={names} ref={irefn} onKeyDown={(e)=>handlekeydown(e,irefe)}/>
			<input type="email" placeholder="Email*" className={login.apple} onChange={(e)=>{setEmails(e.target.value)}} value={emails} ref={irefe} onKeyDown={(e)=>handlekeydown(e,irefp)}/>
			<input type="password" placeholder="Password*" className={login.apple} onChange={(e)=>{setPasswords(e.target.value)}} value={passwords} ref={irefp}/>
			<Warning>{alert[err]}</Warning>
			<Mbutton >Sign Up</Mbutton>
		</form>
	</div>
	<div className={login["form-container"]+" "+ login["sign-in-container"]}>
		<form action='#' className={login.form} onSubmit={handlesubmitl}>
			
			<Mh1>Sign in</Mh1>
			{/* <div className={login["social-container"]}>
				<Ma href="#" className="social"><i className="fab fa-facebook-f"></i></Ma>
				<Ma href="#" className="social"><i className="fab fa-google-plus-g"></i></Ma>
				<Ma href="#" className="social"><i className="fab fa-linkedin-in"></i></Ma>
			</div> */}
			<Mspan>use your account</Mspan>
			<input type="email" placeholder="Email*" className={login.apple} onChange={(e)=>{setEmail(e.target.value)}} ref={iref} onKeyDown={(e)=>{handlekeydown(e,iref2)}} value={email}/>
			<input type="password" placeholder="Password*" className={login.apple} onChange={(e)=>{setPassword(e.target.value)}} ref={iref2} value={password}/>
			{err==='l'?<Warning>Worng email or password!</Warning>:<></>}
			{/* <Ma href="#">Forgot your password?</Ma> */}
			<Mbutton>Sign In</Mbutton>
		</form>
	</div>
	<div className={login["overlay-container"]}>
		<div className={login.overlay}>
			<div className={login["overlay-panel"]+" "+login["overlay-left"]}>
				<Mh1>Welcome Back!</Mh1>
				<Mp>To keep connected with us please login with your personal info</Mp>
				<Mgbutton id="signIn" onClick={()=>{setInup(true)}}>Sign In</Mgbutton>
			</div>
			<div className={login["overlay-panel"]+" "+ login["overlay-right"]}>
				<Mh1>Hello, Friend!</Mh1>
				<Mp>Enter your personal details and start journey with us</Mp>
				<Mgbutton id="signUp" onClick={()=>{setInup(false)}}>Sign Up</Mgbutton>
			</div>
		</div>
	</div>
	
</div>


</div>
)
}

export default LoginPage;