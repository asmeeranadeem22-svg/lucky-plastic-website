import { Link } from "react-router-dom";

/* =========================================================
   SOCIAL ICONS
========================================================= */

const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 8H2v14h4V8zM4 2C2.9 2 2 2.9 2 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zM22 14.5c0-4.1-2.2-6.5-5.5-6.5-1.5 0-2.7.7-3.5 1.7V8H9v14h4v-7.4c0-2 .4-3.6 2.6-3.6 2.2 0 2.4 2 2.4 3.7V22h4v-7.5z" />
  </svg>
);


/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-green-700 text-white">


      {/* ===================================================
          TOP WAVY EDGE
      =================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-8
          bg-white
        "
        style={{
          clipPath:
            "polygon(0 0, 2% 70%, 4% 0, 6% 70%, 8% 0, 10% 70%, 12% 0, 14% 70%, 16% 0, 18% 70%, 20% 0, 22% 70%, 24% 0, 26% 70%, 28% 0, 30% 70%, 32% 0, 34% 70%, 36% 0, 38% 70%, 40% 0, 42% 70%, 44% 0, 46% 70%, 48% 0, 50% 70%, 52% 0, 54% 70%, 56% 0, 58% 70%, 60% 0, 62% 70%, 64% 0, 66% 70%, 68% 0, 70% 70%, 72% 0, 74% 70%, 76% 0, 78% 70%, 80% 0, 82% 70%, 84% 0, 86% 70%, 88% 0, 90% 70%, 92% 0, 94% 70%, 96% 0, 98% 70%, 100% 0, 100% 0, 0 0)"
        }}
      />


      {/* ===================================================
          MAIN FOOTER CONTENT
      =================================================== */}

      <div
        className="
          max-w-[1750px]
          mx-auto
          px-6
          lg:px-10
          xl:px-12
          pt-20
          pb-10
        "
      >


        {/* =================================================
            TOP SECTION
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >


          {/* ===============================================
              LEFT CONTENT
          =============================================== */}

          <div>

            <h2
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                text-white
                max-w-xl
              "
            >
              Let's Grow Together —
              <span className="block">
                Become a Distribution Partner
              </span>
            </h2>


            <p
              className="
                mt-5
                text-base
                md:text-lg
                text-green-50
                max-w-2xl
                leading-7
              "
            >
              Join a trusted network and grow your business
              with high-demand plastic products and reliable
              manufacturing solutions.
            </p>


            {/* APPLY / CONTACT BUTTON */}

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                mt-8
                bg-white
                text-green-800
                px-7
                py-3
                rounded-full
                font-semibold
                text-sm
                hover:bg-green-50
                transition
                duration-300
              "
            >
              Contact Us
            </Link>

          </div>


          {/* ===============================================
              RIGHT CONTENT
          =============================================== */}

          <div
            className="
              lg:flex
              lg:justify-end
            "
          >

            <div className="max-w-sm">


              {/* SOCIAL ICONS */}

              <div className="flex items-center gap-3 mb-7">

                {/* Facebook */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-white
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:bg-white
                    hover:text-green-700
                    transition
                  "
                >
                  <FacebookIcon />
                </a>


                {/* Instagram */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-white
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:bg-white
                    hover:text-green-700
                    transition
                  "
                >
                  <InstagramIcon />
                </a>


                {/* LinkedIn */}

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-white
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:bg-white
                    hover:text-green-700
                    transition
                  "
                >
                  <LinkedinIcon />
                </a>

              </div>


              {/* COMPANY TEXT */}

              <div className="flex gap-3">

                <span
                  className="
                    text-3xl
                    font-bold
                    leading-none
                    text-green-200
                  "
                >
                  /
                </span>

                <p
                  className="
                    text-base
                    md:text-lg
                    leading-6
                    text-green-50
                  "
                >
                  Lucky Plastic Industries has been
                  delivering reliable plastic products,
                  quality solutions and outstanding
                  service to the industry.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="mt-12 border-t border-white/30"></div>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-8
            gap-y-4
            py-8
          "
        >

          <Link
            to="/"
            className="
              text-sm
              font-medium
              uppercase
              hover:text-green-200
              transition
            "
          >
            Home
          </Link>


          <Link
            to="/about"
            className="
              text-sm
              font-medium
              uppercase
              hover:text-green-200
              transition
            "
          >
            About Us
          </Link>


          <Link
            to="/products"
            className="
              text-sm
              font-medium
              uppercase
              hover:text-green-200
              transition
            "
          >
            Products
          </Link>


          <Link
            to="/manufacture"
            className="
              text-sm
              font-medium
              uppercase
              hover:text-green-200
              transition
            "
          >
            Manufacture
          </Link>


          <Link
            to="/quality"
            className="
              text-sm
              font-medium
              uppercase
              hover:text-green-200
              transition
            "
          >
            Quality
          </Link>


          <Link
            to="/contact"
            className="
              text-sm
              font-medium
              uppercase
              hover:text-green-200
              transition
            "
          >
            Contact
          </Link>

        </div>


        {/* =================================================
            INFORMATION SECTION
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
            pt-2
          "
        >


          {/* ===============================================
              CONTACT
          =============================================== */}

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-widest
                text-green-200
                font-semibold
              "
            >
              Get In Touch
            </p>

            <a
              href="tel:+923001234567"
              className="
                block
                mt-3
                text-sm
                text-white
                hover:text-green-200
                transition
              "
            >
              +92 303 902 0000
            </a>

          </div>


          {/* ===============================================
              ADDRESS
          =============================================== */}

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-widest
                text-green-200
                font-semibold
              "
            >
              Address
            </p>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-green-50
                max-w-sm
              "
            >
              3.5 Km, Manga-Raiwind Road,
              District Lahore, Pakistan.
            </p>

          </div>


          {/* ===============================================
              LOGO
          =============================================== */}

          <div
            className="
              lg:flex
              lg:justify-end
              lg:items-start
            "
          >

            <Link to="/" className="inline-block">

              <img 
  src="/lucky_plastic_logo.png"
  alt="Lucky Plastic Industries"
  className="
    w-48
    h-auto
    
  "
/>

            </Link>

          </div>


          {/* ===============================================
              EMAIL
          =============================================== */}

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-widest
                text-green-200
                font-semibold
              "
            >
              Email
            </p>

                 <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=luckyindustries48@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-5 border-l border-gray-300 hover:text-green-700 transition"
            >
              ✉ luckyindustries48@gmail.com
            </a>

          </div>


          {/* ===============================================
              EMPTY SPACE
          =============================================== */}

          <div></div>


          {/* ===============================================
              COPYRIGHT
          =============================================== */}

          <div
            className="
              lg:flex
              lg:justify-end
              lg:items-end
            "
          >

            <p
              className="
                text-sm
                text-green-100
              "
            >
              © {new Date().getFullYear()} — Lucky Plastic Industries
            </p>

          </div>

        </div>

      </div>


      {/* ===================================================
          BOTTOM GREEN LINE
      =================================================== */}

      <div className="h-1 bg-green-900"></div>

    </footer>
  );
}

export default Footer;