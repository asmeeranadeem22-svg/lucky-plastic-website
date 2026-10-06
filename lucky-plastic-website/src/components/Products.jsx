import { Link, useSearchParams } from "react-router-dom";
import { categories, ICONS, kind } from "./Productsdata";
import { useCart } from "./Cartcontext";

/* =========================================================
   HELPERS
========================================================= */

const catalogueUrl = "Lucky_Plastic_E-Catalogue.pdf";

const fmt = (n) =>
  "Rs " +
  n.toLocaleString("en-PK", {
    minimumFractionDigits: n % 1 ? 2 : 0,
    maximumFractionDigits: 2,
  });

const totalProducts = categories.reduce(
  (sum, c) => sum + c.items.length,
  0
);

// First 4 products of every range -> moving strip
const featured = categories.flatMap((c) => c.items.slice(0, 4));

/* =========================================================
   PRODUCT VISUAL
========================================================= */

function Visual({ p, svgClass = "h-24 w-24" }) {
  if (p.image) {
    return (
      <img
        src={p.image}
        alt={p.name}
        loading="lazy"
        className="h-full w-full object-contain p-3"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={svgClass}
      dangerouslySetInnerHTML={{
        __html: ICONS[kind(p.name)],
      }}
    />
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ p }) {
  const { items, addItem, increase, decrease } = useCart();

  const inCart = items.find((i) => i.id === p.id);

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl">

      {/* Picture */}
      <div className="flex h-48 items-center justify-center bg-green-50">
        <Visual p={p} />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-6">

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-gray-900">
            {p.name}
          </h3>

          {p.code && (
            <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
              {p.code}
            </span>
          )}
        </div>

        {/* Price */}
        <p className="mt-4">
          <span className="text-3xl font-bold text-green-700">
            {fmt(p.price)}
          </span>

          <span className="ml-1 text-sm text-gray-500">
            per {p.unit}
          </span>
        </p>

        {/* Packing */}
        {p.pack > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3">

            <div className="rounded-xl border border-green-100 bg-green-50 p-3">
              <p className="text-xs text-gray-500">
                Carton packing
              </p>

              <p className="mt-0.5 text-sm font-bold text-gray-900">
                {p.pack.toLocaleString()} pcs
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-green-50 p-3">
              <p className="text-xs text-gray-500">
                Full carton
              </p>

              <p className="mt-0.5 text-sm font-bold text-gray-900">
                {fmt(p.price * p.pack)}
              </p>
            </div>

          </div>
        )}

        {/* ADD TO CART */}
        {inCart ? (
          <div className="mt-6 flex items-center justify-between rounded-full border border-green-200 bg-green-50 p-1.5">

            <button
              type="button"
              onClick={() => decrease(p.id)}
              aria-label="Decrease quantity"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-green-700 shadow-sm transition hover:bg-green-700 hover:text-white"
            >
              &minus;
            </button>

            <span className="text-sm font-bold text-green-800">
              {inCart.qty}{" "}
              {p.pack > 0
                ? inCart.qty > 1
                  ? "cartons"
                  : "carton"
                : inCart.qty > 1
                ? "rolls"
                : "roll"}{" "}
              in cart
            </span>

            <button
              type="button"
              onClick={() => increase(p.id)}
              aria-label="Increase quantity"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-green-700 shadow-sm transition hover:bg-green-700 hover:text-white"
            >
              +
            </button>

          </div>
        ) : (
          <button
            type="button"
            onClick={() => addItem(p)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Add to Cart
          </button>
        )}

      </div>
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

function Products() {
  const [params, setParams] = useSearchParams();

  /* =========================================================
     SEARCH / CATEGORY
  ========================================================= */

  const searchText = params.get("search") || "";

  const query = searchText.trim().toLowerCase();

  const cat = params.get("cat") || "all";

  const isSearching = query.length > 0;

  /* =========================================================
     CATEGORY FILTER
  ========================================================= */

  const setCat = (id) => {
    const next = new URLSearchParams(params);

    if (id === "all") {
      next.delete("cat");
    } else {
      next.set("cat", id);
    }

    setParams(next);
  };

  /* =========================================================
     CLEAR SEARCH
  ========================================================= */

  const clearSearch = () => {
    const next = new URLSearchParams(params);

    next.delete("search");

    setParams(next);
  };

  /* =========================================================
     FILTER PRODUCTS
  ========================================================= */

  const sections = categories
    .filter((c) => cat === "all" || c.id === cat)
    .map((c) => ({
      ...c,

      shown: c.items.filter((p) =>
        (p.name + " " + (p.code || ""))
          .toLowerCase()
          .includes(query)
      ),
    }))
    .filter((c) => c.shown.length > 0);

  /* =========================================================
     ALL CATEGORY PILLS
  ========================================================= */

  const pills = [
    {
      id: "all",
      title: "All Products",
    },
    ...categories,
  ];

  /* =========================================================
     SEARCHED PRODUCTS ONLY
  ========================================================= */

  const searchedProducts = sections.flatMap(
    (section) => section.shown
  );

  return (
    <main className="bg-white text-gray-800">

      {/* =====================================================
          NORMAL PRODUCTS PAGE
          HERO
      ===================================================== */}

      {!isSearching && (
        <section className="relative min-h-[420px] overflow-hidden bg-green-950">

          <img
            src="/images/lucky-factory.jpg"
            alt="Lucky Plastic Industries manufacturing facility"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/80 to-green-950/40" />

          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-20 lg:px-8">

            <div className="max-w-3xl">

              <div className="mb-6 flex items-center gap-3">

                <span className="h-[2px] w-12 bg-green-400" />

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
                  Lucky Plastic Industries
                </span>

              </div>

              <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Our
                <span className="block text-green-300">
                  Products
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Disposable cutlery, food trays and boxes, plates,
                glasses, bowls, containers and cling film &mdash;
                with price and carton packing for every item.
              </p>

              <div className="mt-8 grid max-w-md grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">

                  <p className="text-3xl font-bold text-green-300">
                    {totalProducts}
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    Products
                  </p>

                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">

                  <p className="text-3xl font-bold text-green-300">
                    {categories.length}
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    Product Ranges
                  </p>

                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#catalogue"
                  className="rounded-full bg-green-600 px-7 py-4 font-semibold text-white shadow-xl transition hover:bg-green-500"
                >
                  Browse Products
                </a>

                <a
                  href={catalogueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-green-600 px-7 py-4 font-semibold text-white shadow-xl transition hover:bg-green-600/80"
                >
                  View Catalogue
                </a>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          NORMAL PRODUCTS PAGE
          MOVING PRODUCT PICTURES
      ===================================================== */}

      {!isSearching && (
        <section className="overflow-hidden border-b border-green-100 bg-white py-8">

          <div className="relative overflow-hidden">

            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

            <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">

              {[...featured, ...featured].map((p, i) => (
                <div
                  key={`${p.id}-${i}`}
                  title={p.name}
                  className="mx-3 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-green-100 bg-green-50"
                >
                  <Visual
                    p={p}
                    svgClass="h-20 w-20"
                  />
                </div>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          SEARCH MODE
          THIS SECTION APPEARS ONLY AFTER SEARCH
      ===================================================== */}

      {isSearching && (
        <section className="min-h-screen bg-[#f7f8f6] py-16 lg:py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Search Header */}
            <div className="mb-10">

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Search Results
              </span>

              <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">

                Results for{" "}

                <span className="text-green-700">
                  &ldquo;{searchText}&rdquo;
                </span>

              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4">

                <p className="text-gray-500">
                  {searchedProducts.length}{" "}
                  {searchedProducts.length === 1
                    ? "product"
                    : "products"}{" "}
                  found
                </p>

                <button
                  type="button"
                  onClick={clearSearch}
                  className="rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
                >
                  Clear Search
                </button>

              </div>

            </div>

            {/* Search Results */}
            {searchedProducts.length > 0 ? (

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {searchedProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    p={p}
                  />
                ))}

              </div>

            ) : (

              <div className="rounded-3xl border border-dashed border-green-200 bg-white p-12 text-center shadow-sm">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-2xl">
                  🔍
                </div>

                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                  No products found
                </h2>

                <p className="mt-2 text-gray-500">
                  We couldn't find a product matching{" "}
                  <span className="font-semibold text-green-700">
                    "{searchText}"
                  </span>
                  .
                </p>

                <button
                  type="button"
                  onClick={clearSearch}
                  className="mt-6 rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                  View All Products
                </button>

              </div>

            )}

          </div>

        </section>
      )}

      {/* =====================================================
          NORMAL PRODUCTS PAGE
          CATALOGUE
      ===================================================== */}

      {!isSearching && (
        <section
          id="catalogue"
          className="relative overflow-hidden bg-[#f7f8f6] py-20 lg:py-24"
        >

          {/* Decorative Background */}

          <div className="absolute -top-32 -right-12 h-[450px] w-[450px] rounded-full border-[70px] border-green-100/60" />

          <div className="absolute -bottom-44 -left-28 h-[400px] w-[400px] rounded-full bg-green-100/40 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

            {/* Heading */}

            <div className="max-w-3xl">

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Product Range
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Browse by
                <span className="text-green-700">
                  {" "}Category.
                </span>
              </h2>

            </div>

            {/* Category Filter */}

            <div className="mt-8 flex flex-wrap gap-3">

              {pills.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCat(c.id)}
                  className={`rounded-full border px-5 py-2.5 font-medium shadow-sm transition-all duration-300 ${
                    cat === c.id
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-green-200 bg-white text-green-700 hover:border-green-500 hover:bg-green-50"
                  }`}
                >
                  {c.title}
                </button>
              ))}

            </div>

            {/* Normal Product Sections */}

            {sections.length > 0 ? (

              sections.map((c) => (

                <div
                  key={c.id}
                  className="mt-14"
                >

                  <div className="mb-8">

                    <h3 className="border-l-4 border-green-600 pl-4 text-2xl font-bold text-gray-900">
                      {c.title}
                    </h3>

                    <p className="mt-1 pl-5 text-sm text-gray-500">
                      {c.shown.length} items &middot; rates from{" "}
                      {c.date}
                    </p>

                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {c.shown.map((p) => (
                      <ProductCard
                        key={p.id}
                        p={p}
                      />
                    ))}

                  </div>

                </div>

              ))

            ) : (

              <div className="mt-14 rounded-3xl border border-dashed border-green-200 bg-white p-12 text-center">

                <p className="text-lg font-semibold text-gray-900">
                  No products found
                </p>

                <p className="mt-2 text-gray-500">
                  Try a different category.
                </p>

              </div>

            )}

            <p className="mt-12 text-center text-sm text-gray-500">
              Prices are per piece (PKR) as per the price lists
              shown and may change. Please contact us to confirm
              current rates.
            </p>

          </div>

        </section>
      )}

      {/* =====================================================
          NORMAL PRODUCTS PAGE
          CTA
      ===================================================== */}

      {!isSearching && (
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-green-700 p-10 text-white shadow-lg lg:flex-row lg:items-center lg:p-14">

              <div>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  Need bulk quantities or a custom order?
                </h2>

                <p className="mt-3 max-w-xl leading-8 text-green-50">
                  Tell us what you need and our team will get back
                  to you with a quotation.
                </p>

              </div>

              <Link
                to="/contact"
                className="shrink-0 rounded-full bg-white px-8 py-4 font-bold text-green-800 transition hover:bg-green-50"
              >
                Get a Quote &rarr;
              </Link>

            </div>

          </div>

        </section>
      )}

    </main>
  );
}

export default Products;