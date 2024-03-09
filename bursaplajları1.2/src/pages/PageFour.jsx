import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

function PageFour() {

  const averageLocation = [40.4671, 29.3185]; 

  return (
    <div className="harita-container">
      <MapContainer center={averageLocation} zoom={10} style={{ height: '85vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
     
        <Marker position={[40.41848, 29.35512]}>
          <Popup>
            Orhangazi Halk Plajı
          </Popup>
        </Marker>
    
        <Marker position={[40.49620746250607, 29.29030644216141]} icon={redIcon}>
          <Popup>
            Orhangazi Devlet Hastanesi
          </Popup>
        </Marker>
     
        <Marker position={[40.4895762648741, 29.310038454869204]} icon={redIcon}>
          <Popup>
            Özel Zeytin Tıp Merkezi
          </Popup>
        </Marker>
      </MapContainer>
      <div className="navbar"></div>
    </div>
  );
}

export default PageFour;