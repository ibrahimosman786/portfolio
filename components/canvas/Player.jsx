"use client";

import { useEffect, useRef, useState } from "react";

function PlayerCanvas({ isMobile }) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Use iframe fallback for Spline
    if (containerRef.current) {
      // Hide watermark styles
      const style = document.createElement("style");
      style.textContent = `
        .spline-watermark,
        [data-id="spline-watermark"],
        div[style*="position: fixed"][style*="bottom: 0"] {
          display: none !important;
          visibility: hidden !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <div className="canvas-loader"></div>
        </div>
      )}
      <iframe
        src="https://my.spline.design/roomrelaxingcopy-RQNA1VpGEexTi1P7HTwihhJH/"
        className="w-full h-full border-none"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        onLoad={() => setIsLoading(false)}
        allow="autoplay; fullscreen"
      />
    </div>
  );
}

export default PlayerCanvas;
