import Button from "@mui/material/Button";
import Link from "next/link";
import ButtonLinks from "@/components/ButtonLinks";

export default function Home() {
  return (
    <section className=" flex flex-col items-center justify-between w-full px-20 md:flex-row sm:gap-10">
      <div className="flex justify-center items-center flex-col h-screen md:w-1/2 md:h-full md:items-start">
        <h1 className=" mb-2 ">Djordje Milutin</h1>
       <div className="flex flex-col items-center md:items-start">
          <p className="text-lg  mb-10 text-(--secondary)">Web Developer</p>
          <p className="mb-6 text-center md:text-start" style={{ textWrap: "balance" }}>
            I design and build web interfaces focused on clarity and performance.
            This site showcases selected projects, contact details and more about
            my work.
          </p>
       </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLinks text="View Projects" />
          <ButtonLinks text="About me" />
        </div>
      </div>

      <div className="w-90">
        <img
          src="/images/icons/gt.svg"
          alt="Profile Picture"
          className="w-full h-120 rounded-md object-cover shadow-md bg-white"
        />
      </div>
    </section>
  );
}
