import React from 'react'
import { Values } from './Stateprovider'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Cartdetails({id,title,image,brand,price}) {
  var Navigations =useNavigate()
    var [{basket}, dispatch]= Values();
    var removeitem =()=>{
        dispatch({
            type:"Remove_Item",
            id :id
        })
    }
  return (
    <div className='products'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} className='mensimages' />
      <Card.Body>
        <Card.Title className='brand'>{brand}</Card.Title>
        <Card.Text>
         {title} <br/> 
        <strong className='price'>RS.{price}</strong>
        </Card.Text>
        <Button variant="dark" onClick={removeitem} >Remove</Button>
        <span>
        <Button className='paymentbutton' variant="dark" onClick={()=>Navigations("/Payment")} >Buy Now</Button>
        </span>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cartdetails