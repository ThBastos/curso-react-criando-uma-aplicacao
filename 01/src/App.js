import React, { useState, useEffect } from 'react'

function App() {
  
  const [timer, setTimer] = useState('25:00');
  const [timerActive, setTimerActive] = useState(false);
  const [timerEnd, setTimerEnd] = useState();
  const [textMinutes, setTextMinutes] = useState('25');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
        total, minutes, seconds
    };
  }
  
  const initTimer = (e) => {
    clearTimer(getDeadTime());
    console.log("timerEnd: ", timerEnd);
    const diferenca = Date.parse(timerEnd) - Date.parse(new Date())
    const seconds = Math.floor((diferenca / 1000) % 60)
    const minutes = Math.floor((diferenca / 1000 / 60) % 60)
    setTimer((minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds))
  }

  const getDeadTime = () => {
    let deadline = new Date()
    deadline.setMinutes(deadline.getMinutes() + parseInt(textMinutes))
    deadline.setSeconds(deadline.getSeconds() + 0)
    return deadline
  }

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer((minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds))
    }
  }

  const clearTimer = (e) => {
    const id = setInterval(() => {
      startTimer(e)
      setTimerEnd(e)
      if(Date.parse(new Date()) === Date.parse(e)){
        setTimer((textMinutes > 9 ? textMinutes : '0' + textMinutes) + ':00')
      }
    }, 1000)
  }
  
  useEffect(() => {
    setTimer((textMinutes > 9 ? textMinutes : '0' + textMinutes) + ':00')
  }, [textMinutes]);

  const resetTimer = () => {
    setTimerActive(false)
    setTimer((textMinutes > 9 ? textMinutes : '0' + textMinutes) + ':00')
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
          	<div className='timerPomo'>{timer}</div>
          	<div className='flexButtons'>
            	<button className={timerActive ? "buttonActive" : ""} onClick={initTimer}>{timerActive ? "Parar" : "Iniciar"}</button>
            	<button onClick={resetTimer}>Resetar</button>
          	</div>
        </div>
    </div>
  );
}

export default App;
