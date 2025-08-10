import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          {/* Hero Banner Image */}
          <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://aparelzx.vercel.app/banner.jpg"
              alt="Grow A Garden Banner"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a gradient background if image fails to load
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #10b981 100%)';
                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full"><div class="text-center"><h1 class="text-6xl md:text-8xl font-bold text-white drop-shadow-lg" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.5)">GROW A</h1><h1 class="text-6xl md:text-8xl font-bold text-white drop-shadow-lg" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.5)">GARDEN</h1></div></div>';
              }}
            />
          </div>
          
          {/* Overlay content if needed */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                Premium Roblox Pets Store
              </h2>
              <p className="text-lg text-white/90 mt-2 drop-shadow">
                Professional service with instant delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;