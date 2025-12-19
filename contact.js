import { renderNavbar } from './navbar.js';

export function renderContact() {
    const app = document.querySelector('#app');
    app.innerHTML = ''; // Clear previous content

    // Render Navbar
    renderNavbar();

    // Contact content
    const contactSection = document.createElement('section');
    contactSection.classList.add('max-w-7xl', 'mx-auto', 'px-4', 'py-12');
    contactSection.innerHTML = `
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="text-lg text-gray-700 mb-6">
            Have questions or want to work with us? Reach out using the form below or via our email.
        </p>
        <form class="space-y-4">
            <input type="text" placeholder="Your Name" class="w-full p-2 border rounded">
            <input type="email" placeholder="Your Email" class="w-full p-2 border rounded">
            <textarea placeholder="Your Message" class="w-full p-2 border rounded"></textarea>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
    `;

    app.appendChild(contactSection);
}
