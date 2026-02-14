import { 
  Database, 
  Search, 
  Layers, 
  Globe, 
  ShieldCheck, 
  Linkedin, 
  MapPin, 
  Phone,
  ShoppingCart,
  Building2,
  Target,
  Zap,
  Clock,
  CheckCircle2,
  Users,
  Briefcase,
  TrendingUp,
  Rocket
} from 'lucide-react';
import { Feature, Product, Testimonial, FaqItem, PricingPlan } from './types';

export const SLACK_INVITE_URL = 'https://join.slack.com/t/vikileadsworkspace/shared_invite/zt-3pg9ypdae-wpriXr5uGhgoZHF9BmnEwg';

export const NAV_ITEMS = [
  // Home removed as requested
  { label: 'Scrapers', href: '/#scrapers' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Sales Nav Advanced 💰$99', href: '/sales-nav' }, // Updated to route
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQs', href: '/#faqs' },
];

export const FEATURES: Feature[] = [
  {
    title: 'Done-For-You Convenience',
    description: "Forget learning complex software. Just send us your search URL and we handle the rest. Sit back and relax while we do the heavy lifting.",
    icon: Zap
  },
  {
    title: 'Verified & Fresh Data',
    description: "We use real-time scraping to deliver 100% accurate data. Every email is verified (even catch-alls) to ensure your bounce rate stays under 1%.",
    icon: CheckCircle2
  },
  {
    title: 'Fast Turnaround',
    description: "Need leads fast? We deliver up to 10,000 verified leads in just 3-4 hours. Speed and reliability are our core promises.",
    icon: Clock
  }
];

export const PRODUCTS: Product[] = [
  {
    title: 'LinkedIn Sales Nav Scraper',
    description: 'Extract targeted B2B leads using deep Sales Navigator filters. Verified emails and direct dials included.',
    icon: Database,
    badge: 'Popular'
  },
  {
    title: 'ICP Based Scraping',
    description: 'Share your ICP details (industry, titles, geo, tech stack). We deliver verified leads matched to your ideal customer profile.',
    icon: Target
  },
  {
    title: 'Apollo.io Leads Exporter',
    description: 'Export targeted Apollo leads with verified emails, job titles, and company details. Clean CSV delivery included.',
    icon: Rocket
  },
  {
    title: 'ZoomInfo Scraper',
    description: 'Extract company and contact data from ZoomInfo searches and lists. Great for account-based prospecting.',
    icon: Building2
  },
  {
    title: 'Ecommerce Leads Scraper',
    description: 'Build ecommerce brand lists with store URLs, niches, and key contacts. Ideal for agencies and SaaS outbound.',
    icon: ShoppingCart
  },
  {
    title: 'LinkedIn Search Scraper',
    description: 'Scrape public LinkedIn search results. Perfect for broad lead lists and competitor research.',
    icon: Search
  },
  {
    title: 'Waterfall Enrichment',
    description: 'Cross-reference multiple sources to append phone numbers, revenue, and tech stack data.',
    icon: Layers
  },
  {
    title: 'Website-to-Lead Enrichment',
    description: 'Turn domain lists into company and employee contacts, filling in missing data gaps.',
    icon: Globe
  },
  {
    title: 'Catch-All Email Clean',
    description: ' rigorous testing of catch-all domains to ensure deliverable emails and <1% bounce rate.',
    icon: ShieldCheck
  },
  {
    title: 'LinkedIn URL Enrichment',
    description: 'Enrich a list of profile URLs with verified emails, phones, and company info.',
    icon: Linkedin
  },
  {
    title: 'Local Data Scraper',
    description: 'Gather data from Google Maps, Yellow Pages, and more. Ideal for local marketing agencies.',
    icon: MapPin
  },
  {
    title: 'Direct Dial Scraper',
    description: 'Find direct mobile numbers for decision makers across verified social databases.',
    icon: Phone
  }
];

export const TARGET_AUDIENCE = [
  { title: 'Sales Teams & SDRs', icon: Users, desc: 'Targeted contacts for outbound campaigns.' },
  { title: 'Growth Agencies', icon: TrendingUp, desc: 'Large, clean datasets for your clients.' },
  { title: 'Recruiters & HR', icon: Briefcase, desc: 'Find the perfect candidates in hours.' },
  { title: 'Startup Founders', icon: Rocket, desc: 'Investor lists and prospect data ready to scale.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Head of Growth",
    content: "The data quality is unmatched. We saw our bounce rate drop to nearly zero immediately. Delivered in 3 hours as promised!",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Agency Owner",
    content: "I used to spend days scraping manually. Viki Leads' 'done-for-you' service saved my team 20+ hours a week.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "SDR Manager",
    content: "The Sales Nav Advanced activation alone is worth the money. Combined with the scraping service, it's a no-brainer.",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How quickly will I receive my leads?",
    answer: "We prize speed. You will typically receive your list of up to 10,000 verified leads within 3–4 hours of placing your order."
  },
  {
    question: "Are the emails verified?",
    answer: "Yes. All emails go through a multi-stage validation process. We specifically test and remove catch-all domains to ensure your bounce rate stays under 1%."
  },
  {
    question: "Do I need to install any software?",
    answer: "No. This is a 100% done-for-you service. You simply send us the search URLs via Slack, and we deliver the clean CSV/Excel files."
  },
  {
    question: "Is my data and privacy safe?",
    answer: "Absolutely. We strictly comply with GDPR and data protection laws. We only process publicly available B2B data."
  },
  {
    question: "What if I’m not satisfied?",
    answer: "We offer a 7-day money-back guarantee. If the data doesn't meet our promised accuracy standards, request a full refund or revision."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Standard Package",
    price: "$99",
    features: [
      "10,000 Verified Leads",
      "Delivered in 3-4 Hours",
      "Sales Nav Advanced Activation (1 Month)",
      "Waterfall Enrichment",
      "<1% Bounce Rate Guarantee",
      "CSV / Excel Format"
    ],
    cta: "Get Started Now",
    isPopular: true
  },
  {
    name: "Custom / Bulk",
    price: "Custom",
    features: [
      "100k+ Lead Volume",
      "Dedicated Account Manager",
      "API Integration Options",
      "Complex Custom Scraping",
      "Priority Delivery",
      "Volume Discounts"
    ],
    cta: "Contact Sales via Slack",
    isPopular: false
  }
];