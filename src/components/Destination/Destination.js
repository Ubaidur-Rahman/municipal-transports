import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Destination.css'
import {
    GoogleMap,
    useLoadScript,
    Marker,
  } from "@react-google-maps/api";
  


  const libraries = ["places"];
  const mapContainerStyle = {
    height: "500px",
    maxWidth: "100%",
  };

  const center = {
    lat: 24.894930,
    lng: 91.868706
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
    const [searchArea, setSearchArea] = useState(false)
   


    const handleBlur= (e) => {
        e.preventDefault();
      
      const searchInput = {...searchArea};
      console.log( e.target.value);
      searchInput[e.target.name] = e.target.value;
      setSearchArea(searchInput);
    }
  
    const handleSearchResult = () => {
        
    }
// maps apiKey: 'AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY'
    
    return (
        <div className="container d-xsm-flex ">
            <div className="row mt-5 ">
                <div className='search-area col-md-4 col-12 ali'>
                    <div>
                    <h1>{searchArea.pickFrom}</h1>
                        <h6>Pick From</h6>
                        <input className='w-100' name="pickFrom" onBlur={handleBlur} type="text" placeholder="Uttara" autoFocus />
                    </div>
                    <div>
                        <h6>Pick To</h6>
                        <input className='w-100' name="pickTo" onBlur={handleBlur} type="text" placeholder="Mohakali" />
                    </div>
                    <div>
                        <h6>Pick a date</h6>
                        <input className='w-100' onChange={handleSearchResult} type="date" placeholder="01/02/2022" />
                    </div>
                    <button onClick={handleSearchResult} className='w-100 my-3 btn btn-primary text-uppercase'>search</button>
                </div>
            
                <div className='maps col-md-8 col-12'>
                        <GoogleMap
                            id="map"
                            mapContainerStyle={mapContainerStyle}
                            zoom={10}
                            center={center}>
                            <Marker position={{ lat: 24.894930, lng: 91.868706}} />
                        </GoogleMap>
                </div>
            </div>
        </div>
    );
}

export default Destination ;