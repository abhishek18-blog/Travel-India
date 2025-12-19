import { renderNavbar } from './navbar.js';

export function renderAboutUs() {
    const app = document.querySelector('#app');
    app.innerHTML = ''; // Clear previous content

    // Render Navbar
    renderNavbar();

    // About Us content
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'py-12');
    aboutSection.innerHTML = `
          ${renderNavbar()}

        <h1 class="text-4xl font-bold mb-4">About Us</h1>
        <p class="text-lg text-gray-700">
            Welcome to our company! We are dedicated to providing the best services and solutions to our clients. 
            Our team of experts works tirelessly to innovate and deliver excellence in every project.
        </p>
    `;

    app.appendChild(aboutSection);
}
