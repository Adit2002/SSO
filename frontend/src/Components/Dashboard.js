import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // Importing useEffect and useState
import {jwtDecode }from "jwt-decode";

const DashBoard = () => {
    const credentials = localStorage.getItem('token');
    const decode = jwtDecode(credentials);
    const Navigate = useNavigate();
    console.log(localStorage.getItem('user'));

    const LogOut = () => {
        localStorage.clear();
        Navigate('/');
    };

    return (
        <div className="Home-css">        
            <h2>Welcome {localStorage.getItem('name')}</h2>
            <h2>Here are your details</h2>
                <div className="box">
                    <p>Name: {localStorage.getItem('name')}</p>
                    <p>Email: {localStorage.getItem('email')}</p>
                    <p>Contact Number: {localStorage.getItem('phone')}</p>
                    <p>Address: {localStorage.getItem('address')}</p>
                </div>
            <br/><br/>
            <button className="lg" onClick={LogOut}>LogOut</button>
        </div>
    );
}

export default DashBoard;
