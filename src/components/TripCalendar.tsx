import { Calendar } from "lucide-react";

const TripCalendar = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-turquoise/20 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Trip Schedule
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Vietnam Trip Calendar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            December 2025 & January 2026
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-elegant overflow-hidden border border-border/50 p-6 md:p-8">
          {/* December 2025 */}
          <h3 className="text-xl font-semibold text-foreground mb-4">December 2025</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-center min-w-[500px]">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-sm font-medium text-muted-foreground">Sun</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Mon</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Tue</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Wed</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Thu</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Fri</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  {/* Dec 27 - HCMC */}
                  <td className="border border-coral/30 p-3 rounded-lg bg-coral/15">
                    <span className="font-bold text-foreground text-lg">27</span>
                  </td>
                </tr>
                <tr>
                  {/* Dec 28 - HCMC */}
                  <td className="border border-coral/30 p-3 rounded-lg bg-coral/15">
                    <span className="font-bold text-foreground text-lg">28</span>
                  </td>
                  {/* Dec 29 - HCMC */}
                  <td className="border border-coral/30 p-3 rounded-lg bg-coral/15">
                    <span className="font-bold text-foreground text-lg">29</span>
                  </td>
                  {/* Dec 30 - Flight to Hội An */}
                  <td className="border border-turquoise/30 p-3 rounded-lg bg-turquoise/15">
                    <span className="font-bold text-foreground text-lg">30</span>
                    <div className="text-base mt-1">✈️</div>
                  </td>
                  {/* Dec 31 - Hội An */}
                  <td className="border border-turquoise/30 p-3 rounded-lg bg-turquoise/15">
                    <span className="font-bold text-foreground text-lg">31</span>
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* January 2026 */}
          <h3 className="text-xl font-semibold text-foreground mb-4">January 2026</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-center min-w-[500px]">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-sm font-medium text-muted-foreground">Sun</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Mon</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Tue</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Wed</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Thu</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Fri</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  {/* Jan 1 - Hội An */}
                  <td className="border border-turquoise/30 p-3 rounded-lg bg-turquoise/15">
                    <span className="font-bold text-foreground text-lg">1</span>
                  </td>
                  {/* Jan 2 - Flight to Hanoi */}
                  <td className="border border-sky-blue/30 p-3 rounded-lg bg-sky-blue/15">
                    <span className="font-bold text-foreground text-lg">2</span>
                    <div className="text-base mt-1">✈️</div>
                  </td>
                  {/* Jan 3 - Halong Bay Cruise */}
                  <td className="border-2 border-sunshine/50 p-3 rounded-l-lg rounded-r-none bg-sunshine/25">
                    <span className="font-bold text-foreground text-lg">3</span>
                    <div className="text-base mt-1">🚢</div>
                  </td>
                </tr>
                <tr>
                  {/* Jan 4 - Halong Bay Cruise continues */}
                  <td className="border-2 border-sunshine/50 p-3 rounded-r-lg rounded-l-none bg-sunshine/25">
                    <span className="font-bold text-foreground text-lg">4</span>
                    <div className="text-base mt-1">🚢</div>
                  </td>
                  {/* Jan 5 - Hanoi */}
                  <td className="border border-sky-blue/30 p-3 rounded-lg bg-sky-blue/15">
                    <span className="font-bold text-foreground text-lg">5</span>
                  </td>
                  {/* Jan 6 - Hanoi */}
                  <td className="border border-sky-blue/30 p-3 rounded-lg bg-sky-blue/15">
                    <span className="font-bold text-foreground text-lg">6</span>
                  </td>
                  {/* Jan 7 - Flight */}
                  <td className="border border-sky-blue/30 p-3 rounded-lg bg-sky-blue/15">
                    <span className="font-bold text-foreground text-lg">7</span>
                    <div className="text-base mt-1">✈️</div>
                  </td>
                  {/* Jan 8 - Return flight */}
                  <td className="border border-border/50 p-3 rounded-lg bg-muted/30">
                    <span className="font-bold text-foreground text-lg">8</span>
                    <div className="text-base mt-1">✈️</div>
                    <div className="text-xs text-muted-foreground">MEL</div>
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 text-sm border-t border-border/50 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-coral/15 border-2 border-coral/40"></div>
              <span className="text-foreground font-medium">HCMC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-turquoise/15 border-2 border-turquoise/40"></div>
              <span className="text-foreground font-medium">Hội An</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-sky-blue/15 border-2 border-sky-blue/40"></div>
              <span className="text-foreground font-medium">Hanoi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-sunshine/25 border-2 border-sunshine/50"></div>
              <span className="text-foreground font-medium">🚢 Cruise</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✈️</span>
              <span className="text-foreground font-medium">Flight</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripCalendar;
