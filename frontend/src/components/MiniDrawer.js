import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom"
import styledd from 'styled-components';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const Housewrapper=styledd.div`
  position:relative;
  width:100%;
  height:0;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  background-color:red;
  align-items:center;


`;
const Houseicon=styledd.i`
  font-size:40px;
  transform:translate(-50%,-80%);
  transition:0.3s all;

  &:hover{
    text-shadow: 0.05em 0.05em 0.1em black;
    font-size:41px;
  }
  cursor:pointer;
`;
const Wrapper2=styledd.div`
  position:relative;
  background-color:#f11;
  margin-right:50%;
  width:20%;
  height:100%;
  opacity:1;
`;
const Buttonwrapper=styledd.div`
position: relative;
  display: inline-block;
  width: auto; height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 25px 15px;
  min-width: 150px;

& ::before {
  content:"";
  position:absolute;
  background-color: rgb(28, 31, 30);
  transition: 0.3s ease-out;
  bottom: 0; left: 0; right: 0; 
  height: 100%; width: 100%;
}
& ::after{
  position: absolute;
  content: "";
}
& span {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0; left: 0;
  width: 100%;
  padding: 15px 20px;
  transition: 0.3s;
  color: rgb(255,255,255);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}
& span:hover {
  color: rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}

& :hover::before {
  height: 20%;
}

`;
const Mbutton=styledd(Button)`
// :hover{
//   text-shadow: 0.05em 0.05em 0.1em black;
//   font-size:41px;
// }
// ::after{
//   content:<p>fuck<p>
// }
  width
  position:absolute;
  & .comment{
    // width:50px;
    height:20px;
    font-size:0px;
    width:0px;
    // background-color:#ff1;
    transform:translate(5px,-100%);
    // visibility:hidden;
    transition:left 0.1s ease-in;
    
  }
  p{
    background-color:#FFF;
    color:#111;
    border-radius:5px;
    opacity:0.8;
    text-transform:none;
    transition:all 0.1s ease-in;
    -webkit-backdrop-filter: blur(3px);
     backdrop-filter: blur(3px);
    // -webkit-backdrop-filter: blur(3px);
    // backdrop-filter: blur(3px);
    // background-color: rgba(255, 255, 255, 0.1);
    // border: 1px solid rgba(255, 255, 255, 0.1);
    // border-radius: 100px;
    // box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    // cursor: pointer;
    i{
      margin-left:2px;
      margin-right:2px;
      transform:translate(0,10%);
    }
  }
  :hover .comment{
    // visibility:visible;
    //height:20px;
    width:auto;
  }
  :hover p{
    font-size:15px;
    padding:2px;
  }
  transition:0.3s all;
  transform:translate(0,-60%);
`;
// const Comment=styledd.div`
//   width:
// `;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({username}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menuSelectedIndex, setMenuSelectedIndex] = React.useState(0);
  const navigate=useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuListItemClick = (event, index) => {
    setMenuSelectedIndex(index);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        
        <Toolbar sx={{}}>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" zIndex={1} mr={"5%"}>
            NT<strong>U</strong> Biking
          </Typography>
          
          {/* <Box sx={{
            display:"flex",
            flexdirection:"row",
            justifyContent:"flex-end",
            alignItems:'center',
            width: 'calc(70% - 40px) !important',
            zIndex:-2
          }} onClick={()=>{navigate('/')}}>
            <Mbutton variant="contained" startIcon={<Box sx={{
            borderRadius:"50%",backgroundColor:"rgb(89, 130, 197)",width:"40px",height:"40px",
            display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",mr:"1%"
          }}><i className="fa-solid fa-user" ></i></Box> } onClick={()=>{navigate('/')}} zIndex={1} enabled disableElevation Hover>
            <Typography variant="h6" noWrap component="div">
            {username.slice(0,3)}
            
          </Typography>
          </Mbutton>
          </Box> */}
         
        </Toolbar>
        <Housewrapper>
        <Mbutton variant="contained" startIcon={<Box sx={{
            borderRadius:"50%",backgroundColor:"rgb(89, 130, 197)",width:"40px",height:"40px",
            display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",mr:"1%"
          }}><i className="fa-solid fa-user" ></i></Box> } onClick={()=>{navigate('/')}} zIndex={1} enabled disableElevation Hover>
            <Typography variant="h6" noWrap component="div">
            {/* {username.slice(0,username.indexOf('@'))} */}
            {username?username.slice(0,username.indexOf('@')):username}
            
          </Typography>
          <div className='comment'><p><i className="fa-solid fa-arrow-right"></i>home</p></div>
          </Mbutton>
          {/* <Houseicon className="fa-solid fa-house-user" onClick={()=>navigate('/')}></Houseicon> */}
        </Housewrapper>   
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Map', 'My Bike', 'Nearest Stations', 'Personal Settings'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <Link to={`${text.split(" ").join("-")}`}> 
                <ListItemButton
                  selected={menuSelectedIndex === index}
                  onClick={(event) => handleMenuListItemClick(event, index)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ?  <MapTwoToneIcon /> : 
                    index === 1 ? <PedalBikeIcon /> : 
                    index === 2 ? <MyLocationTwoToneIcon /> : <AdminPanelSettingsTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <Typography paragraph> */}
          <Outlet context={[username]} />
        {/* </Typography> */}
      </Box>
    </Box>
  );
}