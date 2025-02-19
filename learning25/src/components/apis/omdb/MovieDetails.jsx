import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../../../assets/Moviedetail.css"

const MovieDetails = () => {

  const id = useParams().id

  const [detail,setdetail] = useState({})
  
  const getMovieDetails = async()=>{
    const res =  await axios.get(`http://www.omdbapi.com/?apikey=77285514&i=${id}`)
    setdetail(res.data)
  }
  
  useEffect(()=>{
    getMovieDetails();
  },[])

  
  //using useState Method
  // const [detail, setdetail] = useState(()=>{
  //   const getMovieDetail = async () => {
  //     try{
  //     const res = await axios.get(`http://www.omdbapi.com/?apikey=77285514&i=${id}`)
  //     console.log(res.data);
  //     setdetail(res.data);
  //     }
  //     catch(error){
  //       console.error("Data not coming",error)
  //     }
  //   }

  //   getMovieDetail();
  //   return{};
  // });


  return (
    <>
      <div className='main text-white'>
        {/* <button className='btn btn-dark my-5' onClick={() => { getMovieDetails() }}>CLICK </button> */}
        <div className="container ">
          <div className='p-4 d-flex justify-content-between '>
            <div>
              <h1 className='fs-1'>{detail.Title}</h1>
              <p className='fs-5'>{detail.Year} - {detail.Rated} - {detail.Runtime}</p>
            </div>
            <div className='d-flex justify-content-center vstack gap-4'>
              <div className='mx-3 text-center'>
                <strong className=''>imdb rating</strong>
                <h2 className="bi bi-star-fill text-warning "> {detail.imdbRating}/10</h2>
              </div>
              <div className='mx-3 text-center' >
                <strong>Your Rating</strong>
                <h2 className='bi bi-star text-primary' >Rate</h2>
              </div>
              <div className='mx-3 text-center ' >
                <strong>POPULARITY</strong>
                <h2 className='bi bi-graph-down-arrow text-danger' >557</h2>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='d-flex justify-content-between vstack gap-3'>
              <img className='d-block rounded-5 float-start  ' src={detail.Poster} />
              <div>
                <div className='box  border border-dark-subtle rounded-4 text-center '> <i class="bi bi-play-circle-fill "></i><p> 37 videos</p> </div>
                <div className='box  border border-dark-subtle rounded-4 text-center' > <i class="bi bi-image "></i><p> 99+ Images</p> </div>
              </div>

            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <div className='my-2 mx-3 py-5 text-justify w-75  '>
              <p className='border-bottom p-3'>{detail.Plot}</p>
              <p className='border-bottom p-3'>Director : <strong className='text-primary mx-4'>{detail.Director}</strong></p>
              <p className='border-bottom p-3'>Writer : <strong className='text-primary mx-4' > {detail.Writer}</strong></p>
              <p className='border-bottom p-3'>Stars : <strong className='text-primary mx-4'> {detail.Actors}</strong></p>
            </div>
            <div className='mx-4 my-2 py-5 text-justify w-25 '>
              <p className='text-warning '>RENT/BUY</p>
              <div className='mt-3 text-center w-50 rounded' >
                <img className='w-100 rounded' src="https://images.indianexpress.com/2022/11/prime-video-disable-ads.jpg?w=414" />
                <p className='p-text text-center'>from Rs.199</p> </div>
              <button className='mt-4 watchlist w-100 bg-warning p-3  '>
                <h2 className="bi bi-plus "></h2>
                <div className='mx-3'>
                  <strong>Add to watchlist</strong> <br></br>
                  <i>added by 612k users</i>
                </div>
              </button>
              <div className='mt-4 text-primary my-3'>
                <p><strong>3.8K</strong> User reviews</p>
                <p><strong>386</strong> Critic reviews</p>
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className='container my-4  ' >
        <div className='w-75 p-3 border border-warning d-flex justify-content-between align-items-center'>
          <p>Awards : {detail.Awards}</p>
          <h5 className='bi bi-chevron-right'></h5>
        </div>

        <div className='my-5'>
          <h2 className='Title'><strong>Details</strong></h2>
          <div className='details my-5'>
            <p>Reales date <span className='text-primary'> {detail.Released} </span></p>
            <p>Country of origin <span className='text-primary'> {detail.Country} </span></p>
            <p>languages <span className='text-primary'> {detail.Language} </span></p>
            <p>Genre <span className='text-primary'> {detail.Genre} </span></p>
            <p>Box Office collection <span className='text-primary'> {detail.BoxOffice} </span></p>
            <p> Official website <span className='text-primary'> {detail.Website} </span> </p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default MovieDetails
