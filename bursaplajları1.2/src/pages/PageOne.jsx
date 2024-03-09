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

function Map() {
  return (
    <div className="harita-container">
      <MapContainer center={[40.3986, 28.1997]} zoom={10} style={{ height: '85vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[40.3986, 28.1997]}>
          <Popup>
            Kurşunlu Halk Plajı
          </Popup>
        </Marker>
        <Marker position={[40.3981, 28.3549]}>
          <Popup>
            Malkara Plajı 
          </Popup>
        </Marker>
        <Marker position={[40.3975, 28.3669]}>
          <Popup>
            Yeniköy Plajı
          </Popup>
        </Marker>

        <Marker position={[40.2076625963487, 28.348689359009974]} icon={redIcon}>
          <Popup>
          Karacabey Devlet Hastanesi
          </Popup>
        </Marker>
      </MapContainer>


      
      <div className="navbar">
      </div>
    </div>
  );
}





export default Map;