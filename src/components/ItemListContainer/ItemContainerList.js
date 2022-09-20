import React, { useEffect, useState } from 'react';
import ItemList from '../Items/ItemList';
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';
import Loader from '../Loader.js/Loader';


const ItemContainerList = () => {

const [productos, setProductos] = useState([])
const [ loading , setLoading] = useState(true)

const { categoryId } = useParams()



  useEffect(() => {
    setLoading(true)

    pedirDatos()
    .then( (res) => {
      if (!categoryId) {
              setProductos(res)
      } else {
        setProductos( res.filter((prod) => prod.category === categoryId ) )
      }
    })
    .catch( (error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [categoryId])


  return (
    <div>
      {
        loading
        ? <Loader/>
        : <ItemList productos={productos} />
      }
    </div>
  );
}

export default ItemContainerList;