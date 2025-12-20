import { destinations, renderTours } from './tour.js';
import { renderNavbar } from './navbar.js';


/**
 * Renders the Booking Page for a specific destination.
 * This version uses direct event listeners to ensure the "Back" 
 * navigation works reliably every time.
 */
export function renderBooking(tourId) {
  const app = document.querySelector('#app');
  const tour = destinations.find(t => t.id === tourId);


  if (!app || !tour) return;


  // Ensure the user starts at the top of the booking form
  window.scrollTo({ top: 0, behavior: 'smooth' });


  // Robust parsing: extract only digits from strings like "₹4,500" to prevent NaN
  const basePrice = parseInt(tour.price.replace(/[^0-9]/g, '')) || 0;


  app.innerHTML = `
    <div class="min-h-screen bg-slate-50 overflow-x-hidden font-sans">
      <div class="bg-slate-900 shadow-xl">
        ${renderNavbar()}
      </div>


      <div class="max-w-6xl mx-auto px-6 py-16">
        <!-- Return Navigation - Now using an ID for a reliable listener -->
        <button id="btn-back-to-tours" class="group flex items-center gap-3 mb-10 text-slate-500 hover:text-amber-600 font-bold transition-all cursor-pointer bg-transparent border-none outline-none">
          <span class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
            <span class="transform group-hover:-translate-x-1 transition-transform">←</span>
          </span>
          Return to Destinations
        </button>


        <div class="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2 border border-slate-100 animate-reveal">
          
          <!-- Destination Hero Section -->
          <div class="relative h-80 lg:h-auto overflow-hidden">
            <img src="${tour.image}" class="absolute inset-0 h-full w-full object-cover" alt="${tour.name}">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-12 flex flex-col justify-end">
              <div class="backdrop-blur-md bg-white/10 border border-white/20 self-start px-4 py-1 rounded-full mb-4">
                 <span class="text-amber-400 text-[10px] font-black uppercase tracking-widest">${tour.tag}</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">${tour.name}</h2>
              <div class="flex items-center gap-3">
                <p class="text-amber-400 text-3xl font-black">${tour.price}</p>
                <span class="text-white/60 text-sm font-medium">per person</span>
              </div>
            </div>
          </div>


          <!-- Booking Form Section -->
          <div class="p-10 md:p-16 bg-white">
            <div class="mb-10">
              <h3 class="text-3xl font-black text-slate-900 mb-2 tracking-tight">Confirm Booking</h3>
              <p class="text-slate-500 font-medium">Secure your spot for this curated Indian heritage experience.</p>
            </div>


            <form id="bookingForm" class="space-y-6">
              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">Full Name</label>
                <input required type="text" placeholder="e.g. Advait Sharma" 
                       class="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all font-medium">
              </div>


              <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">Email Address</label>
                <input required type="email" placeholder="advait@example.com" 
                       class="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all font-medium">
              </div>


              <div class="grid grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">Travel Date</label>
                  <input required type="date" 
                         class="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all font-medium">
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">Travellers</label>
                  <input id="guests" type="number" min="1" value="1" 
                         class="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all font-bold">
                </div>
              </div>


              <div class="mt-10 p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
                <div class="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
                
                <div class="relative z-10 flex flex-col gap-4">
                  <div class="flex justify-between items-center text-slate-400 text-sm font-medium">
                    <span>Base Price (x <span id="guestCount">1</span>)</span>
                    <span class="font-mono text-white">${tour.price}</span>
                  </div>
                  <div class="h-px bg-white/10 w-full"></div>
                  <div class="flex justify-between items-end">
                    <span class="text-slate-300 font-bold uppercase tracking-widest text-[10px]">Grand Total</span>
                    <span id="totalAmount" class="text-4xl font-black text-amber-500 tracking-tighter">₹${basePrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>


              <button type="submit" class="w-full bg-amber-500 text-slate-900 py-5 rounded-2xl font-black text-lg hover:bg-amber-400 hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3">
                Secure My Journey <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>


    <style>
      @keyframes reveal {
        0% { transform: translateY(30px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      .animate-reveal { animation: reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    </style>
  `;


  // --- ATTACH EVENT LISTENERS ---


  // 1. Back button listener (The Fix)
  const backBtn = document.getElementById('btn-back-to-tours');
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      renderTours(); // Calls the function from tour.js
    });
  }


  // 2. Real-time price calculation
  const guestsInput = document.getElementById('guests');
  const guestCountDisplay = document.getElementById('guestCount');
  const totalAmountDisplay = document.getElementById('totalAmount');


  function updatePricing() {
    const count = Math.max(1, parseInt(guestsInput.value) || 1);
    const total = basePrice * count;


    guestCountDisplay.textContent = count;
    totalAmountDisplay.textContent = `₹${total.toLocaleString()}`;
  }


  if (guestsInput) {
    guestsInput.addEventListener('input', updatePricing);
  }


  // 3. Form Submission Handling
  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Create and show success modal
      const successOverlay = document.createElement('div');
      successOverlay.className = "fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md px-6";
      successOverlay.innerHTML = `
        <div class="bg-white p-12 rounded-[3.5rem] text-center max-w-md shadow-2xl animate-reveal border border-slate-100">
          <div class="w-24 h-24 bg-amber-100 text-5xl flex items-center justify-center rounded-full mx-auto mb-8 animate-bounce">
            ✨
          </div>
          <h4 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">Booking Confirmed!</h4>
          <p class="text-slate-600 font-medium mb-10 leading-relaxed">
            Your reservation for <b>${tour.name}</b> is complete. We've sent your travel documents to your email.
          </p>
          <button id="btn-success-close" class="w-full py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-amber-400 hover:text-slate-900 transition-all shadow-xl cursor-pointer">
            Return to Destinations
          </button>
        </div>
      `;
      document.body.appendChild(successOverlay);
      
      // Listener for modal close
      document.getElementById('btn-success-close').addEventListener('click', () => {
        document.body.removeChild(successOverlay);
        renderTours();
      });
    });
  }
}


// Ensure the function is globally available just in case of inline calls elsewhere
window.renderBooking = renderBooking;

