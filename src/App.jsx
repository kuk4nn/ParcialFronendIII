import React, { useState } from 'react';
import Card from './Card';
import './index.css';

function App() {
  
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3 || name.startsWith(' ') || color.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
    }
  };
  
  return (
    <div className="App">
      <h1>Elige un color</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Ingresa tu color favorito (formato HEX)"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-button">ENVIAR</button>
        </form>
      ) : (
        <Card name={name} color={color} />
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}



export default App;
