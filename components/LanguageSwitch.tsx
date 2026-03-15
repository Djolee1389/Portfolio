"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Select, MenuItem } from "@mui/material";

export default function LanguageSelect() {
  const t = useTranslations("Aria-labels");

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
        color: "var(--default)",
        border: "1px solid var(--default)",
        borderColor: "var(--default)",
        "& .MuiSelect-icon": { color: "var(--default)" },
      }}
      aria-label={t("languageSelect")}
    >
      <MenuItem value="sr" aria-label={t("serbian")} >SR</MenuItem>
      <MenuItem value="en" aria-label={t("english")}>EN</MenuItem>
    </Select>
  );
}
