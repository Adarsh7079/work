export type ServiceItem = {
  id: number;
  title: string;
  image: string;
  tags: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "AC Repair",
    image: "https://picsum.photos/seed/ac-repair/800/500",
    tags: ["Fast", "Verified"],
  },
  {
    id: 2,
    title: "Salon at Home",
    image: "https://picsum.photos/seed/salon-home/800/500",
    tags: ["Top Rated", "Women Pros"],
  },
  {
    id: 3,
    title: "Deep Cleaning",
    image: "https://picsum.photos/seed/deep-cleaning/800/500",
    tags: ["Eco Safe", "Same Day"],
  },
  {
    id: 4,
    title: "Plumbing",
    image: "https://picsum.photos/seed/plumbing/800/500",
    tags: ["24x7", "Quick Fix"],
  },
  {
    id: 5,
    title: "Electrician",
    image: "https://picsum.photos/seed/electrician/800/500",
    tags: ["Trusted", "Instant"],
  },
  {
    id: 6,
    title: "Car Wash",
    image: "https://picsum.photos/seed/car-wash/800/500",
    tags: ["Doorstep", "Shine+Care"],
  },
];
