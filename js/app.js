// Paradise Farm — Main Application Controller
const { useState, useEffect } = React;
const C = window.ParadiseComponents;
const DATA = window.PARADISE_DATA;

function ParadiseFarmApp() {
  const [activeRoute, setActiveRoute] = useState("/");
  const [currentSection, setCurrentSection] = useState("home");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  // Synchronize with URL hash or path changes
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["about", "venues", "gallery", "video", "events", "contact"].includes(hash)) {
        setCurrentSection(hash);
      } else {
        setCurrentSection("home");
      }
    };

    window.addEventListener("hashchange", handleLocationChange);
    handleLocationChange();
    return () => window.removeEventListener("hashchange", handleLocationChange);
  }, []);

  // ScrollSpy for Header Navigation
  useEffect(() => {
    if (activeRoute !== "/") return;

    const sections = ["home", "about", "venues", "gallery", "video", "events", "contact"];
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.25,
      rootMargin: "-80px 0px -40% 0px"
    });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeRoute]);

  // Lightbox handlers
  const handleOpenLightbox = (imagesList, index) => {
    setLightboxState({
      isOpen: true,
      images: imagesList,
      currentIndex: index
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handlePrevLightbox = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const handleNextLightbox = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  // Scroll navigation helper
  const scrollToSection = (sectionId) => {
    if (activeRoute !== "/") {
      setActiveRoute("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dedicated Route Views
  const renderRouteView = () => {
    switch (activeRoute) {
      case "/about":
        return React.createElement("div", { className: "dedicated-page-wrapper animate-fade-in" },
          // Dedicated Page Header Banner
          React.createElement("div", {
            style: {
              padding: "160px 0 80px",
              background: "linear-gradient(180deg, #0B0B0A 0%, #161514 100%)",
              textAlign: "center",
              borderBottom: "1px solid var(--gold-border)"
            }
          },
            React.createElement("div", { className: "container" },
              React.createElement("span", { className: "luxury-tag" }, "THE SANCTUARY"),
              React.createElement("h1", {
                style: { fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "#FFFFFF", marginBottom: "1rem" }
              }, "About Paradise Farm"),
              React.createElement("p", { style: { color: "#D1CDC4", maxWidth: "600px", margin: "0 auto" } },
                "Surat's foremost luxury wedding haven where lifelong promises unfold in architectural grace."
              )
            )
          ),
          React.createElement(C.AboutSection, {
            onDiscoverClick: () => scrollToSection("venues"),
            onVideoClick: () => setVideoModalOpen(true)
          }),
          React.createElement(C.WhySection, null)
        );

      case "/venues":
        return React.createElement("div", { className: "dedicated-page-wrapper animate-fade-in" },
          React.createElement("div", {
            style: {
              padding: "160px 0 80px",
              background: "linear-gradient(180deg, #0B0B0A 0%, #161514 100%)",
              textAlign: "center",
              borderBottom: "1px solid var(--gold-border)"
            }
          },
            React.createElement("div", { className: "container" },
              React.createElement("span", { className: "luxury-tag" }, "DISTINGUISHED SPACES"),
              React.createElement("h1", {
                style: { fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "#FFFFFF", marginBottom: "1rem" }
              }, "Our Celebration Venues"),
              React.createElement("p", { style: { color: "#D1CDC4", maxWidth: "600px", margin: "0 auto" } },
                "Discover our expansive open lawns, covered banquet pavilions, and signature royal stages."
              )
            )
          ),
          React.createElement(C.VenuesSection, {
            onSelectVenue: (v) => setBookingModalOpen(true)
          })
        );

      case "/gallery":
        return React.createElement("div", { className: "dedicated-page-wrapper animate-fade-in" },
          React.createElement("div", {
            style: {
              padding: "160px 0 80px",
              background: "linear-gradient(180deg, #0B0B0A 0%, #161514 100%)",
              textAlign: "center",
              borderBottom: "1px solid var(--gold-border)"
            }
          },
            React.createElement("div", { className: "container" },
              React.createElement("span", { className: "luxury-tag" }, "CURATED PORTFOLIO"),
              React.createElement("h1", {
                style: { fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "#FFFFFF", marginBottom: "1rem" }
              }, "Visual Splendor Gallery"),
              React.createElement("p", { style: { color: "#D1CDC4", maxWidth: "600px", margin: "0 auto" } },
                "Actual photographic glimpses from real wedding nights and celebrations at Paradise Farm Surat."
              )
            )
          ),
          React.createElement(C.GallerySection, { onOpenLightbox: handleOpenLightbox })
        );

      case "/video":
        return React.createElement("div", { className: "dedicated-page-wrapper animate-fade-in" },
          React.createElement("div", {
            style: {
              padding: "160px 0 80px",
              background: "linear-gradient(180deg, #0B0B0A 0%, #161514 100%)",
              textAlign: "center",
              borderBottom: "1px solid var(--gold-border)"
            }
          },
            React.createElement("div", { className: "container" },
              React.createElement("span", { className: "luxury-tag" }, "CINEMATIC MEDIA"),
              React.createElement("h1", {
                style: { fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "#FFFFFF", marginBottom: "1rem" }
              }, "Video Experience"),
              React.createElement("p", { style: { color: "#D1CDC4", maxWidth: "600px", margin: "0 auto" } },
                "Feel the energy, lighting, and starlit ambiance of Paradise Farm in live motion."
              )
            )
          ),
          React.createElement(C.VideoExperience, { onPlayVideo: () => setVideoModalOpen(true) })
        );

      case "/events":
        return React.createElement("div", { className: "dedicated-page-wrapper animate-fade-in" },
          React.createElement("div", {
            style: {
              padding: "160px 0 80px",
              background: "linear-gradient(180deg, #0B0B0A 0%, #161514 100%)",
              textAlign: "center",
              borderBottom: "1px solid var(--gold-border)"
            }
          },
            React.createElement("div", { className: "container" },
              React.createElement("span", { className: "luxury-tag" }, "MILESTONES & FESTIVITIES"),
              React.createElement("h1", {
                style: { fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "#FFFFFF", marginBottom: "1rem" }
              }, "Events & Occasions"),
              React.createElement("p", { style: { color: "#D1CDC4", maxWidth: "600px", margin: "0 auto" } },
                "Explore curated setups for royal weddings, grand receptions, and joyous sangeet nights."
              )
            )
          ),
          React.createElement(C.EventsSection, { onBookEvent: (t) => setBookingModalOpen(true) })
        );

      case "/contact":
        return React.createElement("div", { className: "dedicated-page-wrapper animate-fade-in" },
          React.createElement("div", {
            style: {
              padding: "160px 0 80px",
              background: "linear-gradient(180deg, #0B0B0A 0%, #161514 100%)",
              textAlign: "center",
              borderBottom: "1px solid var(--gold-border)"
            }
          },
            React.createElement("div", { className: "container" },
              React.createElement("span", { className: "luxury-tag" }, "CONNECT WITH US"),
              React.createElement("h1", {
                style: { fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "#FFFFFF", marginBottom: "1rem" }
              }, "Contact & Reservations"),
              React.createElement("p", { style: { color: "#D1CDC4", maxWidth: "600px", margin: "0 auto" } },
                "Visit our venue near Sarthana Jakatnaka or reach out for date reservations."
              )
            )
          ),
          React.createElement(C.ContactSection, null)
        );

      default:
        // Full Continuous Homepage (All 11 sections seamlessly orchestrated)
        return React.createElement("main", null,
          // 2. Cinematic Hero + Feature Bar
          React.createElement(C.CinematicHero, {
            onExploreClick: () => scrollToSection("venues"),
            onVideoClick: () => setVideoModalOpen(true)
          }),

          // 4. About Preview & Second Page (Light Editorial Style)
          React.createElement(C.AboutSection, {
            onDiscoverClick: () => scrollToSection("venues"),
            onVideoClick: () => setVideoModalOpen(true)
          }),

          // 5. Venue Showcase
          React.createElement(C.VenuesSection, {
            onSelectVenue: (v) => setBookingModalOpen(true)
          }),

          // 6. Events / Celebrations
          React.createElement(C.EventsSection, {
            onBookEvent: (title) => setBookingModalOpen(true)
          }),

          // 7. Gallery Preview
          React.createElement(C.GallerySection, {
            onOpenLightbox: handleOpenLightbox
          }),

          // 8. Video Experience
          React.createElement(C.VideoExperience, {
            onPlayVideo: () => setVideoModalOpen(true)
          }),

          // 9. Why Paradise Farm
          React.createElement(C.WhySection, null),

          // 10 & 14. Contact Section with Real Google Maps
          React.createElement(C.ContactSection, null)
        );
    }
  };

  return React.createElement("div", { className: "paradise-app-root" },
    // 1. Site Header
    React.createElement(C.SiteHeader, {
      activeRoute: activeRoute,
      setActiveRoute: setActiveRoute,
      onOpenBooking: () => setBookingModalOpen(true),
      currentSection: currentSection
    }),

    // Route / Page Content
    renderRouteView(),

    // 16. Footer
    React.createElement(C.SiteFooter, {
      onNavigate: (section) => scrollToSection(section)
    }),

    // 15. WhatsApp Floating Button
    React.createElement(C.FloatingWhatsApp, null),

    // Interactive Modals
    React.createElement(C.BookingModal, {
      isOpen: bookingModalOpen,
      onClose: () => setBookingModalOpen(false)
    }),

    React.createElement(C.LightboxModal, {
      isOpen: lightboxState.isOpen,
      images: lightboxState.images,
      currentIndex: lightboxState.currentIndex,
      onClose: handleCloseLightbox,
      onPrev: handlePrevLightbox,
      onNext: handleNextLightbox
    }),

    React.createElement(C.VideoModal, {
      isOpen: videoModalOpen,
      onClose: () => setVideoModalOpen(false)
    })
  );
}

// Mount React Root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(React.createElement(ParadiseFarmApp));
}
