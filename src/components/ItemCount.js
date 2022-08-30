import React from 'react'
import { useState } from 'react'

const Contador = () => {

const [counter, setCounter] = useState(0)

const estado = useState()
console.log(estado)

const Handlesumar = () => {
  // eslint-disable-next-line no-const-assign
  setCounter(counter + 1)
  console.log(counter)
}

const Handlerestar = () => {
  // eslint-disable-next-line no-const-assign
  if (counter > 0)
  setCounter(counter - 1)
  console.log(counter) 
}

return (
  <div className='container my-5' >
    <h2>Contador</h2>
    <button onClick={Handlesumar} className='btn btn-outline-primary'>+</button>
    <span className='mx-2'>{counter}</span>
    <button onClick={Handlerestar} className='btn btn-primary'>-</button>
    <div className='container my-2'>
      <button>
        Agregar producto
      </button>
    </div>
  </div>
)

}



export default Contador;