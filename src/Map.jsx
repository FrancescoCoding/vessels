import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./Map.module.css";

const Map = () => {
  const containerStyle = useMemo(() => {
    return {
      width: "100%",
      height: "100%",
      maxHeight: "100%",
    };
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDKi9ePWObhV1pQpOCfBMVKAmb1CkhSeuM",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return ""; // Loading

  const center = {
    lat: 57.14891090503782,
    lng: -2.0964244758753043,
  };
  const markerCoors = {
    lat: 57.14768038612096,
    lng: -2.0960869955164676,
  };

  return (
    <div className={styles.map}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={markerCoors} title="" />
      </GoogleMap>
      <h1>Vessels stuff</h1>
    </div>
  );
};

export default Map;
