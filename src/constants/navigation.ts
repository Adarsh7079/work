// export interface NavLink {
//     href: string;
//     label: string;
// }

// export const NAVIGATION_LINKS: NavLink[] = [
//     { href: "/", label: "Home" },
//     { href: "/features", label: "Features" },
//     { href: "/pricing", label: "Pricing" },
//     { href: "/about", label: "About" },
// ];


import FeaturesIcon from "@/components/icons/FeaturesIcon";
import { Home, Info } from "lucide-react";

export interface NavLink {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
}

export const NAVIGATION_LINKS: NavLink[] = [
    { href: "/#services", label: "Services", icon: Home },
    { href: "/#why-us", label: "Why us", icon: FeaturesIcon },
    { href: "/#services", label: "How it works", icon: Info },
    { href: "/#faq", label: "FAQs", icon: Info },

];
