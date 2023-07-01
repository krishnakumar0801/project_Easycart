import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
function Products({id,title,image}) {
  var mensnavigate=useNavigate()
  return (
   
    <div>
        <div className='product'>
            <div className='product-info' onClick={()=>mensnavigate("/Menswear")}>
                <img className='jeans' src={image} />
            <div>
            <h5>{title}</h5>
            </div>  
         </div>
         
        </div>

    </div>
  )
}

export default Products