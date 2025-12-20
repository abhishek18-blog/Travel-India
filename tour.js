
import { renderNavbar } from './navbar.js';

// DATA: Updated with Duration (Days/Nights)
export const destinations = [
  {
    id: 1,
    name: "Taj Mahal, Agra",
    price: "₹15,500",
    duration: "2 Days / 1 Night",
    image: "https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080.jpg",
    description: "The ultimate symbol of love and a UNESCO World Heritage site, glowing in white marble.",
    tag: "Heritage"
  },
  {
    id: 2,
    name: "Jaipur, Rajasthan",
    price: "₹16,200",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    description: "The 'Pink City' known for its majestic Hawa Mahal, Amer Fort, and vibrant royal culture.",
    tag: "Culture"
  },
  {
    id: 3,
    name: "Alleppey, Kerala",
    price: "₹18,000",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=1200&auto=format&fit=crop",
    description: "Serene backwaters, traditional houseboats, and lush palm-fringed lagoons.",
    tag: "Nature"
  },
  {
    id: 4,
    name: "Leh, Ladakh",
    price: "₹55,500",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1200&auto=format&fit=crop",
    description: "Breathtaking mountain passes, turquoise lakes, and ancient Buddhist monasteries.",
    tag: "Adventure"
  },
  {
    id: 5,
    name: "Varanasi, UP",
    price: "₹20,800",
    duration: "3 Days / 2 Nights",
    image: "https://ucarecdn.com/9417736e-28b4-4847-9040-2779bfd508cc/-/crop/2896x1519/0,284/-/resize/1200x630/",
    description: "One of the world's oldest living cities, experience the spiritual Ganga Aarti.",
    tag: "Spiritual"
  },
  {
    id: 6,
    name: "Hampi, Karnataka",
    price: "₹10,400",
    duration: "3 Days / 2 Nights",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/a-journey-through-masthead-hero-1?qlt=82&ts=1727368343764",
    description: "A boulder-strewn landscape of ancient ruins from the Vijayanagara Empire.",
    tag: "History"
  },
  {
    id: 7,
    name: "Palolem, Goa",
    price: "₹11,200",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
    description: "Golden sands and pristine waters. The perfect balance of relaxation and nightlife.",
    tag: "Beach"
  },
  {
    id: 8,
    name: "Udaipur, Rajasthan",
    price: "₹14,500",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?q=80&w=1200&auto=format&fit=crop",
    description: "The 'City of Lakes' offering romantic sunsets and grand palaces atop Lake Pichola.",
    tag: "Luxury"
  },
  {
    id: 9,
    name: "Munnar, Kerala",
    price: "₹16,000",
    duration: "4 Days / 3 Nights",
    image: "https://static.toiimg.com/photo/52005325.cms",
    description: "Rolling hills of emerald tea plantations and refreshing mountain mist.",
    tag: "Nature"
  },
  {
    id: 10,
    name: "Spiti Valley, HP",
    price: "₹40,000",
    duration: "8 Days / 7 Nights",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    description: "A high-altitude cold desert offering solitude and raw Himalayan beauty.",
    tag: "Offbeat"
  },
  {
    id: 11,
    name:"Kaziranga National Park, Assam",
    price: "₹19,800",
    duration: "2 Days / 1 Night",
    description: "Home to the largest population of the one-horned Indian rhinoceros.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5qzBfk1CT3tHkd8_NK21FrBAm-uvqyxWSw&s",
    tag: "Wildlife"
  },
  {
    id: 12,
    name: "Pench National Park, MP",
    price: "₹15,600",
    duration: "3 Days / 2 Nights",
    description: "The setting for Rudyard Kipling's 'The Jungle Book', rich in flora and fauna.",
    image: "https://www.culturalsafaritours.com/wp-content/uploads/2020/08/penchsafari.jpg",
    tag: "Safari"
  }
];

export function renderTours() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    <div class="min-h-screen bg-slate-50 overflow-x-hidden font-sans">
      <div class="bg-slate-900 shadow-xl">
        ${renderNavbar()}
      </div>
        <!-- HERITAGE PACKAGES HERO SECTION -->
        <section class="relative bg-slate-900 py-32 px-6 overflow-hidden min-h-[60vh] flex items-center">
            <!-- Background Image with 50% opacity -->
            <div class="absolute inset-0 z-0">
                <img src="https://i0.wp.com/ambrishgupta.wordpress.com/wp-content/uploads/2020/05/unesco-world-heritage-sites-india.jpg?w=1200&h=600&ssl=1" 
                     class="w-full h-full object-cover opacity-50" 
                     alt="Heritage Packages Background" />
                <!-- Dark Overlay for Text Contrast -->
                <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
            </div>

            <div class="max-w-7xl mx-auto relative z-10 text-center md:text-left w-full">
                <!-- Badge -->
                <div class="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 animate-reveal">
                    <span class="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">The Soul of India</span>
                </div>

                <!-- Title -->
                <h2 class="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none animate-reveal delay-100 uppercase">
                    Heritage & Jungle Safari<br/><span class="text-slate-400">Packages</span>
                </h2>
                
                <!-- Search Bar -->
                <div class="max-w-3xl animate-reveal delay-200 mt-12">
                    <div class="group relative flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 p-2 rounded-[2rem] focus-within:ring-2 focus-within:ring-amber-500 transition-all shadow-2xl">
                        <div class="flex items-center justify-center pl-6 text-slate-400 group-focus-within:text-amber-500 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="text" id="tourSearch" placeholder="Explore destinations..." 
                               class="w-full bg-transparent border-none text-white placeholder:text-slate-500 py-5 px-4 text-xl outline-none font-bold">
                        <div id="searchResultsCount" class="hidden md:block pr-8 text-xs text-amber-500 font-black uppercase tracking-widest italic"></div>
                    </div>
                    <p class="text-slate-400 mt-4 text-xs font-bold uppercase tracking-widest ml-4">Popular: Jaipur, Hampi, Agra, Varanasi</p>
                </div>
            </div>
        </section>


      <div class="max-w-7xl mx-auto px-6 py-24">
        <div id="toursGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"></div>
        <div id="noResults" class="hidden text-center py-40 animate-reveal">
          <h3 class="text-4xl font-black text-slate-900 mb-4 tracking-tight">No match found</h3>
          <p class="text-lg text-slate-500 mb-12 max-w-md mx-auto italic">India has infinite stories, but we couldn't find "<span id="searchTerm" class="text-amber-600 font-bold not-italic"></span>".</p>
        </div>
      </div>
    </div>
  `;

  const searchInput = document.getElementById('tourSearch');
  const toursGrid = document.getElementById('toursGrid');
  const noResults = document.getElementById('noResults');

  function filterTours(query) {
    const filtered = destinations.filter(tour => 
      tour.name.toLowerCase().includes(query.toLowerCase()) ||
      tour.tag.toLowerCase().includes(query.toLowerCase())
    );

    toursGrid.innerHTML = filtered.map((tour, idx) => `
      <div class="group relative bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden animate-reveal border border-slate-100/50" style="animation-delay: ${idx * 50}ms">
        <div class="relative h-80 overflow-hidden">
          <img src="${tour.image}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
          
          <!-- Duration Badge -->
          <div class="absolute top-8 right-8">
            <div class="backdrop-blur-xl bg-amber-500/90 border border-amber-400 px-4 py-1.5 rounded-full shadow-2xl">
              <span class="text-slate-900 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                ${tour.duration}
              </span>
            </div>
          </div>

          <div class="absolute top-8 left-8">
            <div class="backdrop-blur-xl bg-black/30 border border-white/20 px-4 py-1.5 rounded-full">
              <span class="text-white text-[10px] font-black uppercase tracking-widest">${tour.tag}</span>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
            <span class="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1 block">Starting At</span>
            <div class="text-4xl font-black text-amber-500 tracking-tighter">${tour.price}</div>
          </div>
        </div>

        <div class="p-10">
          <h3 class="text-3xl font-black text-slate-900 mb-4 group-hover:text-amber-600 transition-colors leading-tight">${tour.name}</h3>
          <p class="text-slate-500 leading-relaxed mb-10 line-clamp-2 font-medium">${tour.description}</p>
          <button onclick="window.renderBooking(${tour.id})" class="w-full py-5 bg-slate-900 text-white font-black rounded-2xl group-hover:bg-amber-500 group-hover:text-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95">
            Book Experience <span>→</span>
          </button>
        </div>
      </div>
    `).join('');

    if (filtered.length === 0 && query.trim().length > 0) {
      noResults.classList.remove('hidden');
      toursGrid.style.display = 'none';
    } else {
      noResults.classList.add('hidden');
      toursGrid.style.display = 'grid';
    }
  }

  filterTours('');
  searchInput.addEventListener('input', (e) => filterTours(e.target.value));
}

window.renderTours = renderTours;
