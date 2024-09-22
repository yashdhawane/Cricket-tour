import React from 'react'
import "./Upcoming.css"

export default function Upcoming() {
  return (
    
<>
<section class="upcoming-tournaments py-5">
  <div class="container">
    <h2 class="text-center mb-4">Upcoming Tournaments</h2>
    <div class="row">
      {/* <!-- Tournament Card 1 --> */}
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Summer Championship</h5>
            <p class="card-text"><strong>Format:</strong> T20</p>
            <p class="card-text"><strong>Venue:</strong> Eden Gardens, Kolkata</p>
            <p class="card-text"><strong>Date:</strong> October 10, 2024</p>
            <a href="#" class="btn btn-primary">Register</a>
          </div>
        </div>
      </div>

      {/* <!-- Tournament Card 2 --> */}
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Winter League</h5>
            <p class="card-text"><strong>Format:</strong> One-Day</p>
            <p class="card-text"><strong>Venue:</strong> Wankhede Stadium, Mumbai</p>
            <p class="card-text"><strong>Date:</strong> November 15, 2024</p>
            <a href="#" class="btn btn-primary">Register</a>
          </div>
        </div>
      </div>

      {/* <!-- Tournament Card 3 --> */}
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Spring Knockout</h5>
            <p class="card-text"><strong>Format:</strong> Knockout</p>
            <p class="card-text"><strong>Venue:</strong> Chinnaswamy Stadium, Bengaluru</p>
            <p class="card-text"><strong>Date:</strong> December 05, 2024</p>
            <a href="#" class="btn btn-primary">Register</a>
          </div>
        </div>
      </div>

    </div>

    <div class="text-center mt-4">
      <button id="showMoreBtn" class="btn btn-outline-primary">Show More</button>
    </div>
  </div>
</section>


</>

)
}
