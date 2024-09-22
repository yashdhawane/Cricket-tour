import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
 <>
 <footer class="footer">
  <div class="footer-nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">FAQs</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </div>
  <hr />
  <div class="footer-bottom container">
    <p>&copy; 2024 Company, Inc</p>
    <div class="social-icons">
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
    </div>
  </div>
</footer>

 </>
  )
}
