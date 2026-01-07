import { TechnologiesList } from "@/components/projects";
import { Technology } from "@/types/types";

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
  return (
    <div >
      <section className="min-h-screen flex flex-col items-center justify-center px-20 mt-45 md:mt-0">
        <h1 className=" mb-4">About Me</h1>
        <div className="  text-center space-y-5 ">
          <p className="text-(--secondary)">
            I'm a passionate developer with experience in building modern web
            applications.
          </p>
          <p className=" mx-auto text-l leading-relaxed " 
            style={{ textWrap: "balance" }}
          >
            Bavim se razvojem web aplikacija sa fokusom na pisanje čitljivog,
            strukturisanog i održivog koda. Kroz rad na ličnim projektima stekao
            sam iskustvo u JavaScript i TypeScript ekosistemu, posebno u React i
            Next.js okruženju, gdje gradim moderne korisničke interfejse i
            povezujem ih sa različitim servisima i API-jima. Posebnu pažnju
            posvećujem organizaciji koda, ponovnoj upotrebljivosti komponenti i
            osnovnim principima dobrog korisničkog iskustva. Tehnologije ispod
            predstavljaju alate koje koristim u praksi i s kojima kontinuirano
            unapređujem svoje znanje kroz nove projekte i učenje.
          </p>
        </div>
      </section>
      <section className="mb-20 ">
        <div className="flex flex-col items-center ">
          <h2 className="mb-6">Skills</h2>

          <div className="w-full flex flex-wrap items-center justify-center">
            {Object.entries(groupedTechnologies).map(([category, techs]) => (
              <div
                key={category}
                className="mx-10 my-5 flex items-center flex-col "
              >
                <h3 className="text-lg font-medium mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-5 justify-center">
                  {techs.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex flex-col items-center justify-center border w-25 aspect-square rounded-lg border-(--accent) hover:scale-110 transform transition-transform duration-200 hover:border-(--accent-hover) hover:bg-(--surface) "
                    >
                      <img
                        src={tech.imgLink}
                        alt={tech.name}
                        className="w-10 aspect-square mb-3 "
                        style={{ filter: tech.filter }}
                      />
                      <span className="text-sm">{tech.name}</span>
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
