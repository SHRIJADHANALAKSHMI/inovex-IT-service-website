import { useEffect, useState } from "react";

import axios from "axios";

import {

  Clock3,
  CheckCircle2,
  Loader2,
  User,
  CalendarDays,
  Briefcase,

} from "lucide-react";

function ProjectTracker() {

  // USER
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // PROJECTS
  const [projects, setProjects] = useState([]);

  // FETCH PROJECTS
  useEffect(() => {

    fetchProjects();

  }, []);

  // GET USER PROJECTS
  const fetchProjects = async () => {

    try {

      const res = await axios.get(

        "http://localhost:5000/api/projects"
      );

      // FILTER USER PROJECTS
      const userProjects = res.data.filter(

        (project) =>

          project.clientId === user.id
      );

      setProjects(userProjects);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <section className="min-h-screen bg-[#020617] text-white p-10 overflow-hidden relative">

      {/* GLOW EFFECTS */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[150px] rounded-full top-0 right-0"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full bottom-0 left-0"></div>

      {/* HEADER */}
      <div className="relative z-10 mb-14">

        <h1 className="text-5xl font-black mb-4">

          Project Tracker 🚀

        </h1>

        <p className="text-gray-400 text-lg">

          Track your project progress in real-time

        </p>

      </div>

      {/* EMPTY */}
      {projects.length === 0 && (

        <div className="text-center py-32 relative z-10">

          <h1 className="text-4xl font-bold mb-5">

            No Projects Yet

          </h1>

          <p className="text-gray-400 text-lg">

            Submit a new project request from dashboard.

          </p>

        </div>

      )}

      {/* PROJECTS */}
      <div className="space-y-10 relative z-10">

        {projects.map((project) => (

          <div

            key={project._id}

            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px]"
          >

            {/* TOP */}
            <div className="flex justify-between items-start mb-10 flex-wrap gap-5">

              {/* LEFT */}
              <div>

                <h1 className="text-4xl font-black text-indigo-400 mb-3">

                  {project.serviceType}

                </h1>

                <p className="text-gray-400 text-lg">

                  {project.description}

                </p>

              </div>

              {/* STATUS */}
              <div>

                <span className="bg-indigo-600 px-6 py-3 rounded-2xl font-semibold text-lg">

                  {project.status}

                </span>

              </div>

            </div>

            {/* INFO CARDS */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">

              {/* DEV */}
              <div className="bg-[#020617]/80 border border-white/10 p-6 rounded-3xl">

                <div className="flex items-center gap-3 mb-4">

                  <User className="text-indigo-400" />

                  <p className="text-gray-400">

                    Assigned Developer

                  </p>

                </div>

                <h2 className="text-2xl font-bold">

                  {project.assignedDeveloper}

                </h2>

              </div>

              {/* COMPLETION */}
              <div className="bg-[#020617]/80 border border-white/10 p-6 rounded-3xl">

                <div className="flex items-center gap-3 mb-4">

                  <CalendarDays className="text-green-400" />

                  <p className="text-gray-400">

                    Estimated Completion

                  </p>

                </div>

                <h2 className="text-2xl font-bold">

                  {project.estimatedCompletion}

                </h2>

              </div>

              {/* BUDGET */}
              <div className="bg-[#020617]/80 border border-white/10 p-6 rounded-3xl">

                <div className="flex items-center gap-3 mb-4">

                  <Briefcase className="text-yellow-400" />

                  <p className="text-gray-400">

                    Budget

                  </p>

                </div>

                <h2 className="text-2xl font-bold">

                  {project.budget}

                </h2>

              </div>

            </div>

            {/* PROGRESS */}
            <div className="mb-12">

              <div className="flex justify-between mb-4">

                <p className="text-lg font-semibold">

                  Project Progress

                </p>

                <p className="text-indigo-400 font-bold text-xl">

                  {project.progress}%

                </p>

              </div>

              {/* BAR */}
              <div className="w-full h-5 bg-[#020617] rounded-full overflow-hidden">

                <div

                  style={{
                    width: `${project.progress}%`,
                  }}

                  className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500"
                ></div>

              </div>

            </div>

            {/* TIMELINE */}
            <div>

              <h2 className="text-2xl font-bold mb-8">

                Project Timeline

              </h2>

              <div className="grid md:grid-cols-4 gap-5">

                {/* PLANNING */}
                <div className="bg-[#020617]/80 p-5 rounded-2xl flex items-center gap-4">

                  <CheckCircle2 className="text-green-400" />

                  <p>

                    Planning

                  </p>

                </div>

                {/* UI */}
                <div className="bg-[#020617]/80 p-5 rounded-2xl flex items-center gap-4">

                  <CheckCircle2 className="text-green-400" />

                  <p>

                    UI Design

                  </p>

                </div>

                {/* DEVELOPMENT */}
                <div className="bg-[#020617]/80 p-5 rounded-2xl flex items-center gap-4">

                  <Loader2 className="text-yellow-400" />

                  <p>

                    Development

                  </p>

                </div>

                {/* DEPLOYMENT */}
                <div className="bg-[#020617]/80 p-5 rounded-2xl flex items-center gap-4">

                  <Clock3 className="text-gray-400" />

                  <p>

                    Deployment

                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProjectTracker;