import React, { useEffect, useRef } from "react";

// Variables
const GOOGLE_MAP_API_KEY = "AIzaSyCQldl1eVtGg5Y6OgjJ8_sZITLWmY7WEH0";

function GoogleMaps(props) {
  // styles
  const mapStyles = {
    width: "100%",
    height: props.mapHeight,
  };

  // refs
  const googleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 15,
      center: {
        lat: props.lat,
        lng: props.lng,
      },
    });

  const createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: props.lat, lng: props.lng },
      map: googleMap.current,
    });

  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
    });
  });

  return <div id="google-map" ref={googleMapRef} style={mapStyles} />;
}

export default GoogleMaps;
