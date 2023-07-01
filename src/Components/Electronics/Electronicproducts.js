import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import iphone from '../Electronics/iphone14ama.webp'
import samsung from '../Electronics/samsung.jpg'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'
import vivo from '../Electronics/vivo.jpg'
import oneplus from '../Electronics/oneplus.jpg'
import '../../App.css'
function Electronicproducts() {
  return (
    
    <div>
    <h4>EasyCart Offers</h4>
    <div className='electronicproducts container-fluid'>
      <div className='row'>
      <div className='productsview col-12 col-lg-2 col-sm-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={iphone}
       />
      <Card.Body>
        <Card.Title>IPHONE 14</Card.Title>
        <Card.Text>
         Apple iphone 14(128 GB)-Blue <br/>
         <small>RS.</small>
        <span className='pricechange'>65,000</span>
        <strong>61,000</strong>
        <p>
          <span>
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        </span>
        </p>
        </Card.Text>
        <Button variant="dark">BuyNow</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='productsview col-12 col-lg-2 col-sm-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={samsung} 
      className='imagesize'/>
      <Card.Body>
        <Card.Title>Samsung Galaxy M33 5G</Card.Title>
        <Card.Text>
         8GB,128GB Storage,6000mAh Battery <br/>
         <small>RS.</small>
        <span className='pricechange'>18,000</span>
        <strong>16,000</strong>
        <p>
          <span>
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
       
        </span>
        </p>
        </Card.Text>
        <Button variant="dark">BuyNow</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='productsview col-12 col-lg-2 col-sm-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={vivo} 
      className='imagesize'/>
      <Card.Body>
        <Card.Title>Vivo Y35</Card.Title>
        <Card.Text>
         (Dawn Gold,8GB RAM, 128GB Storage)<br/>
         <small>RS.</small>
        <span className='pricechange'>22,999</span>
        <strong>18,000</strong>
        <p>
          <span>
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        </span>
        </p>
        </Card.Text>
        <Button variant="dark">BuyNow</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='productsview col-12 col-sm-4 col-lg-2'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={oneplus} 
      className='imagesize'/>
      <Card.Body>
        <Card.Title>OnePlus 10R 5G</Card.Title>
        <Card.Text>
         (Forest Green ,8GB RAM, 128GB Storage,
         80W SuperVOOC)<br/>
         <small>RS.</small>
        <span className='pricechange'>38,999</span>
        <strong>34,999</strong>
        <p>
          <span>
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        <BsStarFill className='text-warning' />
        <BsStarHalf className='text-warning' />
        </span>
        </p>
        </Card.Text>
        <Button variant="dark">BuyNow</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Electronicproducts