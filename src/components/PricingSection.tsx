import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";
import GetStartedForm from "@/components/GetStartedForm";

const plans = [
  {
    name: "BASIC",
    price: 2500,
    period: "month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym equipment",
      "Locker room access",
      "2 group classes per month",
      "Basic fitness assessment",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "PREMIUM",
    price: 5000,
    period: "month",
    description: "Our most popular plan for dedicated fitness enthusiasts",
    features: [
      "Unlimited gym access 24/7",
      "All group classes included",
      "1 personal training session/month",
      "Nutrition consultation",
      "Sauna & spa access",
      "Guest passes (2/month)",
      "Priority class booking",
    ],
    popular: true,
  },
  {
    name: "ELITE",
    price: 3500,
    period: "month",
    description: "The ultimate experience for serious athletes",
    features: [
      "Everything in Premium",
      "4 personal training sessions/month",
      "Custom meal plans",
      "Body composition analysis",
      "Recovery room access",
      "Unlimited guest passes",
      "VIP events access",
      "Dedicated locker",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Membership Plans
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            CHOOSE YOUR <span className="gradient-text">PLAN</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible membership options designed to fit your lifestyle and fitness goals.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative card-gradient border rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary scale-105 shadow-[0_0_40px_hsla(175,80%,50%,0.2)]"
                  : "border-border/50 hover:border-primary/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-foreground mb-2 tracking-wider">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground">₱</span>
                  <span className="font-display text-6xl text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <GetStartedForm
                selectedPlan={plan.name.toLowerCase()}
                trigger={
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full group"
                  >
                    GET STARTED
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          All plans include a 7-day free trial. Cancel anytime. No hidden fees.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
