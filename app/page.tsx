import Button from "@mui/material/Button";
import Link from "next/link";
import ButtonLinks from "@/components/ButtonLinks";

export default function Home() {
  return (
    <section className=" flex items-center px-20 py-4 gap- " >
      <div className=" p-4">
        <h1 className="font-bold mb-2 ">Djordje Milutin</h1>
        <p className="text-lg  mb-10 text-(--secondary)">Web Developer</p>
        <p className="mb-6 " style={{textWrap:"balance"}}>
          I design and build web interfaces focused on clarity and performance.
          This site showcases selected projects, contact details and more about
          my work.
        </p>

        <div className="flex flex-wrap gap-3">
          <ButtonLinks text="View Projects" />
          <ButtonLinks text="About me"/>
        </div>
      </div>

      <div className="w-90 bg-emerald-700">
        <img
          src="/images/icons/gt.svg"
          alt="Profile Picture"
          className="w-full h-120 rounded-md object-cover shadow-md bg-white"
        />
      </div>
    </section>
  );
}
