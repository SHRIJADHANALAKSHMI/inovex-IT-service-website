import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });
  };

  // Handle Signup
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Password Match Check
    if (
      formData.password !== formData.confirmPassword
    ) {

      alert("Passwords do not match");

      return;
    }

    try {

      const res = await axios.post(

        "http://localhost:5000/api/auth/signup",

        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      alert(res.data.message);

      // Redirect to Login
      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Signup Failed"
      );

    }
  };

  return (

    <section className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#1e293b] px-6">

      <motion.form

        onSubmit={handleSubmit}

        initial={{ opacity: 0, y: 50 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        className="bg-white/10 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center mb-8">

          Create Account

        </h1>

        {/* Name */}
        <div className="mb-6">

          <label className="block text-gray-300 mb-2">
            Full Name
          </label>

          <input
            type="text"

            name="name"

            value={formData.name}

            onChange={handleChange}

            placeholder="Enter your name"

            required

            className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white focus:outline-none focus:border-indigo-500"
          />

        </div>

        {/* Email */}
        <div className="mb-6">

          <label className="block text-gray-300 mb-2">
            Email
          </label>

          <input
            type="email"

            name="email"

            value={formData.email}

            onChange={handleChange}

            placeholder="Enter your email"

            required

            className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white focus:outline-none focus:border-indigo-500"
          />

        </div>

        {/* Password */}
        <div className="mb-6">

          <label className="block text-gray-300 mb-2">
            Password
          </label>

          <input
            type="password"

            name="password"

            value={formData.password}

            onChange={handleChange}

            placeholder="Enter your password"

            required

            className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white focus:outline-none focus:border-indigo-500"
          />

        </div>

        {/* Confirm Password */}
        <div className="mb-6">

          <label className="block text-gray-300 mb-2">
            Confirm Password
          </label>

          <input
            type="password"

            name="confirmPassword"

            value={formData.confirmPassword}

            onChange={handleChange}

            placeholder="Confirm your password"

            required

            className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 text-white focus:outline-none focus:border-indigo-500"
          />

        </div>

        {/* Signup Button */}
        <button

          type="submit"

          className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
        >

          Signup

        </button>

        {/* Login Link */}
        <p className="text-gray-300 text-center mt-6">

          Already have an account?

          <Link to="/login">

            <span className="text-indigo-400 cursor-pointer ml-2">

              Login

            </span>

          </Link>

        </p>

      </motion.form>

    </section>
  );
}

export default Signup;