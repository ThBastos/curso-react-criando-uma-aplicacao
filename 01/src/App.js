import React, { useState } from 'react'

function App() {

  const [abrirMenu, setAbrirMenu] = useState(false);
  return (
    <div className="App">
      <h1>{abrirMenu ? 'Menu Aberto' : 'Menu Fechado'}</h1>
      <p>Valor do estado abrirMenu: {abrirMenu.toString()}</p>
      <button onClick={() => setAbrirMenu(!abrirMenu)}>Mudar estado do menu</button>
    </div>
  );
}

export default App;
