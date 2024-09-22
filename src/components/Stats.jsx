import React from 'react'
import "./Stats.css"

export default function Stats() {
  return (
    <>
    <section class="stats-section py-5">
  <div class="container">
    <h2 class="text-center mb-4">Our Tournament Stats</h2>
    <div class="row text-center">
      {/* <!-- State Stat --> */}
      <div class="col-md-3 mb-4">
        <div class="card border-0 bg-primary text-white">
          <div class="card-body">
            <h3 class="display-4">20</h3>
            <p class="lead">States</p>
          </div>
        </div>
      </div>
      
      {/* <!-- City Stat --> */}
      <div class="col-md-3 mb-4">
        <div class="card border-0 bg-primary text-white">
          <div class="card-body">
            <h3 class="display-4">50+</h3>
            <p class="lead">Cities</p>
          </div>
        </div>
      </div>
      
      {/* <!-- Tournament Stat --> */}
      <div class="col-md-3 mb-4">
        <div class="card border-0 bg-primary text-white">
          <div class="card-body">
            <h3 class="display-4">7600+</h3>
            <p class="lead">Tournaments Conducted</p>
          </div>
        </div>
      </div>
      
      {/* <!-- Teams Registered Stat --> */}
      <div class="col-md-3 mb-4">
        <div class="card border-0 bg-primary text-white">
          <div class="card-body">
            <h3 class="display-4">194000</h3>
            <p class="lead">Teams Registered</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
