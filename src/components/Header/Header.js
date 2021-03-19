import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Header.css"

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div className="container header">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <h5>Municipal Transports</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav nav-item-color">
                            <li >
                            <Link className="nav-item" to="/home">Home</Link>
                            </li>
                            <li>
                            <Link className="nav-item" to="/destination">Destination</Link>
                            </li>
                            <li>
                            <Link className="nav-item" to="/contact">Contact</Link>
                            </li>
                            <li>
                            <Link className="nav-item" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ms-2">
                    {
                        loggedInUser.name ? <h6>{loggedInUser.name}</h6> : <button className="btn btn-warning log-in-btn"><Link className="text-decoration-none" to="/login">LogIn</Link></button> 
                    }
                    </div>
                </div>
                
            </nav>
        </div>
    );
};

export default Header;