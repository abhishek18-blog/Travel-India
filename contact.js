import { renderNavbar } from './navbar.js';

/**
 * Renders the travelIndia Contact Page.
 * This function clears the #app container, injects the navbar and contact content,
 * and initializes event listeners for the contact form.
 */
export function renderContact() {
    const app = document.querySelector('#app');
    if (!app) return;

    // 1. Clear previous content and render Navbar
    app.innerHTML = renderNavbar();

    // 2. Create and inject the Main Content section
    const mainContent = document.createElement('main');
    mainContent.className = 'min-h-screen bg-slate-50 antialiased relative overflow-x-hidden';
    
    // Applying the world map pattern via inline style
    mainContent.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/world-map.png")';
    mainContent.style.backgroundColor = '#f8fafc';

    mainContent.innerHTML = `
        <!-- Hero Section -->
        <section class="pt-24 pb-12 px-4 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <span class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-100 text-amber-700 text-xs font-black uppercase tracking-widest">
                    <i class="fa-solid fa-wand-magic-sparkles text-[10px]"></i>
                    ✨ Your Gateway to the Orient
                </span>
                <h1 class="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-[0.9]">
                    Start Your <span class="text-amber-500">Indian</span> <br class="hidden md:block">  Odyssey Here.
                </h1>
                <p class="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                    From the snowy peaks of the Himalayas to the backwaters of Kerala, tell us where you'd like to go and we'll handle the rest. 
                </p>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="max-w-7xl mx-auto px-4 pb-24 relative z-10">
            <div class="grid lg:grid-cols-12 gap-10">
                
                <!-- Sidebar Info -->
                <div class="lg:col-span-4 space-y-6">
                    <div class="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                        <h3 class="text-2xl font-black mb-8 text-slate-900 uppercase tracking-tighter">Connect with Experts </h3>
                        
                        <div class="space-y-8">
                            <!-- Address -->
                            <div class="flex items-start gap-5">
                                <div class="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-amber-500 flex-shrink-0 shadow-lg">
                                    <span class="text-xl">📍</span>
                                </div>
                                <div>
                                    <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 text-[10px]">Headquarters</p>
                                    <p class="text-slate-800 font-bold text-lg leading-tight uppercase tracking-tight">
                                        42, Connaught Place,<br>New Delhi, India 110001
                                    </p>
                                </div>
                            </div>

                            <!-- Support -->
                            <div class="flex items-start gap-5">
                                <div class="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                                    <span class="text-xl">📧</span>
                                </div>
                                <div class="overflow-hidden">
                                    <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 text-[10px]">24/7 Support</p>
                                    <a href="mailto:concierge@travelindia.com" class="block text-slate-900 font-bold text-lg underline decoration-amber-400 decoration-2 underline-offset-4 tracking-tight hover:text-amber-600 transition-colors break-words">
                                        concierge@travelindia.com
                                    </a>
                                    <a href="tel:+911123456789" class="block text-slate-500 text-sm font-bold mt-2 hover:text-slate-900 transition-colors">
                                        📞 +91 11-2345-6789
                                    </a>
                                </div>
                            </div>

                            <!-- Offices -->
                            <div class="flex items-start gap-5">
                                <div class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 flex-shrink-0">
                                    <span class="text-xl">🗺️</span>
                                </div>
                                <div>
                                    <p class="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 text-[10px]">Local Presence</p>
                                    <p class="text-slate-800 font-bold uppercase tracking-tight">Mumbai • Jaipur • Kochi</p>
                                </div>
                            </div>
                        </div>

                        <!-- Social Community -->
                        <div class="mt-12 pt-8 border-t border-slate-100">
                            <p class="text-xs font-black text-slate-900 mb-4 uppercase tracking-widest">Join our community 📸</p>
                            <div class="flex gap-4">
                                <a href="#" class="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg transform hover:-translate-y-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                </a>
                                <a href="#" class="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg transform hover:-translate-y-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                </a>
                                <a href="#" class="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg transform hover:-translate-y-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Trust Badge -->
                    <div class="bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative shadow-2xl group">
                        <div class="relative z-10">
                            <h4 class="font-black text-lg mb-2 uppercase tracking-tight">🏆 Incredible India Partner</h4>
                            <p class="text-slate-400 text-sm leading-relaxed mb-4">Certified travel planners with 15+ years of experience in curating authentic experiences.</p>
                            <div class="flex items-center gap-1 text-amber-500">
                                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                <span class="ml-2 text-white font-black text-sm tracking-widest">4.9/5</span>
                            </div>
                        </div>
                        <i class="fa-solid fa-plane absolute -bottom-4 -right-4 text-8xl text-white/5 -rotate-12 transition-transform group-hover:scale-110"></i>
                    </div>
                </div>

                <!-- Form Card -->
                <div class="lg:col-span-8 bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-white relative">
                    <div class="mb-10">
                        <h2 class="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter leading-none">Request a Quote </h2>
                        <p class="text-slate-500 font-bold uppercase text-xs tracking-widest">Free Consultation within 4 hours</p>
                    </div>

                    <form id="travelForm" class="space-y-8">
                        <!-- Name & Email -->
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-3">
                                <label class="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">Your Full Name 👤</label>
                                <div class="relative">
                                    <input type="text" id="travelerName" required placeholder="Ex: Rahul Sharma"
                                        class="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:outline-none focus:border-amber-500 focus:bg-white text-slate-900 font-bold transition-all placeholder:text-slate-300">
                                </div>
                            </div>
                            <div class="space-y-3">
                                <label class="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">Email Address 📩</label>
                                <div class="relative">
                                    <input type="email" id="travelerEmail" required placeholder="name@example.com"
                                        class="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:outline-none focus:border-amber-500 focus:bg-white text-slate-900 font-bold transition-all placeholder:text-slate-300">
                                </div>
                            </div>
                        </div>

                        <!-- Destination & Trip Type -->
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-3">
                                <label class="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">Destination 🏔️</label>
                                <div class="relative">
                                    <select class="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:outline-none focus:border-amber-500 focus:bg-white text-slate-900 appearance-none font-bold transition-all">
                                        <option>Golden Triangle</option>
                                        <option>Kerala Backwaters</option>
                                        <option>Ladakh Adventures</option>
                                        <option>Varanasi Spiritual</option>
                                        <option>Goa Beaches</option>
                                    </select>
                                    <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-amber-500">
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <label class="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">Trip Type 🎒</label>
                                <div class="relative">
                                    <select class="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:outline-none focus:border-amber-500 focus:bg-white text-slate-900 appearance-none font-bold transition-all">
                                        <option>Family Vacation</option>
                                        <option>Solo Adventure</option>
                                        <option>Honeymoon</option>
                                        <option>Corporate Retreat</option>
                                    </select>
                                    <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-amber-500">
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Message -->
                        <div class="space-y-3">
                            <label class="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">Trip Inspiration / Details 💡</label>
                            <textarea id="travelerMessage" required rows="5" placeholder="Tell us about your budget, group size, and what you're most excited to see..."
                                class="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:outline-none focus:border-amber-500 focus:bg-white text-slate-900 resize-none font-bold transition-all placeholder:text-slate-300"></textarea>
                        </div>

                        <!-- CTA -->
                        <div class="pt-4">
                            <button type="submit" id="submitBtn"
                                class="w-full bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900 font-black py-5 px-8 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-200 hover:scale-[1.01] active:scale-[0.99] uppercase tracking-widest">
                                <span>Get My Custom Itinerary </span>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </button>
                            <div class="flex items-center justify-center gap-6 mt-8">
                                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    🔒 Secure & Private
                                </p>
                                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    ⚡ Instant Response
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Toast Container -->
        <div id="toastContainer" class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[150] w-full max-w-md px-4"></div>
    `;

    app.appendChild(mainContent);

    // 3. Initialize Form Logic
    setupFormLogic();
}

/**
 * Handles form submission and UI feedback
 */
function setupFormLogic() {
    const form = document.getElementById('travelForm');
    const submitBtn = document.getElementById('submitBtn');

    if (!form || !submitBtn) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const originalContent = submitBtn.innerHTML;
        
        // UI Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <i class="fa-solid fa-circle-notch animate-spin"></i>
            <span>Sending Request... 📤</span>
        `;

        // Simulate API call
        setTimeout(() => {
            showTravelToast();
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalContent;
        }, 1800);
    });
}

/**
 * Renders a success toast notification
 */
function showTravelToast() {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'bg-slate-900 text-white p-6 rounded-3xl shadow-2xl flex items-center gap-5 border border-slate-800 transition-all duration-500 opacity-0 transform translate-y-4';
    
    toast.innerHTML = `
        <div class="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-900 flex-shrink-0 shadow-lg">
            <span class="text-xl">🎉</span>
        </div>
        <div class="flex-grow">
            <p class="font-black text-lg leading-tight uppercase tracking-tighter">Enquiry Received!</p>
            <p class="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Namaste! Expect a call shortly. 🙏</p>
        </div>
        <button id="closeToast" class="text-slate-500 hover:text-white transition">
            <i class="fa-solid fa-xmark text-lg"></i>
        </button>
    `;

    container.appendChild(toast);

    // Animate In
    requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', 'translate-y-4');
    });

    const removeToast = () => {
        toast.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => toast.remove(), 500);
    };

    toast.querySelector('#closeToast').onclick = removeToast;
    setTimeout(removeToast, 6000);
}
