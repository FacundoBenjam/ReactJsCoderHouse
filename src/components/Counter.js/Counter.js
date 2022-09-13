import { useState } from 'react'

const Counter = ({max}) => {

 const [counter, setCounter] = useState(1)

 const handleRestar = () => {
  if(counter > 1) {
    setCounter(counter - 1)
  }
 }


 const handleSumar = () => {
  if(counter < max) {
    setCounter(counter + 1)
  }
}




   return (
    <div>

      <button 
      className='btn btn-outline-primary' 
      onClick={handleRestar}
      >-</button>

      <span className='mx-3' >{counter}</span>

      <button 
      className='btn btn-primary'
      onClick={handleSumar}
       
      >+</button>

    </div>
   )

}

export default Counter