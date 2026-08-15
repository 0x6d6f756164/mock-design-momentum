"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingTextarea } from "@/components/ui/floating-textarea";
import { Reveal } from "@/components/ui/reveal";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(1, "Enter your company"),
  message: z.string().min(10, "Tell us a bit about your goals"),
});
type Values = z.infer<typeof schema>;

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/yourpage", icon: FaLinkedin },
  { label: "X", href: "https://x.com/yourpage", icon: FaXTwitter },
  { label: "Instagram", href: "https://instagram.com/yourpage", icon: FaInstagram },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  async function onSubmit(values: Values) {
    await new Promise((r) => setTimeout(r, 500));
    toast.success("Message sent", {
      description: `Thanks ${values.name}, we'll reply within 24 hours.`,
    });
    reset();
  }

  return (
    <section id="contact" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">
            Get in Touch
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s build your pipeline.
          </h2>
          <p className="mt-4 max-w-sm text-graphite/80">
            Tell us where you&apos;re stuck and we&apos;ll tell you honestly
            whether we can help.
          </p>

          <div className="mt-8 flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-md border border-paper/15 text-paper/70 transition-colors hover:border-cobalt hover:text-cobalt"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <FloatingInput id="name" label="Name" error={errors.name?.message} {...register("name")} />
              <FloatingInput id="company" label="Company" error={errors.company?.message} {...register("company")} />
            </div>

            <FloatingInput id="email" label="Email" error={errors.email?.message} {...register("email")} />

            <FloatingTextarea id="message" label="What are you looking to grow?" rows={4} error={errors.message?.message} {...register("message")} />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-cobalt font-semibold text-white hover:bg-cobalt-deep"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
