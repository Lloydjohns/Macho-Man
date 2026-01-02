import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Users, Flame, ChevronRight } from "lucide-react";

const classes = [
  {
    name: "HIIT Training",
    description: "High-intensity interval training to maximize calorie burn and boost metabolism.",
    duration: "45 min",
    capacity: "20 people",
    intensity: "High",
    price: "₱1,500",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop",
  },
  {
    name: "Power Yoga",
    description: "Build strength, flexibility, and mental clarity through dynamic yoga flows.",
    duration: "60 min",
    capacity: "25 people",
    intensity: "Medium",
    price: "₱3,000",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
  },
  {
    name: "CrossFit",
    description: "Functional movements performed at high intensity for overall fitness.",
    duration: "50 min",
    capacity: "15 people",
    intensity: "High",
    price: "₱1,250",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop",
  },
  {
    name: "Spin Class",
    description: "Indoor cycling class with music-driven workouts and energy.",
    duration: "45 min",
    capacity: "30 people",
    intensity: "Medium",
    price: "₱2,000",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600&h=400&fit=crop",
  },
  {
    name: "Strength Training",
    description: "Build muscle and increase strength with guided weight training sessions.",
    duration: "60 min",
    capacity: "12 people",
    intensity: "High",
    price: "₱5,000",
    image: "https://i.pinimg.com/736x/79/48/e4/7948e4455c5bb32333050716afab795d.jpg",
  },
  {
    name: "Boxing Fitness",
    description: "Learn boxing techniques while getting an intense cardio workout.",
    duration: "45 min",
    capacity: "16 people",
    intensity: "High",
    price: "₱10,000",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
  },
];

const ClassesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="classes" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Programs
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground">
              FITNESS <span className="gradient-text">CLASSES</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From high-intensity training to mindful yoga, find the perfect class to match your fitness goals.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <div
              key={classItem.name}
              className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover-lift cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-display text-lg px-3 py-1 rounded-lg">
                  {classItem.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {classItem.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {classItem.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    {classItem.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    {classItem.capacity}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Flame className="w-4 h-4 text-primary" />
                    {classItem.intensity}
                  </div>
                </div>

                {/* Hover CTA */}
                <div className={`mt-4 pt-4 border-t border-border/50 transition-all duration-300 ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                  <Button variant="ghost" className="w-full justify-between group/btn">
                    Book This Class
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
