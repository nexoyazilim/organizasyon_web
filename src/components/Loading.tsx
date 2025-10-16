export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="text-center">
        {/* Animated Flower */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full animate-pulse"></div>
          </div>
          
          {/* Petals */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-start justify-center"
              style={{
                transform: `rotate(${i * 45}deg)`,
                animation: `petalPulse 1.5s ease-in-out ${i * 0.1}s infinite`,
              }}
            >
              <div className="w-8 h-16 bg-gradient-to-t from-amber-300 to-amber-500 rounded-full opacity-80"></div>
            </div>
          ))}
        </div>

        {/* Logo/Text */}
        <h1 className="text-4xl font-bold font-display text-amber-900 mb-2 animate-pulse">
          Organizar
        </h1>
        <p className="text-amber-700 text-lg">Yükleniyor...</p>
      </div>

      <style>{`
        @keyframes petalPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

