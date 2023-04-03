import React, { useState, useEffect, useRef } from 'react'

function App() {
  
  const Ref = useRef(null);
  const [tempo, setTempo] = useState('25:00');
  const [cronometroAtivo, setCronometroAtivo] = useState(false);
  const [tempoFinal, setTempoFinal] = useState();
  const [minutos, setMinutos] = useState('25');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
        total, minutes, seconds
    };
  }
  
  const executarCronometro = () => {
    if(!cronometroAtivo) {
      limparTempo(getDeadTime())
      setCronometroAtivo(true)
    } else {
      setCronometroAtivo(false)
      const diferenca = Date.parse(tempoFinal) - Date.parse(new Date())
      const seconds = Math.floor((diferenca / 1000) % 60)
      const minutes = Math.floor((diferenca / 1000 / 60) % 60)
      setTempo((minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds))
      if (Ref.current) clearInterval(Ref.current)
    }
  }

  const getDeadTime = () => {
    let deadline = new Date()
    deadline.setMinutes(deadline.getMinutes() + parseInt(minutos))
    deadline.setSeconds(deadline.getSeconds() + 0)
    return deadline
  }

  const iniciarCronometro = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTempo((minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds))
    }
  }

  const limparTempo = (e) => {
    const id = setInterval(() => {
      iniciarCronometro(e)
      setTempoFinal(e)
      if(Date.parse(new Date()) === Date.parse(e)){
        setTempo((minutos > 9 ? minutos : '0' + minutos) + ':00')
      }
    }, 1000)
    Ref.current = id
  }
  
  useEffect(() => {
    setTempo((minutos > 9 ? minutos : '0' + minutos) + ':00')
  }, [minutos]);

  const resetTempo = () => {
    setCronometroAtivo(false)
    setTempo((minutos > 9 ? minutos : '0' + minutos) + ':00')
    if (Ref.current) clearInterval(Ref.current)
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
          	<div className='timerPomo'>{tempo}</div>
          	<div className='flexButtons'>
            	<button className={cronometroAtivo ? "buttonActive" : ""} onClick={iniciarCronometro}>{cronometroAtivo ? "Parar" : "Iniciar"}</button>
            	<button onClick={resetTempo}>Resetar</button>
          	</div>
        </div>
    </div>
  );
}

export default App;
