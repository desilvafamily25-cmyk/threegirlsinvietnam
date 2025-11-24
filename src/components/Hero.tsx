import { Plane, Camera, MapPin } from "lucide-react";
import defaultHeroImage from "@/assets/hero-lanterns.jpg";
import { heroConfig } from "@/lib/settings";

const Hero = () => {
  const { title, year_tag, tagline, hero_image } = heroConfig;

  const heroSrc = hero_image && hero_image.trim().length > 0
    ? hero_image
    : defaultHeroImage;

  return (
    <div className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <img
          src={heroSrc}
          alt={tagline || "Vietnam travel hero image"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Plane className="h-12 w-12 text-sunshine opacity-80" />
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
          <Camera className="h-10 w-10 text-coral opacity-80" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "2s" }}>
          <MapPin className="h-10 w-10 text-turquoise opacity-80" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative -mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-shadow-soft">
            {title}
          </h1>
          <div className="inline-block bg-gradient-sunset px-8 py-3 rounded-full shadow-card mb-8">
            <p className="text-xl sm:text-2xl font-semibold text-white">
              {year_tag}
            </p>
          </div>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
