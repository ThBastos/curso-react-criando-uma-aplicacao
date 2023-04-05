import React, { useState } from 'react'
import { Teste } from './components/Teste';

function App() {
  
  const [abrirMenu, setAbrirMenu] = useState(false);

  return (
    <div className="App">
        <h1>Mostre o valor de abrirMenu: {abrirMenu}</h1>
        <h1>{abrirMenu ? 'verdadeiro' : 'falso'}</h1>
        <button onClick={() => setAbrirMenu(!abrirMenu)}>Mudar</button>
        <Teste nome="Lilica" />
        <Teste nome="Katara" />
        <Teste nome="Luna" />
    </div>
  );
}

export default App;