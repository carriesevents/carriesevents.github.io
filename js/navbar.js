document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const navbarHtml = `
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="images/logo.PNG" alt="Carrie's Events">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-toggle="dropdown">
                  Products
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="candycart.html">Candy Cart</a>
                  <a class="dropdown-item" href="smallcandycart.html">Small Candy Cart</a>
                  <a class="dropdown-item" href="donutwall.html">Donut Wall</a>
                  <a class="dropdown-item" href="flowerwall.html">Flower Wall</a>
                  <a class="dropdown-item" href="mirror.html">Welcome Mirror</a>
                  <a class="dropdown-item" href="snackbar.html">Snack Bar</a>
                  <a class="dropdown-item" href="moongate.html">Moongate Arch</a>
                  <a class="dropdown-item" href="shotwall.html">Shot Wall</a>
                  <a class="dropdown-item" href="babyblocks.html">Baby Blocks</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="gallery.html">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
    navbar.innerHTML = navbarHtml;

    // Set active states
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
    
    dropdownItems.forEach(item => {
      if (item.getAttribute('href') === currentPage) {
        item.classList.add('active');
        item.closest('.nav-item').querySelector('.nav-link').classList.add('active');
      }
    });
  }
}); 