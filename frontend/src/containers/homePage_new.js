import React from "react";
import Info from "../components/Info";
import Restaurants from "../components/Block";
import UserStatusButton from "../components/UserButton";
import Background from "../components/Background";
import { useApp } from "../hook";
import homepage from "./css/homepage.css"
import styled from "styled-components";
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
const Menu = (props) => {
    const {status,setStatus}=useApp();

    return React.createElement(
        "div",
        { id: "app", className:"logged-in" },
       
        React.createElement(
      "div",
      { id: "app-menu" },
      React.createElement(
        "div",
        { id: "app-menu-content-wrapper" },
        React.createElement(
          "div",
          { id: "app-menu-content" },
          React.createElement(
            "div",
            { id: "app-menu-content-header" },
            React.createElement(
              "div",
              { className: "app-menu-content-header-section" },
              React.createElement(Info, { id: "app-menu-info" }),
            ),
            React.createElement(
              "div",
              { className: "app-menu-content-header-section" },
              React.createElement(UserStatusButton, {
                icon: "fa-solid fa-arrow-up-right-from-square",
                id: "sign-out-button",
                userStatus: "LoggedOut",
                val:props.val
              })
            )
          ),
          React.createElement(Restaurants,{name:props.name})
        )
      )),
      React.createElement(Background, null),
    );
  };
  export default Menu;