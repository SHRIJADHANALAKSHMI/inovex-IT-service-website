import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

function Contact() {
//we have use the usestate function to set the curr data should display in the future
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(

        "http://localhost:5000/api/contact",

        formData
      );

      alert("Message Sent Successfully");

      // Clear Form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.error("Error submitting form:", error);

      alert("Something went wrong");

    }
  };

  return (

    <section
      id="contact"
      className="bg-[#0f172a] py-24 px-6 md:px-20 text-white"
    >

      {/* Heading */}
      <div className="text-center mb-20">

        <h2 className="text-5xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto">

          Let’s build something amazing together. Reach out to us for
          innovative technology solutions.

        </p>

      </div>

      {/* Contact Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Left Side */}
        <motion.div

          initial={{ opacity: 0, x: -50 }}

          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}

        >

          <h3 className="text-3xl font-bold mb-8">
            Get In Touch
          </h3>

          <div className="space-y-6 text-gray-300 text-lg">

            <p>
              📧 contact@inovex.com
            </p>

            <p>
              📞 +91 7395863267
            </p>

            <p>
              📍 Madurai, India
            </p>

          </div>

        </motion.div>

        {/* Right Side Form */}
        <motion.form

          onSubmit={handleSubmit}

          initial={{ opacity: 0, x: 50 }}

          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}

          className="bg-[#1e293b] p-10 rounded-3xl shadow-2xl"
        >

          {/* Name */}
          <div className="mb-6">

            <label className="block mb-2 text-gray-300">
              Name
            </label>

            <input
              type="text"

              name="name"

              value={formData.name}

              onChange={handleChange}

              placeholder="Enter your name"

              required

              className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-indigo-500"
            />

          </div>

          {/* Email */}
          <div className="mb-6">

            <label className="block mb-2 text-gray-300">
              Email
            </label>

            <input
              type="email"

              name="email"

              value={formData.email}

              onChange={handleChange}

              placeholder="Enter your email"

              required

              className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-indigo-500"
            />

          </div>

          {/* Message */}
          <div className="mb-6">

            <label className="block mb-2 text-gray-300">
              Message
            </label>

            <textarea

              rows="5"

              name="message"

              value={formData.message}

              onChange={handleChange}

              placeholder="Write your message"

              required

              className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-indigo-500"
            ></textarea>

          </div>

          {/* Button */}
          <button
            type="submit"

            className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
          >

            Send Message

          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;
