import { Link } from "react-router-dom";

function Quality() {
  const tests = [
    {
      title: "Raw Material Inspection",
      text: "All incoming materials are checked before production to ensure consistency and safety."
    },
    {
      title: "In-Process Quality Control",
      text: "Every production stage is monitored by our quality team."
    },
    {
      title: "Final Product Testing",
      text: "Products are tested for strength, dimensions, finish and food-grade safety."
    },
    {
      title: "Packaging Inspection",
      text: "Finished products are inspected before dispatch."
    },
  ];

  const standards = [
    "Food Grade Materials",
    "Dimensional Accuracy",
    "Durability Testing",
    "Leak Resistance",
    "Strength Testing",
    "Visual Inspection",
  ];

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[450px]">
        <img
          src="/images/lucky-factory.jpg"
          alt="Quality"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-green-950/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <p className="text-green-300 uppercase tracking-[4px] font-semibold">
              Quality Assurance
            </p>

            <h1 className="text-5xl font-bold text-white mt-4">
              Commitment to
              <span className="text-green-300"> Quality</span>
            </h1>

            <p className="text-white/85 mt-6 text-lg leading-8">
              We maintain strict quality control procedures to deliver
              reliable, hygienic and food-safe plastic packaging solutions.
            </p>
          </div>
        </div>
      </section>

      {/* QUALITY POLICY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-green-700 font-bold uppercase">
                Our Policy
              </span>

              <h2 className="text-4xl font-bold mt-3">
                Quality is Our Priority
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Lucky Plastic Industries follows strict quality standards
                from raw material selection to final product dispatch.
                Our goal is to provide durable, safe and high-quality
                packaging products.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Quality Standards
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {standards.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm border border-green-100"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTING */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-green-700 font-bold uppercase">
              Testing Process
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Our Quality Control Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {tests.map((test, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-green-100 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl font-bold mb-5">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {test.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {test.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="text-green-700 font-bold uppercase">
              Certifications
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Industry Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-green-50 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-bold">Food Grade Materials</h3>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-bold">Quality Inspection</h3>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-bold">Safe Packaging Standards</h3>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-green-700 rounded-[40px] p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Need High Quality Packaging?
            </h2>

            <p className="mt-4 text-green-100">
              Contact Lucky Plastic Industries today for reliable products.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50"
            >
              Contact Us →
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Quality;