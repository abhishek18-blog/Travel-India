import { renderNavbar } from './navbar.js';
import { destinations } from './tour.js';

export function renderHome() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
<div class="min-h-screen bg-slate-50 overflow-x-hidden">
  
  <!-- HERO SECTION -->
  <div class="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden bg-black">
    <div class="absolute inset-0 z-0">
      <div class="w-full h-full bg-cover bg-center bg-no-repeat opacity-70 md:opacity-80"
           style="background-image: url('https://www.itl.cat/pngfile/big/8-86237_beautiful-pictures-4k-hd.jpg'); 
                  animation: slow-zoom 20s infinite alternate ease-in-out;">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black"></div>
    </div>

    <div class="relative z-50">
      ${renderNavbar()}
    </div>
    
    <div class="relative z-10 flex h-[70%] flex-col items-center justify-center px-4 md:px-6">
      <div class="w-full text-center">
        <div class="overflow-hidden mb-2">
          <p class="text-amber-400 font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm animate-slide-up">
            Discover the Heritage
          </p>
        </div>
        <h1 class="text-8xl md:text-9xl font-bold leading-[0.8] tracking-tighter">
  TRAVEL <br> INDIA
</h1>
        <div class="mx-auto max-w-2xl mt-6 md:mt-8 px-4">
          <p class="text-base md:text-2xl font-light leading-relaxed text-white/90 drop-shadow-lg italic">
            "The land of diversity, where every mile tells a story."
          </p>
        </div>
      </div>
    </div>

    <!-- REFINED SLIM STATS BAR - Responsive Grid -->
    <div class="absolute bottom-0 left-0 w-full z-20 h-auto bg-white/10 backdrop-blur-xl flex items-center justify-around px-2 py-4 md:py-6 border-t border-white/10">
      <div class="text-center group cursor-pointer flex-1">
        <div class="text-white mb-1 transform group-hover:scale-110 transition-transform duration-300">
          <span class="text-xl md:text-2xl">✈️</span>
        </div>
        <p class="text-lg md:text-xl font-bold text-white leading-tight">150+</p>
        <p class="text-[9px] md:text-[10px] text-white/60 uppercase tracking-widest font-bold">Destinations</p>
      </div>

      <div class="text-center group cursor-pointer border-x border-white/10 px-2 flex-1">
        <div class="text-white mb-1 transform group-hover:scale-110 transition-transform duration-300">
          <span class="text-xl md:text-2xl">🛡️</span>
        </div>
        <p class="text-lg md:text-xl font-bold text-white leading-tight">Secure</p>
        <p class="text-[9px] md:text-[10px] text-white/60 uppercase tracking-widest font-bold">Booking</p>
      </div>

      <div class="text-center group cursor-pointer flex-1">
        <div class="text-white mb-1 transform group-hover:scale-110 transition-transform duration-300">
          <span class="text-xl md:text-2xl">⭐</span>
        </div>
        <p class="text-lg md:text-xl font-bold text-white leading-tight">4.9/5</p>
        <p class="text-[9px] md:text-[10px] text-white/60 uppercase tracking-widest font-bold">User Rating</p>
      </div>
    </div>
  </div>

  <!-- TRENDING DESTINATIONS GRID -->
  <section class="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
      <div class="text-center md:text-left">
        <h6 class="text-amber-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Curated for you</h6>
        <h2 class="text-3xl md:text-5xl font-black text-slate-900">Trending Now</h2>
      </div>
      <button onclick="window.renderTours()" class="text-slate-900 font-bold border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition-colors mx-auto md:mx-0">
        View All Destinations →
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <!-- Card 1 -->
      <div class="group relative h-[350px] md:h-[450px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl cursor-pointer">
        <img src="https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080.jpg" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-6 left-6 md:bottom-8 md:left-8">
          <span class="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white uppercase tracking-widest mb-2 inline-block">Architecture</span>
          <h3 class="text-xl md:text-2xl font-bold text-white mb-1">Taj Mahal, Agra</h3>
          <p class="text-white/70 text-xs md:text-sm">Experience the symbol of love.</p>
        </div>
      </div>
       <!-- Card 2 -->
      <div  class="group relative h-[350px] md:h-[450px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl cursor-pointer">
        <img src="https://media.worldnomads.com/Explore/india/kerala-backwaters-canoe-istock.jpg" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-6 left-6 md:bottom-8 md:left-8">
          <span class="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white uppercase tracking-widest mb-2 inline-block">Architecture</span>
          <h3 class="text-xl md:text-2xl font-bold text-white mb-1">Backwaters, Kerala</h3>
          <p class="text-white/70 text-xs md:text-sm">Experience the natural breeze of the backwaters.</p>
        </div>
      </div>
      <!-- Card 3 -->
      <div  class="group relative h-[350px] md:h-[450px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl cursor-pointer">
        <img src="https://servdharm.com/cdn/shop/articles/Wallpaper_900x.jpg?v=1694405183" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-6 left-6 md:bottom-8 md:left-8">
          <span class="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white uppercase tracking-widest mb-2 inline-block">Spiritual</span>
          <h3 class="text-xl md:text-2xl font-bold text-white mb-1">Varanasi, UP</h3>
          <p class="text-white/70 text-xs md:text-sm">Connect with the soul of India.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MID-PAGE BANNER -->
  <section class="relative w-full h-[300px] md:h-[400px] overflow-hidden mt-12 md:mt-20">
    <div class="absolute inset-0 bg-fixed bg-cover bg-center" style="background-image: url('https://www.abirpothi.com/wp-content/uploads/2024/08/Courtesy-Thailand-Tour-Packages.jpg');"></div>
    <div class="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
    <div class="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
      <h2 class="text-white text-3xl md:text-6xl font-black mb-6 uppercase tracking-tight">Beyond Boundaries</h2>
      <button onclick="window.renderTours()" class="bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold hover:bg-amber-400 transition-all transform hover:scale-105">
        Start Planning Now
      </button>
    </div>
  </section>

  <!-- MAP & CONTENT SECTIONS -->
  <div class="bg-white py-16 md:py-24">
    <section class="max-w-7xl mx-auto px-4 md:px-6 mb-20 md:mb-32">
      <div class="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
        <div class="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
          <div class="relative inline-block lg:block">
            <div class="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-amber-100 rounded-full z-0 hidden md:block"></div>
            <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 relative z-10 leading-tight">
              Echoes of the Past<br class="hidden md:block"/><span class="text-amber-600"> A Journey Through India’s Timeless Monuments</span>
            </h2>
            <p class="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
Step back in time and experience the grandeur of India’s most iconic historic sites.
 This journey takes you beyond the ordinary, inviting you to explore the formidable fortresses, 
 sprawling palace complexes, and sacred architectural wonders that form the backbone of Indian heritage.
  Witness the structural genius of medieval engineers in the Deccan, the delicate artistry of the Rajput courts,
   and the cosmic geometry of ancient eastern temples.  Your adventure into the heart of history begins here.            
   </p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-4">
              <div class="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-900">
                <span class="w-2 h-2 bg-amber-500 rounded-full"></span> Historic Sites
              </div>
              <div class="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-900">
                <span class="w-2 h-2 bg-amber-500 rounded-full"></span> Luxury Stays
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 order-1 lg:order-2 w-full">
          <div class="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-slate-50 transform lg:rotate-2 transition-transform hover:rotate-0 duration-500">
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=1xcc9jUHdtKeaAyxpWLQsnHVk6d6lQE4&ehbc=2E312F&noprof=1"
              class="w-full h-72 md:h-[500px] border-0"
              allowfullscreen 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
        <div class="lg:w-1/2 w-full">
          <div class="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-slate-50 transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=1o1GpcDhjpUXDrFf4yPqYgb1qiBW99H4&ehbc=2E312F&noprof=1"
              class="w-full h-72 md:h-[500px] border-0"
              allowfullscreen 
              loading="lazy">
            </iframe>
          </div>
        </div>
        <div class="lg:w-1/2 text-center lg:text-left">
          <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
            Into the Wild <br class="hidden md:block"/><span class="text-green-600">Exploring India’s Untamed Sanctuaries</span>
          </h2>
          <p class="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
Venture beyond the city gates into India’s vast wilderness, where nature remains in its purest form.
 From the tiger-tracked jungles of the North to the lush, elephant-inhabited forests of the South and the vibrant coastal
 wetlands of the East, India’s sanctuaries offer a front-row seat to the world’s most iconic biodiversity.          </p>
          <ul class="space-y-4 text-left inline-block lg:block">
            <li class="flex items-start gap-4">
              <span class="bg-blue-100 text-blue-600 p-1 rounded-md">✓</span>
              <p class="text-slate-700 font-medium text-sm md:text-base">Verified local expert guides</p>
            </li>
            <li class="flex items-start gap-4">
              <span class="bg-blue-100 text-blue-600 p-1 rounded-md">✓</span>
              <p class="text-slate-700 font-medium text-sm md:text-base">Safe Wildlife Safaris</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

  <!-- FOOTER -->
  <footer class="bg-slate-900 text-white pt-16 md:pt-20 pb-10">
    <div class="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 border-b border-white/10 pb-12 mb-12">
      <div class="col-span-1 sm:col-span-2">
        <h2 class="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter">Travel India</h2>
        <p class="text-slate-400 max-w-sm leading-relaxed mb-6 text-sm md:text-base">
          We curate authentic experiences that go beyond sightseeing. Join us to explore hidden gems.
        </p>
        <div class="flex gap-4">
          <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer text-xs">FB</div>
          <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer text-xs">IG</div>
          <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer text-xs">TW</div>
        </div>
      </div>
      <div>
        <h4 class="font-bold mb-6 text-amber-500 uppercase tracking-widest text-[10px] md:text-xs">Explore</h4>
        <ul class="space-y-3 md:space-y-4 text-slate-400 text-sm md:text-base">
          <li onclick="window.renderTours()" class="hover:text-white transition-colors cursor-pointer">Destinations</li>
          <li class="hover:text-white transition-colors cursor-pointer">Packages</li>
          <li class="hover:text-white transition-colors cursor-pointer">Guides</li>
          <li class="hover:text-white transition-colors cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-6 text-amber-500 uppercase tracking-widest text-[10px] md:text-xs">Newsletter</h4>
        <div class="flex">
          <input type="email" placeholder="Your email" class="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg w-full outline-none focus:border-amber-500 text-sm" />
          <button class="bg-amber-500 text-slate-900 px-4 py-2 rounded-r-lg font-bold text-sm">Go</button>
        </div>
      </div>
    </div>
    <div class="text-center text-slate-500 text-[10px] md:text-xs px-4">
      © 2025 Travel India. Designed for the Explorer.
    </div>
  </footer>

</div>

<style>
@keyframes slow-zoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}

@keyframes slide-up {
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes reveal {
  0% { transform: translateY(40px); opacity: 0; filter: blur(10px); }
  100% { transform: translateY(0); opacity: 1; filter: blur(0); }
}

.animate-slide-up { animation: slide-up 1s ease-out forwards; }
.animate-reveal { animation: reveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.delay-200 { animation-delay: 0.2s; }

/* Custom Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0f172a; }
::-webkit-scrollbar-thumb { background: #f59e0b; border-radius: 10px; }

/* Smooth scroll for the whole app */
html { scroll-behavior: smooth; }
</style>
  `;
}
