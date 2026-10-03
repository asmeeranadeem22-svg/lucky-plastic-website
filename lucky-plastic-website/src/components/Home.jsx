import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Home() {
   const [current, setCurrent] = useState(0);
   const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
  "/images/9.jpeg",
  "/images/10.jpeg",
  "/images/11.jpeg",
  "/images/12.jpeg",
  "/images/13.jpeg",
  "/images/14.jpeg",
  "/images/15.jpeg",
 "/images/16.jpeg",
 "/images/17.jpeg",
"/images/18.jpeg",
"/images/19.jpeg",
"/images/20.jpeg",
"/images/21.jpeg",
"/images/22.jpeg",
"/images/23.jpeg",
"/images/24.jpeg"

];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <main className="bg-white text-gray-900">

     {/* =====================================================
    HERO SECTION
===================================================== */}
<section className="relative min-h-[88vh] flex items-center overflow-hidden bg-green-950">

  {/* Background image */}
  <img
    src="/images/lucky-factory.jpg"
    alt="Lucky Plastic Industries manufacturing facility"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Green overlay (same as About page) */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/80 to-green-950/40"></div>

  <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">

    <div className="max-w-3xl">

      <div className="flex items-center gap-3 mb-6">
        <span className="w-12 h-[2px] bg-green-400"></span>

        <span className="text-green-300 uppercase tracking-[0.25em] text-sm font-semibold">
          Lucky Plastic Industries
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
        Plastic Solutions
        <span className="block text-green-300">
          Built for Tomorrow.
        </span>
      </h1>

      <p className="mt-7 text-lg md:text-xl text-white/85 leading-8 max-w-2xl">
        Delivering quality plastic products and packaging solutions
        with modern manufacturing capabilities and a commitment to
        consistency and reliability.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">

        <Link
          to="/products"
          className="group bg-green-600 hover:bg-green-500 text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl"
        >
          Explore Products
          <span className="ml-2 group-hover:ml-3 transition-all">
            →
          </span>
        </Link>

        <Link
          to="/contact"
          className="border border-white/60 hover:bg-white hover:text-gray-900 text-white px-7 py-4 rounded-full font-semibold backdrop-blur-sm transition-all duration-300"
        >
          Get a Quote
        </Link>

      </div>

    </div>

  </div>

  {/* Bottom curve */}
  <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-full h-[70px]"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,80 C300,140 900,0 1200,70 L1200,120 L0,120 Z"
        fill="white"
      />
    </svg>
  </div>

</section>
      {/* =====================================================
          COMPANY INTRO
      ===================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1500px] mx-auto px-8 lg:px-12 xl:px-16">


          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>

              <span className="text-green-700 uppercase tracking-[0.2em] text-sm font-bold">
                About Lucky Plastic
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Experience,
                <span className="text-green-700"> Innovation</span>
                <br />
                & Quality.
              </h2>

              <p className="mt-7 text-gray-600 text-lg leading-8">
                Established in 1993, Lucky Plastic Industries has developed
                into a major extrusion setup in Pakistan, specializing in
                plastic sheets and packaging solutions.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Our capabilities include a diverse range of plastic materials
                and products serving different industrial and consumer
                applications.
              </p>

              <Link
                to="/about"
                className="inline-flex mt-8 items-center gap-2 text-green-700 font-bold hover:gap-4 transition-all"
              >
                Discover Our Story →
              </Link>

            </div>


            {/* Stats */}
            
          <div className="grid grid-cols-2 gap-5">

  {/* Card 01 */}
  <div className="bg-green-700 rounded-[2rem] p-8 text-white shadow-lg hover:bg-green-800 transition-all duration-300">
    <p className="text-5xl font-bold">
      1993
    </p>

    <p className="mt-3 text-green-100 font-medium">
      Established
    </p>
  </div>


  {/* Card 02 */}
  <div className="bg-green-800 rounded-[2rem] p-8 text-white shadow-lg hover:bg-green-900 transition-all duration-300">
    <p className="text-5xl font-bold text-green-200">
      250+
    </p>

    <p className="mt-3 text-green-100 font-medium">
      Workforce
    </p>
  </div>


  {/* Card 03 */}
  <div className="bg-green-600 rounded-[2rem] p-8 text-white shadow-lg hover:bg-green-700 transition-all duration-300">
    <p className="text-5xl font-bold">
      5
    </p>

    <p className="mt-3 text-green-100 font-medium">
      Modern Extrusion Setups
    </p>
  </div>


  {/* Card 04 */}
  <div className="bg-green-950 rounded-[2rem] p-8 text-white shadow-lg hover:bg-green-900 transition-all duration-300">
    <p className="text-5xl font-bold text-green-300">
      30+
    </p>

    <p className="mt-3 text-green-100 font-medium">
      Years of Experience
    </p>
  </div>

</div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCT SECTION
      ===================================================== */}
      <section className="relative py-24 overflow-hidden bg-[#f7f8f6] "
        >

  {/* Decorative background shapes */}
  <div className="absolute -top-32 -right-12 w-[450px] h-[450px] rounded-full border-[70px] border-green-100/60"></div>

  <div className="absolute bottom-[-180px] left-[-120px] w-[400px] h-[400px] rounded-full bg-green-100/40 blur-3xl"></div>

  {/* Subtle grid pattern */}
  <div
    className="absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage: `
        linear-gradient(#14532d 1px, transparent 1px),
        linear-gradient(90deg, #14532d 1px, transparent 1px)
      `,
      backgroundSize: "45px 45px",
    }}
  ></div>


  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-14 items-center">


      {/* =====================================================
          IMAGE
      ===================================================== */}
      <div className="relative">
      {/* Decorative circle */}
      <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-green-200/50 blur-2xl"></div>

      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] bg-white">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Lucky Plastic product ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

        <div className="absolute bottom-8 left-8 right-8 text-white">
          <p className="text-green-300 uppercase tracking-[0.2em] text-sm font-bold">
            Our Products
          </p>
          <h3 className="text-3xl font-bold mt-2">
            Designed for Diverse Applications
          </h3>
        </div>
      </div>
    </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div>

        <span className="text-green-700 uppercase tracking-[0.2em] text-sm font-bold">
          Product Range
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          From Plastic Sheets
          <span className="text-green-700">
            {" "}to Packaging.
          </span>
        </h2>

        <p className="mt-6 text-gray-600 leading-8 text-lg">
          Lucky Plastic specializes in diversified rigid plastic sheets
          and packaging products serving a wide range of applications.
        </p>


        {/* Product pills */}
        

          <div className="mt-8 flex flex-wrap gap-3">
  {[
    "Rigid PVC",
    "GPPS",
    "PP",
    "ABS",
    "HIPS",
    "HDPE",
    "PS Foam",
  ].map((item, index) => (
    <span
      key={item}
      className={`px-5 py-2.5 rounded-full font-medium shadow-sm border transition-all duration-300
        ${
          index % 2 === 0
            ? "bg-white text-green-700 border-green-200 hover:bg-green-50 hover:border-green-500"
            :  "bg-green-700 text-white border-green-700 hover:bg-green-800 hover:border-green-800"
        }`}
    >
      {item}
    </span>
  ))}
</div>


        {/* Button */}
        <Link
          to="/products"
          className="inline-flex mt-9 bg-green-700 hover:bg-green-800 text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-green-900/20"
        >
          View Product Range →
        </Link>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          WHY CHOOSE US - IMAGE BASED
      ===================================================== */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <div className="relative">

              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-100 rounded-full blur-3xl"></div>

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">

                <img
                  src="/images/lucky-factory.jpg"
                  alt="Lucky Plastic manufacturing facility"
                  className="w-full h-[560px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 text-white">

                  <p className="text-green-300 uppercase tracking-widest text-sm font-bold">
                    Manufacturing Excellence
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    Built on Experience & Capability
                  </h3>

                </div>

              </div>

            </div>


            {/* CONTENT */}
            <div>

              <span className="text-green-700 uppercase tracking-[0.2em] text-sm font-bold">
                Why Choose Lucky Plastic
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Built Around
                <span className="text-green-700">
                  {" "}Quality.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-8">
                Our manufacturing approach combines experience, modern
                extrusion capabilities and a strong focus on consistent
                product quality.
              </p>


              {/* Feature list */}
              <div className="mt-10 bg-green-700 p-8 rounded-[2rem] space-y-7">

                {[
                  {
                    number: "01",
                    title: "Quality Focus",
                    text: "A quality-oriented approach throughout manufacturing and product supply.",
                  },
                  {
                    number: "02",
                    title: "Modern Setup",
                    text: "Five modern extrusion setups supporting large-scale production capabilities.",
                  },
                  {
                    number: "03",
                    title: "Wide Product Range",
                    text: "Multiple plastic materials and packaging solutions for diverse applications.",
                  },
                  {
                    number: "04",
                    title: "Industry Experience",
                    text: "Established in 1993 with decades of experience in the plastic industry.",
                  },
                ].map((item) => (

                  <div
                    key={item.number}
                    className="flex gap-5 group"
                  >

                    <div className="shrink-0 w-11 h-11 rounded-full bg-green-50 text-green-700 flex items-center justify-center font-bold group-hover:bg-green-700 group-hover:text-white transition">
                      {item.number}
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-white leading-7">
                        {item.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}
     <section className="relative py-24 overflow-hidden bg-[#f7f8f6]">

  {/* =====================================================
      DECORATIVE BACKGROUND
  ===================================================== */}

  {/* Large circle - top right */}
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border-[80px] border-green-100/60"></div>

  {/* Soft green glow - bottom left */}
  <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-green-100/40 blur-3xl"></div>

  {/* Subtle grid */}
  <div
    className="absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage: `
        linear-gradient(#14532d 1px, transparent 1px),
        linear-gradient(90deg, #14532d 1px, transparent 1px)
      `,
      backgroundSize: "45px 45px",
    }}
  ></div>


  {/* =====================================================
      CONTENT
  ===================================================== */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">


      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}
      <div>

        <span className="text-green-700 uppercase tracking-[0.2em] text-sm font-bold">
          Industries & Applications
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Solutions Across
          <span className="text-green-700">
            {" "}Industries.
          </span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
          Our products support applications across pharmaceutical,
          food, industrial, automotive, packaging, construction and
          other sectors.
        </p>

        <Link
          to="/products"
          className="inline-flex mt-8 bg-green-700 hover:bg-green-800 text-white px-7 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-green-900/20"
        >
          Explore Applications →
        </Link>

      </div>


      {/* =====================================================
    INDUSTRY CARDS
===================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {[
    "Pharmaceutical & Surgical",
    "Food & Confectionary",
    "Industrial",
    "Automotive",
    "Electrical Goods",
    "Packaging",
    "Advertisement & Display",
    "Construction",
  ].map((item) => (

    <div
      key={item}
      className="
        group
        relative
        bg-white
        border border-gray-200
        rounded-2xl
        min-h-[130px]
        px-8
        py-6
        flex
        items-center
        justify-center
        text-center
        shadow-sm
        hover:border-green-600
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        overflow-hidden
      "
    >

      {/* Green side accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          bg-green-600
          scale-y-0
          group-hover:scale-y-100
          origin-bottom
          transition-transform
          duration-300
        "
      ></div>

      <h3
        className="
          text-xl
          font-semibold
          leading-7
          text-gray-800
          group-hover:text-green-700
          transition-colors
          duration-300
        "
      >
        {item}
      </h3>

    </div>

  ))}

</div>

   


    </div>
  </div>
  </section>

      

    </main>
  );
}

export default Home;