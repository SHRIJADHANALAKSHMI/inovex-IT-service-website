import { motion } from "framer-motion";
import flightBg from "../assets/flight.png";
import { useNavigate } from "react-router-dom";

function Hero() {

  // NAVIGATION
  const navigate = useNavigate();

  return (

    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#1e293b] via-[#4338ca] to-[#334155] px-6"
    >

      {/* Background Flight Path */}
      <img
        src={flightBg}
        alt="Flight Path"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[180px] opacity-20 top-0 left-0"></div>

      <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[180px] opacity-20 bottom-0 right-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl">

        {/* Animated Heading */}
        <motion.h1

          initial={{ opacity: 0, y: 50 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
        >

          Transforming Businesses

          <br />

          With Modern Technology

        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1.2 }}

          className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-9"
        >

          Inovex IT Solutions provides web development,
          app development, cloud services, AI solutions,
          and cybersecurity services for modern businesses.

        </motion.p>

        {/* Animated Buttons */}
        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 1 }}

          className="flex flex-col sm:flex-row gap-6 justify-center"
        >

          {/* Get Started */}
          <button

            onClick={() => navigate("/login")}

            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-10 py-4 rounded-2xl text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(99,102,241,0.5)]"
          >

            Get Started

          </button>

          {/* Services */}
          <button

            onClick={() => {

              const section = document.getElementById(
                "services"
              );

              section.scrollIntoView({
                behavior: "smooth",
              });

            }}

            className="border border-purple-400 hover:bg-purple-600/20 backdrop-blur-md px-10 py-4 rounded-2xl text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
          >

            Our Services

          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;