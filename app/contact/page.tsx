"use client";

import { Button, TextField } from "@mui/material";

export default function Contact() {
  return (
    <section className="min-h- flex items-center w-full justify-center px-4 py-12">
      <div className="flex flex-col w-full max-w-lg bg-white shadow-md rounded-lg p-6 lg:p-10">
        <h1 className="text-3xl font-semibold text-center mb-2 text-gray-900 dark:text-white b">
          Contact Me
        </h1>

        <p className="text-(--secondary) text-center mb-8">
          If you have any questions, feel free to reach out!
        </p>

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          sx={{
            marginBottom: 2,
            bgcolor: "white",
            borderRadius: 1,
          }}
        />

        <TextField
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{
            marginBottom: 3,
            bgcolor: "white",
            borderRadius: 1,
          }}
        />

        <Button
          variant="contained"
          fullWidth
          href="mailto:contact@example.com"
          sx={{ paddingY: 1.5 }}
        >
          Send Email
        </Button>
      </div>
    </section>
  );
}
