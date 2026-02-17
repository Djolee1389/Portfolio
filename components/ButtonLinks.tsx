"use client";
import Button from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ButtonLinks({ text }: { text: string }) {
  const t = useTranslations("Home");
  return (
    <Button
      component={Link} 
      href={t(`${text}.linkTo`)}
      variant="outlined" 
      endIcon={<NorthEastIcon />}
      sx={{
        border: "1px solid var(--accent)",
        color: "var(--accent)",
        "&:hover": {
          border: "1px solid var(--accent-hover)",
          backgroundColor: "var(--accent-hover)",
          color: "#fff",
        },
      }} 
    >
      {t(`${text}.text`)} {/* tekst dugmeta ide ovdje */}
    </Button>
  );
}
