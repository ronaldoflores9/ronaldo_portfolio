import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState, useRef } from "react";
import { SectionHeader } from "./SectionHeader";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    setIsSubmitting(true);

    const formData = new FormData(form);
    const templateParams = {
      from_name:  formData.get("name"),
      from_email: formData.get("email"),
      message:    formData.get("message"),
    };

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId     = import.meta.env.VITE_EMAILJS_USER_ID || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      toast({ title: "Email configuration missing", description: "Please configure EmailJS environment variables." });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({ title: "Failed to send", description: "Please try again later or contact me directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
};
