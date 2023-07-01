import React from 'react'
import Navbars from '../Navbar'
import Menscloth_details from './Menscloth_details'
import image1 from './t-shirt1.jpg'
import image2 from './t-shirt2.jpg'
import image3 from './t-shirt3.jpg'
import image4 from './t-shirt4.jpg'
import image5 from './t-shirt5.jpg'
import image6 from './shirt6.jpg'
import image7 from './shirt7.jpg'
import image8 from './shirt8.jpg'
import image9 from './shirt9.jpg'
import image10 from './shirt10.jpg'
import image11 from './jeans11.jpg'
import image12 from './jeans12.jpg'
import image13 from './jeans13.jpg'
import image14 from './jeans14.jpg'
import image15 from './jeans15.jpg'
import image16 from './shoes16.jpg'
import image17 from './shoes17.jpg'
import image18 from './shoes18.jpg'
import image19 from './shoes19.jpg'
import image20 from './shoes20.jpg'
function Menswear() {
  return (
    <div>
      <Navbars />
      <div>
    <Menscloth_details id="0001"
    image={image1}
    brand="Allen Solly"
    title="Mens Regular Fit T-shirts"
    Price="529"/>
    <Menscloth_details id="0002"
    image={image2}
    brand="EYEBOGLER"
    title="Mens Striped Regular fit
    T-shirt"
    Price="322"/>
    <Menscloth_details id="0003"
    image={image3}
    brand="Fanideaz"
    title="Mens Half sleeve
     polo T-shirt "
    Price="719"/>
    <Menscloth_details id="0004"
    image={image4}
    brand="ARROW"
    title="Mens Regular Polo Shirt"
    Price="579"/>
     <Menscloth_details id="0005"
     image={image5}
    brand="RodZen"
    title="Mens Regular Half Sleeve
    Regular Fit Striped T-shirt"
    Price="339"/>
    <Menscloth_details id="0006"
     image={image6}
    brand="KINGDOM OF WHITE"
    title="Replay Full sleevs white shirt"
    Price="1,349"/>
    <Menscloth_details id="0007"
     image={image7}
    brand="Arrow"
    title="Sports Men's slim Fit shirt"
    Price="1,149"/>
    <Menscloth_details id="0008"
     image={image8}
    brand="U-TURN"
    title="Men's slim Fit Formal shirt"
    Price="398"/>
    <Menscloth_details id="0009"
     image={image9}
    brand="Majestic Man"
    title="Slim Fit casual check shirt
    for men"
    Price="499"/>
    <Menscloth_details id="0010"
     image={image10}
    brand="Lyriq"
    title="Casual shirt for men"
    Price="359"/>
    <Menscloth_details id="0011"
     image={image11}
    brand="Levi's"
    title="Men's Slim Jeans"
    Price="1,845"/>
    <Menscloth_details id="0012"
     image={image12}
    brand="Peter England"
    title="Men's Relaxed Fit Jeans"
    Price="649"/>
    <Menscloth_details id="0013"
     image={image13}
    brand="Deniklo"
    title="Men Jeans"
    Price="969"/>
    <Menscloth_details id="0014"
     image={image14}
    brand="Billford"
    title="Men's Comfortable Jeans"
    Price="599"/>
    <Menscloth_details id="0015"
     image={image15}
    brand="Urbano Fashion"
    title="Men's Slim Fit Jeans"
    Price="568"/>
    <Menscloth_details id="0016"
     image={image16}
    brand="AVANT"
    title="Avant Men's Running shoes"
    Price="649"/>
    <Menscloth_details id="0017"
     image={image17}
    brand="Campus"
    title="Men's Maxico Running shoes"
    Price="899"/>
    <Menscloth_details id="0018"
     image={image18}
    brand="Adidas"
    title="Mens Streetahead Shoes"
    Price="1,376"/>
    <Menscloth_details id="0019"
     image={image19}
    brand="Sparx"
    title="Mens sm-680 sports shoes"
    Price="1,199"/>
    <Menscloth_details id="0020"
     image={image20}
    brand="Centrino"
    title="Men's 3392 Casual shoes"
    Price="799"/>
      </div>
      
    </div>
  )
}

export default Menswear