import { ProjectsContainer } from "@/components/ProjectsContainer";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <section className="min-h-dvh flex flex-col items-center justify-center">
        <h1 className="  mb-8">{t("title")}</h1>
        <p className="text-center mb-8">{t("description")}</p>
      </section>
      <section className="w-full max-w-6xl mx-auto p-7 mt-[-160]">
        <ProjectsContainer />
      </section>
    </div>
  );
}
