import { TechnologiesList } from "@/components/projects";
import { Technology } from "@/types/types";

type GroupedTechnologies = Record<string, Technology[]>;

const groupedTechnologies: GroupedTechnologies = TechnologiesList.reduce(
  (acc, tech) => {
    if (!tech.category) return acc; // sigurnosna provera
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  },
  {} as GroupedTechnologies
);

export default function About() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 max-w-2xl text-center">
        I'm a passionate developer with experience in building modern web
        applications.
      </p>

      <div className="flex flex-col items-center mt-6">
        <h2 className="text-xl font-semibold mb-6">Skills</h2>

        {Object.entries(groupedTechnologies).map(([category, techs]) => (
          <div
            key={category}
            className="mb-8 w-full flex items-center flex-col"
          >
            <h3 className="text-lg font-medium mb-4 capitalize">{category}</h3>
            <div className="flex flex-wrap gap-5 justify-center">
              {techs.map((tech) => (
                <div
                  key={tech.id}
                  className="flex flex-col items-center justify-center border w-25 aspect-square rounded-lg border-(--accent) hover:scale-110 transform transition-transform duration-200 hover:border-(--accent-hover)"
                >
                  <img
                    src={tech.imgLink}
                    alt={tech.name}
                    className="w-10 h-10 mb-2"
                    style={{ filter: tech.filter }}
                  />
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
