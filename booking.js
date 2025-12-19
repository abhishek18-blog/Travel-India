import './style.css';
import { destinations } from './tour.js';
import { renderNavbar } from './navbar.js';

export function renderBooking(tourId) {
  const app = document.querySelector('#app');
  const tour = destinations.find(t => t.id === tourId);

  if (!app || !tour) return;

  const basePrice = parseInt(tour.price.replace(/[$,]/g, ''));

  app.innerHTML = `
    <div class="min-h-screen bg-gray-50">
      ${renderNavbar()}

      <div class="mx-auto max-w-7xl px-6 py-12">
        <button onclick="window.renderTours()" class="mb-6 text-sm text-gray-500 hover:text-indigo-600">
          ← Back to Tours
        </button>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">
          
          <div class="relative h-64 lg:h-auto">
            <img src="${tour.image}" class="absolute inset-0 h-full w-full object-cover">
            <div class="absolute inset-0 bg-black/60 p-8 flex items-end">
              <div>
                <h2 class="text-3xl font-bold text-white">${tour.name}</h2>
                <p class="text-indigo-300 text-xl">${tour.price} / person</p>
              </div>
            </div>
          </div>

          <div class="p-10">
            <h3 class="text-2xl font-bold mb-6">Confirm Your Booking</h3>

            <form id="bookingForm" class="space-y-6">
              <input required placeholder="Full Name" class="w-full p-3 border rounded">
              <input required type="email" placeholder="Email" class="w-full p-3 border rounded">

              <div class="grid grid-cols-2 gap-4">
                <input required type="date" class="p-3 border rounded">
                <input id="guests" type="number" min="1" value="1" class="p-3 border rounded">
              </div>

              <div class="bg-gray-100 p-6 rounded-xl">
                <div class="flex justify-between">
                  <span>Guests</span>
                  <span id="guestCount">1</span>
                </div>
                <div class="flex justify-between text-xl font-bold mt-3">
                  <span>Total</span>
                  <span id="totalAmount">$${basePrice.toLocaleString()}</span>
                </div>
              </div>

              <button class="w-full bg-indigo-600 text-white py-3 rounded font-semibold">
                Pay & Book <span id="submitTotal">$${basePrice.toLocaleString()}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  const guestsInput = document.getElementById('guests');
  const guestCount = document.getElementById('guestCount');
  const totalAmount = document.getElementById('totalAmount');
  const submitTotal = document.getElementById('submitTotal');

  function updateTotal() {
    const guests = parseInt(guestsInput.value) || 1;
    const total = basePrice * guests;

    guestCount.textContent = guests;
    totalAmount.textContent = `$${total.toLocaleString()}`;
    submitTotal.textContent = `$${total.toLocaleString()}`;
  }

  guestsInput.addEventListener('input', updateTotal);
  updateTotal();
}
