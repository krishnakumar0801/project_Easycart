import React,{useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css'
import { Values } from '../../Stateprovider';
function Womenscloth_detail({id,image,brand,title,Price}) {
  var [{basket}, dispatch]=Values()
  var addtobasket =()=>{
    dispatch({
        type:"ADD_TO_Basket",
        item :{
          id:id,
          title:title,
          brand:brand,
          Price :Price,
          image :image
        }
    })
    
  }

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
   <Button variant="dark"  onClick={addtobasket} >Add to Cart</Button>
 </Card.Body>
</Card>
</div>
  )
}

export default Womenscloth_detail