import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-[#0f172a] text-white py-24 px-6 md:px-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-5xl font-bold mb-6">
            About Inovex
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            Inovex IT Solutions is a modern technology company providing
            innovative digital solutions for startups, businesses, and enterprises.
          </p>

          <p className="text-gray-400 leading-8">
            We specialize in web development, cloud computing, AI-powered
            applications, cybersecurity, and digital transformation services.
          </p>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-purple-600 to-blue-600 p-1 rounded-3xl"
        >

          <div className="bg-[#111827] rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-6">
              Why Choose Us?
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="text-xl font-semibold text-purple-400">
                  Innovative Solutions
                </h4>

                <p className="text-gray-400">
                  Modern and scalable technology solutions.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-purple-400">
                  Expert Team
                </h4>

                <p className="text-gray-400">
                  Skilled developers and technology experts.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-purple-400">
                  24/7 Support
                </h4>

                <p className="text-gray-400">
                  Dedicated customer support and maintenance.
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;