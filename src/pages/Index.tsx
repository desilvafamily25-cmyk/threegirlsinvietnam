import Hero from "@/components/Hero";
import TripOverview from "@/components/TripOverview";
import CityNavigation from "@/components/CityNavigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TripOverview />
      <CityNavigation />
      
      {/* Footer */}
      <footer className="bg-gradient-ocean text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-semibold mb-2">Vietnam With The Girls 2025/26</p>
          <p className="text-white/80">Creating memories, one day at a time ✨</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
