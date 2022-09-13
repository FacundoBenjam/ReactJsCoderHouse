import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col,} from 'react-bootstrap';  
import { Link } from 'react-router-dom'
import Contador from '../ItemCount/ItemCount';

const Item = ( {producto} ) => {  
  return (  
    <div className="App">  
   <Container className='p-1'>  
  <Col md="4">  
  <Card>  
  <Card.Img variant="top" src={producto.pictureUrl} />  
  <Card.Body>  
    <Card.Title>{producto.title}</Card.Title>  
    <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>  
    <p>{producto.price}</p>
    <Link to={`/item/${producto.id}`} className='btn btn-primary my-2'>Ver mas</Link>
    <Contador></Contador>  
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
    </div>  
  );  
}  
export default Item;  