import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar } from "lucide-react";
import { getAllDays } from "@/lib/days";

const DailyBlog = () => {
  // Load ALL days dynamically from CMS JSON
  const allDays = getAllDays().map((d) => {
    // Automatically map city → colour
    let color: "coral" | "turquoise" | "sunshine" = "coral";

    const city = d.city.toLowerCase();

    if (city.includes("hội an")) color = "turquoise";
    if (city.includes("hoi an")) color = "turquoise"; // fallback for English input
    if (city.includes("hanoi")) color = "sunshine";

    return {
      day: d.day_number,
      date: d.date,
      city: d.city,
      title: d.title,
      color
    };
  });

  const getColorClasses = (color: string) => {
    switch (color) {
      case "coral":
        return "from-coral/20 to-coral/5 border-coral/30";
      case "turquoise":
        return "from-turquoise/20 to-turquoise/5 border-turquoise/30";
      case "sunshine":
        return "from-sunshine/20 to-sunshine/5 border-sunshine/30";
      default:
        return "from-primary/20 to-primary/5 border-primary/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-beach">
      {/* Header */}
      <div className="bg-gradient-ocean py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-sky-blue/30">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center justify-center gap-4 mb-4">
            <Calendar className="h-16 w-16 text-white" />
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              Daily Blog
            </h1>
          </div>

          <p className="text-center text-xl text-white/90">
            All 13 days of our Vietnam adventure
          </p>
        </div>
      </div>

      {/* Daily List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allDays.map((day) => (
            <Link key={day.day} to={`/day/${day.day}`}>
              <Card
                className={`
                  p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 
                  bg-gradient-to-br border-2 h-full group 
                  ${getColorClasses(day.color)}
                `}
              >
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Day {day.day}
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {day.date}
                  </p>
                  <p className="text-sm text-primary font-medium mt-1">
                    {day.city}
                  </p>
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

export default DailyBlog;
