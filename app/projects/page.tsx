import { ProjectsContainer } from "@/components/ProjectsContainer";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <section className="min-h-dvh flex flex-col items-center justify-center px-4 lg:px-20">
        <h1 className="  mb-8">{t("title")}</h1>
        <div className="  text-center space-y-5 ">
          <p
            className=" mx-auto text-l leading-relaxed "
            style={{ textWrap: "balance" }}
          >
            {t("description")}
          </p>
        </div >
      </section>
      <section className="w-full max-w-6xl mx-auto p-7 mt-[-160]">
        <ProjectsContainer />
      </section>
    </div>
  );
}
