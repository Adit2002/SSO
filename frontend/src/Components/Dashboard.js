import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const DashBoard=()=>{
    const credentials=localStorage.getItem('token');
    const decode=jwtDecode(credentials);
    const Navigate=useNavigate();
    const LogOut=()=>{
        localStorage.clear();
        Navigate('/');
    }
    return(
        <div className="Home-css">        
        <h2>Here is your Token After Successful SignIn/Login</h2>
        <br/><br/>
            
        <p>Token: {JSON.stringify(decode)}</p>
        
        <button className="lg" onClick={LogOut}>LogOut</button>
    </div>
    );
}
export default DashBoard;