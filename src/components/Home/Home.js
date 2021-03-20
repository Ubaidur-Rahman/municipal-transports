import React, { useState } from 'react';
import transportsData from '../TransportsData/transportData'
import './Home.css'
import Transport from '../Transport/Transport';


const Home = () => {
    const [transports, setTransports] = useState(transportsData)
    
        const style = {
            marginTop: '150px'
        }
    return (
        <div style={style} className="container home">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {
                transports.map(transport => <Transport transport={transport} /> )
            }
            </div>
        </div>
    );
};

export default Home;