import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import "./Login.css"
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn : false,
        name: '',
        email : '',
        password: '',
        confirmPassword: '',
        error: '',
        success: false,
    })

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
    
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    var facebookProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = ()=>{
                
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const {displayName, email } = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            setLoggedInUser(loggedInUser)
            history.replace(from);
        
        })
        .catch((error) => {
            const newUserInfo = {...user}
            newUserInfo.success = false;
            newUserInfo.error = error.message;
            setUser(newUserInfo);
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const handleFbSignIn = ()=>{
    firebase.auth().signInWithPopup(facebookProvider)
    .then((result) => {
        const {displayName, email } = result.user;
        const signedInUser = {name: displayName, email}
        setLoggedInUser(signedInUser);
        setLoggedInUser(loggedInUser)
        history.replace(from);
  })
  .catch((error) => {
    const newUserInfo = {...user}
        newUserInfo.success = false;
        newUserInfo.error = error.message;
        setUser(newUserInfo);
        var errorMessage = error.message;
        console.log(errorMessage);
  });
}

    const handleSubmit = (e) =>{
        e.preventDefault();

    if (newUser && user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then( userCredential => {
        const newUserInfo = {...user};
        newUserInfo.error = ''
        newUserInfo.success = true;
        setUser(newUserInfo)
        updateUserName(user.name)
        
  })
    .catch(error => {
        const newUserInfo = {...user}
        newUserInfo.success = false;
        newUserInfo.error = error.message;
        setUser(newUserInfo);
    });
    }
    if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            const newUserInfo = {...user};
            newUserInfo.error = ''
            newUserInfo.success = true;
            setUser(newUserInfo)
            const {displayName, email } = userCredential.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            
  })
  .catch((error) => {
    const newUserInfo = {...user}

        newUserInfo.success = false;
        newUserInfo.error = error.message;
        setUser(newUserInfo);
  });
    }    
    }


    const handleBlurChange = (e) =>{
        let isFieldValid = true;
        if (e.target.name === 'name') {
            isFieldValid = e.target.value;
        }
        if (e.target.name === 'email') {
            isFieldValid = (/\S+@\S+\.\S+/).test(e.target.value)
        }
        
        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length >= 6 && /\d{1}/.test(e.target.value);
        }
        if (e.target.name === 'confirmPassword') {
            isFieldValid = e.target.value.length >= 6 && /\d{1}/.test(e.target.value);
        }
        
        
        if (isFieldValid) {
            
            const newUserInfo = {...user};
            console.log(newUserInfo);
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log(newUserInfo);
        }

    }

    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name
        }).then(()=> {
          console.log('name updated successfully');
        }).catch(error =>{
          console.log(error);
        });
    }








    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signIn my-5">
                        <div className="card-body">
                        {newUser && <h1 className="card-title">SignUp</h1>}
                        {!newUser && <h1 className="card-title">Login</h1>}
                        
                            <form className="form-signIn" onSubmit={handleSubmit}>
                                <div className="form-label-group">
                                    {newUser && <input type="text" onBlur={handleBlurChange} name="name" className="form-control" placeholder="Name" required />}
                                </div> 
                                
                                <div className="form-label-group">
                                    <input type="text" onBlur={handleBlurChange} name="email" className="form-control" placeholder="Email address" required />
                                </div> 
                                <div className="form-label-group">
                                    <input type="password" onBlur={handleBlurChange} name="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="form-label-group">
                                    {newUser && <input type="password" onBlur={handleBlurChange} name="confirmPassword" className="form-control" placeholder="Confirm Password" required />}
                                    
                                </div>

                                    <div className="custom-control custom-checkbox mb-3 d-flex justify-content-between ">
                                        <div>
                                        <input type="checkbox" className="custom-control-input"  />
                                        <label className="custom-control-label" > Remember Me</label>
                                        </div>
                                        <div>
                                        <a href="">Forgot password</a>
                                        </div>
                                    </div>
                                    <p className="text-danger text-center">{user.error}</p>
                                    {/* {
                                     !newUser && (user.password !== user.confirmPassword) && <p className="text-danger text-center">password not matched</p>
                                    } */}
                                    {
                                        user.success && <p className="text-success text-center">User {newUser ?'Created': 'Signup'} Successfully Click Login button. </p>
                                    }
                                    {newUser && <input className="btn btn-primary text-uppercase w-100" type="submit" value="Signup"></input>}
                                    {!newUser && <input className="btn btn-primary text-uppercase w-100" type="submit" value="Login"></input>}
                                    {<p className="text-center">{!newUser && <p>Don't have an account?</p>}{newUser && <p>Already have an account?</p>} <a onClick={(e) => {setNewUser(!newUser); e.preventDefault()}} href=""> {!newUser && <p>Create an account</p>}{newUser && <p>Login</p>}</a></p>}
                                    
                                    <hr className="my-4" />
                                    <p className="text-center">or</p>
                                    <div className="text-center">
                                    <button className="btn w-100 btn-google text-uppercase " type="submit" onClick={handleGoogleSignIn} ><FontAwesomeIcon icon={faGoogle} size="2x" /> Continue with Google</button>
                                    <button className="btn w-100 btn-facebook text-uppercase mt-1" type="submit" onClick ={handleFbSignIn}><FontAwesomeIcon icon={faFacebookF} size="2x" /> Continue with Facebook</button>
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


