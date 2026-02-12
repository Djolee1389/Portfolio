"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Select, MenuItem } from "@mui/material";

export default function LanguageSelect() {
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (event: any) => {
    const newLocale = event.target.value as "sr" | "en";

    document.cookie = `locale=${newLocale}; path=/`;

    router.refresh();
  };

  return (
    <Select
      value={locale}
      onChange={handleChange}
      size="small"
      id="language"
      name="language"
      sx={{
        color: "white",
        border: "1px solid white",
        "& .MuiSelect-icon": { color: "white" },
      }}
    >
      <MenuItem value="sr">SR</MenuItem>
      <MenuItem value="en">EN</MenuItem>
    </Select>
  );
}
