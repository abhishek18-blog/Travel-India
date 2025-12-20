import { renderNavbar } from './navbar.js';

export function renderAboutUs() {
  const app = document.querySelector('#app');
  if (!app) return;

  // Scroll to top when loading page
  window.scrollTo(0, 0);

  app.innerHTML = `
<div class="min-h-screen bg-slate-50 overflow-x-hidden font-sans">
  
  <!-- CONSISTENT STICKY NAVBAR -->
  ${renderNavbar()}

  <!-- ABOUT HERO -->
  <section class="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
    <!-- Image Collage Background -->
    <div class="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 h-full w-full">
      <div class="relative overflow-hidden border-r border-slate-900/10">
        <img src="https://assets.cntraveller.in/photos/65a4ca16f4f38543f111ce6d/4:3/w_4608,h_3456,c_limit/1444924249" class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Taj Mahal" />
      </div>
      <div class="relative overflow-hidden border-r border-slate-900/10">
        <img src="https://static.toiimg.com/thumb/msid-60776671,width-550,height-433/60776671.jpg" class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Jaipur Palace" />
      </div>
      <div class="relative overflow-hidden border-r border-slate-900/10">
        <img src="https://images.nativeplanet.com/img/2017/09/14-1505384737-2.jpg" class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Kerala Backwaters" />
      </div>
      <div class="relative overflow-hidden">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Shri_Mahadev_Temple%2C_Tambdi_Surla%2C_Goa.jpg/1200px-Shri_Mahadev_Temple%2C_Tambdi_Surla%2C_Goa.jpg" class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Varanasi Ghats" />
      </div>
      <!-- Dark Overlays to ensure text visibility -->
      <div class="absolute inset-0 bg-slate-900/60 z-10"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900 z-20"></div>
    </div>
    
    <div class="relative z-30 text-center px-6 animate-reveal">
      <div class="inline-block mb-4 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
         <p class="text-amber-500 tracking-[0.3em] uppercase text-[10px] font-black">Exploring the Soul of Bharat</p>
      </div>
      <h1 class="font-black text-6xl md:text-9xl text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
        Our <span class="text-amber-500">Story</span>
      </h1>
      <p class="text-slate-300 tracking-[0.5em] uppercase text-xs md:text-sm font-bold">
        Crafting memories since 2012
      </p>
    </div>
  </section>

  <!-- THE VISION -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <div class="lg:w-1/2">
        <h2 class="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">The Vision</h2>
        <h3 class="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
          Beyond Sightseeing: <br/> We Deliver <span class="italic underline decoration-amber-500 underline-offset-8">Experiences</span>.
        </h3>
        <p class="text-lg text-slate-600 leading-relaxed mb-6">
          Founded in the heart of Delhi, TravelIndia began with a simple mission: to show the world that India is not just a destination, but a feeling. We noticed that traditional tourism often missed the soul of our land—the hidden chai stalls, the morning prayers at the ghats, and the untold stories of ancient ruins.
        </p>
        <p class="text-lg text-slate-600 leading-relaxed">
          Today, we are a team of 50+ travel enthusiasts, historians, and local experts dedicated to curating journeys that challenge your perspective and warm your heart.
        </p>
      </div>
      <div class="lg:w-1/2 grid grid-cols-2 gap-4">
        <div class="space-y-4">
          <img src="https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?q=80&w=800&auto=format&fit=crop" class="rounded-[2rem] shadow-lg w-full h-64 object-cover" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPBCvd1hRcHh8uhNvcbA7_OZSse_2I23Teg&s" class="rounded-[2rem] shadow-lg w-full h-48 object-cover" />
        </div>
        <div class="space-y-4 pt-12">
          <img src="https://cdn.britannica.com/06/162706-050-E566DC89/Harmandir-Sahib-Teja-Singh-Samudri-Hall-Clock.jpg" class="rounded-[2rem] shadow-lg w-full h-48 object-cover" />
          <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop" class="rounded-[2rem] shadow-lg w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  </section>

  <!-- STATS / WHY CHOOSE US -->
  <section class="bg-slate-900 py-24 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-black mb-4">Why Explorers Choose Us</h2>
        <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div class="p-8 border border-white/10 rounded-[2.5rem] hover:border-amber-500/50 transition-colors group">
          <div class="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🧭</div>
          <h4 class="text-xl font-bold mb-4">Local Expertise</h4>
          <p class="text-slate-400">Our guides are locals who know the shortcuts, the stories, and the secret spots no guidebook mentions.</p>
        </div>
        <div class="p-8 border border-white/10 rounded-[2.5rem] hover:border-amber-500/50 transition-colors group">
          <div class="text-5xl mb-6 transform group-hover:scale-110 transition-transform">✨</div>
          <h4 class="text-xl font-bold mb-4">Customized Care</h4>
          <p class="text-slate-400">Every itinerary is a blank slate. We tailor every mile to your pace, interests, and dietary needs.</p>
        </div>
        <div class="p-8 border border-white/10 rounded-[2.5rem] hover:border-amber-500/50 transition-colors group">
          <div class="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🤝</div>
          <h4 class="text-xl font-bold mb-4">Ethical Travel</h4>
          <p class="text-slate-400">We prioritize sustainable stays and ensure our tourism directly benefits local communities.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="max-w-4xl mx-auto px-6 py-32 text-center">
    <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
      Ready to see India through <br/> a different lens?
    </h2>
    <p class="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
      Join over 50,000 travelers who found more than just a destination—they found a story to tell for a lifetime.
    </p>
    <button onclick="window.renderTours()" class="bg-amber-500 text-slate-900 px-12 py-5 rounded-full font-black text-lg hover:bg-slate-900 hover:text-white transition-all shadow-xl">
      Browse Our Packages
    </button>
  </section>

  <!-- FOOTER -->
  <footer class="bg-white border-t border-slate-200 py-10 text-center">
    <p class="text-slate-400 text-sm italic font-medium">Travel India • Discover the Heartbeat of the Subcontinent</p>
  </footer>

</div>

<style>
@keyframes reveal { 0% { transform: translateY(40px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
.animate-reveal { animation: reveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
</style>
  `;
}

// Bind to window for navbar
window.renderAboutUs = renderAboutUs;
