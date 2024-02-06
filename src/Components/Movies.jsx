import React, { useState } from 'react'
import './Main.css';
import { Card } from 'react-bootstrap';
import axios from 'axios'








function Movies() {

  const [movie,setMovie]=useState()
  const [text,setText]=useState('')

const handleSearch=()=>{

  if(text || "" ){
    axios.get(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${text}`)
    .then((test)=>setMovie(test.data))
  }else{
    alert("Please enter any movie name")
    

  }

  

}


  

  return (
    <>
    <div className="button">
    <input value={text} onChange={(e)=>(setText(e.target.value))}  id='input' className='form-control' placeholder='Enter movie name' type="text" />
            <button onClick={handleSearch} className='btn btn-primary mx-3'>Search</button>
    </div>
    <div>
    
        <img className='img' width="100%" height='630px' src="https://i.gifer.com/8V9H.gif" alt="center" />
    </div>
    <div >
   

   {
    movie?(
      <div className="content">
<Card style={{ width: '18rem',border:"1px solid white",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className='mx-2'>
      <Card.Img variant="top" style={{height:'200px'}} src={movie?.Poster} />
      <Card.Body>
        <Card.Title className='text-center'>{movie?.Title}</Card.Title>
        <Card.Text className='text-center'>
         {movie?.Plot}
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',border:"1px solid white",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className='mx-2'>
      <Card.Body>
        <Card.Title>Release Date</Card.Title>
        <Card.Text>
          {movie?.Released}
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',border:"1px solid white",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className='mx-2'>
      <Card.Body>
        <Card.Title>Actors</Card.Title>
        <Card.Text>
          {movie?.Actors}
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',border:"1px solid white",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className='mx-2'>
      <Card.Body>
        <Card.Title>IMDB Rating</Card.Title>
        <Card.Text>
          {movie?.imdbRating}
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      
      
    ):(
      <>No Data Found</>
    )
      
    
   }

    

    
      

      </div>
    


      


    </>
  )
}

export default Movies