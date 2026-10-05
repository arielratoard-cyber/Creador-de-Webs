"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const topics = ["Encargo para grupo o empresa", "Alérgenos o ingredientes", "Trabajar en Paninno", "Otro"];

const field =
  "mt-2 w-full rounded-ui border border-line bg-background px-4 py-3 text-foreground placeholder:text-muted/70 focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent";

/**
 * No backend: on submit it opens the visitor's email app with the message filled in,
 * so nothing is stored on the server (see /privacidad).
 */
export function ContactForm({ email }: { email: string }) {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `[Web] ${data.get("topic")} — ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("replyTo")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Nombre</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="replyTo" className="text-sm font-medium">Email</label>
        <input id="replyTo" name="replyTo" type="email" required autoComplete="email" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="topic" className="text-sm font-medium">Motivo</label>
        <select id="topic" name="topic" className={field}>
          {topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Por ejemplo: 20 mini panini para el viernes a las 13:00 en nuestra oficina."
          className={field}
        />
      </div>
      <div className="flex items-start gap-3 sm:col-span-2">
        <input id="privacy" name="privacy" type="checkbox" required className="mt-1 size-4 accent-accent" />
        <label htmlFor="privacy" className="text-sm text-muted">
          He leído la{" "}
          <Link href="/privacidad" className="text-foreground underline underline-offset-4">
            política de privacidad
          </Link>{" "}
          y acepto que se usen mis datos para responder a mi consulta.
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">Preparar email</Button>
        <p role="status" className="text-sm text-muted">
          {opened
            ? `Si no se ha abierto tu correo, escríbenos directamente a ${email}.`
            : "Se abrirá tu aplicación de correo con el mensaje listo para enviar."}
        </p>
      </div>
    </form>
  );
}
