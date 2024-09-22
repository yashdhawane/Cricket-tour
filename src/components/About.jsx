import React from 'react'

export default function About() {
  return (
    <>
        <section class="about-us py-5">
  <div class="container">
    <div class="row">
      {/* <!-- Left Side: Image or Video --> */}
      <div class="col-md-6 mb-4">
        <img src="path_to_image_or_video.jpg" alt="About Us Image" class="img-fluid rounded"/>
      </div>

      {/* <!-- Right Side: About Us Content --> */}
      <div class="col-md-6">
        <h2 class="mb-4">About Us</h2>
        <p>
          At <strong>National Cricket League</strong>, we are passionate about organizing world-class cricket tournaments that bring together teams from across the country. With over <strong>9+ years</strong> of experience, we have successfully conducted more than <strong>7600</strong> matches, reaching out to <strong>20 states</strong> and thousands of talented players.
        </p>
        <p>
          Our mission is to provide a platform for aspiring cricketers to showcase their talent, while promoting sportsmanship, teamwork, and excellence. We focus on creating competitive yet enjoyable experiences for teams, fans, and local communities alike.
        </p>
        <p>
          With a dedicated team and a strong presence on social media, including <strong>194,000 followers</strong> on Instagram, we strive to connect cricket lovers and grow the game in every corner of the country.
        </p>
        <a href="contact.html" class="btn btn-primary mt-3">Contact Us</a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
