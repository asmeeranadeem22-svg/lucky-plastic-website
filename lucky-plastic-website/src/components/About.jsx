import { Link } from "react-router-dom";

const capabilities = [
  {
    number: "01",
    title: "Modern Extrusion",
    text: "Five modern extrusion setups support large-scale plastic sheet production.",
  },
  {
    number: "02",
    title: "Wide Material Range",
    text: "Production includes Rigid PVC, GPPS, PP, ABS, HIPS, HDPE and PS Foam products.",
  },
  {
    number: "03",
    title: "Large-Scale Production",
    text: "The company has a workforce exceeding 250 people and established production capabilities.",
  },
  {
    number: "04",
    title: "Industrial Solutions",
    text: "Plastic sheet solutions serve pharmaceutical, food, industrial, automotive and other sectors.",
  },
];

const industries = [
  "Pharmaceutical & Surgical",
  "Food & Confectionery",
  "Industrial Intermediates",
  "Automobile Parts",
  "Electrical Goods",
  "Vacuum Formers & Converters",
  "Advertisement & Signage",
  "Bulk Packaging",
  "Architect & Construction",
];

// Replace these paths with your REAL client logos.
const clientsRow1 = [
  { name: "Cheezious", logo: "/clients/1.png" },
  { name: "Jalal Sons", logo: "/clients/2.png" },
  { name: "Cakes & Bakes", logo: "/clients/3.jpg" },
  { name: "Chashni", logo: "/clients/4.png" },
  { name: "Al Khan", logo: "/clients/5.jpg" },
  { name: "Bakery Khana", logo: "/clients/6.jpg" },
  { name: "Bay Bakers", logo: "/clients/7.jpg" },
  { name: "Cake-A-Lot", logo: "/clients/8.jpg" },
  { name: "Layers", logo: "/clients/9.jpg" },
  { name: "Butt Sweets Premium", logo: "/clients/10.png" },
  { name: "Butt Sweets", logo: "/clients/11.png" },
];

const clientsRow2 = [
  { name: "Gloria Jean's Coffees", logo: "/clients/14.png" },
  { name: "Cafe Beans", logo: "/clients/15.png" },
  { name: "Coffee Beans", logo: "/clients/16.jpg" },
  { name: "H2CO", logo: "/clients/17.png" },
  { name: "Baskin-Robbins", logo: "/clients/18.png" },
  { name: "Pony Ice Cream", logo: "/clients/19.jpg" },
  { name: "Hot & Spicy", logo: "/clients/20.png" },
  { name: "Hardee's", logo: "/clients/21.png" },
  { name: "Hangarders", logo: "/clients/22.jpg" },
  { name: "Point Boutique", logo: "/clients/23.jpg" },
  { name: "Arif Chatkhara", logo: "/clients/24.jpg" },
];

function About() {
  return (
    <main className="bg-white text-gray-800">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[520px] overflow-hidden bg-green-950">
        {/* Background */}
        <img
          src="/images/lucky-factory.jpg"
          alt="Lucky Plastic Industries manufacturing facility"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/80 to-green-950/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-300/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium tracking-wide text-green-100">
                Established in 1993
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              About
              <span className="block text-green-400">
                Lucky Plastic Industries
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              Lucky Plastic Industries (Pvt) Ltd. has been involved in plastic
              sheet extrusion and Rigid PVC sheet calendaring since 1993,
              serving a wide range of industrial applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-green-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY HISTORY
      ===================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-xl">
                <img
                  src="/images/lucky-factory.jpg"
                  alt="Lucky Plastic Industries facility"
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Year Card */}
              <div className="absolute -bottom-7 -right-4 rounded-2xl bg-green-700 px-7 py-5 text-white shadow-xl sm:-right-7">
                <p className="text-3xl font-bold">1993</p>
                <p className="text-sm text-green-100">Company Established</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Our Story
              </p>

              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Building Plastic Solutions
                <span className="text-green-700"> Since 1993</span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
                <p>
                  Established in 1993 as a private limited company, LPIL -
                  Lucky Plastic Industries (Pvt) Ltd. introduced plastic sheet
                  extrusion and Rigid PVC sheet calendaring in Pakistan.
                </p>

                <p>
                  Over the years, the company developed a large extrusion
                  setup with five modern extrusion systems and a workforce
                  exceeding 250 people.
                </p>

                <p>
                  The company produces and supplies plastic sheets including
                  Rigid PVC, GPPS, PP, ABS, HIPS, HDPE and Oxo-Biodegradable
                  Polystyrene Foam Packaging.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                  <p className="text-3xl font-bold text-green-700">1993</p>
                  <p className="mt-1 text-sm text-gray-600">Established</p>
                </div>

                <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                  <p className="text-3xl font-bold text-green-700">5</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Modern Extrusion Setups
                  </p>
                </div>

                <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                  <p className="text-3xl font-bold text-green-700">250+</p>
                  <p className="mt-1 text-sm text-gray-600">Workforce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-24">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Our Direction
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Mission & Vision
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our mission and vision section communicates the direction and
              purpose of the organization.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {/* Mission */}
            <div className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-10">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-700">
                  🎯
                </div>

                <span className="text-5xl font-black text-green-50">01</span>
              </div>

              <h3 className="mt-7 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To provide reliable plastic sheet and packaging solutions
                while supporting the diverse requirements of industrial
                customers through established manufacturing capabilities.
              </p>
            </div>

            {/* Vision */}
            <div className="group rounded-3xl border border-green-100 bg-green-700 p-8 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-10">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  👁
                </div>

                <span className="text-5xl font-black text-white/10">02</span>
              </div>

              <h3 className="mt-7 text-2xl font-bold">Our Vision</h3>

              <p className="mt-4 leading-8 text-green-50">
                To continue developing manufacturing capabilities and serving
                a broad range of industries with practical plastic material
                and packaging solutions.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm text-gray-500">
            Note: The supplied company profile contains placeholder text for
            the official Mission & Objective section, so the above website
            wording is presented as draft copy rather than an official quote.
          </p>
        </div>
      </section>

      {/* =====================================================
          COMPANY CAPABILITIES
      ===================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Company Capabilities
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our manufacturing setup supports the production of multiple
              plastic sheet materials for diverse industrial applications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-sm font-bold text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                    {item.number}
                  </span>

                  <span className="text-4xl font-black text-gray-100">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* =====================================================
    MANUFACTURING STRENGTH
===================================================== */}
<section className="relative flex min-h-[520px] items-center overflow-hidden bg-green-950 py-20 text-white lg:py-24">

  {/* Background image */}
  <img
    src="/images/lucky-factory.jpg"
    alt="Lucky Plastic Industries manufacturing"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Green overlay (same as Home hero) */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/80 to-green-950/40" />

  {/* Content */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
    <div className="max-w-3xl">

      <div className="mb-6 flex items-center gap-3">
        <span className="h-[2px] w-12 bg-green-400" />
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
          Manufacturing Strength
        </span>
      </div>

      <h2 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
        A Strong Manufacturing
        <span className="block text-green-300">Foundation</span>
      </h2>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85">
        Lucky Plastic Industries has developed a large extrusion setup
        supported by five modern extrusion systems and a workforce
        exceeding 250 people.
      </p>

      <div className="mt-9 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-3xl font-bold text-green-300">30+</p>
          <p className="mt-1 text-sm text-white/80">Years of Operations</p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-3xl font-bold text-green-300">5</p>
          <p className="mt-1 text-sm text-white/80">Extrusion Setups</p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-3xl font-bold text-green-300">250+</p>
          <p className="mt-1 text-sm text-white/80">Workforce</p>
        </div>
      </div>

    </div>
  </div>

</section>
      {/* =====================================================
          CLIENT LOGOS (marquee, no cards)
          Needs animate-marquee-left / animate-marquee-right
          defined in tailwind config (or @theme in v4)
      ===================================================== */}
      <section className="overflow-hidden bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by the best in the business
          </h2>
        </div>

        {/* ROW 1 - moves left */}
        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
            {[...clientsRow1, ...clientsRow1].map((client, index) => (
              <div
                key={`${client.name}-row1-${index}`}
                className="flex h-36 w-72 shrink-0 items-center justify-center px-10"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-28 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 - moves right */}
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
            {[...clientsRow2, ...clientsRow2].map((client, index) => (
              <div
                key={`${client.name}-row2-${index}`}
                className="flex h-36 w-72 shrink-0 items-center justify-center px-10"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-28 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;