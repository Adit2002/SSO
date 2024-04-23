import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

const DashBoard1 = () => {
    const credentials = localStorage.getItem('token');
    const decode = jwtDecode(credentials);
    const Navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const LogOut = () => {
        localStorage.clear();
        Navigate('/');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/AddData', {
                name: localStorage.getItem('name'),
                email: localStorage.getItem('email'),
                phoneNumber: phoneNumber,
                address: address
            });
            if(response.data.is===1){
                localStorage.setItem('phone',response.data.user.contact_number);
                localStorage.setItem('address',response.data.user.address);
                Navigate('/Dsb');
                return;
            }
        } catch (error) {
            console.error("Error sending request", error);
        }
        localStorage.clear();
        Navigate('/');
    };

    return (
        <div className="Home-css">        
            <h2>First time User, Add Details:</h2>
            <br/><br/>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Phone number" 
                    value={phoneNumber} 
                    className="inp"
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Address" 
                    value={address} 
                    className="inp"
                    onChange={(e) => setAddress(e.target.value)} 
                />
                <button className="lg" type="submit">Submit</button>
            </form>
            <button className="lg" onClick={LogOut}>LogOut</button>
        </div>
    );
};

export default DashBoard1;
