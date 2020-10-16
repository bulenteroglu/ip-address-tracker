import React, { useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export default function MapPage({ data }: { data: any }) {
  L.Marker.prototype.options.icon = DefaultIcon;

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
      <Marker
        position={[data ? data.location.lat : 51, data ? data.location.lng : 0]}
      >
        <Popup>{data ? data.location.city : null} </Popup>
      </Marker>
    </Map>
  );
}
