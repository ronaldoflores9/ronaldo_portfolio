import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Radio,
  Send,
} from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setIsSubmitting(true);
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
    };
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      toast({
        title: "Email configuration missing",
        description: "The contact form is not configured yet. Please email me directly instead.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      toast({ title: "Message sent", description: "Thanks for reaching out. I’ll get back to you soon." });
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: "Message not sent", description: "Please try again or contact me directly by email." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 md:py-32">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_50%_100%,hsl(var(--primary)/0.14),transparent_62%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex items-center gap-4 text-left">
          <span className="font-mono text-xs text-primary">05</span>
          <span className="h-px w-10 bg-primary/35" />
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-foreground/40">Open channel</span>
        </div>

        <div className="glass-panel overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
            <div className="relative border-b border-border p-6 text-left md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/12 blur-[90px]" />
              <div className="relative">
                <div className="section-kicker">
                  <Radio size={12} className="text-emerald-400" aria-hidden="true" />
                  Signal available
                </div>
                <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] md:text-5xl">
                  Have a mission in mind?{" "}
                  <span className="text-primary">Let’s talk.</span>
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-foreground/55">
                  I’m always open to thoughtful conversations about software
                  engineering, developer platforms, AI systems, and projects
                  with real-world impact.
                </p>

                <div className="mt-9 space-y-3">
                  <a href="mailto:ronaldo.flores@upr.edu" className="group flex items-center justify-between rounded-2xl border border-border bg-background/40 p-4 transition-colors hover:border-primary/35">
                    <span className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Mail size={17} /></span>
                      <span><small className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-foreground/35">Email</small><strong className="mt-1 block text-sm">ronaldo.flores@upr.edu</strong></span>
                    </span>
                    <ArrowUpRight size={16} className="text-foreground/30 transition-colors group-hover:text-primary" />
                  </a>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/40 p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin size={17} /></span>
                    <span><small className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-foreground/35">Base</small><strong className="mt-1 block text-sm">Puerto Rico · AST</strong></span>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a href="https://github.com/ronaldoflores9" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/40 text-foreground/45 transition-colors hover:border-primary/35 hover:text-primary"><Github size={17} /></a>
                  <a href="https://www.linkedin.com/in/ronaldo-flores-nazario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/40 text-foreground/45 transition-colors hover:border-primary/35 hover:text-primary"><Linkedin size={17} /></a>
                </div>
              </div>
            </div>

            <div className="bg-background/25 p-6 text-left md:p-10 lg:p-12">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary">Transmission form</span>
                  <h3 className="mt-2 text-2xl font-bold">Send a message</h3>
                </div>
                <span className="font-mono text-xs text-foreground/25">RF-COMMS/01</span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-foreground/45">Your name</span>
                    <input type="text" name="name" required autoComplete="name" placeholder="Name" className="w-full rounded-xl border border-border bg-card/55 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-foreground/25 focus:border-primary/55 focus:ring-4 focus:ring-primary/10" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-foreground/45">Email address</span>
                    <input type="email" name="email" required autoComplete="email" placeholder="you@email.com" className="w-full rounded-xl border border-border bg-card/55 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-foreground/25 focus:border-primary/55 focus:ring-4 focus:ring-primary/10" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-foreground/45">Message</span>
                  <textarea name="message" required rows={7} placeholder="Tell me about the idea, team, or challenge..." className="w-full resize-none rounded-xl border border-border bg-card/55 px-4 py-3.5 text-sm leading-6 outline-none transition-all placeholder:text-foreground/25 focus:border-primary/55 focus:ring-4 focus:ring-primary/10" />
                </label>
                <button type="submit" disabled={isSubmitting} className="space-button w-full disabled:cursor-not-allowed disabled:opacity-55">
                  {isSubmitting ? "Transmitting..." : "Send transmission"}
                  <Send size={16} aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
