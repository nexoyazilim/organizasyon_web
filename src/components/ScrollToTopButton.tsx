import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Sayfa 300px'den fazla kaydırıldığında butonu göster
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 group"
          aria-label="Yukarı çık"
        >
          <span className="material-symbols-outlined text-3xl group-hover:animate-bounce">
            arrow_upward
          </span>
        </button>
      )}
    </>
  );
}

