import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'shadow-2xl py-2 backdrop-blur-lg' 
        : 'backdrop-blur-md py-4 shadow-lg'
    }`} style={{ 
      background: isScrolled 
        ? 'linear-gradient(135deg, rgba(255, 223, 196, 0.98) 0%, rgba(255, 237, 213, 0.98) 100%)' 
        : 'linear-gradient(135deg, rgba(255, 223, 196, 0.95) 0%, rgba(255, 237, 213, 0.95) 100%)'
    }}>
      <div className="px-4 md:px-10 lg:px-20 mx-auto">
        <div className="flex items-center justify-between whitespace-nowrap">
          <Link 
            to="/" 
            className="flex items-center gap-4 text-amber-900 hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Organizar Logo" 
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-10' : 'h-12'
                } w-auto group-hover:rotate-6 drop-shadow-lg`}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h2 className={`text-amber-900 font-bold font-display tracking-tight transition-all duration-500 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            } drop-shadow-sm`}>
              Organizar
            </h2>
          </Link>

          <nav className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link
                to="/"
                className={`text-sm font-medium relative group transition-all duration-300 ${
                  isActive('/') ? 'text-amber-900 font-bold' : 'text-amber-800 hover:text-amber-900'
                }`}
              >
                Ana Sayfa
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-full transform origin-left transition-transform duration-300 ${
                  isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium relative group transition-all duration-300 ${
                  isActive('/about') ? 'text-amber-900 font-bold' : 'text-amber-800 hover:text-amber-900'
                }`}
              >
                Hakkımızda
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-full transform origin-left transition-transform duration-300 ${
                  isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link
                to="/services"
                className={`text-sm font-medium relative group transition-all duration-300 ${
                  isActive('/services') ? 'text-amber-900 font-bold' : 'text-amber-800 hover:text-amber-900'
                }`}
              >
                Hizmetler
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-full transform origin-left transition-transform duration-300 ${
                  isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link
                to="/gallery"
                className={`text-sm font-medium relative group transition-all duration-300 ${
                  isActive('/gallery') ? 'text-amber-900 font-bold' : 'text-amber-800 hover:text-amber-900'
                }`}
              >
                Galeri
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-full transform origin-left transition-transform duration-300 ${
                  isActive('/gallery') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium relative group transition-all duration-300 ${
                  isActive('/contact') ? 'text-amber-900 font-bold' : 'text-amber-800 hover:text-amber-900'
                }`}
              >
                İletişim
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-full transform origin-left transition-transform duration-300 ${
                  isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </div>
            <Link
              to="/contact"
              className="relative flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm font-bold tracking-wide shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="truncate relative z-10">Teklif Al</span>
            </Link>
          </nav>

          <button
            className="md:hidden text-amber-900 hover:text-amber-700 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-3xl drop-shadow-md">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-5 bg-gradient-to-b from-amber-50/50 to-transparent rounded-2xl p-4">
            <Link
              to="/"
              className={`block text-sm font-medium transition-all duration-300 hover:translate-x-3 hover:text-amber-900 px-3 py-2 rounded-lg ${
                isActive('/') ? 'text-amber-900 font-bold bg-amber-100/50' : 'text-amber-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/about"
              className={`block text-sm font-medium transition-all duration-300 hover:translate-x-3 hover:text-amber-900 px-3 py-2 rounded-lg ${
                isActive('/about') ? 'text-amber-900 font-bold bg-amber-100/50' : 'text-amber-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              to="/services"
              className={`block text-sm font-medium transition-all duration-300 hover:translate-x-3 hover:text-amber-900 px-3 py-2 rounded-lg ${
                isActive('/services') ? 'text-amber-900 font-bold bg-amber-100/50' : 'text-amber-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Hizmetler
            </Link>
            <Link
              to="/gallery"
              className={`block text-sm font-medium transition-all duration-300 hover:translate-x-3 hover:text-amber-900 px-3 py-2 rounded-lg ${
                isActive('/gallery') ? 'text-amber-900 font-bold bg-amber-100/50' : 'text-amber-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link
              to="/contact"
              className={`block text-sm font-medium transition-all duration-300 hover:translate-x-3 hover:text-amber-900 px-3 py-2 rounded-lg ${
                isActive('/contact') ? 'text-amber-900 font-bold bg-amber-100/50' : 'text-amber-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
            <Link
              to="/contact"
              className="block w-full text-center rounded-full py-3 px-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}