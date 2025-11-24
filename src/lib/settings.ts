import heroSettings from "@/content/settings/hero.json";
import tripOverviewSettings from "@/content/settings/trip_overview.json";

export const heroConfig = heroSettings as {
  title: string;
  year_tag: string;
  tagline: string;
  hero_image?: string;
};

export const tripOverviewConfig = tripOverviewSettings as {
  heading: string;
  subheading: string;
  start_date: string;
  end_date: string;
  cities: { label: string }[];
  hotels: { label: string }[];
};
