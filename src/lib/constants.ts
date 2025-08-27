// Site configuration constants
export const SITE_CONFIG = {
  name: "Nextgen Solutions",
  title: "Nextgen Solutions - Digital Marketing Agency",
  description: "Your digital marketing agency helping businesses grow and succeed online through SEO, PPC, social media marketing, and content creation.",
  url: "https://nextgensolutions.com",
  ogImage: "/images/og-image.jpg",
  keywords: ["digital marketing", "SEO", "PPC", "social media marketing", "content creation", "India"] as string[], // ✅ Cast to mutable
  links: {
    twitter: "https://twitter.com/nextgensolutions",
    linkedin: "https://linkedin.com/company/nextgensolutions",
    instagram: "https://instagram.com/nextgensolutions",
    youtube: "https://youtube.com/@nextgensolutions"
  }
} as const

// Navigation menu items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' }, 
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' }
] as const

// Contact information
export const CONTACT_INFO = {
  email: {
    hello: "hello@nextgensolutions.com",
    support: "support@nextgensolutions.com"
  },
  phone: "+91 98765 43210",
  address: {
    street: "123 Digital Hub, Cyber City",
    city: "Gurgaon, Haryana 122002"
  },
  hours: "Mon-Fri, 9AM-6PM IST",
  social: {
    linkedin: "https://linkedin.com/company/nextgensolutions",
    instagram: "https://instagram.com/nextgensolutions",
    youtube: "https://youtube.com/@nextgensolutions",
    github: "https://github.com/nextgensolutions"
  }
} as const

// Statistics for homepage
export const STATS = [
  { value: '200+', label: 'Projects Completed', color: 'text-violet-400' },
  { value: '150%', label: 'Average Growth', color: 'text-purple-400' },
  { value: '5+', label: 'Years Experience', color: 'text-pink-400' },
  { value: '24/7', label: 'Support', color: 'text-blue-400' }
] as const

// Complete service offerings
export const SERVICES = [
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Complete SEO package including on-page, off-page, local SEO, and technical optimization to dominate search results',
    icon: 'Search',
    gradient: 'from-violet-600 to-purple-600',
    price: '₹15,000/month',
    popular: true,
    features: [
      'Keyword Research & Analysis',
      'On-page Optimization', 
      'Local SEO & Google My Business',
      'Link Building & Authority',
      'Technical SEO Audit',
      'Competitor Analysis'
    ]
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    description: 'Complete social media management across Instagram, Facebook, LinkedIn, Twitter with paid ads and influencer marketing',
    icon: 'Share2',
    gradient: 'from-pink-600 to-red-600', 
    price: '₹12,000/month',
    trending: true,
    features: [
      'Content Creation & Strategy',
      'Instagram, Facebook, LinkedIn Ads',
      'Influencer Marketing',
      'Community Management',
      'Social Media Analytics',
      'Brand Reputation Management'
    ]
  },
  {
    id: 'ppc',
    title: 'PPC & Search Marketing',
    description: 'Data-driven Google Ads, YouTube Ads, and retargeting campaigns designed for maximum ROI and conversions',
    icon: 'Target',
    gradient: 'from-purple-600 to-indigo-600',
    price: 'Performance based pricing',
    highRoi: true,
    features: [
      'Google Ads (Search, Display, Shopping)',
      'YouTube Advertising',
      'Retargeting Campaigns', 
      'Landing Page Optimization',
      'Conversion Tracking',
      'A/B Testing & Optimization'
    ]
  },
  {
    id: 'content',
    title: 'Content Marketing',
    description: 'Strategic content creation including blogs, copywriting, email newsletters, and multimedia content to engage your audience',
    icon: 'Edit',
    gradient: 'from-green-600 to-teal-600',
    price: '₹18,000/month',
    features: [
      'Blog Writing & SEO Content',
      'Website Copywriting',
      'Email Newsletter Campaigns',
      'Infographics & Visual Content',
      'Content Strategy & Planning',
      'Editorial Calendar Management'
    ]
  },
  {
    id: 'design',
    title: 'Graphic Design & Branding',
    description: 'Complete brand identity design including logos, social media creatives, marketing materials, and brand guidelines',
    icon: 'Palette',
    gradient: 'from-orange-600 to-red-600',
    price: '₹25,000/month',
    features: [
      'Logo & Brand Identity Design',
      'Social Media Creative Templates',
      'Marketing Collateral Design',
      'Website UI/UX Design',
      'Brand Guidelines Documentation',
      'Print & Digital Asset Creation'
    ]
  },
  {
    id: 'web',
    title: 'Website Development',
    description: 'Modern, responsive websites and e-commerce stores built with latest technologies for optimal performance and conversions',
    icon: 'Code',
    gradient: 'from-blue-600 to-cyan-600',
    price: '₹35,000/project',
    features: [
      'Responsive Website Development',
      'E-commerce Store Setup',
      'WordPress/Webflow Development',
      'Website Speed Optimization',
      'Mobile-First Design',
      'CMS Integration & Training'
    ]
  },
  {
    id: 'video',
    title: 'Video Marketing',
    description: 'Professional video content creation including promotional videos, social media reels, and YouTube optimization',
    icon: 'Video',
    gradient: 'from-red-600 to-pink-600',
    price: '₹20,000/month',
    features: [
      'Promotional Video Production',
      'Social Media Reels & Shorts',
      'YouTube Channel Optimization',
      'Video SEO & Analytics',
      'Animation & Motion Graphics',
      'Live Streaming Setup'
    ]
  },
  {
    id: 'email',
    title: 'Email Marketing',
    description: 'Comprehensive email marketing campaigns with automation, segmentation, and detailed analytics for maximum engagement',
    icon: 'Mail',
    gradient: 'from-indigo-600 to-purple-600',
    price: '₹8,000/month',
    features: [
      'Email Campaign Design & Setup',
      'Marketing Automation Workflows',
      'List Building & Segmentation',
      'A/B Testing & Optimization',
      'Analytics & Performance Tracking',
      'CRM Integration'
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Comprehensive tracking setup and detailed reporting to measure performance and optimize your marketing efforts',
    icon: 'BarChart3',
    gradient: 'from-cyan-600 to-blue-600',
    price: '₹10,000/month',
    features: [
      'Google Analytics 4 Setup',
      'Conversion Tracking Implementation',
      'Custom Dashboard Creation',
      'Monthly Performance Reports',
      'ROI Analysis & Insights',
      'Competitor Analysis Reports'
    ]
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Marketing',
    description: 'Specialized WhatsApp Business marketing campaigns, chatbot setup, and customer engagement strategies for Indian market',
    icon: 'MessageCircle',
    gradient: 'from-green-600 to-emerald-600',
    price: '₹15,000/month',
    popular: true,
    features: [
      'WhatsApp Business Setup',
      'Chatbot Development',
      'Broadcast Campaign Management',
      'Customer Support Integration',
      'WhatsApp API Integration',
      'Analytics & Performance Tracking'
    ]
  }
] as const

// Pricing packages
export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: '₹15,000',
    period: '/month',
    description: 'Perfect for small businesses getting started with digital marketing',
    popular: false,
    features: [
      'Basic SEO (5 keywords)',
      'Social Media Management (2 platforms)', 
      'Google My Business Optimization',
      'Monthly Performance Report',
      'Email Support',
      'Website Health Checkup'
    ],
    cta: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth Package',
    price: '₹35,000',
    period: '/month',
    description: 'Ideal for growing businesses looking to scale their digital presence',
    popular: true,
    features: [
      'Advanced SEO (15 keywords)',
      'Social Media Management (4 platforms)',
      'PPC Campaign Management (₹20K ad spend)',
      'Content Marketing (8 pieces/month)',
      'WhatsApp Marketing Setup',
      'Bi-weekly Strategy Calls',
      'Custom Landing Page',
      'Advanced Analytics Dashboard'
    ],
    cta: 'Start Growing Now'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Package',
    price: '₹75,000',
    period: '/month',
    description: 'Comprehensive solution for established businesses and enterprises',
    popular: false,
    features: [
      'Premium SEO (50+ keywords)',
      'All Social Platforms + Influencer Marketing',
      'Advanced PPC (₹1L+ ad spend)',
      'Complete Content Strategy',
      'Video Marketing & Creative Design',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Custom CRM Integration',
      'Quarterly Strategy Reviews'
    ],
    cta: 'Contact Sales'
  }
] as const

// Team members information
export const TeamMembers = [
  {
    id: 'sarah',
    name: 'Sarah Johnson',
    role: 'CEO & Digital Strategy Director',
    experience: '10+ years in digital marketing',
    expertise: ['SEO Strategy', 'PPC Management', 'Content Marketing', 'Team Leadership'],
    bio: 'Sarah leads our strategic initiatives and has helped over 200 businesses achieve digital success.',
    color: 'from-violet-600 to-purple-600',
    social: {
      linkedin: 'https://linkedin.com/in/shivaganesh-gajavelli',
      twitter: 'https://twitter.com/sarah_johnson'
    }
  },
  {
    id: 'michael',
    name: 'Michael Chen',
    role: 'Head of Analytics',
    experience: '8+ years in data analytics',
    expertise: ['Google Analytics', 'Data Analysis', 'Performance Tracking', 'ROI Optimization'],
    bio: 'Michael ensures our campaigns are data-driven and deliver measurable results for every client.',
    color: 'from-purple-600 to-pink-600',
    social: {
      linkedin: 'https://linkedin.com/in/michael-chen',
      twitter: 'https://twitter.com/michael_chen'
    }
  },
  {
    id: 'emily',
    name: 'Emily Rodriguez',
    role: 'Social Media Manager',
    experience: '6+ years in social media marketing',
    expertise: ['Social Strategy', 'Content Creation', 'Community Management', 'Influencer Relations'],
    bio: 'Emily creates engaging social media experiences that build strong communities around brands.',
    color: 'from-pink-600 to-red-600',
    social: {
      linkedin: 'https://linkedin.com/in/emily-rodriguez',
      instagram: 'https://instagram.com/emily_rodriguez'
    }
  },
  {
    id: 'david',
    name: 'David Park',
    role: 'SEO Specialist',
    experience: '5+ years in search engine optimization',
    expertise: ['Technical SEO', 'Keyword Research', 'Link Building', 'Local SEO'],
    bio: 'David helps businesses dominate search results through strategic SEO implementations.',
    color: 'from-blue-600 to-indigo-600',
    social: {
      linkedin: 'https://linkedin.com/in/david-park',
      github: 'https://github.com/david-park'
    }
  }
] as const

// Testimonials from clients
export const TESTIMONIALS = [
  {
    id: 'techgear',
    name: 'Raj Patel',
    company: 'TechGear Electronics',
    role: 'Founder & CEO',
    content: 'Nextgen Solutions transformed our online presence completely. Our revenue increased by 385% in just 6 months through their comprehensive digital marketing strategy.',
    rating: 5,
    image: '/testimonials/raj-patel.jpg'
  },
  {
    id: 'bella',
    name: 'Maria Gonzalez', 
    company: 'Bella Vista Restaurants',
    role: 'Marketing Director',
    content: 'Their social media marketing helped us expand to 3 new locations. The team understood our vision and delivered beyond expectations.',
    rating: 5,
    image: '/testimonials/maria-gonzalez.jpg'
  },
  {
    id: 'cloudflow',
    name: 'Amit Sharma',
    company: 'CloudFlow Solutions',
    role: 'Co-founder',
    content: 'The PPC campaigns generated 420% more leads while reducing our cost per lead by 65%. Excellent ROI and professional service.',
    rating: 5,
    image: '/testimonials/amit-sharma.jpg'
  }
] as const

// FAQ section data
// Removed duplicate FAQS declaration to resolve redeclaration error.

// Team Members Data
export const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO & Digital Strategy Director',
    expertise: ['SEO', 'Strategy', 'PPC Management', 'Content Marketing'],
    experience: '10+ years in digital marketing. Expert in SEO, Strategy, PPC Management, Content Marketing.',
    color: 'from-violet-600 to-purple-600',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Head of Analytics',
    expertise: ['Google Analytics', 'Data Analysis', 'Performance Tracking'],
    experience: '8+ years in data analytics. Expert in Google Analytics, Data Analysis, Performance Tracking.',
    color: 'from-purple-600 to-pink-600',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Social Media Manager',
    expertise: ['Social Strategy', 'Content Creation', 'Community Management'],
    experience: '6+ years in social media marketing. Expert in Social Strategy, Content Creation, Community Management.',
    color: 'from-pink-600 to-red-600',
    social: {
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: '4',
    name: 'David Park',
    role: 'SEO Specialist',
    expertise: ['Technical SEO', 'Keyword Research', 'Link Building'],
    experience: '5+ years in search engine optimization. Expert in Technical SEO, Keyword Research, Link Building.',
    color: 'from-blue-600 to-indigo-600',
    social: {
      linkedin: '#',
      github: '#'
    }
  }
] as const;

// Optional: TypeScript interface for type safety
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  color: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
  };
}

// Removed duplicate CONTACT_INFO declaration to resolve redeclaration error.

// FAQ Data
export const FAQS = [
  {
    id: '1',
    question: 'How long does it take to see results?',
    answer: 'SEO results typically take 3-6 months, while PPC and social media can show results within weeks. We provide monthly reports to track progress.'
  },
  {
    id: '2',
    question: 'Do you work with small businesses?',
    answer: 'Absolutely! We have packages designed for businesses of all sizes, from startups to enterprises. Our Starter plan is perfect for small businesses.'
  },
  {
    id: '3',
    question: 'Can I cancel my service anytime?',
    answer: 'Yes, our services are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel with 30 days notice.'
  },
  {
    id: '4',
    question: 'Do you provide detailed reports?',
    answer: 'Yes, we provide comprehensive monthly reports showing traffic, rankings, conversions, and ROI. You\'ll always know how your campaigns are performing.'
  },
  {
    id: '5',
    question: 'What makes you different from other agencies?',
    answer: 'We focus on data-driven strategies, transparent reporting, and treating your business like our own. Plus, we specialize in the Indian market with local expertise.'
  }
] as const;

// Portfolio Case Studies Data
export const CASE_STUDIES = [
  {
    id: 'techgear-electronics',
    title: 'TechGear Electronics',
    category: 'E-commerce',
    categoryColor: 'text-green-400',
    duration: '6 months',
    client: 'TechGear Electronics Pvt Ltd',
    location: 'Mumbai, India',
    projectType: 'Digital Marketing Campaign',
    description: 'Complete digital transformation for a leading electronics retailer, focusing on revenue growth through comprehensive SEO and PPC campaigns.',
    challenge: 'TechGear Electronics was struggling with low online visibility and declining sales. Their website had poor search rankings, limited social media presence, and ineffective advertising campaigns.',
    solution: 'We implemented a comprehensive digital marketing strategy including technical SEO optimization, targeted PPC campaigns, social media marketing, and conversion rate optimization.',
    results: {
      revenue: '385% increase in online revenue',
      traffic: '280% growth in organic traffic',
      conversions: '150% improvement in conversion rate',
      roi: '₹12L+ revenue generated'
    },
    metrics: [
      { value: '385%', label: 'Revenue Increase', color: 'text-green-400' },
      { value: '280%', label: 'Organic Traffic', color: 'text-blue-400' },
      { value: '150%', label: 'Conversion Rate', color: 'text-purple-400' },
      { value: '45%', label: 'Cost Reduction', color: 'text-yellow-400' }
    ],
    technologies: ['Google Ads', 'SEO Tools', 'Google Analytics', 'Facebook Ads', 'Email Marketing'],
    testimonial: {
      quote: "NextGen Solutions transformed our online presence completely. Our revenue increased by 385% in just 6 months! The team's expertise and dedication were exceptional.",
      author: 'Rajesh Kumar',
      position: 'Founder & CEO, TechGear Electronics'
    }
  },
  {
    id: 'bella-vista-restaurants',
    title: 'Bella Vista Restaurants',
    category: 'Food & Beverage',
    categoryColor: 'text-yellow-400',
    duration: '4 months',
    client: 'Bella Vista Restaurant Chain',
    location: 'Delhi NCR, India',
    projectType: 'Local SEO & Social Media',
    description: 'Local restaurant chain expansion through strategic social media marketing and local SEO optimization.',
    challenge: 'Bella Vista wanted to expand their restaurant chain but lacked local visibility and online presence. They needed to attract more customers to their existing locations while preparing for expansion.',
    solution: 'We developed a local SEO strategy, created engaging social media content, implemented Google My Business optimization, and launched targeted local advertising campaigns.',
    results: {
      visibility: '250% increase in local visibility',
      engagement: '180% growth in social engagement',
      footfall: '120% increase in foot traffic',
      expansion: '3 new locations opened'
    },
    metrics: [
      { value: '250%', label: 'Local Visibility', color: 'text-green-400' },
      { value: '180%', label: 'Social Engagement', color: 'text-pink-400' },
      { value: '120%', label: 'Foot Traffic', color: 'text-blue-400' },
      { value: '3', label: 'New Locations', color: 'text-purple-400' }
    ],
    technologies: ['Google My Business', 'Instagram Marketing', 'Local SEO', 'Facebook Ads', 'Review Management'],
    testimonial: {
      quote: "The team's expertise in local SEO helped us expand to 3 new locations. Their social media strategy was outstanding and significantly increased our customer base.",
      author: 'Maria Gonzalez',
      position: 'Marketing Director, Bella Vista Restaurants'
    }
  },
  {
    id: 'cloudflow-solutions',
    title: 'CloudFlow Solutions',
    category: 'Software Technology',
    categoryColor: 'text-blue-400',
    duration: '8 months',
    client: 'CloudFlow Solutions Inc',
    location: 'Bangalore, India',
    projectType: 'B2B Lead Generation',
    description: 'SaaS lead generation through content marketing, LinkedIn ads, and conversion optimization.',
    challenge: 'CloudFlow Solutions needed to generate qualified leads for their SaaS platform. Their existing marketing efforts were not reaching the right audience and lead quality was poor.',
    solution: 'We implemented a comprehensive B2B marketing strategy including LinkedIn advertising, content marketing, email automation, and landing page optimization tailored for their target audience.',
    results: {
      leads: '420% increase in qualified leads',
      cost: '65% reduction in cost per lead',
      mrr: '₹8L+ monthly recurring revenue',
      conversion: '200% improvement in lead quality'
    },
    metrics: [
      { value: '420%', label: 'Lead Generation', color: 'text-green-400' },
      { value: '65%', label: 'Cost Reduction', color: 'text-blue-400' },
      { value: '₹8L+', label: 'MRR Achieved', color: 'text-purple-400' },
      { value: '200%', label: 'Lead Quality', color: 'text-yellow-400' }
    ],
    technologies: ['LinkedIn Ads', 'HubSpot', 'Content Marketing', 'Email Automation', 'Analytics'],
    testimonial: {
      quote: "Professional, data-driven approach. They helped us achieve ₹8L+ MRR through strategic lead generation campaigns. Highly recommended for B2B companies.",
      author: 'David Chen',
      position: 'Co-founder, CloudFlow Solutions'
    }
  }
] as const;
