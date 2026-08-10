import {
  Sparkles,
  Building2,
  Home,
  WashingMachine,
  PaintBucket,
  RefreshCcw,
  ShieldCheck,
  Clock,
  Leaf,
  MessageCircle,
  Award,
  Plane,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Precision Cleaning Services",
  shortName: "Precision Cleaning",
  tagline: "Pristine Spaces, Precision Results",
  phone: "(609) 214-9590",
  email: "precisioncleaningfl@gmail.com",
  address: "217 Pin Hov Circle, Greenacres, FL 33463",
  hours: "Mon - Sat: 7:00 AM - 7:00 PM",
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
};

export const serviceAreas = [
  "Boynton Beach",
  "Delray Beach",
  "Lake Worth",
  "Greenacres",
  "Wellington",
  "West Palm Beach",
  "Lantana",
  "Palm Springs",
  "Royal Palm Beach",
  "Boca Raton",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  pricing?: string;
  subServices?: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    icon: Home,
    image: "/images/services/residential-cleaning.jpg",
    shortDescription:
      "Recurring or one-time house cleaning tailored to your routine.",
    description:
      "Keep your home clean, fresh, and comfortable with reliable cleaning tailored to your schedule.",
    features: [
      "Kitchens & bathrooms",
      "Dusting",
      "Vacuuming in living areas & bedrooms",
      "Trash removal",
      "Light surface wiping",
    ],
    pricing: "Starting at $0.11 per sq. ft. Call to book a service.",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    icon: Building2,
    image: "/images/services/commercial-cleaning.jpg",
    shortDescription:
      "Reliable office & facility cleaning that keeps business moving.",
    description:
      "Keep your business clean, professional, and ready for employees and customers. We provide reliable cleaning for offices, medical offices, retail spaces, professional buildings, and other commercial properties.",
    features: [
      "Offices & common areas",
      "Restrooms & breakrooms",
      "Vacuuming & mopping",
      "Trash removal",
      "Dusting & surface cleaning",
      "Flexible cleaning schedules",
    ],
    pricing: "Starting at $0.08–$0.15 per sq. ft. Call to book a service.",
  },
  {
    slug: "turnover-cleaning",
    title: "Airbnb & Vacation Rental Turnovers",
    icon: RefreshCcw,
    image: "/images/services/turnover-cleaning.jpg",
    shortDescription:
      "Fast, thorough turnovers for Airbnb, vacation rentals & hotels.",
    description:
      "Thorough cleaning and preparation of a property between guests or tenants, leaving it clean, refreshed, and ready for the next occupancy. We handle Airbnb & vacation rental turnovers and seasonal rental cleaning — covering short-term rentals and snowbird/seasonal properties, which are very common in our area.",
    features: [
      "Same-day turnover availability",
      "Linen change & laundry coordination",
      "Restocking of guest essentials",
      "Photo-ready finish every time",
    ],
    subServices: [
      {
        title: "Airbnb Turnovers",
        description:
          "Cleaning between Airbnb guests, usually the same day someone checks out and the next guest checks in.",
      },
      {
        title: "Vacation Rental Turnovers",
        description:
          "The same type of service, but for vacation rentals (Airbnb, VRBO, private rentals, etc.).",
      },
      {
        title: "Seasonal Rental Cleaning",
        description:
          "Cleaning before or after a seasonal tenant's stay, or while they're renting for an extended season (weeks or months).",
      },
      {
        title: "Seasonal Property Cleaning",
        description:
          "Cleaning a homeowner's seasonal residence before they arrive, after they leave, or while the home is vacant.",
      },
    ],
    pricing: "Starting at $0.25 per sq. ft. Call to book a service.",
  },
  {
    slug: "move-in-move-out",
    title: "Move In / Move Out",
    icon: WashingMachine,
    image: "/images/services/move-in-out.jpg",
    shortDescription:
      "Reliable turnovers for renters, owners, landlords & agents.",
    description:
      "Perfect for homeowners, renters, landlords, property managers, and real estate professionals. We prepare properties for their next chapter with detailed, top-to-bottom cleaning.",
    features: [
      "Kitchens, bathrooms & living areas",
      "Closets & appliance cleaning",
      "Baseboards, doors & light switches",
      "Dusting, vacuuming & mopping",
      "Interior window sills & tracks",
      "Final touch-up for inspections or new occupants",
    ],
    pricing:
      "Starting at $0.25 per sq. ft. — including condo & apartment cleaning. Call to book a service.",
  },
  {
    slug: "absentee-homeowner-services",
    title: "Absentee Homeowner Services",
    icon: Plane,
    image: "/images/hero/residential-home.jpg",
    shortDescription:
      "Reliable home care for seasonal residents, snowbirds & second-home owners while you're away.",
    description:
      "Your home deserves the same care while you're away as when you're home. Whether you're a seasonal resident, snowbird, frequent traveler, or own a second home, Precision Cleaning provides reliable cleaning services to keep your property clean, fresh, and ready for your return. We work with your schedule to provide one-time or recurring cleanings, giving you peace of mind while you're away.",
    features: [
      "Arrival and departure cleanings",
      "Scheduled maintenance cleanings",
      "Kitchen and bathroom sanitizing",
      "Dusting and floor care",
      "Linen changes (upon request)",
      "Refrigerator and pantry checks (upon request)",
      "Visual checks for any obvious concerns to report back to you",
    ],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    icon: Sparkles,
    image: "/images/services/deep-cleaning.jpg",
    shortDescription:
      "For homes and businesses that need more than a routine clean.",
    description:
      "Designed for spaces that require additional cleaning beyond a standard service.",
    features: [
      "Detailed kitchen and bathroom cleaning",
      "Baseboards, doors & trim",
      "Dusting throughout",
      "Vacuuming & mopping",
      "Light switches & high-touch surfaces",
      "Interior window sills & tracks",
    ],
    pricing: "Starting at $0.25 per sq. ft. Call to book a service.",
  },
  {
    slug: "post-construction",
    title: "Post-Construction Cleaning",
    icon: PaintBucket,
    image: "/images/services/post-construction.jpg",
    shortDescription:
      "Dust and debris removal after renovations or new builds.",
    description:
      "Final cleaning for empty, newly built or renovated homes, offices, condos, & commercial spaces. The property must be construction-complete and free of contractor materials before our arrival.",
    features: [
      "Fine dust removal",
      "Vacuuming & mopping",
      "Cabinets, countertops & fixtures",
      "Baseboards, doors & trim",
      "Interior windows & sills",
      "Final detail cleaning before occupancy",
    ],
    pricing: "Starting at $0.18–$0.25 per sq. ft. Call to book a service.",
  },
];

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: ShieldCheck,
    title: "Professional & Reliable",
    description:
      "We show up on time, with the same dedication to quality on every visit.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & EPA-Approved",
    description:
      "Green, EPA-approved cleaning products that are tough on dirt but gentle on your family, pets, and the planet.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Scheduling that fits your life, so you can focus on what matters most.",
  },
  {
    icon: MessageCircle,
    title: "Honest Communication",
    description:
      "Clear communication and transparent pricing from your first quote to every visit.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description:
      "We take pride in delivering quality cleaning with attention to detail.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Olivia Bennett",
    role: "Founder & CEO",
    bio: "Started Precision Cleaning in 2013 with a single van and a passion for pristine spaces.",
  },
  {
    name: "Marcus Reed",
    role: "Operations Director",
    bio: "Oversees scheduling, training, and quality assurance across every team.",
  },
  {
    name: "Priya Nair",
    role: "Client Success Lead",
    bio: "Makes sure every client's needs are heard, tracked, and exceeded.",
  },
  {
    name: "Tom Alvarez",
    role: "Lead Field Supervisor",
    bio: "12 years of hands-on experience leading our residential & commercial crews.",
  },
];

export const processSteps = [
  {
    title: "Book a Service",
    description:
      "Tell us about your space and needs. We'll follow up with a transparent, no-obligation estimate within hours.",
  },
  {
    title: "Schedule Your Clean",
    description:
      "Pick a date and time that works for you — including recurring plans that fit your routine.",
  },
  {
    title: "We Clean, You Relax",
    description:
      "Our trained, vetted team arrives on time and gets to work using eco-friendly equipment.",
  },
  {
    title: "Enjoy the Results",
    description:
      "Count on dependable, detail-oriented cleaning that leaves your space looking its best.",
  },
];

export const pricingFaqs = [
  {
    question: "How is my price calculated?",
    answer:
      "Pricing is based on the size of your space, the type of cleaning needed, and how often you'd like service. Recurring plans (weekly or bi-weekly) receive discounted rates compared to one-time visits.",
  },
  {
    question: "Do I need to provide cleaning supplies or equipment?",
    answer:
      "No — our teams arrive fully equipped with professional-grade, eco-friendly products and tools. If you prefer we use specific products you provide, just let us know.",
  },
  {
    question: "Do I need to be home during my appointment?",
    answer:
      "Not at all. Many clients share entry instructions or a lockbox code so our team can get to work on your schedule, whether you're home or not.",
  },
  {
    question: "How soon can I schedule a cleaning?",
    answer:
      "Complete the quote form, and we'll contact you to schedule your cleaning.",
  },
];

