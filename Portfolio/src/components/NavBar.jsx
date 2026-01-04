import { useState } from "react";
import logo from "../assets/img/logo.png";
import dev from "../assets/img/dev.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#6a0dad]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-12 w-12 sm:h-16 sm:w-16" />
            <span className="text-[#b48cff] font-semibold text-sm sm:text-base lg:text-lg tracking-wide">
              Alessandra Ciccone
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/aboutme"
              className="text-[#b48cff] hover:text-[#d4b3ff] transition-colors duration-300 text-sm font-medium"
            >
              Chi Sono
            </a>

            {/* Dropdown Progetti */}
            <div className="relative group">
              <button className="text-[#b48cff] hover:text-[#d4b3ff] text-sm font-medium flex items-center gap-1">
                Progetti
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-48 bg-black/98 border border-[#6a0dad]/60 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                <div className="py-2">
                  <a
                    href="/projects/corgi"
                    className="block px-4 py-2.5 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] transition-all duration-200"
                  >
                    Corgi Connection
                  </a>
                  <a
                    href="/projects/gamedrop"
                    className="block px-4 py-2.5 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] transition-all duration-200"
                  >
                    Game Drop
                  </a>
                  <a
                    href="/projects/movierandom"
                    className="block px-4 py-2.5 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] transition-all duration-200"
                  >
                    Movie Random
                  </a>
                  <a
                    href="/projects/happymeteo"
                    className="block px-4 py-2.5 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] transition-all duration-200"
                  >
                    Happy Meteo
                  </a>
                  <a
                    href="/projects/netflix"
                    className="block px-4 py-2.5 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] transition-all duration-200"
                  >
                    Netflix Clone
                  </a>
                </div>
              </div>
            </div>

            {/* Dropdown Progetti in corso */}
            <div className="relative group">
              <button className="text-[#b48cff] hover:text-[#d4b3ff] text-sm font-medium flex items-center gap-1">
                Progetti in corso
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-48 bg-black/98 border border-[#6a0dad]/60 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                <div className="py-2">
                  <a
                    href="/projects/rapportopro"
                    className="block px-4 py-2.5 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] transition-all duration-200"
                  >
                    RapportoPro
                  </a>
                  <a
                    href="/projects/dermacode"
                    className="block px-4 py-2.5 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] transition-all duration-200"
                  >
                    DermaCode
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/contact"
              className="text-[#b48cff] hover:text-[#d4b3ff] text-sm font-medium transition-colors duration-300"
            >
              Contatti
            </a>

            <img
              src={dev}
              alt="Dev"
              className="h-10 w-10 border-2 border-[#b48cff]/40 rounded-full object-cover hover:border-[#d4b3ff] transition-all duration-300"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-[#b48cff] hover:text-[#d4b3ff] focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-black/98 border-t border-[#6a0dad]/40">
          <a
            href="/aboutme"
            className="block px-3 py-2.5 text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Chi Sono
          </a>

          {/* Mobile Dropdown Progetti */}
          <div>
            <button
              onClick={() => toggleDropdown("progetti")}
              className="w-full flex items-center justify-between px-3 py-2.5 text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
            >
              <span>Progetti</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === "progetti" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openDropdown === "progetti" ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="ml-4 mt-1 space-y-1">
                <a
                  href="/projects/corgi"
                  className="block px-3 py-2 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Corgi Connection
                </a>
                <a
                  href="/projects/gamedrop"
                  className="block px-3 py-2 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Game Drop
                </a>
                <a
                  href="/projects/movierandom"
                  className="block px-3 py-2 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Movie Random
                </a>
                <a
                  href="/projects/happymeteo"
                  className="block px-3 py-2 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Happy Meteo
                </a>
                <a
                  href="/projects/netflix"
                  className="block px-3 py-2 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Netflix Clone
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Progetti in corso */}
          <div>
            <button
              onClick={() => toggleDropdown("in-corso")}
              className="w-full flex items-center justify-between px-3 py-2.5 text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
            >
              <span>Progetti in corso</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  openDropdown === "in-corso" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openDropdown === "in-corso" ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="ml-4 mt-1 space-y-1">
                <a
                  href="/projects/rapportopro"
                  className="block px-3 py-2 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  RapportoPro
                </a>
                <a
                  href="/projects/dermacode"
                  className="block px-3 py-2 text-sm text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  DermaCode
                </a>
              </div>
            </div>
          </div>

          <a
            href="/contact"
            className="block px-3 py-2.5 text-[#b48cff] hover:bg-[#6a0dad]/20 hover:text-[#d4b3ff] rounded-md transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contatti
          </a>

          {/* Mobile Dev Image */}
          <div className="flex justify-center pt-4">
            <img
              src={dev}
              alt="Dev"
              className="h-16 w-16 border-2 border-[#b48cff]/40 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
