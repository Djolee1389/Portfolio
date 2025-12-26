import Button from "@mui/material/Button";
import Link from "next/link";
import ButtonLinks from "@/components/ButtonLinks";

export default function Home() {
  return (
    <section className=" w-full flex justify-between items-center px-10 py-4 gap-5 " >
      <div className=" p-4 ">
        <h1 className="text-4xl font-bold mb-2 ">Djordje Milutin</h1>
        <p className="text-lg  mb-10 text-(--secondary)">Software Developer</p>
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

      <div className="flex justify-center">
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="w-90 h-120 rounded-md object-cover shadow-md bg-white"
        />
      </div>
    </section>
  );
}
