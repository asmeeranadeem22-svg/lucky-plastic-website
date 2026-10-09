import { useRef, useState } from "react";
import { categories } from "./Productsdata";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import { useCart } from "./Cartcontext";


/* =========================================================
   NAVIGATION LINKS
========================================================= */

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/manufacture", label: "Manufacture" },
  { to: "/quality", label: "Quality" },
  { to: "/contact", label: "Contact" },
];

/* =========================================================
   GREEN SCALLOPED WAVE
========================================================= */

const waveStyle = {
  height: "18px",
  width: "100%",
  backgroundRepeat: "repeat-x",
  backgroundSize: "44px 18px",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='18' viewBox='0 0 44 18'%3E%3Cpath fill='%2315803d' d='M0 0C0 7 8 18 22 18S44 7 44 0V18H0Z'/%3E%3C/svg%3E\")",
};

/* =========================================================
   ICONS
========================================================= */

const UserIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="7.5" r="4.5" />
    <path d="M3 21c0-4.5 4-7 9-7s9 2.5 9 7z" />
  </svg>
);

const BagIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 8h12l1.5 13h-15L6 8z" />
    <path
      d="M9 8V6.5a3 3 0 016 0V8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
/* =========================================================
   PRODUCT SEARCH SUGGESTIONS
========================================================= */

const SearchIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
);

/* =========================================================
   SEARCH BOX
========================================================= */
function SearchBox({
  query,
  setQuery,
  onSubmit,
  className = "",
}) {
  const [focused, setFocused] = useState(false);
  const hideTimer = useRef(null);

  // Productsdata se saare actual product names
  const allProducts = categories.flatMap((category) =>
    category.items.map((product) => product.name)
  );

  // Duplicate names remove
  const uniqueProducts = [...new Set(allProducts)];

  // Empty ho to first 8 products
  // Type karo to matching products
  const filteredSuggestions = uniqueProducts
    .filter((product) => {
      if (!query.trim()) return true;

      return product
        .toLowerCase()
        .includes(query.toLowerCase());
    })
    .slice(0, 8);

  return (
    <div className={`relative ${className}`}>

      {/* SEARCH BOX */}
      <form
      onSubmit={(e) => {
  e.preventDefault();

  if (!query.trim()) return;

  setFocused(false); // suggestions hide
  onSubmit(e);       // Navbar ka handleSearch chalega
}}
        role="search"
        className="flex items-center bg-white border border-gray-300 rounded-full pl-6 pr-2 shadow-sm transition-all duration-200 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100"
      >

        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setFocused(true);
          }}
                    onFocus={() => {
            setFocused(true);

            clearTimeout(hideTimer.current);

            hideTimer.current = setTimeout(() => {
              setFocused(false);
            }, 1000);
          }}
          placeholder="Search products..."
          aria-label="Search products"
          className="flex-1 min-w-0 bg-transparent py-4 text-[15px] text-gray-900 placeholder-gray-400 outline-none"
        />

        <button
          type="submit"
          aria-label="Search"
          className="flex items-center justify-center w-12 h-12 rounded-full text-green-700 hover:bg-green-50 hover:text-green-800 transition"
        >
          <SearchIcon />
        </button>

      </form>


      {/* SUGGESTIONS */}
      {focused && filteredSuggestions.length > 0 && (
        <div
          className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl z-[999]"
          onMouseDown={(e) => e.preventDefault()}
        >

          <div className="px-5 py-3 border-b border-gray-100">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Product Suggestions
            </p>
          </div>


          {filteredSuggestions.map((product) => (

            <button
              key={product}
              type="button"
              onClick={() => {
                setQuery(product);
                setFocused(false);
              }}
              className="w-full flex items-center gap-3 px-5 py-3.5 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
            >

              <span className="text-green-600">
                <SearchIcon />
              </span>

              <span className="font-medium">
                {product}
              </span>

            </button>

          ))}

        </div>
      )}

    </div>
  );
}
/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  /* Login modal */
  const [loginOpen, setLoginOpen] = useState(false);

  /* Mobile menu */
  const [open, setOpen] = useState(false);

  /* Search */
  const [query, setQuery] = useState("");

  /* Cart */
   const { count: cartCount } = useCart();

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/products?search=${encodeURIComponent(q)}`);
    setOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `whitespace-nowrap py-2 text-[15px] font-semibold text-green-800 border-b-2 transition-all duration-200 ${
      isActive
        ? "border-green-700 text-green-700"
        : "border-transparent hover:border-green-500 hover:text-green-600"
    }`;

  const iconLink =
    "flex flex-col items-center justify-center gap-0.5 text-green-800 text-xs font-semibold hover:text-green-600 transition";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        {/* =================================================
            TOP CONTACT BAR
        ================================================= */}
        <div className="hidden md:block bg-green-50 border-b border-green-100">
          <div className="w-full flex items-center justify-between px-6 lg:px-10 py-2">
            <div className="flex items-center text-sm text-gray-700">
              <a
                href="tel:+920000000000"
                className="pr-5 hover:text-green-700 transition"
              >
                ☎ +92-303-902-0000
              </a>


              <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=luckyindustries48@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-5 border-l border-gray-300 hover:text-green-700 transition"
            >
              ✉ luckyindustries48@gmail.com
            </a>


            </div>

            <div className="flex items-center text-xs font-semibold tracking-wide uppercase text-gray-700">
              <a href="#" className="pr-4 hover:text-green-700">
                Facebook
              </a>
              <a
                href="#"
                className="px-4 border-l border-gray-300 hover:text-green-700"
              >
                Instagram
              </a>
              <a
                href="#"
                className="pl-4 border-l border-gray-300 hover:text-green-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            MAIN WHITE NAVBAR
        ================================================= */}
        <div className="bg-white shadow-sm">
          <nav className="w-full flex items-center px-3 sm:px-5 lg:px-8 xl:px-10 py-3">
            {/* LOGO */}
            <Link
              to="/"
              className="shrink-0 flex items-center mr-6 lg:mr-8 xl:mr-10"
            >
              <img
                src="/lucky_plastic_logo.png"
                alt="Lucky Plastic Industries"
                className="h-16 sm:h-18 lg:h-20 xl:h-22 2xl:h-24 w-auto object-contain block"
              />
            </Link>

            {/* NAVIGATION LINKS */}
            <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={linkClass}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            {/* SEARCH */}
            <SearchBox
              query={query}
              setQuery={setQuery}
              onSubmit={handleSearch}
              className="hidden lg:flex flex-1 min-w-[320px] xl:min-w-[380px] 2xl:min-w-[450px] max-w-2xl mx-5 xl:mx-8"
            />

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4 lg:gap-6 ml-auto">
              {/* GET A QUOTE */}
              <Link
                to="/contact"
                className="hidden 2xl:inline-flex items-center bg-green-700 text-white hover:bg-green-800 transition text-[14px] font-semibold px-5 py-3 rounded-full whitespace-nowrap"
              >
                Get a Quote →
              </Link>

              {/* LOGIN (button, opens modal) */}
              <button
                type="button"
                onClick={() => setLoginOpen(true)}
                className={iconLink}
                aria-haspopup="dialog"
              >
                <UserIcon />
                <span>Login</span>
              </button>

              {/* CART */}
              <Link to="/cart" className={`${iconLink} relative`}>
                <div className="relative">
                  <BagIcon />

                  <span className="absolute -top-2 -right-3 min-w-[18px] h-[18px] px-1 rounded-full bg-green-700 text-white text-[10px] leading-[18px] text-center font-bold">
                    {cartCount}
                  </span>
                </div>

                <span>Cart</span>
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="xl:hidden p-2 rounded-md text-green-800 hover:bg-green-50 transition"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  {open ? (
                    <>
                      <path d="M6 6l12 12" />
                      <path d="M18 6L6 18" />
                    </>
                  ) : (
                    <>
                      <path d="M4 7h16" />
                      <path d="M4 12h16" />
                      <path d="M4 17h16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* MOBILE SEARCH */}
          <div className="lg:hidden px-4 sm:px-6 pb-4">
            <SearchBox
              query={query}
              setQuery={setQuery}
              onSubmit={handleSearch}
              className="w-full"
            />
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="xl:hidden border-t border-green-100 px-4 py-4 flex flex-col gap-3 bg-white">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {l.label}
                </NavLink>
              ))}

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setLoginOpen(true);
                }}
                className="border border-green-700 text-green-700 text-center font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition"
              >
                Login
              </button>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-green-700 text-white text-center font-semibold px-6 py-3 rounded-full hover:bg-green-800 transition"
              >
                Get a Quote →
              </Link>
            </div>
          )}
        </div>

        {/* GREEN SCALLOPED WAVE */}
        <div aria-hidden="true" style={waveStyle} />
      </header>

      {/* LOGIN MODAL (outside header, outside any button/link) */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />

      {/* PAGE CONTENT */}
      <Outlet />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Navbar;