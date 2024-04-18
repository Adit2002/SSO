import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/Home.js';
import SignIn from './Components/SignIn.js'
import { GoogleOAuthProvider } from "@react-oauth/google";
import DashBoard from './Components/Dashboard.js';

function App() {
  return (
    <>
    <GoogleOAuthProvider clientId="101828583772-7p3kgl83jtlcfp80eqg1u4m50sqr7g7m.apps.googleusercontent.com">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/DashBoard" element={<DashBoard/>}/>
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  </>
  
  );
}

export default App;
