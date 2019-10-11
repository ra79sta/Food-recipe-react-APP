import React from "react";

import Logo from "../Logo/Logo";
import fb from "../../assets/Icons/FB.png";
import insta from "../../assets/Icons/INSTA.png";

import "./Footer.css"

const footer = () => (
    <div className="footer">
        <Logo/>
        <div className="name">Stanoje Radivojevic</div>
        <div className="socialNetworkImages">
            <div className="fb">
                <img src={fb} alt="Fb icon"/>
            </div>
            <div className="instagram">
                <img src={insta} alt="Instagram icon" />
            </div>
        </div>
    </div>
)

export default footer;