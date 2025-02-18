import axios from 'axios'
import React, { useState } from 'react'
import {  Link } from 'react-router-dom'

const SearchMovie = () => {
    const [search,setSearch] = useState("")
    const [movies ,setMovies] = useState([])

    const searchMovies =async () =>{
        const res =await axios.get(`http://www.omdbapi.com/?apikey=77285514&s=${search}`)
        console.log(res.data)
        setMovies(res.data.Search)
    }

  return (
    <div style={{textAlign:"center"}}>
        <div className='my-4'>
            <input type='text' onChange={(event)=>{setSearch(event.target.value)}}></input> 
            <button className='btn btn-dark mx-3' onClick={searchMovies}>Search </button>
        </div>
        <div className='container my-5'>
            <div className='row'>
                {
                    movies?.map((movie)=>{
                      return (
                      <div className='container col-4'>
                        <div className='border border-secondary m-4 '>
                            <Link to={`/moviedetails/${movie.imdbID}`}>
                                <img src={movie.Poster}></img>
                            </Link>     
                         <h6>{movie.Title}</h6>
                         <p>{movie.imdbID}</p>
                        </div>
                      </div>
                      ) 
                    })
                   
                }
                
            </div>

        </div>
    </div>
  )
}

export default SearchMovie
