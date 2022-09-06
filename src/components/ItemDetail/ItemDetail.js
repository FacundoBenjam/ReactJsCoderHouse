
const ItemDetail = ({item}) => {

  return (
    <div className='container my-5' >
        <img src={item.pictureUrl}/>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <p>{item.category}</p>
        <h4>{item.price}</h4>

  </div>
  )
}

export default ItemDetail;