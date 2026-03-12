"use client";
import ButtonLinks from "@/components/ButtonLinks";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <section className="flex flex-col-reverse items-center justify-center md:justify-between xl:justify-evenly w-full px-4 sm:px-8 md:px-15 lg:px-20 gap-8 sm:gap-10 md:flex-row">
      <div className="flex justify-center items-center flex-col h-fit md:h-full md:w-1/2 md:items-start">
        <h1 className="mb-2 text-3xl text-center md:text-start sm:text-4xl md:text-5xl">
          {process.env.NEXT_PUBLIC_NAME_KEY}
        </h1>

        <div className="flex flex-col items-center md:items-start">
          <p className="text-base sm:text-lg md:text-xl mb-10 text-(--secondary)">
            Web developer
          </p>
          <p
            className="mb-6 text-sm sm:text-base md:text-lg text-center md:text-start"
            style={{ textWrap: "balance" }}
          >
            {t("description")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-4">
          <ButtonLinks text="viewProjects" />
          <ButtonLinks text="aboutMe" />
        </div>
      </div>

      <div className="w-1/2 md:w-140 ">
        <Image
          src="/images/avatarPortfolio.png"
          alt="Profile Picture"
          width={560}
          height={560}
          className="w-full rounded-md object-cover"
          priority
        />
      </div>
    </section>
  );
}
