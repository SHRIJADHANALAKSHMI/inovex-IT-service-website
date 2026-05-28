import { motion } from "framer-motion";

function Testimonials() {

  const testimonials = [
    {
      name: "Shrija Dhanalakshmi S M",
      role: "Startup Founder",
      review:
        "Inovex transformed our business with a modern and scalable web platform.",
    },

    {
      name: "Janaki",
      role: "Business Owner",
      review:
        "Professional team with excellent support and innovative solutions.",
    },

    {
      name: "Sritharan",
      role: "Tech Entrepreneur",
      review:
        "The UI/UX and development quality exceeded our expectations.",
    },
  ];

  return (
   // <section className="bg-white py-24 px-6 md:px-20">
   //<section className="max-w-5xl mx-auto py-24 px-6 md:px-20">
   <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#1e293b] via-[#4338ca] to-[#334155] px-6">


      {/* Heading */}
      <div className="text-center mb-20">

        <h2 className="text-6xl font-bold text-[white] mb-6">
          What Our Clients Say
        </h2>

        <p className="text-white-600 text-lg max-w-3xl mx-auto">
          Trusted by startups, businesses, and enterprises worldwide.
        </p>

      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {testimonials.map((testimonial, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}

            whileHover={{
              scale: 1.03,
            }}

            className="bg-[#f8fafc] p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >

            {/* Quote */}
            <div className="text-5xl text-indigo-500 mb-6">
              “
            </div>

            {/* Review */}
            <p className="text-gray-600 leading-8 mb-8">
              {testimonial.review}
            </p>

            {/* User */}
            <div>

              <h3 className="text-xl font-bold text-[#0f172a]">
                {testimonial.name}
              </h3>

              <p className="text-gray-500">
                {testimonial.role}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;