import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import GetStartedForm from "@/components/GetStartedForm";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gym training atmosphere with athletes working out"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Limited Offer: First Month 50% Off</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            ACHIEVE YOUR
            <br />
            <span className="gradient-text">FITNESS GOALS</span>
            <br />
            WITH EXPERT GUIDANCE
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            Join our gym to start your fitness journey today and unlock exclusive benefits. State-of-the-art equipment, expert trainers, and a supportive community await.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <GetStartedForm />
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#classes")}
              className="group"
            >
              <Play className="h-5 w-5" />
              EXPLORE CLASSES
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-border/30 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Members</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Expert Trainers</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Weekly Classes</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Access Hours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
