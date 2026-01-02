import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClassesSection from "@/components/ClassesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MachoMan - Premium Gym & Fitness Center | Personal Training & Classes</title>
        <meta 
          name="description" 
          content="Transform your body at MachoMan. State-of-the-art gym equipment, expert personal trainers, group fitness classes, and 24/7 access. Start your free trial today!" 
        />
        <meta name="keywords" content="gym membership, fitness classes, personal training, CrossFit, HIIT, yoga, strength training" />
        <link rel="canonical" href="https://MachoMan.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Machoman - Premium Gym & Fitness Center" />
        <meta property="og:description" content="Transform your body with expert guidance and state-of-the-art facilities. Join Machoman today!" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Gym",
            "name": "Machoman",
            "description": "Premium fitness center offering personal training, group classes, and 24/7 gym access",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Fitness Avenue",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "10001"
            },
            "telephone": "(123) 456-7890",
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <BenefitsSection />
          <ClassesSection />
          <PricingSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
