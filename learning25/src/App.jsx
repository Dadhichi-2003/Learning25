import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import { ArrayDemo1 } from './components/ArrayDemo1'
import ArrayDemo2 from './components/ArrayDemo2'
import ArrayDemo3 from './components/ArrayDemo3'
import ArrayDemo4 from './components/ArrayDemo4'
import ArrayDemo5 from './components/ArrayDemo5'
import ArrayDemo6 from './components/ArrayDemo6'
import UseStateDemo1 from './components/UseStateDemo1'
import UseStateDemo2 from './components/UseStateDemo2'
import InputDemo1 from './components/InputDemo1'
import InputDemo2 from './components/InputDemo2'
import InputDemo3 from './components/InputDemo3'
import { Route, Routes } from 'react-router-dom'
import HotstartWelcome from './components/hotstar/HotstartWelcome'
import HotstartHome from './components/hotstar/HotstartHome'
import HotstarMovies from './components/hotstar/HotstarMovies'
import Error404 from './components/hotstar/Error404'
import Play from './components/hotstar/Play'
import FormDemo1 from './components/forms/FormDemo1'
import FormDemo2 from './components/forms/FormDemo2'
import FormDemo3 from './components/forms/FormDemo3'
import FormDemo4 from './components/forms/FormDemo4'
import FormDemo5 from './components/forms/FormDemo5'
import FormDemo6 from './components/forms/FormDemo6'
import FormDemo7 from './components/forms/FormDemo7'
import FormDemo8 from './components/forms/FormDemo8'
import StudentDetailForm from './components/forms/StudentDetailForm'
import ApiDemo1 from './components/apis/ApiDemo1'
import SearchMovie from './components/apis/omdb/SearchMovie'
import apiDemo2 from './components/apis/apiDemo2'
import MovieDetails from './components/apis/omdb/MovieDetails'
import ApiDemo2 from './components/apis/apiDemo2'
import ApiDemo3 from './components/apis/ApiDemo3'
import UseEffectDemo from './components/UseEffectDemo'

function App() {
   

  return (
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={<HotstartWelcome/>}/>
        <Route path="/home" element={<HotstartHome/>}/>
        <Route path="/movies" element={<HotstarMovies/>}/>
        <Route path="/play/:id" element={<Play/>}/>
        <Route path="/formdemo1" element={<FormDemo1/>}/>
        <Route path="/formdemo2" element={<FormDemo2/>}/>
        <Route path="/formdemo3" element={<FormDemo3/>}/>
        <Route path="/formdemo4" element={<FormDemo4/>}/>
        <Route path="/formdemo5" element={<FormDemo5/>}/>
        <Route path="/formdemo6" element={<FormDemo6/>}/>
        <Route path="/formdemo7" element={<FormDemo7/>}/>
        <Route path="/formdemo8" element={<FormDemo8/>}/>
        <Route path="/studentform" element={<StudentDetailForm/>}/>
        <Route path="/apidemo1" element={<ApiDemo1/>}/>
        <Route path="/searchMovie" element={<SearchMovie/>}/>
        <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
        <Route path="/apidemo2" element={<ApiDemo2/>}/>
        <Route path="/useeffect" element={<UseEffectDemo/>}/>
        <Route path="/apidemo3" element={<ApiDemo3/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
      
    
     
    

    </>
  )
}

export default App
