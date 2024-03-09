import React, { useState } from 'react';
import geojsonData from '../data/geojson-data.json';

function BeachList() {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  const handleRowHover = (index) => {
    setHoveredRowIndex(index);
  };

  const handleRowLeave = () => {
    setHoveredRowIndex(null);
  };

  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Plaj Adı</th>
            <th scope="col">İlçe</th>
            <th scope="col">Mahalle</th>
            <th scope="col">Plaj Uzunluğu</th>
            <th scope="col">Ortalama G</th>
            <th scope="col">Duş Adeti</th>
            <th scope="col">Giyinme Kabini Sayısı</th>
            <th scope="col">Tuvalet Sayısı</th>
            <th scope="col">Otopark Sayısı</th>
          </tr>
        </thead>
        <tbody>
          {geojsonData.features.map((feature, index) => (
            <tr
              key={index}
              onMouseEnter={() => handleRowHover(index)}
              onMouseLeave={handleRowLeave}
              style={{ backgroundColor: index === hoveredRowIndex ? '#f0f0f0' : 'inherit' }}
            >
              <td>{feature.properties.ADI}</td>
              <td>{feature.properties.ILCE}</td>
              <td>{feature.properties.MAHALLE}</td>
              <td>{feature.properties.PLAJ_UZUNL}</td>
              <td>{feature.properties.ORTALAMA_G}</td>
              <td>{feature.properties.DUS_ADET}</td>
              <td>{feature.properties.SOYUNMA_KA}</td>
              <td>{feature.properties.TUVALET_AD}</td>
              <td>{feature.properties.OTOPARK_DU}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BeachList;