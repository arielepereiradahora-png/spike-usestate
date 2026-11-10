
import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }

  function decrementar() {
    setContador(contador - 1)
  }

  function resetar() {
    setContador(0)
  }

  return (
    <div className="container">
      <div className="contador">
        <h1>Meu Contador</h1>
        <p>Gerenciamento de estado com React</p>

        <div className="numero">
          {contador}
        </div>

        <div className="botoes">
          <button className="adicionar" onClick={incrementar}>
            + Incrementar
          </button>

          <button className="diminuir" onClick={decrementar}>
            - Decrementar
          </button>

          <button className="resetar" onClick={resetar}>
            ↻ Resetar
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
