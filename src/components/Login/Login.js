import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import "./Login.css"
import { Link } from 'react-router-dom';
 



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
    
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = ()=>{
                
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const {displayName, email } = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
        
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signIn my-5">
                        <div className="card-body">
                            <h1 className="card-title">Login <span>SignUp</span></h1>
                            <form className="form-signIn">
                                <div className="form-label-group">
                                    <input type="text" id="inputName" className="form-control" placeholder="Name" required />
                                </div> 
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                </div> 
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="form-label-group">
                                    <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" required />
                                </div>

                                    <div className="custom-control custom-checkbox mb-3 d-flex justify-content-between ">
                                        <div>
                                        <input type="checkbox" className="custom-control-input"  />
                                        <label className="custom-control-label" >Remember Me</label>
                                        </div>
                                        <div>
                                        <a href="">Forgot password</a>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary text-uppercase w-100" type="submit">Login <span>Signup</span></button>
                                    <p className="text-center"> Don't have an account? <span>Already have an account? </span><span> <a href=""> Create an account <span>Login</span></a></span></p>
                                    <hr className="my-4" />
                                    <p className="text-center">or</p>
                                    <div className="text-center">
                                    <button className="btn w-100 btn-google text-uppercase " type="submit" onClick={handleGoogleSignIn} ><i className="fab fa-google mr-2"></i>Continue with Google</button>
                                    <button className="btn w-100 btn-facebook text-uppercase mt-1" type="submit"><i className="fab fa-facebook-f mr-2"></i>Continue with Facebook</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
);
};

export default Login;

{/* <button onClick={handleGoogleSignIn}>Continue With Google</button> */}

