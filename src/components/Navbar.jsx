import { Link } from "react-router-dom";

function Navbar() {

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }
  };

  return (

    <nav className="flex justify-between items-center px-10 py-5 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-indigo-400 cursor-pointer">
        Inovex
      </h1>

      {/* Nav Links */}
      <div className="flex items-center gap-10">

        <ul className="flex gap-10 text-lg font-medium text-white">

          {navLinks.map((link, index) => (

            <li
              key={index}

              onClick={() => scrollToSection(link.id)}

              className="cursor-pointer transition-all duration-300 hover:text-indigo-400"
            >

              {link.name}

            </li>

          ))}

        </ul>

        {/* Login Button */}
        <Link to="/login">

          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105">

            Login

          </button>

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;