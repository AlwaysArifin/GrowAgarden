import React from 'react';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGrowAGarden = () => {
    // Mock action - could redirect to game or show modal
    alert('Redirecting to Grow A Garden game...');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/6285608790822', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <span className="text-black font-bold text-sm">A</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">ApparelZx</h1>
            <p className="text-xs text-gray-400">Premium Roblox Pets</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Button 
            onClick={handleGrowAGarden}
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-medium px-4 py-2 rounded-md transition-all duration-200"
          >
            Grow A Garden
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-gray-300 hover:text-white"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;