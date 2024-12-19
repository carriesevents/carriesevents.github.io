// Function to load HTML components
function loadComponent(url, elementId) {
  const element = $(`#${elementId}`);
  if (element.length === 0) {
    console.error(`Element with id '${elementId}' not found`);
    return;
  }

  element.load(url, function(response, status, xhr) {
    if (status === 'error') {
      console.error(`Error loading ${url}: ${xhr.status} ${xhr.statusText}`);
      element.html(`<div class="alert alert-danger">Error loading ${elementId}</div>`);
      return;
    }

    // Re-initialize dropdown functionality after loading navbar
    if (elementId === 'navbar') {
      $('.dropdown-toggle').dropdown();

      // Set active states for navigation
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
}

// Load components when the DOM is ready
$(document).ready(function() {
  console.log('Loading components...');
  loadComponent('components/navbar.html', 'navbar');
  loadComponent('components/footer.html', 'footer');
}); 