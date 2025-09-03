// Background Hexagonal Pattern from https://www.bgvault.tech/
export const Background = () => {
  return (
    <div class="absolute inset-0 bg-white dark:bg-gray-950">
      <div class="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path 
                d="M25 0 L50 14.4 L50 38.4 L25 51.8 L0 38.4 L0 14.4 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                class="text-blue-500/40 dark:text-blue-400/30"
              />
              <path 
                d="M25 0 L50 14.4 L50 38.4 L25 51.8 L0 38.4 L0 14.4 Z" 
                transform="translate(50, 25.9)" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                class="text-purple-500/40 dark:text-purple-400/30"
              />
            </pattern>
            
            <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#hexagons)" />
          <rect width="100%" height="100%" fill="url(#hex-gradient)" />
        </svg>
      </div>
      
      {/* Gradient overlays */}
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_60%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_60%)]" />
    </div>
  );
}