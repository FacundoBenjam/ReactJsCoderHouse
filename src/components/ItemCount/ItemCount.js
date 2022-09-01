import React from 'react'
import { useState } from 'react'



const Contador = ({stock, initial}) => {


const [itemCount, setItemCount] = useState(initial)


const onAdd = () => {
 if (itemCount < stock)
  setItemCount(itemCount + 1)
}

const handleRestar = () => {
  if (itemCount > 0)
  setItemCount(itemCount - 1)
}

return (
        <><div class="col-md-12 text-center">
    <button onClick={onAdd} className='btn btn-outline-primary'>+</button>
    <span className='mx-2'>{itemCount}</span>
    <button onClick={handleRestar} className='btn btn-primary'>-</button>
  </div></>
)

}



export default Contador;