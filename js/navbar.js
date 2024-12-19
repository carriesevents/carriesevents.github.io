// Create and inject the navbar HTML
const navbarHtml = `
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="logo.png" alt="Carrie's Events">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="mobile-nav-header">
          <img src="logo.png" alt="Carrie's Events" class="mobile-logo">
          <button class="close-nav" data-toggle="collapse" data-target="#navbarNav">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
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
        </ul>
        <div class="mobile-nav-footer">
          <div class="social-links">
            <a href="https://www.facebook.com/carrie.harkiss/" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/carrieharkiss" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
`;

// Inject the navbar
document.getElementById('navbar').innerHTML = navbarHtml;

// Add active class to current page
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
      if (link.closest('.dropdown-menu')) {
        link.closest('.nav-item').querySelector('.nav-link').classList.add('active');
      }
    }
  });
  
  dropdownItems.forEach(item => {
    if (item.getAttribute('href') === currentPage) {
      item.classList.add('active');
      item.closest('.nav-item').querySelector('.nav-link').classList.add('active');
    }
  });
});

// Handle mobile navigation
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const toggler = document.querySelector('.navbar-toggler');
  const closeNav = document.querySelector('.close-nav');
  
  // Add scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Handle mobile menu open/close
  toggler.addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
    navbarCollapse.classList.toggle('show');
  });
  
  closeNav.addEventListener('click', function() {
    document.body.classList.remove('nav-open');
    navbarCollapse.classList.remove('show');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (document.body.classList.contains('nav-open') && 
        !e.target.closest('.navbar-collapse') && 
        !e.target.closest('.navbar-toggler')) {
      document.body.classList.remove('nav-open');
      navbarCollapse.classList.remove('show');
    }
  });
  
  // Handle dropdown on mobile
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('show');
      }
    });
  });
}); 