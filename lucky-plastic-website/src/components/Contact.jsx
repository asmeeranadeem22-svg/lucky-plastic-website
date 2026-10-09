
import { useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   ICONS
========================================================= */

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.24a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
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
   CONTACT PAGE
========================================================= */

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || "Business Inquiry - Lucky Plastic Industries"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`
    );

    window.location.href = `mailto:luckyindustries48@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-white text-gray-800">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[430px] overflow-hidden">

        <img
          src="/images/lucky-factory.jpg"
          alt="Contact Lucky Plastic Industries"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-green-950/75" />

        <div className="relative mx-auto flex min-h-[430px] w-full max-w-7xl items-center px-6 lg:px-10">

          <div className="max-w-3xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let's Talk About
              <span className="block text-green-300">
                Your Requirements
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">
              Get in touch with Lucky Plastic Industries for product
              information, business inquiries and packaging solutions.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="bg-[#f7f8f6] py-20 lg:py-24">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* PHONE */}

            <a
              href="tel:+923039020000"
              className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                <PhoneIcon />
              </div>

              <h3 className="mt-6 text-lg font-bold text-gray-900">
                Phone
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                +92-303-902-0000
              </p>

            </a>


            {/* EMAIL */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=luckyindustries48@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                <MailIcon />
              </div>

              <h3 className="mt-6 text-lg font-bold text-gray-900">
                Email
              </h3>

              <p className="mt-2 break-all text-sm text-gray-600">
                luckyindustries48@gmail.com
              </p>

            </a>


            {/* LOCATION */}

            <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                <LocationIcon />
              </div>

              <h3 className="mt-6 text-lg font-bold text-gray-900">
                Location
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Lahore, Punjab, Pakistan
              </p>

            </div>


            {/* WORKING HOURS */}

            <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                <ClockIcon />
              </div>

              <h3 className="mt-6 text-lg font-bold text-gray-900">
                Working Hours
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT FORM + MAP
      ===================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">

          {/* =================================================
              FORM
          ================================================= */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Send Us a Message
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Have a question about our products or need a quotation?
              Send us your requirements and our team can get back to you.
            </p>


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* NAME + PHONE */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

              </div>


              {/* EMAIL */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* SUBJECT */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What can we help you with?"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
              >
                Send Inquiry
                <ArrowIcon />
              </button>

            </form>

          </div>


          {/* =================================================
              MAP
          ================================================= */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Find Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Location
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Visit or contact our team for business inquiries and
              product information.
            </p>


            <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">

              <iframe
                title="Lucky Plastic Industries Location"
                src="https://www.google.com/maps?q=Lahore%2C%20Pakistan&output=embed"
                className="h-[500px] w-full border-0"
                loading="lazy"
                allowFullScreen
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHATSAPP CTA
      ===================================================== */}

      <section className="bg-green-950 py-16 lg:py-20">

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-7 px-6 text-center md:flex-row md:text-left lg:px-10">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Quick Inquiry
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Need a Fast Response?
            </h2>

            <p className="mt-3 text-green-100">
              Contact our team directly for product and quotation inquiries.
            </p>

          </div>


          <a
            href="https://wa.me/923039020000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-green-800 transition hover:bg-green-50"
          >
            WhatsApp Us
            <ArrowIcon />
          </a>

        </div>

      </section>


     

    </main>
  );
}

export default Contact;

