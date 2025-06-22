import React from "react";
import exerciseImg from "./assets/jumping_jacks.jpg";

function App() {
  return (
    <div className="container">
      <h1>Jumping Jacks</h1>
      <img src={exerciseImg} alt="Jumping Jacks" />
      <p>Duración recomendada: 1 minuto</p>
      <button onClick={() => alert("Aquí irá la animación o video")}>
        ▶️ Ver Movimiento
      </button>
      <div className="alerta">
        <strong>Adaptaciones para mayores de 50:</strong>
        <ul>
          <li>Haz el movimiento más lento.</li>
          <li>Evita saltar si hay dolor de rodillas; solo mueve los brazos y piernas sin impacto.</li>
          <li>Hazlo apoyado en una silla para equilibrio si es necesario.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;