import { useEffect, useState } from "react";

import axios from "axios";

import {

  Clock3,
  CheckCircle2,
  Loader2,
  User,
  CalendarDays,
  Briefcase,
  FileDown,
  Layers3,

} from "lucide-react";

function ProjectTracker() {

  // USER
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // PROJECTS usestate with help it
  const [projects, setProjects] = useState([]);

  // FETCH PROJECTS with help of  useffect fetchprojects
  useEffect(() => {

    fetchProjects();

  }, []);

  // GET USER PROJECTS async fetchproject
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

  // STATUS COLORS has added
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

    <section className="min-h-screen bg-[#020617] text-white overflow-hidden relative">

      {/* GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-indigo-500/20 blur-[140px] rounded-full top-0 right-0"></div>

      <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-[140px] rounded-full bottom-0 left-0"></div>

      {/* MAIN */}
      <div className="relative z-10 p-8">

        {/* HEADER */}
        <div className="mb-10">

          <p className="text-indigo-400 font-semibold mb-2">

            LIVE TRACKING

          </p>

          <h1 className="text-4xl font-black mb-3">

            Project Tracker 

          </h1>

          <p className="text-gray-400 text-sm">

            Track project workflow, progress, files and deployment updates.

          </p>

        </div>

        {/* EMPTY */}
        {projects.length === 0 && (

          <div className="text-center py-28">

            <h1 className="text-3xl font-bold mb-4">

              No Projects Yet

            </h1>

            <p className="text-gray-400">

              Submit a project request from dashboard.

            </p>

          </div>

        )}

        {/* PROJECTS */}
        <div className="space-y-8">

          {projects.map((project) => (

            <div

              key={project._id}

              className="bg-white/5 backdrop-blur-xl border border-white/10 p-7 rounded-[35px]"
            >

              {/* TOP */}
              <div className="flex justify-between items-start flex-wrap gap-5 mb-8">

                {/* LEFT */}
                <div>

                  <div className="flex items-center gap-3 mb-3">

                    <Layers3
                      className="text-indigo-400"
                      size={22}
                    />

                    <h1 className="text-2xl font-black text-indigo-400">

                      {project.serviceType}

                    </h1>

                  </div>

                  <p className="text-gray-400 text-sm leading-7 max-w-3xl">

                    {project.description}

                  </p>

                </div>

                {/* STATUS */}
                <div>

                  <span

                    className={`px-5 py-2 rounded-xl text-sm font-semibold ${statusColors[project.status]}`}
                  >

                    {project.status}

                  </span>

                </div>

              </div>

              {/* INFO */}
              <div className="grid md:grid-cols-3 gap-5 mb-8">

                {/* DEV */}
                <div className="bg-[#020617]/80 border border-white/10 p-5 rounded-2xl">

                  <div className="flex items-center gap-3 mb-3">

                    <User
                      className="text-indigo-400"
                      size={18}
                    />

                    <p className="text-gray-400 text-sm">

                      Developer

                    </p>

                  </div>

                  <h2 className="text-lg font-bold">

                    {project.assignedDeveloper}

                  </h2>

                </div>

                {/* COMPLETION */}
                <div className="bg-[#020617]/80 border border-white/10 p-5 rounded-2xl">

                  <div className="flex items-center gap-3 mb-3">

                    <CalendarDays
                      className="text-green-400"
                      size={18}
                    />

                    <p className="text-gray-400 text-sm">

                      Completion

                    </p>

                  </div>

                  <h2 className="text-lg font-bold">

                    {project.estimatedCompletion}

                  </h2>

                </div>

                {/* BUDGET */}
                <div className="bg-[#020617]/80 border border-white/10 p-5 rounded-2xl">

                  <div className="flex items-center gap-3 mb-3">

                    <Briefcase
                      className="text-yellow-400"
                      size={18}
                    />

                    <p className="text-gray-400 text-sm">

                      Budget

                    </p>

                  </div>

                  <h2 className="text-lg font-bold">

                    {project.budget}

                  </h2>

                </div>

              </div>

              {/* PROGRESS */}
              <div className="mb-8">

                <div className="flex justify-between mb-3">

                  <p className="text-sm font-medium">

                    Progress

                  </p>

                  <p className="text-indigo-400 font-bold text-sm">

                    {project.progress}%

                  </p>

                </div>

                {/* BAR */}
                <div className="w-full h-4 bg-[#020617] rounded-full overflow-hidden">

                  <div

                    style={{
                      width: `${project.progress}%`,
                    }}

                    className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500"
                  ></div>

                </div>

              </div>

              {/* FILE DOWNLOAD */}
              {

                project.projectFile && (

                  <div className="mb-8">

                    <a

                      href={`http://localhost:5000/uploads/${project.projectFile}`}

                      target="_blank"

                      rel="noreferrer"

                      className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300"
                    >

                      <FileDown size={18} />

                      Download Project File

                    </a>

                  </div>
                )
              }

              {/* TIMELINE */}
              <div>

                <h2 className="text-xl font-bold mb-5">

                  Timeline

                </h2>

                <div className="grid md:grid-cols-4 gap-4">

                  {/* PLANNING */}
                  <div className="bg-[#020617]/80 p-4 rounded-2xl flex items-center gap-3">

                    <CheckCircle2
                      className="text-green-400"
                      size={18}
                    />

                    <p className="text-sm">

                      Planning

                    </p>

                  </div>

                  {/* UI */}
                  <div className="bg-[#020617]/80 p-4 rounded-2xl flex items-center gap-3">

                    <CheckCircle2
                      className="text-green-400"
                      size={18}
                    />

                    <p className="text-sm">

                      UI Design

                    </p>

                  </div>

                  {/* DEVELOPMENT */}
                  <div className="bg-[#020617]/80 p-4 rounded-2xl flex items-center gap-3">

                    <Loader2
                      className="text-yellow-400"
                      size={18}
                    />

                    <p className="text-sm">

                      Development

                    </p>

                  </div>

                  {/* DEPLOYMENT */}
                  <div className="bg-[#020617]/80 p-4 rounded-2xl flex items-center gap-3">

                    <Clock3
                      className="text-gray-400"
                      size={18}
                    />

                    <p className="text-sm">

                      Deployment

                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProjectTracker;
