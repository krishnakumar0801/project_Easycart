import React,{useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css'

function Menscloth_details({id,brand,title,Price,image}) {
  var navigatebutton=useNavigate()
  return (
    <div className='products'>
         <Card style={{ width: '18rem' }}onClick={()=>navigatebutton('/Cart')}>
      <Card.Img variant="top" src={image} className='mensimages' />
      <Card.Body>
        <Card.Title className='brand'>{brand}</Card.Title>
        <Card.Text>
         {title} <br/> 
        <strong className='price'>RS.{Price}</strong>
        </Card.Text>
        <Button variant="dark" >Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Menscloth_details