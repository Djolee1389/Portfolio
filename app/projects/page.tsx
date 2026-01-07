import { projects } from "@/components/projects";
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="  mb-8">Projects</h1>
        <p className="text-center mb-8">Here are some of my recent projects.</p>
      </section>
      <section className="w-full max-w-6xl mx-auto p-7">
        <div>
          {projects.map((project) => (
            <div
              key={project.id}
              className="mb-8 w-full flex flex-col lg:flex-row gap-10 items-center justify-center hover:bg-(--surface) lg:odd:flex-row lg:even:flex-row-reverse border rounded-xl overflow-hidden transform transition-transform duration-200 hover:scale-105 p-4 sm:p-6 lg:p-8"
            >
              <div className="rounded-md w-full md:w-1/3 flex justify-center">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="aspect-square w-full max-w-xs sm:max-w-sm bg-white rounded-xl border"
                />
              </div>
              <div className="flex flex-col justify-between p-2 flex-1 items-center text-center lg:items-start lg:text-left">
                <div className="mb-4">
                  <h2 className=" mb-2">{project.title}</h2>
                  <p className="mb-8 text-(--secondary)">
                    {project.description}
                  </p>
                  <Button
                    variant="outlined"
                    endIcon={<LaunchIcon />}
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      border: "1px solid var(--accent)",
                      color: "var(--accent)",
                      "&:hover": {
                        border: "1px solid var(--accent-hover)",
                        backgroundColor: "var(--accent-hover)",
                        color: "var(--primary)",
                      },
                      mb: "10px",
                    }}
                    className="mx-auto"
                  >
                    View Project
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
