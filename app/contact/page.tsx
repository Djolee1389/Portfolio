"use client";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";
import { Button, TextField, Alert, CircularProgress } from "@mui/material";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors: Partial<FormState> = {};

    if (!form.name.trim()) {
      newErrors.name = "Ime je obavezno";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email je obavezan";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Neispravan email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Poruka je obavezna";
    } else if (form.message.length < 10) {
      newErrors.message = "Poruka mora imati barem 10 karaktera";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccess(false);
    setServerError("");

    if (!validate()) return;

    if (!executeRecaptcha) {
      setServerError("Captcha nije dostupna. Pokušaj ponovo kasnije.");
      setLoading(false);
      return;
    }

    setLoading(true);

    const token = await executeRecaptcha("contact_form");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Greška pri slanju");
      }

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setServerError("Došlo je do greške. Pokušaj ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center w-full justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col w-full max-w-lg bg-white shadow-md rounded-lg p-6 lg:p-10"
      >
        <h1 className=" text-center mb-2 b">Contact Me</h1>

        <p className="text-center mb-8 text-(--secondary)">
          If you have any questions, feel free to reach out!
        </p>

        {serverError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {serverError}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Poruka je uspješno poslata.
          </Alert>
        )}

        <TextField
          label="Ime"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          required
          autoComplete="off"
          sx={{ mb: 2, bgcolor: "white" }}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          autoComplete="off"
          fullWidth
          required
          sx={{ mb: 2, bgcolor: "white" }}
        />

        <TextField
          label="Your Message"
          name="message"
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          fullWidth
          required
          sx={{ mb: 3, bgcolor: "white" }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{ py: 1.5 }}
        >
          {loading ? <CircularProgress size={24} /> : "Send"}
        </Button>
      </form>
    </section>
  );
}
