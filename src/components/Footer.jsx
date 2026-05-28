function Footer() {
  return (
    <footer className="bg-[#020617] text-white py-16 px-6 md:px-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>

          <h2 className="text-3xl font-bold text-indigo-400 mb-6">
            Inovex
          </h2>

          <p className="text-gray-400 leading-7">
            Innovative IT solutions for modern businesses and startups.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-indigo-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-indigo-400 cursor-pointer transition">
              About
            </li>

            <li className="hover:text-indigo-400 cursor-pointer transition">
              Services
            </li>

            <li className="hover:text-indigo-400 cursor-pointer transition">
              Portfolio
            </li>

          </ul>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Services
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>Web Development</li>
            <li>App Development</li>
            <li>Cloud Solutions</li>
            <li>AI Services</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Contact
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>📧 contact@inovex.com</li>
            <li>📞 +91 7395863267</li>
            <li>📍 Madurai, India</li>

          </ul>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">

        © 2026 Inovex IT Solutions. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;