import React, { useEffect, useState } from 'react';
import ItemList from '../Items/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader.js/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';


const ItemContainerList = () => {

const [productos, setProductos] = useState([])
const [ loading , setLoading] = useState(true)

const { categoryId } = useParams()



  useEffect(() => {
    setLoading(true)
    const productosRef = collection(db, 'Productos')
    const q = categoryId 
              ? query(productosRef, where('category','==', categoryId))
              : productosRef
    getDocs(q)
         .then((resp)=> {
          const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
          console.log(productosDB)


          setProductos(productosDB)
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