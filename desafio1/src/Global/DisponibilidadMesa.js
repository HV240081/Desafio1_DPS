//Código donde se desarrolla la opcion de la disponibilidad de la mesa
"use client";

import { useState } from 'react';

const DisponibilidadMesa = (props) => {
  const mesaId = props.mesaId;
  const Disponibleinicial = props.disponibleInicial;

  const [disponible, setDisponible] = useState(Disponibleinicial);
  const Cambiardisponibilidad = () => {
    setDisponible(!disponible);
  };

  return (
    <div>
      <p>Mesa {mesaId}: {disponible ? 'Disponible' : 'Ocupada'}</p>
      <button onClick={Cambiardisponibilidad}>
        {disponible ? 'Ocupar' : 'Liberar'}
      </button>
    </div>
  );
};

export default DisponibilidadMesa;