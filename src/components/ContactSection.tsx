import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jayrajdabhi1/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/jayrajsinhdabhi/netflixPortfolio",
    },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:jayrajsinh.dabhi@icloud.com" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="icon"
              className="h-12 w-12 border-border hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>

        <div className="max-w-md mx-auto p-6 bg-card rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
          <p className="text-muted-foreground mb-4">
            Use the AI assistant below to ask questions, or reach out directly
            via email.
          </p>
          <Button className="bg-primary hover:bg-primary/90 w-full" asChild>
            <a href="mailto:jayrajsinh.dabhi@icloud.com">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
