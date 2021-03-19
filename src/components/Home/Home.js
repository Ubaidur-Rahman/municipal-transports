import React from 'react';
import Transport from '../Transport/Transport';
import bikeImg from '../Home/images/bike.png'
import carImg from '../Home/images/car.png'
import busImg from '../Home/images/bus.png'
import trainImg from '../Home/images/train.png'
import './Home.css'


const Home = () => {
    const transports = [
        {
            name : 'BIKE',
            img : bikeImg
        },
        {
            name : 'CAR',
            img : carImg
        },
        {
            name : 'BUS',
            img : busImg
        },
        {
            name : 'TRAIN',
            img : trainImg
        }]
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