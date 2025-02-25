//El código realiza la función de mostrar los detalles de la reserva

import React from 'react';

function ResumenReserva({ reservas }) {
  console.log(reservas); 

  if (!reservas || typeof reservas !== 'object' || Object.keys(reservas).length === 0) {
    return <p>No hay reservas.</p>;
  }

  return (
    <div>
      <h3>Resumen de Reservas</h3>
      {Object.keys(reservas).map((mesaId) => {
        return (
          <div key={mesaId}>
            <p>¡Reserva Exitosa!. Mesa reservada, Personas total que usaran la mesa: {reservas[mesaId].personas}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ResumenReserva;