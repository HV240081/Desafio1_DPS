//Codigo que valida cuantas personas pueden estar en una mesa
"use client";

import { useState } from 'react';

function CantidadPersona({ mesaId, onCantidadChange }) {
  const [cantidad, setCantidad] = useState(0);

  const incrementar = () => {
    if (cantidad < 4) {
      setCantidad(cantidad + 1);
      onCantidadChange(cantidad + 1);
    } else {
      alert("Máximo 4 personas por mesa."); 
    }
  };

  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      onCantidadChange(cantidad - 1);
    }
  };

  return (
    <div>
      <p>Personas (Mesa {mesaId}): {cantidad}</p>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default CantidadPersona;