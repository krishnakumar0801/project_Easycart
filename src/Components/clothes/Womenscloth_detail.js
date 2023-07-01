import React,{useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css'
function Womenscloth_detail({id,image,brand,title,Price}) {

  var navigate=useNavigate()
  return (
    <div className='products'>
    <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src={image} className='mensimages' />
 <Card.Body>
   <Card.Title className='brand'>{brand}</Card.Title>
   <Card.Text>
    {title} <br/> 
   <strong className='price'>RS.{Price}</strong>
   </Card.Text>
   <Button variant="dark" onClick={()=>navigate('/Cart')} >Add to Cart</Button>
 </Card.Body>
</Card>
</div>
  )
}

export default Womenscloth_detail