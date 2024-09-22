import React from 'react'
// import "./Hero.css"
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
    
    {/* <div className="container">
     <nav class="navbar navbar-expand-sm bg-light navbar-light bg-transparent">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">Logo</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <div>
    <button className='btn btn-success me-2'>Signup</button>
    <button className='btn btn-success'>Signup</button>
    </div>
    

  </div>
</nav>
<div className="hero-image">
        <div class="hero-text">
            <h1 class="display-4">Welcome to Our Website</h1>
            <p class="lead">Discover amazing content here</p>
            <a href="#" class="btn btn-primary btn-lg">Learn More</a>
        </div>
    </div>

</div> */}

<div className="hero-container">
      <div className="hero-image"></div>
      <div className="hero-content">
        <div className="container py-4">
      {/* <nav class="navbar navbar-expand-sm bg-light navbar-light bg-transparent custom-navbar"> */}
      <nav class="navbar navbar-expand-sm custom-navbar">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">Logo</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <div>
    <button className='btn btn-success me-2'>Signup</button>
    <button className='btn btn-success'>Signup</button>
    </div>
    

  </div>
</nav>
</div>
       
        <div className="hero-text">
          <h1 className="display-1 ">Unleash<br></br>your potential</h1>
          <p className="lead">Cricket Tournament for aspiring Cricketer</p>
          <a href="#" className="btn register-btn btn-lg">Register now</a>
        </div>
        
      </div>
    </div>
    </>
  )
}
