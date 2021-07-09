import { Button } from '@material-ui/core';
import React from 'react';
import { auth , provider } from './firebase';
import './Login.css';
// import GoogleIcon from '@material-ui/icons/Google';
import photo from './images/person.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const Login = () => {
    const signIn= ()=>{
        // do google login work here
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <>
        <div className="container">

            <div className="homePage">
                <div className="leftSection">
                    <h1>
                        Welcome to My Chat App
                    </h1>
                    <p>
                        Login and connect with People around the globe.
                    <br />
                        This app will help you to connect and Share
                    </p>
                    <Button onClick = {signIn}>Sign in </Button>
                </div>
                <div className="rightSection">
                    <img src={photo} className="animated" alt="MainImage" />
                </div>
            </div>
        </div>
        <footer>
            <p>Design & Developed by Mohit Bharti </p>

            <div className="footer__icons">
                <a href="https://www.linkedin.com/in/mohit-bharti-100965153/" target="_blank" ><LinkedInIcon /></a>
                <a href="https://github.com/mbbharti" target="_blank" ><GitHubIcon /></a>
                <a href="https://www.facebook.com/mohit.bharti.7543/" target="_blank" ><FacebookIcon /></a>

            </div>
            
        </footer>
        </>
        // <div className="login">
        //     <div className="login__logo">
        //         {/* <img src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="Logo" /> */}
        //     </div>
        //     <Button onClick = {signIn}>Signin</Button>
        // </div>
    )
}

export default Login
