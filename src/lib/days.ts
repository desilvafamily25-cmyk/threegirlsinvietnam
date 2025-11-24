export type DayContent = {
  day_number: number;
  title: string;
  date: string;
  city: string;

  hero_caption?: string;
  hero_image?: string;

  morning?: string;
  morning_photos?: { image: string }[];

  afternoon?: string;
  afternoon_photos?: { image: string }[];

  evening?: string;
  evening_photos?: { image: string }[];

  kids_rating?: string;
  costs?: string;

  notes?: string;

  gallery?: { image: string }[];
};

const modules = import.meta.glob("../content/days/*.json", {
  eager: true,
  import: "default"
}) as Record<string, DayContent>;

const days: DayContent[] = Object.values(modules).sort(
  (a, b) => (a.day_number ?? 0) - (b.day_number ?? 0)
);

export function getAllDays(): DayContent[] {
  return days;
}

export function getDayByNumber(dayNumber: number): DayContent | undefined {
  return days.find((d) => d.day_number === dayNumber);
}
