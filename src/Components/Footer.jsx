import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'


function Footer() {

 

    

  return (
    <>
    <MDBFooter style={{backgroundColor:"rgb(27, 27, 78)"}} className='text-center text-lg-left fixed-bottom '>
      <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light text-decoration-none' href='https://mdbootstrap.com/'>
          CinemaWorld.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer