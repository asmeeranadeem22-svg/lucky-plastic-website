import { Link } from "react-router-dom";

/* =========================================================
   ICONS
========================================================= */

const FactoryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-8 w-8"
  >
    <path d="M3 21V9l7 4V9l7 4V5l4 2v14H3Z" />
    <path d="M7 17h2M12 17h2M17 17h2" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-8 w-8"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.9 1.9-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.68v-.09a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.9-1.9.06-.06A1.7 1.7 0 0 0 7.4 15a1.7 1.7 0 0 0-1.56-1.03H5.75v-2.68h.09A1.7 1.7 0 0 0 7.4 10.26a1.7 1.7 0 0 0-.34-1.88L7 8.32l1.9-1.9.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.03-1.56V5h2.68v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.9 1.9-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.03h.09v2.68h-.09A1.7 1.7 0 0 0 19.4 15Z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

/* =========================================================
   PRODUCTION PROCESS DATA
========================================================= */

const productionSteps = [
  {
    number: "01",
    title: "Raw Material",
    text: "Selected plastic raw materials are prepared according to production requirements.",
  },
  {
    number: "02",
    title: "Processing",
    text: "Materials are processed using suitable production systems and controlled parameters.",
  },
  {
    number: "03",
    title: "Forming & Moulding",
    text: "Plastic material is shaped into the required products using precision manufacturing processes.",
  },
  {
    number: "04",
    title: "Quality Inspection",
    text: "Products are inspected throughout production to maintain consistent quality.",
  },
  {
    number: "05",
    title: "Packing",
    text: "Finished products are carefully packed and prepared for safe handling and delivery.",
  },
];

/* =========================================================
   MACHINERY DATA
========================================================= */

const machinery = [
  {
    title: "Injection Moulding",
    text: "Production systems designed for manufacturing a wide range of precision plastic products.",
    icon: <GearIcon />,
  },
  {
    title: "V. Forming",
    text: "Forming processes used to create practical plastic packaging and food-service products.",
    icon: <FactoryIcon />,
  },
  {
    title: "PET Processing",
    text: "Dedicated processing capabilities for PET-based products and packaging applications.",
    icon: <GearIcon />,
  },
  {
    title: "Film Production",
    text: "Production capability for flexible film solutions used in packaging applications.",
    icon: <FactoryIcon />,
  },
];

/* =========================================================
   MANUFACTURING CAPABILITIES
========================================================= */

const capabilities = [
  "Plastic product manufacturing",
  "High-volume production",
  "Multiple production systems",
  "Consistent product quality",
  "Experienced technical workforce",
  "Packaging product solutions",
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  "Food & Beverage",
  "Retail",
  "Packaging",
  "Hospitality",
  "Household",
  "Industrial Applications",
];

/* =========================================================
   MANUFACTURE PAGE
========================================================= */

function Manufacture() {
  return (
    <main className="bg-white text-gray-800">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[560px] overflow-hidden">

        {/* Background */}
        <img
          src="images\lucky-factory.jpg"
          alt="Lucky Plastic manufacturing facility"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-950/75" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[560px] w-full max-w-7xl items-center px-6 py-20 lg:px-10">

          <div className="max-w-3xl text-white">

            <span className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
              Manufacturing Excellence
            </span>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Advanced Manufacturing.
              <span className="block text-green-300">
                Reliable Quality.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50 sm:text-xl">
              Our manufacturing operations combine modern production
              systems, experienced people and quality-focused processes
              to deliver reliable plastic products for diverse industries.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-50"
              >
                Get a Quote
                <ArrowIcon />
              </Link>

              <Link
                to="/quality"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-green-800"
              >
                Our Quality
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MANUFACTURING OVERVIEW
      ===================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/images/factory.jpg"
                alt="Lucky Plastic factory"
                className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Floating card */}

            <div className="absolute -bottom-7 right-5 rounded-2xl bg-green-700 px-7 py-5 text-white shadow-xl sm:right-8">
              <p className="text-3xl font-bold">1993</p>
              <p className="text-sm text-green-100">
                Established
              </p>
            </div>

          </div>


          {/* Content */}

          <div className="lg:pl-8">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Our Manufacturing
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Built Around
              <span className="text-green-700">
                {" "}Quality & Efficiency
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Lucky Plastic Industries operates with a focus on reliable
              production, consistent quality and practical plastic
              solutions. Our manufacturing setup supports a diverse
              range of products for food, retail, packaging and other
              applications.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              With multiple production systems and an experienced
              workforce, we aim to maintain efficient operations while
              meeting the requirements of our customers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                "Experienced workforce",
                "Multiple production systems",
                "Quality-focused production",
                "Reliable product solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
                    <CheckIcon />
                  </span>

                  <span className="text-sm font-semibold text-gray-800">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTION PROCESS
      ===================================================== */}

      <section className="bg-[#f7f8f6] py-20 lg:py-24">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              How We Manufacture
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Production Process
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              From material preparation to final packing, each stage
              is handled through a structured production process.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {productionSteps.map((step, index) => (

              <div
                key={step.number}
                className="group relative rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >

                {/* Number */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-lg font-bold text-white transition group-hover:bg-green-800">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>

                {index !== productionSteps.length - 1 && (
                  <div className="absolute -right-5 top-1/2 hidden h-px w-5 bg-green-200 lg:block" />
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MACHINERY
      ===================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Production Facilities
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Machinery & Equipment
              </h2>

            </div>

            <p className="max-w-xl text-gray-600 leading-7">
              Our production capabilities are supported by multiple
              manufacturing systems designed for different plastic
              products and applications.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {machinery.map((machine) => (

              <article
                key={machine.title}
                className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                  {machine.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {machine.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {machine.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="bg-green-950 py-20 text-white lg:py-24">

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Manufacturing Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Production Built For
              <span className="text-green-300">
                {" "}Different Requirements
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-green-100">
              Our manufacturing operations are designed to support
              different plastic products and packaging requirements
              while maintaining focus on efficiency and consistency.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2">

            {capabilities.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
              >

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400 text-green-950">
                  <CheckIcon />
                </span>

                <span className="text-sm font-semibold">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          QUALITY CONTROL
      ===================================================== */}

      <section className="bg-[#f7f8f6] py-20 lg:py-24">

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Quality Control
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Quality Is Part of
              <span className="text-green-700">
                {" "}Every Stage
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Quality control is integrated into the manufacturing
              process rather than being limited to the final stage.
              Our production teams monitor products throughout the
              manufacturing cycle.
            </p>

            <Link
              to="/quality"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
            >
              Explore Quality
              <ArrowIcon />
            </Link>

          </div>


          {/* Quality Steps */}

          <div className="space-y-4">

            {[
              "Raw Material Inspection",
              "Production Monitoring",
              "Product Inspection",
              "Final Quality Check",
              "Packing & Dispatch",
            ].map((item, index) => (

              <div
                key={item}
                className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {item}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Controlled as part of our production workflow.
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FACTORY GALLERY
      ===================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Our Facility
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Inside Our Manufacturing Environment
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              A glimpse into our production and facility environment.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div className="group overflow-hidden rounded-3xl">
              <img
                src="/images/factory-1.jpg"
                alt="Lucky Plastic production facility"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl">
              <img
                src="/images/factory-2.jpg"
                alt="Lucky Plastic machinery"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl">
              <img
                src="/images/factory-3.jpg"
                alt="Lucky Plastic manufacturing"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="bg-[#f7f8f6] py-20 lg:py-24">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Applications
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Industries We Support
            </h2>

          </div>


          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => (

              <div
                key={industry}
                className="rounded-2xl border border-gray-100 bg-white px-6 py-5 text-center font-semibold text-gray-800 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:text-green-700 hover:shadow-md"
              >
                {industry}
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-green-700 py-16 lg:py-20">

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-7 px-6 text-center md:flex-row md:text-left lg:px-10">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-200">
              Let's Work Together
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Looking for Reliable Plastic Manufacturing?
            </h2>

            <p className="mt-4 leading-7 text-green-100">
              Contact our team to discuss your product and packaging
              requirements.
            </p>

          </div>


          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-green-800 shadow-lg transition hover:bg-green-50"
          >
            Contact Us
            <ArrowIcon />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Manufacture;