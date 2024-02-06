import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './Main.css'





function Header() {

 
  
    
   
 

  

  return (
    <>
    <div className="image">
    
        <Container style={{   boxShadow: "rgb(255, 255, 255) 0px 20px 30px -10px" }} >
          <Navbar.Brand style={{fontSize:"40px",fontWeight:'500',color:"white",display:"flex",alignItems:'center'}} href="#home">
            <img
              alt="header"
              src="https://cdn.pixabay.com/photo/2015/12/09/22/24/filmklappe-1085692_640.png"
              width="50"
              height="50"
              className="d-inline-block align-items-center my-2 mx-2"
            />{' '}
              CINEMA WORLD
            
            
          </Navbar.Brand>
        </Container>

       
     

    </div>
    
    </>
  )
}

export default Header