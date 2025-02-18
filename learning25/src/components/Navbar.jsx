import React from "react";
import "../assets/navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/home">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-item nav-link" to="/movies">Movies</Link>
      <Link class="nav-item nav-link" to="/formdemo1">FormDemo1</Link>
      <Link class="nav-item nav-link" to="/formdemo2">FormDemo2</Link>
      {/* <Link class="nav-item nav-link" to="/formdemo3">FormDemo3</Link>
      <Link class="nav-item nav-link" to="/formdemo4">FormDemo4</Link>
      <Link class="nav-item nav-link" to="/formdemo5">FormDemo5</Link>
      <Link class="nav-item nav-link" to="/formdemo6">FormDemo6</Link>
      <Link class="nav-item nav-link" to="/formdemo7">FormDemo7</Link>
      <Link class="nav-item nav-link" to="/formdemo8">FormDemo8</Link> */}
      <Link class="nav-item nav-link" to="/studentform">Student-Form</Link>
      <Link class="nav-item nav-link" to="/apidemo1">apidemo1</Link>
      <Link class="nav-item nav-link" to="/searchMovie">Search-Movie</Link>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
