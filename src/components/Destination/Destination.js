import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Destination.css'

const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    return (
        <div className="container d-xsm-flex">
            <div className="row mt-5">
            <div className='search-area col-md-4 col-12'>
                <div>
                    <h6>Pick From</h6>
                    <input className='w-100' type="text" placeholder="Uttara" autoFocus />
                </div>
                <div>
                    <h6>Pick To</h6>
                    <input className='w-100' type="text" placeholder="Mohakali" />
                </div>
                <button className='w-100 my-3 btn btn-primary text-uppercase'>search</button>
            </div>
            
            <div className='maps col-md-8 col-12'>
                <h3>maps</h3>
                
            </div>
            
            </div>
        </div>
    );
};

export default Destination;