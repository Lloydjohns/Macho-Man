import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-card border-t border-border/50">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            READY TO <span className="gradient-text">TRANSFORM</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of members who have already achieved their fitness goals. Start your journey today with a free trial.
          </p>
          <Button
            variant="hero"
            size="xl"
            onClick={() => scrollToSection("#pricing")}
            className="animate-pulse-glow"
          >
            START YOUR FREE TRIAL
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-2 mb-6">
                <Dumbbell className="h-8 w-8 text-primary" />
                <span className="font-display text-2xl tracking-wider text-foreground">
                  Macho<span className="text-primary">Man</span>
                </span>
              </a>
              <p className="text-muted-foreground text-sm mb-6">
                Transform your body and mind with expert guidance, state-of-the-art equipment, and a supportive community.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Youtube, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`Follow us on ${social.icon.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg text-foreground mb-6 tracking-wider">
                QUICK LINKS
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Benefits", href: "#benefits" },
                  { label: "Classes", href: "#classes" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Classes */}
            <div>
              <h4 className="font-display text-lg text-foreground mb-6 tracking-wider">
                CLASSES
              </h4>
              <ul className="space-y-3">
                {["HIIT Training", "Power Yoga", "CrossFit", "Spin Class", "Strength Training", "Boxing Fitness"].map((className) => (
                  <li key={className}>
                    <button
                      onClick={() => scrollToSection("#classes")}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {className}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg text-foreground mb-6 tracking-wider">
                CONTACT US
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    25 Gracemansion Bagbaguin<br />
                    Meycauayan City of Bulacan
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:machoman@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    machoman@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} MachoMan. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
