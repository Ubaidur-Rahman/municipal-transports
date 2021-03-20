import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Transport.css"

const Transport = (props) => {
    console.log(props);
    const {name, img, transportName} = props.transport
    
    return (
        <div className='col text-center'>
            <div className="transport-card p-5 " onClick={() => transportName}>
                <Link className="text-decoration-none" to={`transport/${name}`}>
                    <img id="card-img" src={img} alt={name}/>
                    <h1 className="text-dark mt-3">{name}</h1>
                </Link>
            </div>
        </div>
    );
};

export default Transport;