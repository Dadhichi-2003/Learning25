import React from 'react'
import { Link } from 'react-router-dom'


const HotstarMovies = () => {
  return (
    <div style={{"textAlign":"center","backgroundColor":"black",marginTop:"20px" ,color:"white"}}>
    <h1>MOVIES PAGE.... </h1>

    <ul style={{color:'white'}}>
      <li> <Link to="/play/pushpa" >Pushpa</Link></li>
      <li> <Link to="/play/radhe" >radhe</Link></li>
      <li> <Link to="/play/kapil" >kapil </Link></li>
      <li> <Link to="/play/something" >Something</Link></li>
    </ul>
</div>
  )
}

export default HotstarMovies
