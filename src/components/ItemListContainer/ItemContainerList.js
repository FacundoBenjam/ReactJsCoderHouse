import React, { useEffect, useState } from 'react';
import { stock } from "../../data/Data"
import ItemList from '../Items/ItemList';


function pedirDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 3000);

  });

}

const ItemContainerList = () => {

const [productos, setProductos] = useState([])

console.log(productos)


  useEffect(() => {
    pedirDatos()
    .then( (res) => {
     setProductos(res)
    })
    .catch( (error) => {
      console.log(error)
    })
    .finally(() => {
      
    })
  }, [])


  return (
     <ItemList productos={productos} />
  );
}

export default ItemContainerList;