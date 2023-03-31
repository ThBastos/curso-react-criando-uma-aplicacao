import React, { useState } from 'react'

function App() {
  
  const [timerActive, setTimerActive] = useState(false);

  const initTimer = () => {
    setTimerActive(!timerActive);
  }

  const resetTimer = () => {
    setTimerActive(false)
  }
  
  return (
    <div className="App">
        <div className='container'>
          	<h1>Pomodoro Timer</h1>
          	<div className="top">
            	<p>Vou focar durante </p>
            	<input type="number" maxLength="60" value="25" />
            	<p>minutos</p>
          	</div>
          	<div className='timerPomo'>25:00</div>
          	<div className='flexButtons'>
            	<button className={timerActive ? "buttonActive" : ""} onClick={initTimer}>{timerActive ? "Parar" : "Iniciar"}</button>
            	<button onClick={resetTimer}>Resetar</button>
          	</div>
        </div>
    </div>
  );
}

export default App;
