import { useState, useEffect } from "react";

import axios from "axios";

import {

  LayoutDashboard,
  Clock3,
  Bell,
  User,
  Briefcase,
  IndianRupee,
  CalendarDays,
  FileText,
  Flag,

} from "lucide-react";

import { useNavigate } from "react-router-dom";

function ClientDashboard() {

  const navigate = useNavigate();

  // USER
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // PROJECTS
  const [projects, setProjects] = useState([]);

  // FORM DATA
  const [formData, setFormData] = useState({

    serviceType: "",
    budget: "",
    deadline: "",
    priority: "",
    description: "",

  });

  // FETCH PROJECTS
  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects = async () => {

    try {

      const res = await axios.get(

        "http://localhost:5000/api/projects"
      );

      const userProjects = res.data.filter(

        (project) =>

          project.clientId === user.id
      );

      setProjects(userProjects);

    } catch (error) {

      console.log(error);

    }
  };

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(

        "http://localhost:5000/api/projects",

        {

          clientId: user.id,

          clientName: user.name,

          ...formData,

        }
      );

      alert(
        "Project Request Submitted 🚀"
      );

      fetchProjects();

      setFormData({

        serviceType: "",
        budget: "",
        deadline: "",
        priority: "",
        description: "",

      });

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <section className="min-h-screen flex bg-[#020617] text-white overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[250px] bg-[#0f172a]/90 border-r border-white/10 p-6 flex flex-col justify-between">

        <div>

          {/* LOGO */}
          <h1 className="text-4xl font-black text-indigo-400 mb-12">

            Inovex

          </h1>

          {/* MENU */}
          <div className="space-y-4">

            {/* DASHBOARD */}
            <div className="flex items-center gap-4 bg-indigo-600 p-4 rounded-2xl">

              <LayoutDashboard size={20} />

              <p className="font-medium">

                Dashboard

              </p>

            </div>

            {/* TRACKER */}
            <div

              onClick={() =>
                navigate("/tracker")
              }

              className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl cursor-pointer transition-all"
            >

              <Clock3 size={20} />

              <p>

                Project Tracker

              </p>

            </div>

            {/* PROJECTS */}
            <div

              className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl cursor-pointer transition-all"
            >

              <Briefcase size={20} />

              <p>

                Projects

              </p>

            </div>

            {/* NOTIFICATIONS */}
            <div

              onClick={() =>

                alert(
                  `${projects.length} Active Projects`
                )
              }

              className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl cursor-pointer transition-all"
            >

              <Bell size={20} />

              <p>

                Notifications

              </p>

            </div>

          </div>

        </div>

        {/* USER CARD */}
        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">

              <User size={20} />

            </div>

            <div>

              <p className="font-semibold">

                {user.name}

              </p>

              <p className="text-sm text-gray-400">

                Client Account

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-4xl font-black mb-3">

            Welcome Back 👋

          </h1>

          <p className="text-gray-400 text-base">

            Manage your projects and track progress in real-time

          </p>

        </div>

        {/* ANALYTICS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* ACTIVE */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-6 rounded-3xl">

            <p className="text-gray-200 mb-3">

              Active Projects

            </p>

            <h1 className="text-4xl font-black">

              {projects.length}

            </h1>

          </div>

          {/* PENDING */}
          <div className="bg-[#0f172a] border border-white/10 p-6 rounded-3xl">

            <p className="text-gray-400 mb-3">

              Pending

            </p>

            <h1 className="text-4xl font-black text-yellow-400">

              {

                projects.filter(

                  (project) =>

                    project.status !==
                    "Completed"

                ).length

              }

            </h1>

          </div>

          {/* COMPLETED */}
          <div className="bg-[#0f172a] border border-white/10 p-6 rounded-3xl">

            <p className="text-gray-400 mb-3">

              Completed

            </p>

            <h1 className="text-4xl font-black text-green-400">

              {

                projects.filter(

                  (project) =>

                    project.status ===
                    "Completed"

                ).length

              }

            </h1>

          </div>

        </div>

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">

          {/* HEADER */}
          <div className="mb-8">

            <p className="text-indigo-400 font-semibold mb-2">

              START NEW PROJECT

            </p>

            <h2 className="text-3xl font-black mb-3">

              Create Project Request

            </h2>

            <p className="text-gray-400 text-sm">

              Submit your requirements and track the complete workflow.

            </p>

          </div>

          <form onSubmit={handleSubmit}>

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">

              {/* SERVICE */}
              <div className="relative">

                <Briefcase
                  className="absolute left-4 top-4 text-indigo-400"
                  size={20}
                />

                <select

                  name="serviceType"

                  value={
                    formData.serviceType
                  }

                  onChange={handleChange}

                  className="w-full pl-14 p-4 rounded-2xl bg-[#020617]/80 border border-white/10 text-sm"
                >

                  <option value="">
                    Select Service
                  </option>

                  <option>
                    Web Development
                  </option>

                  <option>
                    Mobile App Development
                  </option>

                  <option>
                    UI/UX Design
                  </option>

                  <option>
                    AI Solutions
                  </option>

                  <option>
                    Cloud Services
                  </option>

                </select>

              </div>

              {/* BUDGET */}
              <div className="relative">

                <IndianRupee
                  className="absolute left-4 top-4 text-green-400"
                  size={20}
                />

                <select

                  name="budget"

                  value={formData.budget}

                  onChange={handleChange}

                  className="w-full pl-14 p-4 rounded-2xl bg-[#020617]/80 border border-white/10 text-sm"
                >

                  <option value="">
                    Select Budget
                  </option>

                  <option>
                    ₹10K - ₹25K
                  </option>

                  <option>
                    ₹25K - ₹50K
                  </option>

                  <option>
                    ₹50K - ₹1L
                  </option>

                  <option>
                    ₹1L+
                  </option>

                </select>

              </div>

            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">

              {/* DEADLINE */}
              <div className="relative">

                <CalendarDays
                  className="absolute left-4 top-4 text-yellow-400"
                  size={20}
                />

                <select

                  name="deadline"

                  value={
                    formData.deadline
                  }

                  onChange={handleChange}

                  className="w-full pl-14 p-4 rounded-2xl bg-[#020617]/80 border border-white/10 text-sm"
                >

                  <option value="">
                    Timeline
                  </option>

                  <option>
                    1 Week
                  </option>

                  <option>
                    2 Weeks
                  </option>

                  <option>
                    1 Month
                  </option>

                  <option>
                    2 Months
                  </option>

                </select>

              </div>

              {/* PRIORITY */}
              <div className="relative">

                <Flag
                  className="absolute left-4 top-4 text-red-400"
                  size={20}
                />

                <select

                  name="priority"

                  value={
                    formData.priority
                  }

                  onChange={handleChange}

                  className="w-full pl-14 p-4 rounded-2xl bg-[#020617]/80 border border-white/10 text-sm"
                >

                  <option value="">
                    Priority
                  </option>

                  <option>
                    Low
                  </option>

                  <option>
                    Medium
                  </option>

                  <option>
                    High
                  </option>

                  <option>
                    Urgent
                  </option>

                </select>

              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="relative mb-6">

              <FileText
                className="absolute left-4 top-4 text-indigo-400"
                size={20}
              />

              <textarea
                rows="5"

                name="description"

                placeholder="Describe your project..."

                value={
                  formData.description
                }

                onChange={handleChange}

                className="w-full pl-14 pt-4 p-4 rounded-2xl bg-[#020617]/80 border border-white/10 resize-none text-sm"
              ></textarea>

            </div>

            {/* BUTTON */}
            <button

              type="submit"

              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-[1.01] transition-all duration-300 py-4 rounded-2xl text-base font-semibold"
            >

              Submit Project Request 🚀

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ClientDashboard;