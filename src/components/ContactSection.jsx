import emailjs from "@emailjs/browser";
<<<<<<< HEAD
import { SectionHeader } from "./SectionHeader";
=======
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
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
=======
  const handleSubmit = async (event) => {
    event.preventDefault();
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
    const form = formRef.current;
    if (!form) return;
    setIsSubmitting(true);
    const formData = new FormData(form);
    const templateParams = {
      from_name:  formData.get("name"),
      from_email: formData.get("email"),
      message:    formData.get("message"),
    };
<<<<<<< HEAD

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId     = import.meta.env.VITE_EMAILJS_USER_ID || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      toast({ title: "Email configuration missing", description: "Please configure EmailJS environment variables." });
=======
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      toast({
        title: "Email configuration missing",
        description: "The contact form is not configured yet. Please email me directly instead.",
      });
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
<<<<<<< HEAD
      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({ title: "Failed to send", description: "Please try again later or contact me directly." });
=======
      toast({ title: "Message sent", description: "Thanks for reaching out. I’ll get back to you soon." });
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: "Message not sent", description: "Please try again or contact me directly by email." });
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
    } finally {
      setIsSubmitting(false);
    }
  };

<<<<<<< HEAD
  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-all duration-200 text-foreground placeholder:text-muted-foreground/40";

  const contactInfo = [
    { icon: Mail,  label: "Email", value: "ronaldo.flores@upr.edu", href: "mailto:ronaldo.flores@upr.edu" },
    { icon: Phone, label: "Phone", value: "+1 (787) 586-4611",      href: "tel:+17875864611" },
  ];

  const socials = [
    { href: "https://www.linkedin.com/in/ronaldo-flores-nazario", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/ronaldoflores9",                  icon: Github,   label: "GitHub"   },
  ];

  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
      <div className="cosmic-grid absolute inset-0 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative">
        <SectionHeader num="05" label="Contact" title="Open" accent="Comms"
          subtitle="I'm a software engineering co-op at Collins Aerospace and a Power Systems member at NASA RASC-AL (SPARC). Always open to new opportunities, collaborations, or just a good conversation about tech and space." />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Info */}
          <div data-reveal className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 panel p-4 card-hover group hover:border-primary/40">
                  <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/25 shrink-0 group-hover:scale-110 transition-transform"
                    style={{ boxShadow: "0 0 14px hsl(var(--primary) / 0.2)" }}>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                    <div className="font-medium truncate group-hover:text-primary transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wider">Connect</h4>
              <div className="flex gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-primary/10 hover:border-primary/40 text-primary transition-all duration-200 text-sm font-medium">
                    <Icon size={16} /> {label}
                  </a>
                ))}
=======
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
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
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
<<<<<<< HEAD

          {/* Form */}
          <div data-reveal data-reveal-delay="120" className="md:col-span-3 panel p-7 relative">
            <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px cosmic-edge-glow pointer-events-none" />
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Send size={18} className="text-primary" /> Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "name",  type: "text",  label: "Your Name",  placeholder: "Jane Doe" },
                { id: "email", type: "email", label: "Your Email", placeholder: "jane@example.com" },
              ].map(({ id, type, label, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium mb-1.5 text-muted-foreground">{label}</label>
                  <input type={type} id={id} name={id} required className={inputClass} placeholder={placeholder} />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-muted-foreground">Your Message</label>
                <textarea id="message" name="message" required rows={4} className={inputClass} placeholder="Tell me about the opportunity…" />
              </div>
              <button type="submit" disabled={isSubmitting}
                className={cn("cosmic-button w-full", isSubmitting && "opacity-60 cursor-not-allowed")}>
                {isSubmitting ? "Sending…" : "Send Message"}
                <Send size={15} />
              </button>
            </form>
          </div>
=======
>>>>>>> 6740910df849b8fd495a327da8b4127d3a947df8
        </div>
      </div>
    </section>
  );
};
