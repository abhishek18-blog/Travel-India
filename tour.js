import { renderNavbar } from './navbar.js';


export const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    price: "$1,200",
    image: "https://www.marriott.com/content/dam/marriott-digital/destinations/destinationheroimages/en_us/photo/assets/pdt-grc-santorini-587986249568062.jpg",
    description: "Experience the stunning sunsets and white-washed architecture of the Aegean Sea."
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    description: "Immerse yourself in ancient traditions, tea ceremonies, and cherry blossoms."
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    price: "$900",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    description: "Discover tropical paradise, lush rice terraces, and spiritual temples."
  },
  {
    id: 4,
    name: "Reykjavik, Iceland",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800&auto=format&fit=crop",
    description: "Chase the Northern Lights and explore dramatic landscapes of fire and ice."
  },
  {
    id: 5,
    name: "New York City, USA",
    price: "$1,500",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
    description: "The city that never sleeps. iconic landmarks, world-class dining, and broadway."
  },
  {
    id: 6,
    name: "Machu Picchu, Peru",
    price: "$1,600",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop",
    description: "Trek the Inca Trail to the lost city in the clouds."
  },
  {
    id: 7,
    name: "Paris, France",
    price: "$2,200",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    description: "The city of lights. art, fashion, and romance along the Seine."
  }
];

export function renderTours() {
  const app = document.querySelector('#app');
  if (!app) {
    console.error("Error: Element #app not found.");
    return;
  }

  app.innerHTML = `
    <div class="min-h-screen bg-gray-50">
      <!-- Navbar -->
          ${renderNavbar()}


      <!-- Tours Section -->
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12
            animate-[fadeUp_0.8s_ease-out_forwards]">
        
        <!-- Header with Search -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Tours & Packages</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Discover breathtaking destinations with our carefully curated travel experiences</p>
          
          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto">
            <div class="relative">
              <svg class="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" id="tourSearch" placeholder="Search packages (e.g., Paris, Japan, Bali...)" 
                     class="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-lg bg-white">
              <div id="searchResultsCount" class="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium"></div>
            </div>
          </div>
        </div>

        <!-- Tours Grid -->
        <div id="toursGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <!-- Tours will be populated by JavaScript -->
        </div>

        <!-- Package Not Found Message -->
        <div id="noResults" class="hidden text-center py-20">
          <div class="text-6xl mb-6 mx-auto w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center shadow-lg">
            <svg class="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Package Not Found</h3>
          <p class="text-lg text-gray-500 max-w-md mx-auto mb-8">No packages match "<span id="searchTerm"></span>". Try searching for:</p>
          <div class="flex flex-wrap gap-2 justify-center max-w-md mx-auto mb-8">
            <button class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition-colors pkg-suggest" data-query="Paris">Paris</button>
            <button class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition-colors pkg-suggest" data-query="Bali">Bali</button>
            <button class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition-colors pkg-suggest" data-query="Japan">Japan</button>
            <button class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition-colors pkg-suggest" data-query="Santorini">Santorini</button>
          </div>
          <button id="showAllBtn" class="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 font-medium">
            Show All Packages
          </button>
        </div>
      </div>
    </div>
  `;

  // Get DOM elements
  const searchInput = document.getElementById('tourSearch');
  const toursGrid = document.getElementById('toursGrid');
  const noResults = document.getElementById('noResults');
  const searchResultsCount = document.getElementById('searchResultsCount');
  const searchTerm = document.getElementById('searchTerm');
  const showAllBtn = document.getElementById('showAllBtn');

  function filterTours(query) {
    const filtered = destinations.filter(tour => 
      tour.name.toLowerCase().includes(query.toLowerCase()) ||
      tour.description.toLowerCase().includes(query.toLowerCase())
    );

    // Update results count
    if (query.trim()) {
      searchResultsCount.textContent = `${filtered.length} package${filtered.length !== 1 ? 's' : ''}`;
    } else {
      searchResultsCount.textContent = '';
    }

    // Show search term in no results
    if (searchTerm) {
      searchTerm.textContent = query;
    }

    // Render filtered tours
    toursGrid.innerHTML = filtered.map(tour => `
      <div class="animate-up delay-100 group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer" onclick="window.renderBooking(${tour.id}) ">
        <div class="relative h-80 bg-gray-200">
          <img src="${tour.image}" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-3">${tour.name}</h3>
          <p class="text-gray-600 mb-6">${tour.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-indigo-600">${tour.price}</span>
            <span class="text-sm font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">Book Now →</span>
          </div>
        </div>
      </div>
    `).join('');

    // Show/hide no results - FIXED LOGIC
    if (filtered.length === 0 && query.trim().length > 0) {
      noResults.classList.remove('hidden');
      toursGrid.style.display = 'none';
    } else {
      noResults.classList.add('hidden');
      toursGrid.style.display = 'grid';
    }
  }

  // Suggestion buttons
  document.querySelectorAll('.pkg-suggest').forEach(btn => {
    btn.addEventListener('click', function() {
      const query = this.dataset.query;
      searchInput.value = query;
      filterTours(query);
    });
  });

  // Show all button
  showAllBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterTours('');
    searchInput.blur();
  });

  // Initial render (show all tours)
  filterTours('');

  // Search on input
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      filterTours(e.target.value);
    }, 300);
  });

  // Clear search on Escape key
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      filterTours('');
      searchInput.blur();
    }
  });
}
