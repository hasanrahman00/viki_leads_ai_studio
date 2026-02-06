import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}