import { notFound } from 'next/navigation'
import { SERVICES } from '@/lib/constants'
import { ServiceDetailClient } from './ServiceDetailClient'
import type { Metadata } from 'next'

// Props interface for the page component
interface ServicePageProps {
  params: Promise<{ slug: string }>
}

// Service type with optional properties
interface ServiceType {
  id: string
  title: string
  description: string
  features: readonly string[]
  price: string
  icon: string
  popular?: boolean
}

// Metadata generation for Next.js 15 - Server Component only
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find(s => s.id === slug) as ServiceType | undefined
  
  if (!service) {
    return {
      title: 'Service Not Found - NextGen Solutions',
      description: 'The requested service could not be found.'
    }
  }

  return {
    title: `${service.title} - NextGen Solutions`,
    description: service.description,
    keywords: [service.title, 'digital marketing', 'NextGen Solutions', 'business growth', 'online marketing'],
    openGraph: {
      title: `${service.title} - NextGen Solutions`,
      description: service.description,
      type: 'article',
      url: `https://nextgensolutions.com/services/${slug}`,
      images: [
        {
          url: '/og-service-image.png',
          width: 1200,
          height: 630,
          alt: `${service.title} service by NextGen Solutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} - NextGen Solutions`,
      description: service.description,
      images: ['/og-service-image.png'],
    },
    alternates: {
      canonical: `https://nextgensolutions.com/services/${slug}`,
    },
  }
}

// Main Server Component
export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = SERVICES.find(s => s.id === slug) as ServiceType | undefined
  
  if (!service) {
    notFound()
  }

  // Pass service data to Client Component
  return <ServiceDetailClient service={service} />
}