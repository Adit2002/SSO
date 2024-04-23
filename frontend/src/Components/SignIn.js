import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const SignIn = () => {
    const navigate=useNavigate();
    const check=async()=>{
      try{
        const credentials=localStorage.getItem('token');
        const decode=jwtDecode(credentials);
        localStorage.setItem('name',decode.name);
        localStorage.setItem('email',decode.email);
        const serverres=await axios.post('http://localhost:3001/Create',{
          name: decode.name,
          email: decode.email
        });
        localStorage.setItem('token1',serverres.data.token);
        if(serverres.data.is===2){
          navigate('/Dsb1');

        }
        else if(serverres.data.is===1){
          localStorage.setItem('phone',serverres.data.user.contact_number);
          localStorage.setItem('address',serverres.data.user.address);
          navigate('/Dsb');
        }
        else{
          localStorage.clear();
          navigate('/');
        }
      }
      catch(err){
        console.log(err);
        navigate('/');
      }
    }
  return (
    <>
      <div className="Home">
      <div className="SignIn">
        <h1>Sign In/ Log In</h1>
        <GoogleLogin className="GCSS"
          onSuccess={(credentialResponse) => {
            localStorage.setItem('token',credentialResponse.credential);
            // console.log(credentialResponse);
            check();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </div>
      </div>

    </>
  );
};
export default SignIn;
