import '../App.css';
const Home=()=>{
    return(
        <div className="Home-css">
            <br/>
            <h1>Home For Single Sing-On</h1>
            <br/>
            <h3>Single Sign On for this application is done using Google O-Auth 2.0 and the application is built using node and react</h3>
            <h3>There is no backend the request is sent to google o auth a token is generated that is stored in the local storage and decoded and printed at the dashboard in json</h3>
            <a className="lg" href="/SignIn">SignIn</a>
        </div>
    );
}
export default Home;