import { motion } from "framer-motion";

import axios from "axios";

import { useState } from "react";

import {

  useNavigate,
  Link

} from "react-router-dom";
//define a login function

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(

        "http://localhost:5000/api/auth/login",

        formData
      );

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        res.data.token
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      // ROLE BASED LOGIN
      if (res.data.user.role === "admin") {

        navigate("/dashboard");

      } else {

        navigate("/client-dashboard");

      }

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }
  };

  return (

    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#312e81] px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* Login Card */}
      <motion.form

        onSubmit={handleSubmit}

        initial={{ opacity: 0, y: 80 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
      >

        {/* Logo */}
        <h1 className="text-5xl font-black text-center text-white mb-3 tracking-wide">

          Inovex

        </h1>

        <p className="text-center text-gray-300 mb-10">

          Welcome back to your workspace

        </p>

        {/* Email */}
        <div className="mb-6">

          <label className="block text-gray-300 mb-3">

            Email Address

          </label>

          <input
            type="email"

            name="email"

            value={formData.email}

            onChange={handleChange}

            placeholder="Enter your email"

            required

            className="w-full p-4 rounded-2xl bg-[#0f172a]/70 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
          />

        </div>

        {/* Password */}
        <div className="mb-8">

          <label className="block text-gray-300 mb-3">

            Password

          </label>

          <input
            type="password"

            name="password"

            value={formData.password}

            onChange={handleChange}

            placeholder="Enter your password"

            required

            className="w-full p-4 rounded-2xl bg-[#0f172a]/70 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
          />

        </div>

        {/* Login Button */}
        <button

          type="submit"

          className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 py-4 rounded-2xl text-lg font-bold text-white shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >

          Login

        </button>

        {/* Signup */}
        <p className="text-center text-gray-300 mt-8">

          Don’t have an account?

          <Link to="/signup">

            <span className="text-indigo-400 ml-2 hover:text-indigo-300 cursor-pointer">

              Signup

            </span>

          </Link>

        </p>

      </motion.form>

    </section>
  );
}

export default Login;
