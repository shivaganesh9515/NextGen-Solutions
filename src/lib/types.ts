export interface NavigationItem {
  name: string
  href: string
}

export interface ServiceType {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  price: string
  popular?: boolean
  trending?: boolean
  highRoi?: boolean
  features: string[]
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget?: string
  message: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  experience: string
  expertise: string[]
  image?: string
  social: {
    linkedin?: string
    twitter?: string
    instagram?: string
    github?: string
  }
}
