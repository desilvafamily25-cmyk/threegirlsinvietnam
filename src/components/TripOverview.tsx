import { Calendar, MapPin, Hotel } from "lucide-react";
import { Card } from "@/components/ui/card";
import { tripOverviewConfig } from "@/lib/settings";

const TripOverview = () => {
  const {
    heading,
    subheading,
    start_date,
    end_date,
    cities,
    hotels
  } = tripOverviewConfig;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-beach">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-foreground">
          {heading}
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          {subheading}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Dates Card */}
          <Card className="p-8 bg-card border-2 border-turquoise/20 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="bg-turquoise/10 p-4 rounded-full">
                <Calendar className="h-8 w-8 text-turquoise" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Travel Dates</h3>
            <p className="text-center text-lg font-medium text-primary">
              {start_date}
            </p>
            <p className="text-center text-muted-foreground mb-2">to</p>
            <p className="text-center text-lg font-medium text-primary">
              {end_date}
            </p>
          </Card>

          {/* Cities Card */}
          <Card className="p-8 bg-card border-2 border-coral/20 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="bg-coral/10 p-4 rounded-full">
                <MapPin className="h-8 w-8 text-coral" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Cities Visited</h3>
            <ul className="space-y-2 text-center">
              {cities?.map((city, idx) => (
                <li key={idx} className="text-lg">
                  {city.label}
                </li>
              ))}
            </ul>
          </Card>

          {/* Hotels Card */}
          <Card className="p-8 bg-card border-2 border-sunshine/20 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="bg-sunshine/10 p-4 rounded-full">
                <Hotel className="h-8 w-8 text-sunshine" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Accommodations</h3>
            <ul className="space-y-2 text-center text-sm">
              {hotels?.map((hotel, idx) => (
                <li key={idx}>{hotel.label}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TripOverview;
