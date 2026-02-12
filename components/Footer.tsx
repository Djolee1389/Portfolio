import { Instagram, GitHub } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full  py-5 px-7 flex justify-between flex-col items-center border-t mt-10 ">
      <div className="flex justify-between gap-10 items-center w-full">
        <div>
          <p className="text-xs md:text-sm text-(--secondary)">
            © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME_KEY}. {t("copyright")}
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
      </div>
      <div>
        <p className="text-[10px]  text-(--secondary) mt-5 md:mt-2 text-center">
          {t("recaptcha")} 
        </p>
      </div>
    </footer>
  );
};
