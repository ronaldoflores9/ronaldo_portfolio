import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId =
      import.meta.env.VITE_EMAILJS_USER_ID ||
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      toast({
        title: "Email configuration missing",
        description:
          "EmailJS is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_USER_ID in your .env file.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      toast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out. I'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Failed to send",
        description:
          "There was an error sending your message. Please try again later or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m currently seeking internship opportunities where I can apply my
          software development skills, learn from experienced engineers, and
          contribute to meaningful projects. I’m always open to connecting with
          teams looking for passionate and driven interns ready to make an
          impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:ronaldo.flores@upr.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ronaldo.flores@upr.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+17875864611"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (787) 586-4611
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ronaldo-flores-nazario"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/ronaldoflores" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send Me a Message </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border0input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Ronaldo Flores"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border0input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="ronaldo.flores@upr.edu"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message{" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border0input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your messages goes here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
