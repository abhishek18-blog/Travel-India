import { renderHome } from './home.js';
import { renderTours } from './tour.js';
import { renderBooking } from './booking.js';
import { renderAboutUs } from './aboutus.js';
import { renderContact } from './contact.js';
//import { initLeafletMap } from './main.js';

// Expose functions globally for navbar navigation
window.renderHome = renderHome;
window.renderTours = renderTours;
window.renderBooking = renderBooking;
window.renderAboutUs = renderAboutUs;
window.renderContact = renderContact;

// main.js - TINY scroll listener
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      document.querySelectorAll('.scroll-reveal').forEach((el, i) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
          setTimeout(() => el.classList.add('visible'), i * 150);
        }
      });
      ticking = false;
    });
    ticking = true;
  }
});




// SINGLE CALL - render THEN init
renderHome();


// After renderHome()
renderHome();
window.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-reveal').forEach((el, i) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.75 && !el.classList.contains('visible')) {
      setTimeout(() => el.classList.add('visible'), i * 200);
    }
  });
});

initScrollReveal();  // DELETE the duplicate renderHome()
//initLeafletMap('india-map');
