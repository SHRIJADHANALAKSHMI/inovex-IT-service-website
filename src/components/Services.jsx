import { motion } from "framer-motion";

function Services() {

  const services = [
    {
      title: "Web Development",
      description:
        "Modern responsive websites and scalable web applications.",
      icon: "🌐",
    },

    {
      title: "App Development",
      description:
        "Powerful Android and iOS mobile applications for businesses.",
      icon: "📱",
    },

    {
      title: "Cloud Solutions",
      description:
        "Secure cloud infrastructure and deployment services.",
      icon: "☁️",
    },

    {
      title: "AI Solutions",
      description:
        "AI-powered applications and intelligent automation systems.",
      icon: "🤖",
    },

    {
      title: "Cybersecurity",
      description:
        "Advanced security solutions to protect your business.",
      icon: "🔐",
    },

    {
      title: "UI/UX Design",
      description:
        "Beautiful user interfaces and modern user experiences.",
      icon: "🎨",
    },
  ];

  return (
    <section id ="services" className="bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Heading */}
      <div className="text-center mb-20">

        <h2 className="text-5xl font-bold text-[white] mb-6">
          Our Services
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We provide innovative digital solutions to help businesses
          grow faster with modern technology.
        </p>

      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {services.map((service, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}

            whileHover={{
              scale: 1.05,
            }}

            className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >

            {/* Icon */}
            <div className="text-5xl mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-7">
              {service.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Services;