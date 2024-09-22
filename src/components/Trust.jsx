import React from 'react'
import "./Trust.css"

export default function Trust() {
  return (
    <>
    <section class="trusted-by py-5">
  <div class="container">
    <div class="row text-center mb-4">
      <div class="col">
        <h2 class="mb-4">Trusted By</h2>
        <p class="lead">We are proudly supported by these prestigious brands</p>
      </div>
    </div>
    
    <div class="row align-items-center justify-content-center">
      {/* <!-- Sponsor 1 --> */}
      <div class="col-md-2 col-6 mb-4">
        <img src="path_to_logo1.png" alt="Sponsor 1" class="img-fluid"/>
      </div>
      {/* <!-- Sponsor 2 --> */}
      <div class="col-md-2 col-6 mb-4">
        <img src="path_to_logo2.png" alt="Sponsor 2" class="img-fluid"/>
      </div>
      {/* <!-- Sponsor 3 --> */}
      <div class="col-md-2 col-6 mb-4">
        <img src="path_to_logo3.png" alt="Sponsor 3" class="img-fluid"/>
      </div>
      {/* <!-- Sponsor 4 --> */}
      <div class="col-md-2 col-6 mb-4">
        <img src="path_to_logo4.png" alt="Sponsor 4" class="img-fluid"/>
      </div>
      {/* <!-- Sponsor 5 --> */}
      <div class="col-md-2 col-6 mb-4">
        <img src="path_to_logo5.png" alt="Sponsor 5" class="img-fluid"/>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
