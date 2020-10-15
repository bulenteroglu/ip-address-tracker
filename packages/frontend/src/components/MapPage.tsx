import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapPage() {
  return (
    <Map
      center={[0, 0]}
      zoom={12}
      style={{
        height: "100vh",
        position: "relative",
        marginTop: "-5rem",
        zIndex: "0",
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[0, 0]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}
