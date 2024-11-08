//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ name, color }) {
  return (
    <div className="card">
      <h2>Hola {name}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div className="color-display" style={{ backgroundColor: color }}>
        {color}
      </div>
    </div>
  );
}

export default Card;