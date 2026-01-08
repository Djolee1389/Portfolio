import Button from "@mui/material/Button";
import Link from "next/link";
import ButtonLinks from "@/components/ButtonLinks";

export default function Home() {
  return (
    <section className="flex flex-col-reverse items-center justify-center md:justify-between w-full px-4 sm:px-8 md:px-15 lg:px-20 gap-8 sm:gap-10 md:flex-row">
      <div className="flex justify-center items-center flex-col h-fit md:h-full md:w-1/2 md:items-start">
        <h1 className="mb-2 text-3xl sm:text-4xl md:text-5xl">
          Djordje Milutin
        </h1>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-base sm:text-lg md:text-xl mb-10 text-(--secondary)">
            Web Developer
          </p>
          <p
            className="mb-6 text-sm sm:text-base md:text-lg text-center md:text-start"
            style={{ textWrap: "balance" }}
          >
            I design and build web interfaces focused on clarity and
            performance. This site showcases selected projects, contact details
            and more about my work.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          <ButtonLinks text="View Projects" />
          <ButtonLinks text="About me" />
        </div>
      </div>

      <div className="w-1/2 md:w-140 ">
        <img
          src="/images/avatarPortfolio.png"
          alt="Profile Picture"
          className="w-full rounded-md object-cover "
        />
      </div>
    </section>
  );
}
