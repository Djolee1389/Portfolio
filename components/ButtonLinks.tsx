"use client";
import Button from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Link from "next/link";

export default function ButtonLinks({ text }: { text: string }) {
  return (
    <Button
      component={Link} 
      href="/projects"
      variant="outlined" 
      endIcon={<NorthEastIcon />}
      sx={{
        border: "1px solid var(--accent)",
        color: "var(--accent)",
        "&:hover": {
          border: "1px solid var(--accent-hover)",
          backgroundColor: "var(--accent-hover)",
          color: "var(--primary)",
        },
      }} 
    >
      {text} {/* tekst dugmeta ide ovdje */}
    </Button>
  );
}
