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

function PageThree() {
  
  const bounds = [
    [40.3795, 29.0695], 
    [40.437285873166516, 29.14963679807265], 
    [40.42641081433839, 29.161472487891245] 
  ];

  return (
    <div className="harita-container">
      <MapContainer bounds={bounds} style={{ height: '85vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
    
        <Marker position={[40.3795, 29.0695]}>
          <Popup>
            Kurşunlu Plajı
          </Popup>
        </Marker>

        <Marker position={[40.437285873166516, 29.14963679807265]} icon={redIcon}>
          <Popup>
            Gemlik Sağlık
          </Popup>
        </Marker>
       
        <Marker position={[40.42641081433839, 29.161472487891245]} icon={redIcon}>
          <Popup>
            Özel Atakent Gemlik Tıp Merkezi
          </Popup>
        </Marker>
      </MapContainer>
      <div className="navbar"></div>
    </div>
  );
}

export default PageThree;