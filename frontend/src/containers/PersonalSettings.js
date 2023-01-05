// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Lock from "./images/Lock.jpg";
// import { Form } from "react-router-dom"
// import TextField from '@mui/material/TextField';
// import "./css/buttons.css"
// import { useApp } from '../hook';
// import api from '../connection';
// import Alert from '@mui/material/Alert';
// import IconButton from '@mui/material/IconButton';
// import Collapse from '@mui/material/Collapse';
// import CloseIcon from '@mui/icons-material/Close';
// import Box from '@mui/material/Box';
// const TOKEN_KEY ='token';

// function PersonalSettings () {
//     const [opassword,setOpassword]=React.useState('');
//     const [npassword,setNpassword]=React.useState('');
//     const [rpassword,setRpassword]=React.useState('');
//     const {handleUpdateInfo,setMe,me}=useApp();
//     const [e,setE]=React.useState('');
//     const [success,setSuccess]=React.useState('');
//     const [successopen,setSuccessopen]=React.useState('');
//     const [eopen,setEopen]=React.useState(false);
//     const handlesubmit=async(e)=>{
//         e.preventDefault();
//         if(npassword!==rpassword){
//             setE('Reconfirm new password is not the same as new password!');
//             setEopen(true);
//             setTimeout(function () {
//                 setEopen(false)
//                 setE("")
//             }, 3000);//10 Second delay 
           
//         }
//         // console.log('n: '+npassword+"o "+opassword);
//         // handleUpdateInfo(null,null,opassword,npassword);
//         console.log('me '+me.email);
//         try{
//             const {data:{user,token}}=await api.post('/users/change',{email:me.email,opassword:opassword,npassword:npassword});
//             if(token){
//                 localStorage.setItem(TOKEN_KEY,token);
// 				setMe(user);
//                 setSuccess('Change password successfully!');
//                 setSuccessopen(true);
//                 setTimeout(function () {
//                     setSuccessopen(false)
//                     setSuccess("")
//                 }, 3000);//10 Second delay 
//             }

//         }catch(e){
//             setE('Old password is wrong!');
//             setEopen(true);
//             setTimeout(function () {
//                 setEopen(false)
//                 setE("")
//             }, 3000);//10 Second delay 
            
//         }
//     }
//     return (
//         <>
   
//     <Box sx={{ width: '50%', position:"fixed", left: "50%", top:"12%", transform: "translate(-50%, 0)" }}>
//         { e? <Collapse in={eopen}>
//             <Alert severity='error'
//             action={
//                 <IconButton
//                 aria-label="close"
//                 color="inherit"
//                 size="small"
//                 onClick={() => {
//                     setEopen(false);
//                     setE("");
//                 }}
//                 >
//                 <CloseIcon fontSize="inherit" />
//                 </IconButton>
//             }
//             sx={{ mb: 2 }}
//             >
//             {e}
//             </Alert>
//         </Collapse> : <></>}
//         {success? <Collapse in={successopen}>
//                 <Alert severity='success'
//                 action={
//                     <IconButton
//                     aria-label="close"
//                     color="inherit"
//                     size="small"
//                     onClick={() => {
//                         setSuccessopen(false);
//                         setSuccess("");
//                     }}
//                     >
//                     <CloseIcon fontSize="inherit" />
//                     </IconButton>
//                 }
//                 sx={{ mb: 2 }}
//                 >
//                 {success}
//                 </Alert>
//             </Collapse> : <></>}
//     </Box> 
    
//         <Card sx={{ maxWidth: `calc(0.8*vw)` }}>
            
//             <CardContent>
//                 <Typography gutterBottom variant="h4" component="div">
//                     Personal Settings
//                 </Typography>
//             </CardContent>
//             <CardMedia
//                 sx={{ height: `280px`, marginLeft: "10px", marginRight: "10px", borderRadius: "10px"}}
//                 image={Lock}
//                 title="green iguana"
//             />
//             <CardContent> 
//                 <Typography variant="body2" color="text.secondary">
//                 </Typography>
//                 <TextField label="Old Password"  sx={{margin: '10px'}} onChange={(e)=>setOpassword(e.target.value)}/>
//                 <br></br>
//                 <TextField label="New Password" sx={{margin: '10px'}} onChange={(e)=>setNpassword(e.target.value)}/>
//                 <br></br>
//                 <TextField label="Reconfirm New Password" sx={{margin: '10px'}} onChange={(e)=>setRpassword(e.target.value)}/>
//             </CardContent>
//             <CardActions>
//                 <Form method="post" onSubmit={handlesubmit}> 
//                     <button type='submit' className='button-19' >Set new password</button>
//                 </Form>
//             </CardActions>
//         </Card>
//         </>
//     )
// }
// export default PersonalSettings;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Lock from "./images/Lock.jpg";
import { Form } from "react-router-dom"
import TextField from '@mui/material/TextField';
import "./css/buttons.css"
import { useApp } from '../hook';
import api from '../connection';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useOutletContext } from 'react-router-dom';
import { styled } from 'styled-components';
const TOKEN_KEY ='token';


function PersonalSettings () {
    const [opassword,setOpassword]=React.useState('');
    const [npassword,setNpassword]=React.useState('');
    const [rpassword,setRpassword]=React.useState('');
    const {handleUpdateInfo,setMe,me}=useApp();
    const [e,setE]=React.useState('');
    const [success,setSuccess]=React.useState('');
    const [successopen,setSuccessopen]=React.useState('');
    const [eopen,setEopen]=React.useState(false);
    const [showPasswordo, setShowPasswordo] = React.useState(false);
    const [showPasswordn, setShowPasswordn] = React.useState(false);
    const [showPasswordr, setShowPasswordr] = React.useState(false);
    const [tname] = useOutletContext();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(!(opassword&&npassword&&rpassword)){
            setE(`${(!opassword)?'"Old password " ':""}${(!npassword)?'"New password " ':""}${(!rpassword)?'"Reconfirm new password "':""} cannot be empty!`);
            setEopen(true);
            setTimeout(function () {
                setEopen(false)
                setE("")
            }, 10000);//10 Second delay 
        }
        else if(npassword.length<6){
            setE("New Password must be at least 6 characters long!");
            setEopen(true);
            setTimeout(function () {
                setEopen(false)
                setE("")
            }, 10000);//10 Second delay 
        }
        else if(npassword!==rpassword){
            setE('Reconfirm new password is not the same as new password!');
            setEopen(true);
            setTimeout(function () {
                setEopen(false)
                setE("")
            }, 10000);//10 Second delay 
           
        }else {
        // console.log('n: '+npassword+"o "+opassword);
        // handleUpdateInfo(null,null,opassword,npassword);
        console.log('me '+me.email);
        try{
            const {data:{user,token}}=await api.post('/users/change',{email:me.email,opassword:opassword,npassword:npassword});
            if(token){
                localStorage.setItem(TOKEN_KEY,token);
				setMe(user);
                setSuccess('Change password successfully!');
                setSuccessopen(true);
                setTimeout(function () {
                    setSuccessopen(false)
                    setSuccess("")
                }, 10000);//10 Second delay 
            }

        }catch(e){
            setE('Old password is wrong!');
            setEopen(true);
            setTimeout(function () {
                setEopen(false)
                setE("")
            }, 10000);//10 Second delay 
            
        }
        }
    }
    return (
        <>
   
    <Box sx={{ width: '50%', position:"fixed", left: "50%", top:"12%", transform: "translate(-50%, 0)" }}>
        { e? <Collapse in={eopen}>
            <Alert severity='error'
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setEopen(false);
                    setE("");
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{ mb: 2 }}
            >
            {e}
            </Alert>
        </Collapse> : <></>}
        {success? <Collapse in={successopen}>
                <Alert severity='success'
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setSuccessopen(false);
                        setSuccess("");
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                {success}
                </Alert>
            </Collapse> : <></>}
    </Box> 
    
        <Card sx={{ maxWidth: `calc(0.8*vw)` }}>
            
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    Personal Settings
                </Typography>
            </CardContent>
             <CardMedia
                sx={{ height: `280px`, marginLeft: "10px", marginRight: "10px", borderRadius: "10px"}}
                image={Lock}
                title="green iguana"
            /> 
            
            {/* <Box sx={{
                display:"flex",flexDirection:'column',height:'280px',fontSize:"100px",width:"280px",
                marginLeft: "10px", marginRight: "10px", borderRadius: "20px",bgcolor:'rgb(89, 130, 197)',color:'white'
            }}>
                
                <Box sx={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:'center',width:'280px',}}>
                <Typography variant='h4' component="div"  mt='10px'>
                    {me.name}
                </Typography>
                <Box sx={{
                    display:"flex",justifyContent:"center",width:'120px',
                    m:'10px'
                }}><i className="fa-solid fa-user" ></i>  </Box>
                <Typography variant='h6' component="div" >
                    Email: {me.email}
                </Typography>
                </Box>
            </Box> */}
            <CardContent> 
                <Typography variant="body2" color="text.secondary">
                </Typography>
                {/* <TextField label="Old Password"  type="password" sx={{margin: '10px'}} onChange={(e)=>setOpassword(e.target.value)} error/> */}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPasswordo ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={()=>setShowPasswordo(show=>(!show))}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPasswordo ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Old Password"
                    onChange={(e)=>setOpassword(e.target.value)}
                    error={e.includes('ld')}
                />
                </FormControl>
                <br></br>
                {/* <TextField label="New Password" type="password" sx={{margin: '10px'}} onChange={(e)=>setNpassword(e.target.value)}/> */}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" required>New Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPasswordn ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={()=>setShowPasswordn(show=>(!show))}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPasswordn ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="New Password"
                    onChange={(e)=>setNpassword(e.target.value)}
                    error={e.includes('ew')}
                />
                </FormControl>
                <br></br>
                {/* <TextField label="Reconfirm New Password" type="password" sx={{margin: '10px'}} onChange={(e)=>setRpassword(e.target.value)}/> */}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" sx={{fontSize:"13px"}} required>Reconfirm New Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPasswordr ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={()=>setShowPasswordr(show=>(!show))}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPasswordr? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Reconfirm New Password"
                    onChange={(e)=>setRpassword(e.target.value)}
                    error={e.includes('confirm')}
                />
                </FormControl>
            </CardContent>
            <CardActions>
                <Form method="post" onSubmit={handlesubmit}> 
                    <button type='submit' className='button-19' >Set new password</button>
                </Form>
            </CardActions>
        </Card>
        </>
    )
}
export default PersonalSettings;