import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Building2, Calendar, DollarSign } from "lucide-react";

const HCMC = () => {
  const days = [
    { day: 1, date: "27 Dec 2025", title: "Arrival Day" },
    { day: 2, date: "28 Dec 2025", title: "Exploring the City" },
    { day: 3, date: "29 Dec 2025", title: "Markets & Culture" },
    { day: 4, date: "30 Dec 2025", title: "Fly to Hội An" },
    { day: 12, date: "7 Jan 2026", title: "Return from Hanoi" },
    { day: 13, date: "8 Jan 2026", title: "Departure Day" },
  ];

  return (
    <div className="min-h-screen bg-gradient-beach">
      {/* Header */}
      <div className="bg-gradient-to-br from-coral/20 to-coral/5 py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-coral/30">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6 hover:bg-coral/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <Building2 className="h-16 w-16 text-coral" />
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Ho Chi Minh City
            </h1>
          </div>
          
          <p className="text-center text-xl text-muted-foreground">
            The vibrant heart of southern Vietnam
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hotel Info */}
        <Card className="p-8 mb-12 bg-card shadow-card border-2 border-coral/20">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="h-8 w-8 text-coral" />
            <h2 className="text-3xl font-bold">New World Saigon Hotel</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-5 w-5 text-turquoise" />
                <span className="font-semibold text-lg">Dates</span>
              </div>
              <p className="text-muted-foreground">27 → 30 December 2025</p>
              <p className="text-muted-foreground">7 → 8 January 2026</p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="h-5 w-5 text-sunshine" />
                <span className="font-semibold text-lg">Price</span>
              </div>
              <p className="text-2xl font-bold text-coral">AUD 770</p>
            </div>
          </div>
        </Card>

        {/* Daily Posts */}
        <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
          Our HCMC Adventures
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.map((day) => (
            <Link key={day.day} to={`/day/${day.day}`}>
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-2 border-coral/10 h-full group">
                <div className="bg-gradient-sunset text-white rounded-2xl p-4 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <p className="text-sm font-semibold opacity-90">Day {day.day}</p>
                  <p className="text-2xl font-bold">{day.date}</p>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {day.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Click to view photos and memories
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HCMC;
