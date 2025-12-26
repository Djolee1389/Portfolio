import { projects } from "@/components/projects";
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Projects() {
  return (
    <section className=" flex flex-col items-center">
      <h1 className="text-[3rem] font-bold mb-8">Projects</h1>
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="mb-8 flex gap-40 items-center not-odd:flex-row-reverse border rounded-xl pr-10 not-odd:pl-10 not-odd:pr-0 overflow-hidden transform transition-transform duration-200 hover:scale-105"
          >
            <div className="rounded-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="aspect-square w-80 bg-white rounded-xl border"
              />
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
                <p className="mb-8 text-(--text-secondary)">
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
                >
                  View Project
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
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
  );
}
