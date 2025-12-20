
/**
 * Returns the HTML string for the consistent sticky Navbar.
 * Note: Navigation functions are bound to the window object in their respective files.
 */
export function renderNavbar() {
  return `
  <header class="sticky top-0 z-[100] w-full transition-all duration-300">
    <!-- Glassmorphism Background -->
    <div class="absolute inset-0 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm"></div>

    <nav class="relative max-w-7xl mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
      
      <!-- Logo Section -->
      <div class="flex lg:flex-1 items-center gap-3">
        <a href="#" onclick="window.renderHome(); return false;" class="flex items-center gap-2 group">
          <div class="bg-slate-900 p-1.5 rounded-lg group-hover:bg-amber-500 transition-colors">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.5a2.5 2.5 0 01-2.5 2.5H14"></path>
            </svg>
          </div>
          <span class="text-xl font-black text-slate-900 tracking-tighter uppercase">Travel<span class="text-amber-500">India</span></span>
        </a>
      </div>

      <!-- Desktop Links -->
      <div class="hidden lg:flex gap-x-10">
        <a href="#" onclick="window.renderHome(); return false;" class="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-widest">Home</a>
        <a href="#" onclick="window.renderTours(); return false;" class="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-widest">Destinations</a>
        <a href="#" onclick="window.renderAboutUs(); return false;" class="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-widest">About Us</a>
        <a href="#" onclick="window.renderContact(); return false;" class="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-widest">Contact</a>
      </div>

     
      <!-- Mobile Menu Button -->
      <div class="flex lg:hidden">
        <button onclick="document.getElementById('mobile-menu').showModal()" class="p-2 text-slate-900">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Dialog -->
    <dialog id="mobile-menu" class="w-full h-full max-h-full max-w-full m-0 bg-slate-900 text-white backdrop:bg-slate-900/50">
      <div class="p-6 h-full flex flex-col">
        <div class="flex justify-between items-center mb-12">
           <span class="text-xl font-black tracking-tighter uppercase">Travel<span class="text-amber-500">India</span></span>
           <button onclick="document.getElementById('mobile-menu').close()" class="text-white">✕</button>
        </div>
        <div class="space-y-8 flex flex-col items-center">
          <a onclick="window.renderHome(); document.getElementById('mobile-menu').close()" class="text-3xl font-black uppercase tracking-tighter">Home</a>
          <a onclick="window.renderTours(); document.getElementById('mobile-menu').close()" class="text-3xl font-black uppercase tracking-tighter">Destinations</a>
          <a onclick="window.renderAboutUs(); document.getElementById('mobile-menu').close()" class="text-3xl font-black uppercase tracking-tighter text-amber-500">About Us</a>
          <a onclick="window.renderContact(); document.getElementById('mobile-menu').close()" class="text-3xl font-black uppercase tracking-tighter">Contact</a>
        </div>
      </div>
    </dialog>
  </header>
  `;
}
