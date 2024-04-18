import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const Navigate=useNavigate();
  return (
    <>
      <div className="Home">
      <div className="SignIn">
        <h1>Sign In/ Log In</h1>
        <GoogleLogin className="GCSS"
          onSuccess={(credentialResponse) => {
            localStorage.setItem('token',credentialResponse.credential);
            Navigate('/DashBoard');
            console.log(credentialResponse);
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
