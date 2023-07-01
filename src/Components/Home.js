import React from 'react'
import '../App.css'
import Navbars from './Navbar'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Components/image1.png'
import image2 from '../Components/image2.png'
import image3 from '../Components/image3.png'
 import shirts from '../Components/products/shirts-mens.jpg'
 import tshirts from '../Components/products/t-shirts-mens.jpg'
 import 'bootstrap/dist/css/bootstrap.css';
 import sandles from '../Components/products/sandles.jpg'
 import jeans from '../Components/products/jeans-mens.jpg'
 import leggings from '../Components/products/leggings.jpg'
 import sarees from '../Components/products/womens-sarees.jpg'
 import womensshoes from '../Components/products/womens-shoes.jpg'
 import kurthas from '../Components/products/womens-kurthas.jpg'
 import { useNavigate } from 'react-router-dom';
 import Electronicproducts from './Electronics/Electronicproducts';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function Home() {
  var mensnavigate=useNavigate()
  var womensnavigates =useNavigate()
  var electronics= useNavigate()
  return (
    <div>
   <Navbars />
   <div>
   <Carousel className='slider'>
      <Carousel.Item>
        <img
          className="d-block w-100  slider"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='title1'>Technology is here</h3>
          <p className='title-info1'>
            Buy all Smart Phone in Easycart
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  slider"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='title1'>Home Appliances</h3>
          <p className='title-info2'>
          Get 20% flat offers in All brand Home Appliances only on
          Easycart
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  slider"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='title1' >Groceries</h3>
          <p className='title-info3'>
           Get flat 10% offer in all grocery products 
           only on Easycart
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    <h4 className='producttitles'>Mens wears</h4>
      <div className='display-col  container-lg '>
      <div className='row'>
        <div className='col-12 col-sm-4 col-lg-3 flexbox'>
          <img className='jeans' src={tshirts}  onClick={()=>mensnavigate("/Menswear")}/>
          <h4>Mens T-Shirts</h4>
        </div>
        <div className='col-12 col-sm-4 col-lg-3 flexbox'>
          <img className='jeans' src={shirts} onClick={()=>mensnavigate("/Menswear")}/>
          <h4>Mens Shirts</h4>
        </div>
        <div className='col-12 col-sm-4 col-lg-3 flexbox'>
          <img className='jeans' src={jeans} onClick={()=>mensnavigate("/Menswear")}/>
          <h4>Mens Jeans</h4>
        </div>
        <div className='col-12 col-sm-4 col-lg-3 flexbox'>
          <img className='jeans' src={sandles} onClick={()=>mensnavigate("/Menswear")}/>
          <h4>Mens Footwears</h4>
        </div>
        
      </div>
      
    </div>
    <h4 className='producttitles'>Womens wears</h4>
    <div className='display-col  container-lg '>
      <div className='row'>
        <div className='col-12 col-sm-4 col-lg-3 flexbox'>
          <img className='jeans' src={sarees} onClick={()=>womensnavigates("/Womenswear")}/>
          <h4>Womens Sarees</h4>
        </div>
        <div className='col-12 col-sm-4 col-lg-3 flexbox'>
          <img className='jeans' src={kurthas} onClick={()=>womensnavigates("/Womenswear")}/>
          <h4>Womens Kurtas</h4>
        </div>
        <div className='col-12 col-sm-4 col-lg-3 flexbox'>
          <img className='jeans' src={leggings} onClick={()=>womensnavigates("/Womenswear")}/>
          <h4>Womens Leggings</h4>
        </div>
        <div className='col-12 col-sm-4 col-lg-3 flexbox'>
          <img className='jeans' src={womensshoes} onClick={()=>womensnavigates("/Womenswear")}/>
          <h4>Womens sandles</h4>
        </div>
        
      </div>
      
    </div>
    <Electronicproducts />
    
    </div>
  )
}

export default Home