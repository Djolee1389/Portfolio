import { TechnologiesList } from "@/components/projects";
import { Technology } from "@/types/types";
import { useTranslations } from "next-intl";

type GroupedTechnologies = Record<string, Technology[]>;

const groupedTechnologies: GroupedTechnologies = TechnologiesList.reduce(
  (acc, tech) => {
    if (!tech.category) return acc;
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  },
  {} as GroupedTechnologies
);

export default function About() {
  const t = useTranslations("About");

  return (
    <div>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 lg:px-20 mt-30 md:mt-0">
        <h1 className=" mb-4">{t("title")}</h1>
        <div className="  text-center space-y-5 ">
          <p className="text-(--secondary)">
            {t("subtitle")}
          </p>
          <p
            className=" mx-auto text-l leading-relaxed "
            style={{ textWrap: "balance" }}
          >
            {t("description")}
          
          </p>
        </div>
      </section>
      <section className="mb-20 mt-20 lg:mt-0 px-4 lg:px-30">
        <div className="flex flex-col items-center ">
          <h2 className="mb-6">{t("skills")}</h2>

          <div className="w-full flex flex-wrap items-center justify-center ">
            {Object.entries(groupedTechnologies).map(([category, techs]) => (
              <div
                key={category}
                className="mx-6 my-5  flex items-center  flex-col lg:mx-10 "
              >
                <h3 className="text-lg font-medium mb-4 capitalize">
                  {t(category)}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center md:gap-5">
                  {techs.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex flex-col items-center justify-center border w-20 aspect-square rounded-lg border-(--accent) hover:scale-110 transform transition-transform duration-200 hover:border-(--accent-hover) hover:bg-(--surface) md:w-25"
                    >
                      <img
                        src={tech.imgLink}
                        alt={tech.name}
                        className="w-8 aspect-square mb-3 md:w-10"
                        style={{ filter: tech.filter }}
                      />
                      <span className="text-xs md:text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
