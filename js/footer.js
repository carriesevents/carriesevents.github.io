document.addEventListener('DOMContentLoaded', function() {
  const footer = document.getElementById('footer');
  if (footer) {
    const footerHtml = `
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-4">
              <h4 class="footer-title">About Us</h4>
              <p>Carrie's Events specializes in creating magical moments with our stunning event rentals and decorations.</p>
            </div>
            <div class="col-md-4 mb-4">
              <h4 class="footer-title">Quick Links</h4>
              <ul class="footer-links">
                <li><a href="candycart.html">Products</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="col-md-4 mb-4">
              <h4 class="footer-title">Connect With Us</h4>
              <div class="social-links">
                <a href="https://www.facebook.com/carrie.harkiss/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/carrieharkiss" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest"></i></a>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <small>Copyright © 2024 Carrie's Events. All rights reserved.</small>
          </div>
        </div>
      </footer>
    `;
    footer.innerHTML = footerHtml;
  }
}); 