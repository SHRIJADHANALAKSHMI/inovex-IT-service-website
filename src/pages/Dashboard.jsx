import { useEffect, useState } from "react";

import axios from "axios";

import {

  LayoutDashboard,
  Briefcase,
  Bell,
  Users,
  Search,
  Trash2,
  Clock3,
  CheckCircle2,
  Loader2,
  Settings,
  IndianRupee,
  LogOut,
  Upload,
  FileText,
  MessageCircle,

} from "lucide-react";

function Dashboard() {

  const [projects, setProjects] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  // FETCH PROJECTS
  useEffect(() => {

    fetchProjects();

  }, []);

  // GET PROJECTS
  const fetchProjects = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/projects"
      );

      setProjects(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // UPDATE PROJECT
  const updateProject = async (
    id,
    updatedData
  ) => {

    try {

      // AUTO CONDITIONS
      if (
        updatedData.status === "Completed"
      ) {

        updatedData.progress = 100;
      }

      await axios.put(

        `http://localhost:5000/api/projects/${id}`,

        updatedData
      );

      fetchProjects();

    } catch (error) {

      console.log(error);

    }
  };

  // DELETE PROJECT function
  const deleteProject = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this project?"
      );

    if (!confirmDelete) return;

    try {

      await axios.delete(

        `http://localhost:5000/api/projects/${id}`
      );

      fetchProjects();

    } catch (error) {

      console.log(error);

    }
  };

  // LOGOUT
  const handleLogout = () => {

    localStorage.clear();

    window.location.href = "/login";
  };

  // FILTER
  const filteredProjects =
    projects.filter((project) => {

      const matchesSearch =

        project.clientName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        project.serviceType
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesFilter =

        filter === "All"

        ||

        project.status === filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  // COUNTS
  const pendingProjects =
    projects.filter(

      (project) =>
        project.status === "Pending"
    ).length;

  const completedProjects =
    projects.filter(

      (project) =>
        project.status === "Completed"
    ).length;

  const developmentProjects =
    projects.filter(

      (project) =>
        project.status === "Development"
    ).length;

  // STATUS COLORS
  const statusColors = {

    Pending: "bg-yellow-500",

    Planning: "bg-blue-500",

    "UI Design": "bg-purple-500",

    Development: "bg-indigo-500",

    Testing: "bg-orange-500",

    Deployment: "bg-pink-500",

    Completed: "bg-green-500",

  };

  return (

    <section className="min-h-screen flex bg-[#020617] text-white overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[260px] bg-[#0f172a]/90 border-r border-white/10 p-7 flex flex-col justify-between">

        <div>

          <h1 className="text-4xl font-black text-indigo-400 mb-12">

            Inovex

          </h1>

          <div className="space-y-4">

            <div className="flex items-center gap-4 bg-indigo-600 p-4 rounded-2xl">

              <LayoutDashboard />

              <p className="font-semibold">

                Dashboard

              </p>

            </div>

            <div

              onClick={() =>

                window.scrollTo({

                  top: 700,

                  behavior: "smooth",

                })
              }

              className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl cursor-pointer transition-all"
            >

              <Briefcase />

              <p>

                Projects

              </p>

            </div>
            <div

  onClick={() =>
    window.location.href = "/chat"
  }

  className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl cursor-pointer transition-all"
>

  <MessageCircle />

  <p>

    Live Chat

  </p>

</div>

            <div

              onClick={() =>

                alert(
                  `Total Clients: ${projects.length}`
                )
              }

              className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl cursor-pointer transition-all"
            >

              <Users />

              <p>

                Clients

              </p>

            </div>

            <div

              onClick={() =>

                alert(
                  `${pendingProjects} Pending Projects`
                )
              }

              className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl cursor-pointer transition-all"
            >

              <Bell />

              <p>

                Notifications

              </p>

            </div>

            <div

              onClick={() =>

                alert(
                  "Settings Coming Soon ⚙️"
                )
              }

              className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl cursor-pointer transition-all"
            >

              <Settings />

              <p>

                Settings

              </p>

            </div>

          </div>

        </div>

        {/* LOGOUT */}
        <button

          onClick={handleLogout}

          className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
        >

          <LogOut />

          Logout

        </button>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-black mb-3">

              Admin Dashboard 🚀

            </h1>

            <p className="text-gray-400">

              Manage all projects and workflows

            </p>

          </div>

          {/* SEARCH */}
          <div className="relative">

            <Search
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"

              placeholder="Search projects..."

              value={search}

              onChange={(e) =>

                setSearch(e.target.value)
              }

              className="bg-[#0f172a] border border-white/10 pl-14 p-4 rounded-2xl w-[300px] focus:outline-none focus:border-indigo-500"
            />

          </div>

        </div>

        {/* ANALYTICS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-6 rounded-3xl">

            <p className="text-gray-200 mb-3">

              Total Projects

            </p>

            <h1 className="text-4xl font-black">

              {projects.length}

            </h1>

          </div>

          <div className="bg-[#0f172a] p-6 rounded-3xl border border-white/10">

            <p className="text-gray-400 mb-3">

              Pending

            </p>

            <h1 className="text-4xl font-black text-yellow-400">

              {pendingProjects}

            </h1>

          </div>

          <div className="bg-[#0f172a] p-6 rounded-3xl border border-white/10">

            <p className="text-gray-400 mb-3">

              Development

            </p>

            <h1 className="text-4xl font-black text-blue-400">

              {developmentProjects}

            </h1>

          </div>

          <div className="bg-[#0f172a] p-6 rounded-3xl border border-white/10">

            <p className="text-gray-400 mb-3">

              Completed

            </p>

            <h1 className="text-4xl font-black text-green-400">

              {completedProjects}

            </h1>

          </div>

        </div>

        {/* FILTERS */}
        <div className="flex gap-4 mb-8 flex-wrap">

          {[
            "All",
            "Pending",
            "Development",
            "Completed",
          ].map((item) => (

            <button

              key={item}

              onClick={() =>
                setFilter(item)
              }

              className={`px-5 py-3 rounded-2xl transition-all ${
                filter === item

                  ? "bg-indigo-600"

                  : "bg-[#0f172a] border border-white/10"
              }`}
            >

              {item}

            </button>

          ))}

        </div>

        {/* PROJECTS */}
        <div className="space-y-8">

          {filteredProjects.map((project) => (

            <div

              key={project._id}

              className="bg-white/5 border border-white/10 p-6 rounded-3xl"
            >

              {/* TOP */}
              <div className="flex justify-between items-start mb-6">

                <div>

                  <h1 className="text-2xl font-bold text-indigo-400 mb-2">

                    {project.clientName}

                  </h1>

                  <p className="text-gray-400">

                    {project.serviceType}

                  </p>

                </div>

                <button

                  onClick={() =>
                    deleteProject(
                      project._id
                    )
                  }

                  className="bg-red-500 hover:bg-red-600 p-3 rounded-xl"
                >

                  <Trash2 size={18} />

                </button>

              </div>

              {/* STATUS */}
              <div className="mb-5">

                <span

                  className={`px-5 py-2 rounded-xl ${statusColors[project.status]}`}
                >

                  {project.status}

                </span>

              </div>
              {project.priority && (

  <div className="mt-4">

    <span className="bg-red-500 px-4 py-2 rounded-xl text-sm">

      Priority: {project.priority}

    </span>

  </div>

)}

              {/* DESCRIPTION */}
              <div className="bg-[#020617]/80 p-5 rounded-2xl mb-6">

                <p className="text-gray-400 mb-2">

                  Description

                </p>

                <p className="text-gray-300 leading-7">

                  {project.description}

                </p>

              </div>
               <div className="grid md:grid-cols-2 gap-5 mb-6">

  <div className="bg-[#020617]/80 p-5 rounded-2xl">

    <p className="text-gray-400 mb-2">

      Budget

    </p>

    <h2 className="text-xl font-bold text-green-400">

      {project.budget}

    </h2>

  </div>

  <div className="bg-[#020617]/80 p-5 rounded-2xl">

    <p className="text-gray-400 mb-2">

      Deadline

    </p>

    <h2 className="text-xl font-bold text-yellow-400">

      {project.deadline}

    </h2>

  </div>

</div>

              {/* CONTROLS */}
              <div className="grid md:grid-cols-3 gap-5 mb-6">

                {/* STATUS */}
                <div>

                  <label className="block mb-2">

                    Status

                  </label>

                  <select

                    value={project.status}

                    onChange={(e) =>

                      updateProject(

                        project._id,

                        {
                          status:
                            e.target.value,
                        }
                      )
                    }

                    className="w-full bg-[#020617] border border-white/10 p-4 rounded-2xl"
                  >

                    <option>
                      Pending
                    </option>

                    <option>
                      Planning
                    </option>

                    <option>
                      UI Design
                    </option>

                    <option>
                      Development
                    </option>

                    <option>
                      Testing
                    </option>

                    <option>
                      Deployment
                    </option>

                    <option>
                      Completed
                    </option>

                  </select>

                </div>

                {/* DEV */}
                <div>

                  <label className="block mb-2">

                    Developer

                  </label>

                  <select

                    value={
                      project.assignedDeveloper
                    }

                    onChange={(e) =>

                      updateProject(

                        project._id,

                        {
                          assignedDeveloper:
                            e.target.value,
                        }
                      )
                    }

                    className="w-full bg-[#020617] border border-white/10 p-4 rounded-2xl"
                  >

                    <option>
                      Hari
                    </option>

                    <option>
                      Priya
                    </option>

                    <option>
                      Arun
                    </option>

                    <option>
                      Rahul
                    </option>
                    <option>
                      janaki
                    </option>
                    <option>
                      sritharan
                    </option>

                  </select>

                </div>
                <div>

  <label className="block mb-2">
    Estimated Completion
  </label>

  <input
    type="date"
    value={project.estimatedCompletion || ""}
    onChange={(e) =>
      updateProject(project._id, {
        estimatedCompletion: e.target.value,
      })
    }
    className="w-full bg-[#020617] border border-white/10 p-4 rounded-2xl"
  />

</div>

                {/* PROGRESS */}
                <div>

                  <label className="block mb-2">

                    Progress

                  </label>

                  <input
                    type="range"

                    min="0"

                    max="100"

                    value={project.progress}

                    onChange={(e) => {

                      let value =
                        e.target.value;

                      let status =
                        project.status;

                      if (
                        value >= 80
                      ) {

                        status =
                          "Development";
                      }

                      if (
                        value == 100
                      ) {

                        status =
                          "Completed";
                      }

                      updateProject(

                        project._id,

                        {

                          progress:
                            value,

                          status,
                        }
                      );
                    }}

                    className="w-full"
                  />

                  <p className="mt-2 text-indigo-400 font-bold">

                    {project.progress}%

                  </p>

                </div>

              </div>

              {/* PROGRESS BAR */}
              <div className="mb-6">

                <div className="w-full h-4 bg-[#020617] rounded-full overflow-hidden">

                  <div

                    style={{
                      width: `${project.progress}%`,
                    }}

                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
                  ></div>

                </div>

              </div>

              {/* FILE UPLOAD */}
              <div className="mb-6">

                <label className="block mb-3 font-semibold">

                  Upload Project File

                </label>

                <input

                  type="file"

                  onChange={async (e) => {

                    const formData =
                      new FormData();

                    formData.append(

                      "projectFile",

                      e.target.files[0]
                    );

                    try {

                      await axios.put(

                        `http://localhost:5000/api/projects/upload/${project._id}`,

                        formData
                      );

                      alert(
                        "File Uploaded Successfully 🚀"
                      );

                      fetchProjects();

                    } catch (error) {

                      console.log(error);

                    }
                  }}

                  className="w-full bg-[#020617] border border-white/10 p-4 rounded-2xl"
                />

              </div>

              {/* FILE VIEW */}
              {

                project.projectFile && (

                  <a

                    href={`http://localhost:5000/uploads/${project.projectFile}`}

                    target="_blank"

                    rel="noreferrer"

                    className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-2xl transition-all"
                  >

                    <FileText size={18} />

                    View Uploaded File

                  </a>
                )
              }

              {/* TIMELINE */}
              <div className="grid md:grid-cols-4 gap-4 mt-8">

                <div className="bg-[#020617]/80 p-4 rounded-2xl flex items-center gap-3">

                  <CheckCircle2 className="text-green-400" />

                  <p>

                    Planning

                  </p>

                </div>

                <div className="bg-[#020617]/80 p-4 rounded-2xl flex items-center gap-3">

                  <CheckCircle2 className="text-green-400" />

                  <p>

                    UI Design

                  </p>

                </div>

                <div className="bg-[#020617]/80 p-4 rounded-2xl flex items-center gap-3">

                  <Loader2 className="text-yellow-400" />

                  <p>

                    Development

                  </p>

                </div>

                <div className="bg-[#020617]/80 p-4 rounded-2xl flex items-center gap-3">

                  <Clock3 className="text-gray-400" />

                  <p>

                    Deployment

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Dashboard;