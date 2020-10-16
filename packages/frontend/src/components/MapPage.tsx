import React, { useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapPage({ data }: { data: any }) {
  const [coords, setCoords] = useState();

  useEffect(() => {
    console.log(data);
  });

  return (
    <Map
      center={[data ? data.location.lat : 51, data ? data.location.lng : 0]}
      zoom={12}
      style={{
        height: "100vh",
        position: "relative",
        marginTop: "-5rem",
        zIndex: 0,
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
