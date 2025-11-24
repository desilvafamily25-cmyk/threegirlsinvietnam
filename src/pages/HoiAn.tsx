import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Waves, Calendar, DollarSign } from "lucide-react";

const HoiAn = () => {
  const days = [
    { day: 5, date: "31 Dec 2025", title: "New Year's Eve" },
    { day: 6, date: "1 Jan 2026", title: "New Year's Day" },
    { day: 7, date: "2 Jan 2026", title: "Beach Day & Fly to Hanoi" },
  ];

  return (
    <div className="min-h-screen bg-gradient-beach">
      {/* Header */}
      <div className="bg-gradient-to-br from-turquoise/20 to-turquoise/5 py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-turquoise/30">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6 hover:bg-turquoise/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <Waves className="h-16 w-16 text-turquoise" />
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Hội An
            </h1>
          </div>
          
          <p className="text-center text-xl text-muted-foreground">
            Ancient town charm meets beach paradise
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hotel Info */}
        <Card className="p-8 mb-12 bg-card shadow-card border-2 border-turquoise/20">
          <div className="flex items-center gap-4 mb-6">
            <Waves className="h-8 w-8 text-turquoise" />
            <h2 className="text-3xl font-bold">Wyndham Garden Hội An Cửa Đại Beach</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-5 w-5 text-coral" />
                <span className="font-semibold text-lg">Dates</span>
              </div>
              <p className="text-muted-foreground">30 December 2025 → 2 January 2026</p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="h-5 w-5 text-sunshine" />
                <span className="font-semibold text-lg">Price</span>
              </div>
              <p className="text-2xl font-bold text-turquoise">AUD 307</p>
            </div>
          </div>
        </Card>

        {/* Daily Posts */}
        <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
          Our Hội An Adventures
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.map((day) => (
            <Link key={day.day} to={`/day/${day.day}`}>
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-2 border-turquoise/10 h-full group">
                <div className="bg-gradient-ocean text-white rounded-2xl p-4 mb-4 group-hover:scale-105 transition-transform duration-300">
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

export default HoiAn;
