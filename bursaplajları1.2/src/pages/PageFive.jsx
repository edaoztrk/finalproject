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

function PageFive() {
  const bounds = [
    [40.42637, 29.71120],
    [40.443641099999994, 29.717099474799348]
  ];

  return (
    <div className="harita-container">
      <MapContainer center={[40.43449644256425, 29.72044013636996]} zoom={12} style={{ height: '85vh' }} bounds={bounds}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[40.42637, 29.71120]}>
          <Popup>
            Bursa İznik Plajı
          </Popup>
        </Marker>
        <Marker position={[40.43449644256425, 29.72044013636996]} icon={redIcon}>
          <Popup>
            Hidayet Tıp Merkezi
          </Popup>
        </Marker>
        <Marker position={[40.432283634675535, 29.72023844249116]} icon={redIcon}>
          <Popup>
            Özel Metropol Polikliniği
          </Popup>
        </Marker>
        <Marker position={[40.443641099999994, 29.717099474799348]} icon={redIcon}>
          <Popup>
            İznik İlçe Devlet Hastanesi
          </Popup>
        </Marker>
      </MapContainer>
      <div className="navbar"></div>
    </div>
  )
}

export default PageFive;