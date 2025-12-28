import { Calendar, MapPin, Hotel } from "lucide-react";
import { tripOverviewConfig } from "@/lib/settings";

const TripOverview = () => {
  const { start_date, end_date, cities, hotels } = tripOverviewConfig;

  return (
    <section className="py-8 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base">
          {/* Dates */}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-turquoise" />
            <span className="text-muted-foreground">{start_date} – {end_date}</span>
          </div>
          
          {/* Divider */}
          <span className="hidden md:block text-border">|</span>
          
          {/* Cities */}
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-coral" />
            <span className="text-muted-foreground">
              {cities?.map(c => c.label).join(" • ")}
            </span>
          </div>
          
          {/* Divider */}
          <span className="hidden md:block text-border">|</span>
          
          {/* Hotels */}
          <div className="flex items-center gap-2">
            <Hotel className="h-4 w-4 text-sunshine" />
            <span className="text-muted-foreground">
              {hotels?.map(h => h.label).join(" • ")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripOverview;
