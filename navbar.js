
export function renderNavbar() {
  return `
  <!-- Header -->
    <header class="sticky top-0 z-50 bg-white shadow-sm">
    
    <!-- Background Overlay -->
    <div class="absolute inset-0 bg-white/95 backdrop-blur-sm shadow-sm"></div>

    <nav aria-label="Global" class="relative z-50 flex items-center justify-between p-6 lg:px-8">
      
      <!-- Logo -->
      <div class="flex lg:flex-1 items-center gap-3">
        <a href="#" onclick="window.renderHome(); return false;" class="-m-1.5 p-1.5">
          <span class="sr-only">TravelIndia</span>
          <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
               class="h-8 w-auto" />
        </a>
        <span class="text-xl font-bold text-gray-900 hidden sm:inline">TravelIndia</span>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex lg:hidden">
        <button onclick="document.getElementById('mobile-menu').showModal()"
                class="-m-2.5 rounded-md p-2.5 text-gray-900">
          ☰
        </button>
      </div>

     <!-- Desktop Links -->
<div class="hidden lg:flex gap-x-12">
  <a href="#" onclick="window.renderHome(); return false;" class="nav-link">Home</a>
  <a href="#" onclick="window.renderTours(); return false;" class="nav-link">Tours & Packages</a>
  <a href="#" onclick="window.renderAboutUs(); return false;" class="nav-link">About Us</a>
  <a href="#" onclick="window.renderContact(); return false;" class="nav-link">Contact</a>
</div>

    </nav>

    <!-- Mobile Menu -->
    <dialog id="mobile-menu" class="lg:hidden backdrop:bg-gray-900/50">
      <div class="bg-white p-6 h-full">
        <button onclick="document.getElementById('mobile-menu').close()">✕</button>
        <div class="mt-6 space-y-4">
          <a onclick="window.renderHome();mobile-menu.close()">Home</a>
          <a onclick="window.renderTours();mobile-menu.close()">Tours</a>
        </div>
      </div>
    </dialog>
  </header>
  `;
}
