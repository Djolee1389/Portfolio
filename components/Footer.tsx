import { Instagram, GitHub } from "@mui/icons-material"

export const Footer = () => {
  return (
    <footer className="w-full py-5 px-10 flex justify-between items-center border-t mt-10">
      <div>
        <p className="text-xs md:text-sm text-(--secondary)">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME_KEY}. All rights reserved.
        </p>
      </div>
      <div className="flex gap-2">
        <a
          href={process.env.NEXT_PUBLIC_INSTA_KEY}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-(--secondary) hover:text-(--accent)"
        >
          <Instagram />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_GITHUB_KEY}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-(--secondary) hover:text-(--accent)"
        >
          <GitHub />
        </a>
      </div>
    </footer>
  )
}
