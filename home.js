import { renderNavbar } from './navbar.js';
export function renderHome() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    <!-- Hero Section - FIXED layout -->
    <div class="relative h-screen min-h-screen overflow-hidden bg-fixed">
      <!-- Image -->

            <!-- Dark overlay -->

            <div class="absolute inset-0 bg-black/100">
               <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 h-full w-full"
           style="background-image: url('https://www.getcabindia.in/wp-content/uploads/2023/05/india-tour-by-jcr-1.png');"></div>
      
            </div>
      
      <!-- Navbar + Hero Content -->
      ${renderNavbar()}
      
      <!-- FIXED: Single hero container -->
      <div class="relative z-10 h-full flex items-center justify-center px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="font-['Anton'] text-5xl sm:text-7xl lg:text-9xl animate-up delay-100 font-bold tracking-tight text-slate-200 drop-shadow-2xl mb-8">
            INDIA
          </h1>
          <p class="animate-up delay-300 mt-8 text-lg font-medium leading-8 text-gray-100 drop-shadow-xl max-w-lg mx-auto">
            Unforgettable journeys await. From exotic beaches to mountain escapes, create memories that last a lifetime.
          </p>
          <div class="animate-up delay-500 mt-10 flex justify-center">
            <a href="#" onclick="window.renderTours(); return false;"
               class="rounded-md bg-indigo-600 px-8 py-3 text-lg font-semibold text-white hover:bg-indigo-500 shadow-2xl transition-all duration-300">
              Explore Destinations →
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Section - SPACED properly for scroll reveal -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative -mt-20 z-0">
      <div class="scroll-reveal text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center max-w-4xl mx-auto leading-tight">
        Why Travel With Us?
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="scroll-reveal bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50">
          <h3 class="text-2xl font-bold mb-6 text-indigo-600">Expert Guides</h3>
          <p class="text-gray-700 leading-relaxed text-lg">Our experienced guides ensure you get the most out of your journey with local insights and personalized attention.</p>
        </div>
        <div class="scroll-reveal bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 md:col-span-2 lg:col-span-1">
          <h3 class="text-2xl font-bold mb-6 text-indigo-600">Tailored Experiences</h3>
          <p class="text-gray-700 leading-relaxed text-lg">We customize each trip to match your interests, ensuring a unique and memorable adventure across India's diverse landscapes.</p>
        </div>
        <div class="scroll-reveal bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50">
          <h3 class="text-2xl font-bold mb-6 text-indigo-600">24/7 Support</h3>
          <p class="text-gray-700 leading-relaxed text-lg">Our dedicated support team is available around the clock to assist you before, during, and after your trip.</p>
        </div>
      </div>
    </section>


  <section class="bg-gray-50 py-20 lg:py-32">
      <div class="flex flex-col lg:flex-row gap-12 items-center justify-between max-w-7xl mx-auto px-6 py-20">
       
        <!-- RIGHT content (image/text) -->
        <div class="lg:w-1/2">
         <div class="scroll-reveal">
              <iframe 
                src="https://www.google.com/maps/d/u/0/embed?mid=1EGX7tyAVQyHjNVcGxS4sXQO0pqOsg9Q&ehbc=2E312F&noprof=1"
                class="w-full h-96 lg:h-[500px] rounded-3xl shadow-2xl border-0 mt-8"
                allowfullscreen 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
        </div>
      </div>

       <!-- LEFT content -->     
      <div class="lg:w-1/2">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Discover Incredible India</h2>
          <p class="text-xl text-gray-700 leading-relaxed mb-8">From the majestic Himalayas to the serene backwaters of Kerala, explore the diverse beauty and rich culture of India with us.</p>
      </div>
  </section>

  <section>
      <div class="flex flex-col lg:flex-row gap-12 items-center justify-between max-w-7xl mx-auto px-6 py-20">
        <!-- LEFT content -->
        <div class="lg:w-1/2">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">India's Best Travel Experiences</h2>
          <p class="text-xl text-gray-700 leading-relaxed mb-8">Discover hidden gems with local experts...</p>
      </div>

        <!-- RIGHT content (image/text) -->
      <div class="lg:w-1/2">
        <div class="scroll-reveal">
              <iframe 
                src="https://www.google.com/maps/d/u/0/embed?mid=1o1GpcDhjpUXDrFf4yPqYgb1qiBW99H4&ehbc=2E312F&noprof=1"
                class="w-full h-96 lg:h-[500px] rounded-3xl shadow-2xl border-0 mt-8"
                allowfullscreen 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
        </div>
      </div>
  </section>
   


</div>





  `;
}
//  <!-- Map Section -->
//     <section class="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
//       <h2 class="scroll-reveal text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">Explore India</h2>
//         <div id="india-map" class="h-96 lg:h-[500px] rounded-3xl shadow-2xl mx-auto max-w-6xl scroll-reveal mt-20">

//         </div>
//     </section>
