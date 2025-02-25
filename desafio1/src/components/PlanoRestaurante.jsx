//El código realiza la función de renderiza la distribución de mesas.
"use client";

import React from 'react';
import styles from '../app/page.module.css';

const PlanoRestaurante = ({ mesasReservadas, mesaSeleccionada, onMesaSeleccionada }) => {
  const mesasInterior = [
    { id: 1, disponible: true, zona: 'Interior' },
    { id: 2, disponible: true, zona: 'Interior' },
    { id: 3, disponible: true, zona: 'Interior' },
    { id: 4, disponible: true, zona: 'Interior' },
    { id: 5, disponible: true, zona: 'Interior' },
    { id: 6, disponible: true, zona: 'Interior' },
    { id: 7, disponible: true, zona: 'Interior' },
    { id: 8, disponible: true, zona: 'Interior' },
    { id: 9, disponible: true, zona: 'Interior' },
    { id: 10, disponible: true, zona: 'Interior' },
    { id: 11, disponible: true, zona: 'Interior' },
    { id: 12, disponible: true, zona: 'Interior' },
    { id: 13, disponible: true, zona: 'Interior' },
    { id: 14, disponible: true, zona: 'Interior' },
    { id: 15, disponible: true, zona: 'Interior' },
  ];

  const mesasTerraza = [
    { id: 16, disponible: true, zona: 'Terraza' },
    { id: 17, disponible: true, zona: 'Terraza' },
    { id: 18, disponible: true, zona: 'Terraza' },
    { id: 19, disponible: true, zona: 'Terraza' },
    { id: 20, disponible: true, zona: 'Terraza' },
    { id: 21, disponible: true, zona: 'Terraza' },
    { id: 22, disponible: true, zona: 'Terraza' },
    { id: 23, disponible: true, zona: 'Terraza' },
    { id: 24, disponible: true, zona: 'Terraza' },
    { id: 25, disponible: true, zona: 'Terraza' },
  ];

  const mesasVIP = [
    { id: 26, disponible: true, zona: 'VIP' },
    { id: 27, disponible: true, zona: 'VIP' },
    { id: 28, disponible: true, zona: 'VIP' },
    { id: 29, disponible: true, zona: 'VIP' },
    { id: 30, disponible: true, zona: 'VIP' },
  ];

  const Restaurantemesas = [...mesasInterior, ...mesasTerraza, ...mesasVIP];

  const handleMesaClick = (mesaId) => {
    onMesaSeleccionada(mesaId);
  };

  return (
    <div className={styles.gridContainer}>
      {Restaurantemesas.map((mesa) => (
        <div key={mesa.id} className={styles.gridItem}>
          <button onClick={() => handleMesaClick(mesa.id)} className={`${styles.mesaButton} ${mesaSeleccionada === mesa.id ? styles.mesaSeleccionada : mesasReservadas && mesasReservadas.includes(mesa.id)? styles.mesaReservada : styles.mesaDisponible}`}>{mesa.id}</button>
        </div>
      ))}
    </div>
  );
};

export default PlanoRestaurante;