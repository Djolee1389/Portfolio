import { projects } from "@/components/projects";

export default function Projects() {
  return (
    <section className="px-20">
      {projects.map((project) => (
        <div key={project.id} className="mb-8 flex gap-50 items-center not-odd:flex-row-reverse">
          <div className="rounded-md">
            <img src={project.imageUrl} alt={project.title} className="aspect-square w-70 bg-white rounded-xl"/>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
            <p className="mb-8">{project.description}</p>
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
    </section>
  );
}
