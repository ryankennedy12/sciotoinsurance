import { Shield, HardHat, Building2, Truck, Scale, Lock, Car, Home, Heart, Umbrella, Droplets, Sparkles, Users, Clock, Phone, HeartHandshake, Stethoscope, DollarSign, Eye, Briefcase, FileCheck } from "lucide-react";

// Personal Insurance
export const personalInsuranceProducts = [
  {
    title: "Most Popular",
    products: [
      { name: "Auto Insurance", icon: Car, slug: null, description: "Coverage that actually fits your driving life." },
      { name: "Home Insurance", icon: Home, slug: null, description: "Protect your biggest investment from Ohio-specific risks." },
      { name: "Life Insurance", icon: Heart, slug: null, description: "Security for those who depend on you." },
      { name: "Umbrella Insurance", icon: Umbrella, slug: null, description: "Extra protection as your assets grow." },
    ],
  },
  {
    title: "Property & Specialty",
    products: [
      { name: "Flood Insurance", icon: Droplets, slug: null, description: "Protection standard policies don't cover." },
      { name: "High Net Worth", icon: Sparkles, slug: null, description: "Specialized coverage for complex asset portfolios." },
      { name: "Renters Insurance", icon: Home, slug: null, description: "Protect your belongings starting at $15/month." },
      { name: "Condo Insurance", icon: Building2, slug: null, description: "Coverage for what your HOA policy doesn't." },
    ],
  },
];

export const personalInsuranceReasons = [
  { title: "We Save Clients an Average of $847/Year", description: "We shop 30+ carriers to find the best combination of coverage and price.", icon: DollarSign },
  { title: "You Call, We Answer—Same Day", description: "No phone trees. No 1-800 numbers. Real people who know your name.", icon: Phone },
  { title: "We Fight for You When Claims Happen", description: "We've helped 1,200+ Ohio families through claims. We'll be in your corner.", icon: Shield },
];

// Business Insurance
export const businessInsuranceProducts = [
  {
    title: "Core Coverage",
    products: [
      { name: "General Liability", icon: Shield, slug: null, description: "Essential protection for every business." },
      { name: "Workers' Compensation", icon: HardHat, slug: null, description: "Required coverage, better rates." },
      { name: "Commercial Property", icon: Building2, slug: null, description: "Protect your buildings and equipment." },
      { name: "Commercial Auto", icon: Truck, slug: null, description: "Fleet and vehicle coverage." },
    ],
  },
  {
    title: "Professional & Cyber",
    products: [
      { name: "Professional Liability (E&O)", icon: Scale, slug: null, description: "Protection against professional mistakes." },
      { name: "Cyber Liability", icon: Lock, slug: null, description: "Guard against data breaches and cyber attacks." },
      { name: "Directors & Officers", icon: Shield, slug: null, description: "Personal liability protection for leadership." },
      { name: "Business Owners Policy", icon: Briefcase, slug: null, description: "Bundled coverage at a better price." },
    ],
  },
];

export const businessInsuranceReasons = [
  { title: "30+ Carrier Access", description: "We compare quotes from dozens of carriers including specialty markets.", icon: FileCheck },
  { title: "Industry Expertise", description: "We know the risks specific to your industry and can tailor coverage.", icon: Eye },
  { title: "Claims Advocacy", description: "When claims happen, we fight for the settlement you deserve.", icon: Shield },
  { title: "Annual Reviews", description: "We review your coverage every year to keep pace with your growth.", icon: Clock },
  { title: "Local & Responsive", description: "Same-day responses. Real people. Right here in Columbus.", icon: Users },
  { title: "Risk Management", description: "We help identify and mitigate risks before they become claims.", icon: HeartHandshake },
];

// Employee Benefits
export const employeeBenefitsProducts = [
  { name: "Group Health Insurance", icon: Stethoscope, description: "Medical, dental, and vision plans for your team." },
  { name: "401(k) & Retirement", icon: DollarSign, description: "Help employees build long-term financial security." },
  { name: "Life & Disability", icon: Heart, description: "Income protection and peace of mind for your team." },
  { name: "Dental & Vision", icon: Eye, description: "Standalone dental and vision plans." },
  { name: "HSA & FSA", icon: Briefcase, description: "Tax-advantaged accounts for healthcare expenses." },
  { name: "Voluntary Benefits", icon: Users, description: "Additional options employees can choose." },
];
