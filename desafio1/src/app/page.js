//El código realiza la función de ver lo que se ha creado en cada uno de los componentes
//Además contiene código que se encuarga de la validación del programa para mejor uso
"use client";

import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlanoRestaurante from "../components/PlanoRestaurante";
import ResumenReserva from "../components/ResumenReserva";
import SelectorZona from "../components/SelectorZona";
import CantidadPersona from "../Global/CantidadPersona";
import DisponibilidadMesa from "../Global/DisponibilidadMesa";
import Estadomesa from "../Global/Estadomesa";
import { useState } from 'react';

export default function Validaciones() {
  const [cantidadPersonas, setCantidadPersonas] = useState(0);
  const [reservas, setReservas] = useState({});
  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [mesasReservadas, setMesasReservadas] = useState([]);
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
  const [error, setError] = useState(null);

  const handleCantidadChange = (cantidad) => {
    if (cantidad >= 0 && cantidad <= 4) {
      setCantidadPersonas(cantidad);
    } else {
      setError("El número de personas debe estar entre 0 y 4.");
    }
  };

  const handleReservarMesa = (mesaId) => {
    if (mesasReservadas.includes(mesaId)) {
      setError("Esta mesa ya está reservada.");
      return;
    }

    setReservas((prevReservas) => ({...prevReservas,[mesaId]: { personas: cantidadPersonas },}));
    setMesasReservadas((prevMesas) => [...prevMesas, mesaId]);
    setMostrarResumen(true);
    setMesaSeleccionada(mesaId);
    setError(null);
  };

  return (
    <main className={styles.main}>
      <div className="Page">
        <div>
          <h1>Bienvenido a Restaurante UDB</h1>
          <br></br>
          <p>Tipos de mesas que ofrecemos en base al ID:</p>
          <SelectorZona />{error && <p style={{ color: 'red' }}>{error}</p>}
          <br></br>
          <p>Seleccione una mesa:</p>
          <PlanoRestaurante mesasReservadas={mesasReservadas} mesaSeleccionada={mesaSeleccionada} onMesaSeleccionada={setMesaSeleccionada}/>
          {mesaSeleccionada && <CantidadPersona mesaId={mesaSeleccionada} onCantidadChange={handleCantidadChange} />}
          <DisponibilidadMesa mesaID={1} disponibleInicial={true} />
          <Estadomesa mesaID={1} onReservar={handleReservarMesa} />
          {mostrarResumen && (
            <div>
              <ResumenReserva reservas={reservas} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}