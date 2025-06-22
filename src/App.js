import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("home");

  const renderContent = () => {
    switch (screen) {
      case "home":
        return (
          <div style={{ paddingTop: '15vh' }}>
            <h1 style={{ fontSize: '2.5rem' }}>Bienvenido a</h1>
            <h2 style={{ fontSize: '2.5rem', color: '#ff8734', marginBottom: '2rem' }}>
              VitalMove
            </h2>
            <button onClick={() => setScreen("calistenia")}>💪 Calistenia</button>
            <button onClick={() => setScreen("yoga")}>🧘 Yoga</button>
            <button onClick={() => setScreen("progreso")}>📊 Progreso</button>
          </div>
        );
      case "calistenia":
        return (
          <div>
            <h2>Rutina de Mañana</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Jumping Jacks - 1 min</li>
              <li>Sentadillas - 15 rep</li>
              <li>Flexiones - 10 rep</li>
            </ul>
            <button onClick={() => setScreen("home")}>Volver</button>
          </div>
        );
      case "yoga":
        return (
          <div>
            <h2>Rutina Nocturna</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Postura del niño - 2 min</li>
              <li>Gato-vaca - 1 min</li>
              <li>Savasana - 3 min</li>
            </ul>
            <button onClick={() => setScreen("home")}>Volver</button>
          </div>
        );
      case "progreso":
        return (
          <div>
            <h2>Tu Progreso</h2>
            <p>Días activos esta semana: 4 de 6</p>
            <p>Horas acumuladas: 2.5 h</p>
            <button onClick={() => setScreen("home")}>Volver</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
}

export default App;