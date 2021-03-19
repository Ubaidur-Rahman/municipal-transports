import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Destination.css'
import {
    GoogleMap,
    useLoadScript,
    
  } from "@react-google-maps/api";
  


  const libraries = ["places"];
  const mapContainerStyle = {
    height: "500px",
    maxWidth: "100%",
  };

  const center = {
    lat: 33.147984,
    lng: 73.753670,
  };

  const App= () => {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
    });

    if (loadError) return "Error";
  if (!isLoaded) return "Loading...";}


const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    return (
        <div className="container d-xsm-flex ">
            <div className="row mt-5 ">
                <div className='search-area col-md-4 col-12 ali'>
                    <div>
                        <h6>Pick From</h6>
                        <input className='w-100' type="text" placeholder="Uttara" autoFocus />
                    </div>
                    <div>
                        <h6>Pick To</h6>
                        <input className='w-100' type="text" placeholder="Mohakali" />
                    </div>
                    <div>
                        <h6>Pick a date</h6>
                        <input className='w-100' type="date" placeholder="01/02/2022" />
                    </div>
                    <button className='w-100 my-3 btn btn-primary text-uppercase'>search</button>
                </div>
            
                <div className='maps col-md-8 col-12'>
                        <GoogleMap
                            id="map"
                            mapContainerStyle={mapContainerStyle}
                            zoom={10}
                            center={center}>
                        </GoogleMap>
                </div>
            </div>
        </div>
    );
}

export default Destination ;