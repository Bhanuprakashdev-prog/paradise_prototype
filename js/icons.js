// Elegant 2D Line Icons in Gold / Monochrome for Paradise Farm
// (No 3D elements, strict luxury SVG line aesthetic)

const ParadiseIcons = {
  // Brand Logo with Royal Crest & Serif Lettering (Clean Gold, No extra white text)
  Logo: ({ className = "header-logo-svg", width = 290, height = 56 }) => {
    return React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 310 56",
      className: className,
      style: { width: `${width}px`, height: `${height}px`, display: "block" }
    },
      React.createElement("defs", null,
        React.createElement("linearGradient", { id: "pGoldGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
          React.createElement("stop", { offset: "0%", stopColor: "#FFF5DC" }),
          React.createElement("stop", { offset: "35%", stopColor: "#D6A84F" }),
          React.createElement("stop", { offset: "70%", stopColor: "#C9A45C" }),
          React.createElement("stop", { offset: "100%", stopColor: "#9E7324" })
        )
      ),
      // Royal Crest on left
      React.createElement("g", { transform: "translate(4, 4)" },
        React.createElement("circle", { cx: "24", cy: "24", r: "22", fill: "none", stroke: "url(#pGoldGrad)", strokeWidth: "1.3", opacity: "0.85" }),
        React.createElement("circle", { cx: "24", cy: "24", r: "18", fill: "none", stroke: "url(#pGoldGrad)", strokeWidth: "0.7", strokeDasharray: "2,2", opacity: "0.6" }),
        React.createElement("path", { d: "M19 11 L24 5 L29 11 L27 13 L21 13 Z", fill: "url(#pGoldGrad)" }),
        React.createElement("path", {
          d: "M19 16 L19 35 M19 16 C26 14 32 17 32 23 C32 29 26 31 19 31 M19 21 L27 21 M23 27 L31 35",
          fill: "none",
          stroke: "url(#pGoldGrad)",
          strokeWidth: "2.2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      ),
      // Clean Typography in Royal Gold
      React.createElement("text", {
        x: "62",
        y: "34",
        fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
        fontSize: "22",
        fontWeight: "700",
        letterSpacing: "3.5",
        fill: "url(#pGoldGrad)"
      }, "PARADISE FARM")
    );
  },

  // Ring for Weddings
  Ring: ({ size = 20, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("circle", { cx: "12", cy: "14", r: "7" }),
    React.createElement("path", { d: "M12 2 L14 5 L10 5 Z" }),
    React.createElement("path", { d: "M9 5 L15 5" })
  ),

  // Sparkles for Events & Parties
  Sparkles: ({ size = 20, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("path", { d: "M12 2 L14 8 L20 10 L14 12 L12 18 L10 12 L4 10 L10 8 Z" }),
    React.createElement("path", { d: "M19 16 L20 18 L22 19 L20 20 L19 22 L18 20 L16 19 L18 18 Z" })
  ),

  // Building / Palace for Spacious Venue
  Building: ({ size = 20, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("path", { d: "M3 21h18" }),
    React.createElement("path", { d: "M5 21V7l7-4 7 4v14" }),
    React.createElement("path", { d: "M9 10a3 3 0 0 1 6 0v11H9V10z" })
  ),

  // Star for Premium Facilities
  Star: ({ size = 20, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  ),

  // MapPin for Prime Location Surat
  MapPin: ({ size = 20, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
    React.createElement("circle", { cx: "12", cy: "10", r: "3" })
  ),

  // Play button
  Play: ({ size = 20, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: color, stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("polygon", { points: "6 3 20 12 6 21 6 3" })
  ),

  // Arrow Right
  ArrowRight: ({ size = 18, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
    React.createElement("polyline", { points: "12 5 19 12 12 19" })
  ),

  // Phone
  Phone: ({ size = 18, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
  ),

  // WhatsApp
  WhatsApp: ({ size = 24, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }),
    React.createElement("path", { d: "M9.5 9a.5.5 0 0 0-.5.5c0 1.5 1.5 3.5 3 4.5.5.3 1 .5 1.5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-.5a2 2 0 0 1-1-1v-.5a.5.5 0 0 0-.5-.5h-2z", fill: color, stroke: "none" })
  ),

  // Instagram
  Instagram: ({ size = 18, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
    React.createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
    React.createElement("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
  ),

  // Calendar
  Calendar: ({ size = 18, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    React.createElement("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    React.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ),

  // Users
  Users: ({ size = 18, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
    React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
    React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ),

  // Mail
  Mail: ({ size = 18, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
    React.createElement("polyline", { points: "22,6 12,13 2,6" })
  ),

  // Check / Success
  Check: ({ size = 28, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("polyline", { points: "20 6 9 17 4 12" })
  ),

  // Close (X)
  Close: ({ size = 20, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),

  // Chevron Left
  ChevronLeft: ({ size = 22, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("polyline", { points: "15 18 9 12 15 6" })
  ),

  // Chevron Right
  ChevronRight: ({ size = 22, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("polyline", { points: "9 18 15 12 9 6" })
  ),

  // Maximize / Expand
  Maximize: ({ size = 18, color = "currentColor" }) => React.createElement("svg", {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement("polyline", { points: "15 3 21 3 21 9" }),
    React.createElement("polyline", { points: "9 21 3 21 3 15" }),
    React.createElement("line", { x1: "21", y1: "3", x2: "14", y2: "10" }),
    React.createElement("line", { x1: "3", y1: "21", x2: "10", y2: "14" })
  )
};

window.ParadiseIcons = ParadiseIcons;
