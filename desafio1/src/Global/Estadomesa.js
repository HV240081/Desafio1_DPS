//Codigo que actualiza el estado de la mesa, sea Reservada / Disponible
"use client";

import { useState } from 'react';

function Estadomesa({ mesaId, onReservar }) {
  const [reservada, setReservada] = useState(false);

  function reservar() {
    setReservada(true);
    onReservar(mesaId);
  }

  return (
    <div>
      <p>Mesa {mesaId}: {reservada ? 'Reservada' : 'Disponible'}</p>
      {!reservada && <button onClick={reservar}>Reservar</button>}
    </div>
  );
}

export default Estadomesa;