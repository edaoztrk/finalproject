import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});


function PageTwo() {

    return (
        <MapContainer center={[40.3682, 28.6041]} zoom={10} style={{ height:'85vh'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[40.3682, 28.6041]}>
            <Popup>
              Eğerce Plajı
            </Popup>
          </Marker>

          <Marker position={[40.3914, 28.8010]}>
            <Popup>
            Zeytinbağı Halk Plajı
            </Popup>
          </Marker>

          <Marker position={[40.3859, 28.7874]}>
            <Popup>
            Kumyaka Halk Plajı
            </Popup>
          </Marker>

          <Marker position={[40.3823, 28.8731]}>
            <Popup>
            M. Kemal Coşkun Öz Plajı
            </Popup>
          </Marker>

          <Marker position={[40.3695, 28.8981]}>
            <Popup>
            Mudanya Plajı
            </Popup>
          </Marker>

          <Marker position={[40.3603, 28.9148]}>
            <Popup>
            Burgaz Halk Plajı
            </Popup>
          </Marker>

          <Marker position={[40.3559, 28.9411]}>
            <Popup>
            Burgaz Altınkum Halk Plajı
            </Popup>
          </Marker>
          <Marker position={[40.32274976939807, 28.929141770929903]} icon={redIcon}>
          <Popup>
            Mudanya Devlet Hastanesi
          </Popup>
        </Marker>

        </MapContainer>
      );
}

export default PageTwo