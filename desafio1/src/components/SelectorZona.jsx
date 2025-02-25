//Archivo que se encarga de permitir elegir entre diferentes áreas del restaurante (Terraza, Interior, VIP).
import React, { useState } from 'react';

const SelectorZona = () => {
  const [ZonaSeleccionada, setZonaSeleccionada] = useState('Interior');
  const Mesasinterior = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const Mesasterraza = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const MesasVIP = [26, 27, 28, 29, 30];

  const handleZonaSeleccionada = (zona) => {
    setZonaSeleccionada(zona);
  };

  const Mostrarmesas = () => {
    switch (ZonaSeleccionada) {
      case 'Interior':
        return Mesasinterior.map((mesa) => (
          <span key={mesa} className="me-2">
            {mesa}
          </span>
        ));
      case 'Terraza':
        return Mesasterraza.map((mesa) => (
          <span key={mesa} className="me-2">
            {mesa}
          </span>
        ));
      case 'VIP':
        return MesasVIP.map((mesa) => (
          <span key={mesa} className="me-2">
            {mesa}
          </span>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-3">
        <button className={`btn ${ZonaSeleccionada === 'Interior' ? 'btn-primary' : 'btn-outline-primary'} me-2`}onClick={() => handleZonaSeleccionada('Interior')}>Interior</button>
        <button className={`btn ${ZonaSeleccionada === 'Terraza' ? 'btn-primary' : 'btn-outline-primary'} me-2`}onClick={() => handleZonaSeleccionada('Terraza')}>Terraza</button>
        <button className={`btn ${ZonaSeleccionada === 'VIP' ? 'btn-primary' : 'btn-outline-primary'}`}onClick={() => handleZonaSeleccionada('VIP')}>VIP</button>
      </div>
      <div>
        <strong>Mesas {ZonaSeleccionada}:</strong> {Mostrarmesas()}
      </div>
    </div>
  );
};

export default SelectorZona;