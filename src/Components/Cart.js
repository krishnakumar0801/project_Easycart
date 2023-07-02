import React  from 'react'
import Navbars from './Navbar'
import '../App.css'
import { Values } from '../Stateprovider'
import Cartdetails from '../Cartdetails'
function Cart(){

    var[{basket}]= Values()
    return (
      
      <div>
         <Navbars />
         <div >
          {
            basket.length === 0?(
              <h3 className='carttitle'>
            Your Cart is Empty
            </h3>
            ) :(
              <div>
                  <h2 className='carttitle'>Items in the Basket</h2>
                  {
                    basket.map(item =>(
                      <Cartdetails 
                          id={item.id}
                          title={item.title}
                          brand={item.brand}
                          price={item.Price}
                          image={item.image}

                          />
                    ))
                  }
                </div>
              
            )
          }
          
         </div>
      </div>
    )
  }


export default Cart