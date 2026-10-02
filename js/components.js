// Paradise Farm — Production React Components
const { useState, useEffect, useRef } = React;
const Icons = window.ParadiseIcons;
const DATA = window.PARADISE_DATA;

/* ===================================================================
   HEADER COMPONENT
   =================================================================== */
function SiteHeader({ activeRoute, setActiveRoute, onOpenBooking, currentSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home", path: "/" },
    { label: "About", id: "about", path: "/about" },
    { label: "Venues", id: "venues", path: "/venues" },
    { label: "Gallery", id: "gallery", path: "/gallery" },
    { label: "Video", id: "video", path: "/video" },
    { label: "Events", id: "events", path: "/events" },
    { label: "Contact", id: "contact", path: "/contact" }
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (activeRoute !== "/") {
      setActiveRoute("/");
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDedicatedPageClick = (path) => {
    setMobileMenuOpen(false);
    setActiveRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return React.createElement("header", { className: `site-header ${scrolled ? "scrolled" : ""}` },
    React.createElement("div", { className: "container header-inner" },
      // Left: Logo
      React.createElement("a", {
        href: "#home",
        className: "header-logo",
        onClick: (e) => {
          e.preventDefault();
          setActiveRoute("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
        React.createElement(Icons.Logo, { width: 230, height: 50 })
      ),

      // Center: Desktop Navigation
      React.createElement("nav", { className: "header-nav" },
        navItems.map(item => {
          const isActive = (activeRoute === "/" && currentSection === item.id) || (activeRoute === item.path);
          return React.createElement("a", {
            key: item.id,
            href: `#${item.id}`,
            className: `nav-link ${isActive ? "active" : ""}`,
            onClick: (e) => {
              e.preventDefault();
              handleNavClick(item);
            }
          }, item.label);
        })
      ),

      // Right: Actions (Book Your Event + Mobile Toggle)
      React.createElement("div", { className: "header-actions" },
        React.createElement("button", {
          className: "btn-gold-outline",
          style: { padding: "0.75rem 1.6rem", fontSize: "0.8rem" },
          onClick: onOpenBooking
        }, "Book Your Event"),

        // Hamburger button for mobile
        React.createElement("button", {
          className: `mobile-toggle-btn ${mobileMenuOpen ? "open" : ""}`,
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          "aria-label": "Toggle navigation menu"
        },
          React.createElement("span", { className: "mobile-toggle-bar" }),
          React.createElement("span", { className: "mobile-toggle-bar" }),
          React.createElement("span", { className: "mobile-toggle-bar" })
        )
      )
    ),

    // Mobile Menu Drawer
    React.createElement("div", {
      className: `backdrop-blur-overlay ${mobileMenuOpen ? "active" : ""}`,
      onClick: () => setMobileMenuOpen(false)
    }),
    React.createElement("div", { className: `mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}` },
      React.createElement("div", { className: "mobile-menu-links" },
        React.createElement("div", { style: { marginBottom: "1rem" } },
          React.createElement(Icons.Logo, { width: 200, height: 44 })
        ),
        navItems.map(item => {
          const isActive = (activeRoute === "/" && currentSection === item.id) || (activeRoute === item.path);
          return React.createElement("a", {
            key: item.id,
            href: `#${item.id}`,
            className: `mobile-nav-link ${isActive ? "active" : ""}`,
            onClick: (e) => {
              e.preventDefault();
              handleNavClick(item);
            }
          },
            item.label,
            React.createElement(Icons.ChevronRight, { size: 18, color: "#D6A84F" })
          );
        })
      ),

      React.createElement("div", { className: "mobile-menu-footer" },
        React.createElement("button", {
          className: "btn-gold-solid",
          style: { width: "100%" },
          onClick: () => {
            setMobileMenuOpen(false);
            onOpenBooking();
          }
        }, "Book Your Event"),
        React.createElement("div", { style: { fontSize: "0.82rem", color: "#9E998E", textAlign: "center" } },
          "Surat, Gujarat • +91 74339 46001"
        )
      )
    )
  );
}

/* ===================================================================
   HERO SECTION COMPONENT (Approved Reference Design)
   =================================================================== */
/* ===================================================================
   HERO SECTION COMPONENT (Krishav Engineering Structure)
   =================================================================== */
function CinematicHero({ onExploreClick, onVideoClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = DATA.heroSlides;

  // Slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return React.createElement("section", { id: "home", className: "krishav-hero-section" },
    React.createElement("div", { className: "krishav-hero-inner" },
      // Left Content Area
      React.createElement("div", { className: "krishav-hero-left" },
        React.createElement("div", { className: "krishav-hero-eyebrow" },
          "PARADISE FARM • WEDDINGS & CELEBRATIONS"
        ),
        React.createElement("h1", { className: "krishav-hero-title" },
          React.createElement("span", { className: "title-row" }, "MEMORABLE"),
          React.createElement("span", { className: "title-row" }, "CELEBRATIONS"),
          React.createElement("span", { className: "title-row" }, "FOR"),
          React.createElement("span", { className: "title-row" }, "LIFELONG"),
          React.createElement("span", { className: "title-row gold-accent" }, "MOMENTS")
        ),
        React.createElement("p", { className: "krishav-hero-desc" },
          DATA.brand.description
        ),
        React.createElement("div", { className: "krishav-hero-buttons" },
          React.createElement("button", {
            className: "btn-krishav-primary",
            onClick: onExploreClick
          },
            "Explore Our Venue",
            React.createElement("span", { style: { fontSize: "1.1rem", lineHeight: 1 } }, "→")
          ),
          React.createElement("button", {
            className: "btn-krishav-secondary",
            onClick: onVideoClick
          },
            "Watch Video",
            React.createElement("span", { style: { fontSize: "1.1rem", lineHeight: 1 } }, "→")
          )
        ),
        // Slide Indicator on Left below CTA
        React.createElement("div", { className: "krishav-slide-indicator" },
          React.createElement("div", { className: "krishav-slide-counter" },
            React.createElement("span", { className: "current" }, `0${currentSlide + 1}`),
            React.createElement("span", { className: "slash" }, "/"),
            React.createElement("span", { className: "total" }, `0${slides.length}`)
          ),
          React.createElement("div", { className: "krishav-progress-bar" },
            React.createElement("div", {
              className: "krishav-progress-fill",
              style: { width: `${((currentSlide + 1) / slides.length) * 100}%` }
            })
          ),
          React.createElement("div", { className: "krishav-slide-arrows" },
            React.createElement("button", {
              className: "krishav-arrow-btn",
              onClick: () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length),
              "aria-label": "Previous Slide"
            }, "‹"),
            React.createElement("button", {
              className: "krishav-arrow-btn",
              onClick: () => setCurrentSlide((currentSlide + 1) % slides.length),
              "aria-label": "Next Slide"
            }, "›")
          )
        )
      ),

      // Right Dominant Visual
      React.createElement("div", { className: "krishav-hero-right" },
        React.createElement("div", { className: "krishav-right-mask" }),
        React.createElement("div", { className: "krishav-right-topbottom-vignette" }),
        slides.map((slide, idx) => (
          React.createElement("img", {
            key: slide.id,
            src: slide.image,
            alt: slide.alt,
            className: `krishav-slide-img ${idx === currentSlide ? "active" : ""}`
          })
        ))
      )
    ),

    // Scroll Indicator
    React.createElement("div", { className: "krishav-scroll-indicator" },
      React.createElement("span", null, "Scroll to Explore"),
      React.createElement("span", { className: "scroll-arrow" }, "↓")
    )
  );
}

/* ===================================================================
   HERO FEATURE BAR (Horizontal 5-item Strip)
   =================================================================== */
function HeroFeatureBar() {
  const getIcon = (type) => {
    switch (type) {
      case "ring": return React.createElement(Icons.Ring, { size: 22, color: "#D6A84F" });
      case "sparkles": return React.createElement(Icons.Sparkles, { size: 22, color: "#D6A84F" });
      case "building": return React.createElement(Icons.Building, { size: 22, color: "#D6A84F" });
      case "star": return React.createElement(Icons.Star, { size: 22, color: "#D6A84F" });
      case "mapPin": return React.createElement(Icons.MapPin, { size: 22, color: "#D6A84F" });
      default: return React.createElement(Icons.Star, { size: 22, color: "#D6A84F" });
    }
  };

  return React.createElement("div", { className: "hero-feature-bar-wrapper" },
    React.createElement("div", { className: "hero-feature-bar" },
      DATA.heroFeatures.map(item => (
        React.createElement("div", { key: item.id, className: "feature-bar-item" },
          React.createElement("div", { className: "feature-icon-box" },
            getIcon(item.icon)
          ),
          React.createElement("div", { className: "feature-item-text" },
            React.createElement("span", { className: "feature-title" }, item.title),
            React.createElement("span", { className: "feature-subtitle" }, item.subtitle)
          )
        )
      ))
    )
  );
}

/* ===================================================================
   SECOND PAGE / ABOUT SECTION (LIGHT EDITORIAL STYLE #F7F1E5)
   =================================================================== */
function AboutSection({ onDiscoverClick, onVideoClick }) {
  const about = DATA.about;

  return React.createElement("section", { id: "about", className: "about-section" },
    React.createElement("div", { className: "about-bg-watermark" }, "PARADISE"),

    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "about-editorial-grid" },
        // Left Column: Editorial Text
        React.createElement("div", { className: "about-text-column" },
          React.createElement("span", { className: "luxury-tag" }, about.label),
          React.createElement("h2", { className: "about-main-heading" },
            "A Venue Where Moments ",
            React.createElement("em", null, "Turn Into"),
            " Lifelong Memories"
          ),
          React.createElement("p", { className: "about-supporting-text" },
            about.description
          ),
          React.createElement("p", { className: "about-supporting-text", style: { marginTop: "-1rem" } },
            "Nestled in Surat near Sarthana, Paradise Farm combines royal palace-inspired architecture with expansive manicured lawns and state-of-the-art illumination to craft an opulent sanctuary for life's most cherished milestones."
          ),

          React.createElement("div", { className: "about-cta-row" },
            React.createElement("button", {
              className: "btn-about-primary",
              onClick: onDiscoverClick
            },
              "Discover Our Story",
              React.createElement(Icons.ArrowRight, { size: 16 })
            ),
            React.createElement("button", {
              className: "btn-about-secondary",
              onClick: onVideoClick
            },
              React.createElement(Icons.Play, { size: 14 }),
              "Watch Video"
            )
          )
        ),

        // Right Column: Elegant Overlapping Architectural Composition
        React.createElement("div", { className: "about-image-composition" },
          // Floating Gold Badge
          React.createElement("div", { className: "about-gold-badge" },
            React.createElement("span", { className: "badge-tag" }, "Destination"),
            React.createElement("span", { className: "badge-val" }, "Surat, Gujarat")
          ),

          // Main Rounded Palace Image
          React.createElement("div", { className: "about-image-main-frame" },
            React.createElement("img", {
              src: about.primaryImage,
              alt: "Paradise Farm Palace Architecture",
              className: "about-image-main",
              loading: "lazy"
            })
          ),

          // Overlapping Walkway Image
          React.createElement("div", { className: "about-image-secondary-frame" },
            React.createElement("img", {
              src: about.secondaryImage,
              alt: "Paradise Farm Celestial Walkway",
              className: "about-image-secondary",
              loading: "lazy"
            })
          )
        )
      ),

      // Statistics Row (Section 7)
      React.createElement("div", { className: "about-stats-container" },
        about.stats.map((stat, idx) => (
          React.createElement("div", { key: idx, className: "stat-item" },
            React.createElement("span", { className: "stat-title" }, stat.title),
            React.createElement("span", { className: "stat-desc" }, stat.desc)
          ))
        ))
      )
    )
  );
}

/* ===================================================================
   SECTION 8: VENUES SECTION
   =================================================================== */
function VenuesSection({ onSelectVenue }) {
  const venues = DATA.venues;

  return React.createElement("section", { id: "venues", className: "venues-section" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "section-header-center" },
        React.createElement("span", { className: "luxury-tag" }, "EXQUISITE SPACES"),
        React.createElement("h2", { className: "section-title" },
          "Distinguished ",
          React.createElement("span", { className: "gold-gradient-text" }, "Celebration Venues")
        ),
        React.createElement("p", { className: "section-subtitle" },
          "Explore our meticulously curated event zones — each engineered with regal aesthetics, grand scale, and impeccable comfort."
        )
      ),

      React.createElement("div", { className: "venues-grid" },
        venues.map(venue => (
          React.createElement("div", {
            key: venue.id,
            className: `venue-card ${venue.featured ? "featured-card" : ""}`
          },
            React.createElement("div", { className: "venue-image-frame" },
              React.createElement("img", {
                src: venue.image,
                alt: venue.name,
                className: "venue-img",
                loading: "lazy"
              }),
              React.createElement("div", { className: "venue-overlay-gradient" }),
              React.createElement("div", { className: "venue-badge-pill" }, venue.tag)
            ),

            React.createElement("div", { className: "venue-card-body" },
              React.createElement("div", null,
                React.createElement("h3", { className: "venue-card-title" }, venue.name),
                React.createElement("p", { className: "venue-card-desc" }, venue.description)
              ),

              React.createElement("div", { className: "venue-card-footer" },
                React.createElement("span", { className: "venue-capacity-hint" }, venue.capacity),
                React.createElement("button", {
                  className: "venue-explore-btn",
                  onClick: () => onSelectVenue(venue)
                },
                  "Explore",
                  React.createElement(Icons.ArrowRight, { size: 14 })
                )
              )
            )
          )
        ))
      )
    )
  );
}

/* ===================================================================
   SECTION 9: EVENTS SECTION (Editorial Category Selector)
   =================================================================== */
function EventsSection({ onBookEvent }) {
  const events = DATA.events;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const currentEvent = events[selectedIdx];

  return React.createElement("section", { id: "events", className: "events-section" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "section-header-center" },
        React.createElement("span", { className: "luxury-tag" }, "OCCASIONS & MILESTONES"),
        React.createElement("h2", { className: "section-title" },
          "Curated For ",
          React.createElement("span", { className: "gold-gradient-text" }, "Every Celebration")
        ),
        React.createElement("p", { className: "section-subtitle" },
          "From traditional sacred rituals to high-energy wedding receptions, Paradise Farm transforms your vision into a grand spectacle."
        )
      ),

      React.createElement("div", { className: "events-editorial-layout" },
        // Left Column: Interactive Categories
        React.createElement("div", { className: "events-tabs-list" },
          events.map((ev, idx) => (
            React.createElement("div", {
              key: ev.id,
              className: `event-tab-card ${idx === selectedIdx ? "active" : ""}`,
              onClick: () => setSelectedIdx(idx)
            },
              React.createElement("div", { className: "event-tab-meta" },
                React.createElement("span", { className: "event-tab-title" }, ev.title),
                React.createElement("span", { className: "event-tab-tag" }, ev.tagline)
              ),
              React.createElement(Icons.ChevronRight, { className: "event-tab-arrow", size: 20 })
            )
          ))
        ),

        // Right Column: Active Event Showcase
        React.createElement("div", { className: "event-feature-display" },
          React.createElement("div", { className: "event-feature-image-frame" },
            React.createElement("img", {
              key: currentEvent.image,
              src: currentEvent.image,
              alt: currentEvent.title,
              className: "event-feature-img",
              loading: "lazy"
            }),
            React.createElement("div", { className: "event-feature-overlay" })
          ),

          React.createElement("div", { className: "event-feature-content" },
            React.createElement("span", { className: "event-feature-highlight" }, currentEvent.tagline),
            React.createElement("h3", { className: "event-feature-title" }, currentEvent.title),
            React.createElement("p", { className: "event-feature-desc" }, currentEvent.description),

            // Highlights list
            React.createElement("div", {
              style: {
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                marginBottom: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "1.2rem"
              }
            },
              currentEvent.highlights.map((h, i) => (
                React.createElement("div", {
                  key: i,
                  style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#F3E5C8" }
                },
                  React.createElement(Icons.Star, { size: 14, color: "#D6A84F" }),
                  React.createElement("span", null, h)
                )
              ))
            ),

            React.createElement("button", {
              className: "btn-gold-solid",
              onClick: () => onBookEvent(currentEvent.title)
            },
              "Plan This Event",
              React.createElement(Icons.ArrowRight, { size: 16 })
            )
          )
        )
      )
    )
  );
}

/* ===================================================================
   SECTION 10: GALLERY (Structured Grid & Right-to-Left Visual Flow)
   =================================================================== */
function GallerySection({ onOpenLightbox }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Venue", "Weddings", "Decor", "Events", "Lighting"];
  const gridRef = useRef(null);

  const filteredItems = filter === "All"
    ? DATA.gallery
    : DATA.gallery.filter(item => item.category === filter);

  const scrollLeft = () => {
    if (gridRef.current) gridRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (gridRef.current) gridRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  return React.createElement("section", { id: "gallery", className: "gallery-section" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "section-header-center" },
        React.createElement("span", { className: "luxury-tag" }, "VISUAL SPLENDOR"),
        React.createElement("h2", { className: "section-title" },
          "Moments In ",
          React.createElement("span", { className: "gold-gradient-text" }, "Paradise")
        ),
        React.createElement("p", { className: "section-subtitle" },
          "Immerse yourself in authentic captures of our illuminated palace, floral pathways, grand lawns, and joyful celebrations."
        )
      ),

      // Filter Buttons
      React.createElement("div", { className: "gallery-filters" },
        categories.map(cat => (
          React.createElement("button", {
            key: cat,
            className: `gallery-filter-btn ${filter === cat ? "active" : ""}`,
            onClick: () => setFilter(cat)
          }, cat)
        ))
      ),

      // Right-To-Left Visual Flow Bar
      React.createElement("div", { className: "gallery-flow-bar" },
        React.createElement("div", { className: "gallery-flow-status" },
          React.createElement("span", { style: { fontSize: "1.1rem" } }, "⇄"),
          React.createElement("span", null, "Right-To-Left Visual Gallery")
        ),
        React.createElement("div", { className: "gallery-flow-controls" },
          React.createElement("button", {
            className: "gallery-flow-btn",
            onClick: scrollLeft,
            "aria-label": "Slide Left"
          }, "‹"),
          React.createElement("button", {
            className: "gallery-flow-btn",
            onClick: scrollRight,
            "aria-label": "Slide Right"
          }, "›")
        )
      ),

      // Structured Grid
      React.createElement("div", {
        className: "gallery-structured-grid",
        ref: gridRef
      },
        filteredItems.map((item, idx) => {
          const isLarge = (idx % 6 === 0 || idx % 6 === 4);
          const spanClass = isLarge ? "span-large" : "span-medium";
          return React.createElement("div", {
            key: item.id,
            className: `gallery-card ${spanClass}`,
            onClick: () => onOpenLightbox(filteredItems, idx)
          },
            React.createElement("img", {
              src: item.image,
              alt: item.title,
              className: "gallery-card-img",
              loading: "lazy"
            }),
            React.createElement("div", { className: "gallery-card-overlay" },
              React.createElement("span", { className: "gallery-card-category" }, item.category),
              React.createElement("h4", { className: "gallery-card-title" }, item.title)
            ),
            React.createElement("div", { className: "gallery-card-badge" }, "⤢")
          );
        })
      )
    )
  );
}

/* ===================================================================
   SECTION 11: VIDEO EXPERIENCE
   =================================================================== */
function VideoExperience({ onPlayVideo }) {
  return React.createElement("section", { id: "video", className: "video-section" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "section-header-center" },
        React.createElement("span", { className: "luxury-tag" }, "CINEMATIC WALKTHROUGH"),
        React.createElement("h2", { className: "section-title" },
          "Experience ",
          React.createElement("span", { className: "gold-gradient-text" }, "Paradise Farm")
        ),
        React.createElement("p", { className: "section-subtitle" },
          "Feel the grandeur of our palace night illumination, joyful crowds, and starlit atmosphere in movement."
        )
      ),

      React.createElement("div", { className: "video-player-card" },
        React.createElement("img", {
          src: "images/paradise farm surat - Google Search_files/unnamed(70).webp",
          alt: "Paradise Farm Celebration Video Experience",
          className: "video-thumbnail-img"
        }),
        React.createElement("div", { className: "video-overlay-tint" }),

        React.createElement("div", {
          className: "video-play-center",
          onClick: onPlayVideo
        },
          React.createElement("div", { className: "play-pulse-ring" },
            React.createElement(Icons.Play, { size: 28, color: "#FFFFFF" })
          ),
          React.createElement("span", { className: "video-play-label" }, "Play Experience")
        )
      )
    )
  );
}

/* ===================================================================
   SECTION 12: WHY PARADISE FARM
   =================================================================== */
function WhySection() {
  const items = DATA.whyChooseUs;

  return React.createElement("section", { className: "why-section" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "section-header-center" },
        React.createElement("span", { className: "luxury-tag" }, "THE PARADISE DISTINCTION"),
        React.createElement("h2", { className: "section-title" },
          "Why Choose ",
          React.createElement("span", { className: "gold-gradient-text" }, "Paradise Farm")
        ),
        React.createElement("p", { className: "section-subtitle" },
          "Crafting grand experiences requires harmony between regal architecture, modern amenities, and genuine hospitality."
        )
      ),

      React.createElement("div", { className: "why-grid" },
        items.map(item => (
          React.createElement("div", { key: item.id, className: "why-card" },
            React.createElement("div", { className: "why-icon-wrap" },
              React.createElement(Icons.Sparkles, { size: 24, color: "#D6A84F" })
            ),
            React.createElement("h3", { className: "why-title" }, item.title),
            React.createElement("p", { className: "why-desc" }, item.desc)
          )
        ))
      )
    )
  );
}

/* ===================================================================
   SECTION 13 & 14: CONTACT SECTION & GOOGLE MAPS
   =================================================================== */
function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    eventType: "Wedding Ceremony",
    eventDate: "",
    guestCount: "500-1000",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  return React.createElement("section", { id: "contact", className: "contact-section" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "contact-grid" },
        // Left Column: Contact Information & Real Details
        React.createElement("div", { className: "contact-info-col" },
          React.createElement("span", { className: "luxury-tag no-after" }, "RESERVE YOUR DATE"),
          React.createElement("h2", { className: "contact-main-heading" },
            "Let's Create ",
            React.createElement("em", { style: { fontStyle: "italic", color: "#B88A3B" } }, "Something"),
            " Memorable"
          ),
          React.createElement("p", { className: "contact-desc" },
            "Connect directly with our event coordination desk for site visits, availability schedules, and personalized venue walkthroughs."
          ),

          React.createElement("div", { className: "contact-items-list" },
            // Phone
            React.createElement("div", { className: "contact-detail-row" },
              React.createElement("div", { className: "contact-detail-icon" },
                React.createElement(Icons.Phone, { size: 20 })
              ),
              React.createElement("div", { className: "contact-detail-meta" },
                React.createElement("span", { className: "contact-label" }, "Phone & Reservations"),
                React.createElement("a", {
                  href: `tel:${DATA.brand.phone.replace(/\s+/g, '')}`,
                  className: "contact-value"
                }, DATA.brand.phone),
                React.createElement("span", { style: { fontSize: "0.85rem", color: "#5C5850" } },
                  DATA.brand.altPhones.join("  |  ")
                )
              )
            ),

            // WhatsApp
            React.createElement("div", { className: "contact-detail-row" },
              React.createElement("div", { className: "contact-detail-icon" },
                React.createElement(Icons.WhatsApp, { size: 20 })
              ),
              React.createElement("div", { className: "contact-detail-meta" },
                React.createElement("span", { className: "contact-label" }, "Direct WhatsApp"),
                React.createElement("a", {
                  href: `https://wa.me/${DATA.brand.whatsappClean}?text=Hello%20Paradise%20Farm%2C%20I%20would%20like%20to%20enquire%20about%20booking%20an%20event.`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "contact-value"
                }, DATA.brand.whatsapp)
              )
            ),

            // Instagram
            React.createElement("div", { className: "contact-detail-row" },
              React.createElement("div", { className: "contact-detail-icon" },
                React.createElement(Icons.Instagram, { size: 20 })
              ),
              React.createElement("div", { className: "contact-detail-meta" },
                React.createElement("span", { className: "contact-label" }, "Instagram"),
                React.createElement("a", {
                  href: DATA.brand.instagramUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "contact-value"
                }, "Paradise Farm Surat (" + DATA.brand.instagram + ")")
              )
            ),

            // Address
            React.createElement("div", { className: "contact-detail-row" },
              React.createElement("div", { className: "contact-detail-icon" },
                React.createElement(Icons.MapPin, { size: 20 })
              ),
              React.createElement("div", { className: "contact-detail-meta" },
                React.createElement("span", { className: "contact-label" }, "Venue Location"),
                React.createElement("span", { className: "contact-value", style: { fontSize: "0.95rem", lineHeight: "1.6" } },
                  DATA.brand.address
                )
              )
            )
          )
        ),

        // Right Column: Premium Enquiry Form
        React.createElement("div", { className: "enquiry-form-card" },
          !submitted ? (
            React.createElement("form", { onSubmit: handleSubmit },
              React.createElement("h3", { className: "form-title" }, "Request Event Consultation"),
              React.createElement("p", { className: "form-subtitle" }, "Fill in your celebration details for immediate coordination."),

              errorMsg && React.createElement("div", {
                style: {
                  padding: "0.75rem 1rem",
                  background: "#FEE2E2",
                  color: "#991B1B",
                  borderRadius: "2px",
                  fontSize: "0.85rem",
                  marginBottom: "1.25rem"
                }
              }, errorMsg),

              React.createElement("div", { className: "form-grid-row" },
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { className: "form-label" }, "Full Name *"),
                  React.createElement("input", {
                    type: "text",
                    className: "form-input",
                    placeholder: "e.g. Rajesh Patel",
                    value: formData.fullName,
                    onChange: (e) => setFormData({ ...formData, fullName: e.target.value }),
                    required: true
                  })
                ),
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { className: "form-label" }, "Phone Number *"),
                  React.createElement("input", {
                    type: "tel",
                    className: "form-input",
                    placeholder: "+91 98765 43210",
                    value: formData.phoneNumber,
                    onChange: (e) => setFormData({ ...formData, phoneNumber: e.target.value }),
                    required: true
                  })
                )
              ),

              React.createElement("div", { className: "form-grid-row" },
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { className: "form-label" }, "Email Address"),
                  React.createElement("input", {
                    type: "email",
                    className: "form-input",
                    placeholder: "you@example.com",
                    value: formData.email,
                    onChange: (e) => setFormData({ ...formData, email: e.target.value })
                  })
                ),
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { className: "form-label" }, "Event Type"),
                  React.createElement("select", {
                    className: "form-select",
                    value: formData.eventType,
                    onChange: (e) => setFormData({ ...formData, eventType: e.target.value })
                  },
                    DATA.eventTypes.map(t => React.createElement("option", { key: t, value: t }, t))
                  )
                )
              ),

              React.createElement("div", { className: "form-grid-row" },
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { className: "form-label" }, "Expected Event Date"),
                  React.createElement("input", {
                    type: "date",
                    className: "form-input",
                    value: formData.eventDate,
                    onChange: (e) => setFormData({ ...formData, eventDate: e.target.value })
                  })
                ),
                React.createElement("div", { className: "form-group" },
                  React.createElement("label", { className: "form-label" }, "Estimated Guests"),
                  React.createElement("select", {
                    className: "form-select",
                    value: formData.guestCount,
                    onChange: (e) => setFormData({ ...formData, guestCount: e.target.value })
                  },
                    React.createElement("option", { value: "Under 500" }, "Under 500 Guests"),
                    React.createElement("option", { value: "500-1000" }, "500 - 1,000 Guests"),
                    React.createElement("option", { value: "1000-2500" }, "1,000 - 2,500 Guests"),
                    React.createElement("option", { value: "2500+" }, "2,500+ Grand Gathering")
                  )
                )
              ),

              React.createElement("div", { className: "form-group" },
                React.createElement("label", { className: "form-label" }, "Celebration Notes / Requirements"),
                React.createElement("textarea", {
                  className: "form-textarea",
                  placeholder: "Tell us about your wedding/event vision, preferred setups, or questions...",
                  value: formData.message,
                  onChange: (e) => setFormData({ ...formData, message: e.target.value })
                })
              ),

              React.createElement("button", {
                type: "submit",
                className: "btn-about-primary",
                style: { width: "100%", justifyContent: "center", marginTop: "1rem" }
              },
                "Send Enquiry",
                React.createElement(Icons.ArrowRight, { size: 16 })
              )
            )
          ) : (
            // Success Animation State
            React.createElement("div", { className: "form-success-state" },
              React.createElement("div", { className: "success-check-icon" },
                React.createElement(Icons.Check, { size: 36, color: "#B88A3B" })
              ),
              React.createElement("h3", { className: "form-title" }, "Enquiry Received!"),
              React.createElement("p", { className: "form-subtitle", style: { maxWidth: "380px", margin: "0 auto 1.5rem auto" } },
                `Thank you, ${formData.fullName}. Our Paradise Farm concierge team has received your enquiry and will contact you via phone (${formData.phoneNumber}) shortly.`
              ),
              React.createElement("button", {
                className: "btn-about-secondary",
                onClick: () => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    phoneNumber: "",
                    email: "",
                    eventType: "Wedding Ceremony",
                    eventDate: "",
                    guestCount: "500-1000",
                    message: ""
                  });
                }
              }, "Submit Another Enquiry")
            )
          )
        )
      ),

      // Real Google Maps Location (Section 14)
      React.createElement("div", { className: "maps-section-wrapper" },
        React.createElement("div", { className: "maps-header-bar" },
          React.createElement("div", null,
            React.createElement("span", { className: "luxury-tag no-after", style: { marginBottom: "4px" } }, "GOOGLE MAPS NAVIGATION"),
            React.createElement("h3", { className: "maps-heading" }, "Find Paradise Farm — Surat, Gujarat")
          ),
          React.createElement("a", {
            href: DATA.brand.mapsShortUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn-about-primary"
          },
            React.createElement(Icons.MapPin, { size: 16 }),
            "Get Directions (g.co/kgs/D2QUKNy)"
          )
        ),
        React.createElement("iframe", {
          title: "Paradise Farm Google Map Location",
          src: DATA.brand.mapsEmbedUrl,
          className: "map-responsive-frame",
          loading: "lazy",
          allowFullScreen: true
        })
      )
    )
  );
}

/* ===================================================================
   SECTION 15: WHATSAPP FLOATING BUTTON
   =================================================================== */
function FloatingWhatsApp() {
  return React.createElement("a", {
    href: `https://wa.me/${DATA.brand.whatsappClean}?text=Hello%20Paradise%20Farm%2C%20I%20would%20like%20to%20enquire%20about%20booking%20an%20event.`,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "floating-whatsapp-btn",
    "aria-label": "Chat with Paradise Farm on WhatsApp",
    title: "Chat with Paradise Farm (+91 74339 46001)"
  },
    React.createElement(Icons.WhatsApp, { size: 28, color: "#FFFFFF" })
  );
}

/* ===================================================================
   SECTION 16: FOOTER (Dark Regal Contrast)
   =================================================================== */
function SiteFooter({ onNavigate }) {
  return React.createElement("footer", { className: "site-footer" },
    React.createElement("div", { className: "container" },
      React.createElement("div", { className: "footer-main-grid" },
        // Col 1: Brand & Logo
        React.createElement("div", { className: "footer-brand-col" },
          React.createElement(Icons.Logo, { width: 240, height: 52 }),
          React.createElement("p", { className: "footer-tagline" },
            "Surat's premier luxury wedding & celebration destination. Magnificent architecture, illuminated night scapes, and lifelong memories."
          )
        ),

        // Col 2: Navigation
        React.createElement("div", null,
          React.createElement("h4", { className: "footer-col-title" }, "Navigation"),
          React.createElement("ul", { className: "footer-nav-list" },
            ["Home", "About", "Venues", "Gallery", "Video", "Events", "Contact"].map(item => (
              React.createElement("li", { key: item },
                React.createElement("a", {
                  href: `#${item.toLowerCase()}`,
                  className: "footer-nav-link",
                  onClick: (e) => {
                    e.preventDefault();
                    onNavigate(item.toLowerCase());
                  }
                }, item)
              )
            ))
          )
        ),

        // Col 3: Celebrations
        React.createElement("div", null,
          React.createElement("h4", { className: "footer-col-title" }, "Celebrations"),
          React.createElement("ul", { className: "footer-nav-list" },
            ["Royal Weddings", "Grand Receptions", "Sangeet & Garba", "Engagements & Roka", "Photo Installations"].map(c => (
              React.createElement("li", { key: c },
                React.createElement("span", { className: "footer-nav-link", style: { cursor: "default" } }, c)
              )
            ))
          )
        ),

        // Col 4: Contact & Location
        React.createElement("div", null,
          React.createElement("h4", { className: "footer-col-title" }, "Visit Paradise"),
          React.createElement("p", { style: { fontSize: "0.88rem", color: "#D1CDC4", lineHeight: "1.7", marginBottom: "1rem" } },
            DATA.brand.address
          ),
          React.createElement("p", { style: { fontSize: "0.95rem", color: "#D6A84F", fontWeight: "600", marginBottom: "0.5rem" } },
            DATA.brand.phone
          ),
          React.createElement("a", {
            href: DATA.brand.instagramUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            style: { display: "inline-flex", alignItems: "center", gap: "8px", color: "#F3E5C8", fontSize: "0.88rem" }
          },
            React.createElement(Icons.Instagram, { size: 16, color: "#D6A84F" }),
            "Instagram: @PARADISEFARMSURAT"
          )
        )
      ),

      React.createElement("div", { className: "footer-bottom-bar" },
        React.createElement("span", { className: "footer-copyright" },
          `© ${new Date().getFullYear()} Paradise Farm, Surat. All Rights Reserved.`
        ),
        React.createElement("div", { style: { display: "flex", gap: "1.5rem", fontSize: "0.82rem", color: "#9E998E" } },
          React.createElement("span", null, "A Luxury Wedding Destination"),
          React.createElement("span", null, "Surat, Gujarat")
        )
      )
    )
  );
}

/* ===================================================================
   MODALS: BOOKING & LIGHTBOX & VIDEO
   =================================================================== */
function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return React.createElement("div", { className: "booking-modal-backdrop", onClick: onClose },
    React.createElement("div", { className: "booking-modal-box", onClick: (e) => e.stopPropagation() },
      React.createElement("button", { className: "modal-close-icon", onClick: onClose },
        React.createElement(Icons.Close, { size: 18 })
      ),
      React.createElement("span", { className: "luxury-tag no-after", style: { color: "#B88A3B" } }, "BOOK YOUR CELEBRATION"),
      React.createElement("h3", { style: { fontFamily: "var(--font-serif)", fontSize: "2rem", marginBottom: "0.5rem" } },
        "Plan With Paradise Farm"
      ),
      React.createElement("p", { style: { fontSize: "0.92rem", color: "#5C5850", marginBottom: "1.5rem" } },
        "Call our booking desk directly or message us on WhatsApp for live date availability and pricing."
      ),

      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" } },
        React.createElement("a", {
          href: `tel:${DATA.brand.phone.replace(/\s+/g, '')}`,
          className: "btn-gold-solid",
          style: { width: "100%", justifyContent: "center" }
        },
          React.createElement(Icons.Phone, { size: 18 }),
          `Call Now: ${DATA.brand.phone}`
        ),
        React.createElement("a", {
          href: `https://wa.me/${DATA.brand.whatsappClean}?text=Hello%20Paradise%20Farm%2C%20I%20would%20like%20to%20enquire%20about%20booking%20my%20event.`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn-about-secondary",
          style: { width: "100%", justifyContent: "center" }
        },
          React.createElement(Icons.WhatsApp, { size: 18, color: "#25D366" }),
          "WhatsApp Instant Booking"
        )
      ),

      React.createElement("div", { style: { fontSize: "0.82rem", color: "#8A857A", borderTop: "1px solid rgba(184,138,59,0.2)", paddingTop: "1rem", textAlign: "center" } },
        DATA.brand.address
      )
    )
  );
}

function LightboxModal({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  if (!isOpen || !images || images.length === 0) return null;
  const current = images[currentIndex] || images[0];

  return React.createElement("div", { className: "lightbox-modal", onClick: onClose },
    React.createElement("button", { className: "lightbox-close-btn", onClick: onClose },
      React.createElement(Icons.Close, { size: 22 })
    ),
    React.createElement("button", {
      className: "lightbox-nav-btn lightbox-prev",
      onClick: (e) => { e.stopPropagation(); onPrev(); }
    },
      React.createElement(Icons.ChevronLeft, { size: 26 })
    ),
    React.createElement("button", {
      className: "lightbox-nav-btn lightbox-next",
      onClick: (e) => { e.stopPropagation(); onNext(); }
    },
      React.createElement(Icons.ChevronRight, { size: 26 })
    ),

    React.createElement("div", { className: "lightbox-content-frame", onClick: (e) => e.stopPropagation() },
      React.createElement("img", {
        src: current.image,
        alt: current.title,
        className: "lightbox-image"
      }),
      React.createElement("div", { className: "lightbox-caption" },
        React.createElement("h4", { className: "lightbox-title" }, current.title),
        React.createElement("span", { className: "lightbox-cat" }, `${current.category} • Image ${currentIndex + 1} of ${images.length}`)
      )
    )
  );
}

function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return React.createElement("div", { className: "lightbox-modal", onClick: onClose },
    React.createElement("button", { className: "lightbox-close-btn", onClick: onClose },
      React.createElement(Icons.Close, { size: 22 })
    ),
    React.createElement("div", {
      className: "lightbox-content-frame",
      style: { width: "90vw", maxWidth: "960px" },
      onClick: (e) => e.stopPropagation()
    },
      React.createElement("div", { style: { position: "relative", width: "100%", aspectRatio: "16/9", background: "#000", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--gold-primary)" } },
        React.createElement("img", {
          src: "images/paradise farm surat - Google Search_files/unnamed(70).webp",
          alt: "Paradise Farm Cinematic Video",
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }),
        React.createElement("div", {
          style: {
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center"
          }
        },
          React.createElement("div", { className: "play-pulse-ring", style: { marginBottom: "1.5rem" } },
            React.createElement(Icons.Play, { size: 32, color: "#FFFFFF" })
          ),
          React.createElement("h3", { style: { fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "#FFFFFF", marginBottom: "0.5rem" } },
            "Paradise Farm Walkthrough"
          ),
          React.createElement("p", { style: { color: "#F3E5C8", maxWidth: "500px", fontSize: "0.95rem", marginBottom: "1.5rem" } },
            "Experience the illuminated lotus canopies, celestial walkways, and grand palace celebrations in Surat, Gujarat."
          ),
          React.createElement("a", {
            href: DATA.brand.instagramUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn-gold-solid"
          },
            React.createElement(Icons.Instagram, { size: 18 }),
            "Watch Celebration Reels on Instagram"
          )
        )
      )
    )
  );
}

// Attach components to window
window.ParadiseComponents = {
  SiteHeader,
  CinematicHero,
  HeroFeatureBar,
  AboutSection,
  VenuesSection,
  EventsSection,
  GallerySection,
  VideoExperience,
  WhySection,
  ContactSection,
  FloatingWhatsApp,
  SiteFooter,
  BookingModal,
  LightboxModal,
  VideoModal
};
