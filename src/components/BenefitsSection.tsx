import { Dumbbell, Users, Target, Heart } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "STATE-OF-THE-ART EQUIPMENT",
    description: "Train with the latest fitness technology and premium equipment. From free weights to cardio machines, we have everything you need for a complete workout.",
  },
  {
    icon: Target,
    title: "PERSONALIZED TRAINING",
    description: "Get customized fitness and nutrition plans tailored to your goals. Our certified trainers create programs that deliver real, measurable results.",
  },
  {
    icon: Users,
    title: "SKILL DEVELOPMENT",
    description: "Master valuable skills including strength training, functional fitness, mobility work, and mental wellness practices that transform your life.",
  },
  {
    icon: Heart,
    title: "COMMUNITY & SUPPORT",
    description: "Join a motivating community of like-minded individuals. Group classes, challenges, and events keep you engaged and accountable on your journey.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            MEMBERSHIP <span className="gradient-text">BENEFITS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover what makes MachoMan the ultimate destination for achieving your fitness goals.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group card-gradient border border-border/50 rounded-2xl p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
