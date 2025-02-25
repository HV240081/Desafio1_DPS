//Archivo que se encarga de representa una mesa interactiva (disponible/ocupada).
import React from 'react';

const Mesa = (props) => {
  const mesa = props.mesa;
  return (
    <button
      className={`btn ${mesa.disponible ? 'btn-success' : 'btn-danger'}`}
      disabled={!mesa.disponible}
    >
      Mesa {mesa.id}
    </button>
  );
};

export default Mesa;