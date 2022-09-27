import { useState } from 'react'


const Checkout = () => {

   
   

   const [values, setValues] = useState({
    nombre: '',
    email: '',
    direccion: ''
   })

   const handleImputChange = (e) => {
        
       setValues({
           ...values,
           [e.target.name]: e.target.value
       })
   }




   const handleSubmit = (e) => {
        
          e.preventDefault()
          
          const orden = {
            comprador: values
          }

          if(values.nombre.lenght < 3) {
            alert("nombre incorrecto")
            return
          }

          if (values.email.lenght < 2) {
            alert("email incorrecto")
            return
          }
          
          console.log("submit del form")
          console.log(orden)
 
   }

  return (
    <div className='container my-5'>
          <h2>Checkout</h2>
          <hr/>
      
          <form onSubmit={handleSubmit}>
              <input 
                   name="nombre"
                   onChange={handleImputChange}
                   value={values.nombre}
                   type={'text'} 
                   className="my-3 form-control" 
                   placeholder='Tu nombre'/>
              <input 
                   name="email"
                   onChange={handleImputChange}
                   value={values.email}
                   type={'email'} 
                   className="my-3 form-control" 
                   placeholder='Email'/>
              <input 
                   name="direccion"
                   onChange={handleImputChange}
                   value={values.direccion}
                   type={'text'} 
                   className="my-3 form-control" 
                   placeholder='Direccion'/>

              <button type="submit" className='btn btn-primary'>Enviar</button>
          </form>

    </div>
  )

}

export default Checkout