import { notFound } from 'next/navigation'
import { CASE_STUDIES } from '@/lib/constants'
import { PortfolioDetailClient } from './PortfolioDetailClient'
import type { Metadata } from 'next'

// Props interface for the page component
interface PortfolioPageProps {
  params: Promise<{ slug: string }>
}

// Case study type definition
interface CaseStudyType {
  id: string
  title: string
  category: string
  categoryColor: string
  duration: string
  client: string
  location: string
  projectType: string
  description: string
  challenge: string
  solution: string
  results: Record<string, string>
  metrics: Array<{
    value: string
    label: string
    color: string
  }>
  technologies: string[]
  testimonial: {
    quote: string
    author: string
    position: string
  }
}

// Metadata generation for Next.js 15 - Server Component only
export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = CASE_STUDIES.find(cs => cs.id === slug) as CaseStudyType | undefined
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - NextGen Solutions',
      description: 'The requested case study could not be found.'
    }
  }

  return {
    title: `${caseStudy.title} Case Study - NextGen Solutions`,
    description: caseStudy.description,
    keywords: [caseStudy.title, caseStudy.category, 'case study', 'digital marketing', 'NextGen Solutions', 'success story'],
    openGraph: {
      title: `${caseStudy.title} Case Study - NextGen Solutions`,
      description: caseStudy.description,
      type: 'article',
      url: `https://nextgensolutions.com/portfolio/${slug}`,
      images: [
        {
          url: '/og-portfolio-image.png',
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} case study by NextGen Solutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} Case Study - NextGen Solutions`,
      description: caseStudy.description,
      images: ['/og-portfolio-image.png'],
    },
    alternates: {
      canonical: `https://nextgensolutions.com/portfolio/${slug}`,
    },
  }
}

// Main Server Component
export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params
  const caseStudy = CASE_STUDIES.find(cs => cs.id === slug) as CaseStudyType | undefined
  
  if (!caseStudy) {
    notFound()
  }

  // Pass case study data to Client Component
  return <PortfolioDetailClient caseStudy={caseStudy} />
}