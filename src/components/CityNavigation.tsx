import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Waves, Mountain, Calendar } from "lucide-react";

const CityNavigation = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-foreground">
          Explore Our Adventures
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Dive into each city's unique story
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/hcmc" className="group">
            <div className="relative overflow-hidden rounded-3xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-coral/20 to-coral/5 p-8 border-2 border-coral/30 h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-coral/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10 text-coral" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-foreground">HCMC</h3>
              <p className="text-center text-sm text-muted-foreground">
                Ho Chi Minh City
              </p>
            </div>
          </Link>

          <Link to="/hoi-an" className="group">
            <div className="relative overflow-hidden rounded-3xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-turquoise/20 to-turquoise/5 p-8 border-2 border-turquoise/30 h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-turquoise/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Waves className="h-10 w-10 text-turquoise" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-foreground">Hội An</h3>
              <p className="text-center text-sm text-muted-foreground">
                Ancient Town Beach
              </p>
            </div>
          </Link>

          <Link to="/hanoi" className="group">
            <div className="relative overflow-hidden rounded-3xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-sunshine/20 to-sunshine/5 p-8 border-2 border-sunshine/30 h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-sunshine/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mountain className="h-10 w-10 text-sunshine" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-foreground">Hanoi</h3>
              <p className="text-center text-sm text-muted-foreground">
                Capital City
              </p>
            </div>
          </Link>

          <Link to="/daily-blog" className="group">
            <div className="relative overflow-hidden rounded-3xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-ocean p-8 border-2 border-sky-blue/30 h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-white/30 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-white">Daily Blog</h3>
              <p className="text-center text-sm text-white/90">
                All 13 Days
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CityNavigation;
