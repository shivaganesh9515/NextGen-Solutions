'use client'
import { motion } from 'framer-motion'
import { TEAM_MEMBERS } from '@/lib/constants'
import { memo } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { 
  Target, 
  Lightbulb, 
  Handshake, 
  BarChart3, 
  Users, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Github,
  User
} from 'lucide-react'

// Memoized team member card
const TeamMemberCard = memo(({ member, index }: { member: {
  id: string
  name: string
  role: string
  experience: string
  expertise: readonly string[]
  color: string
  social: Record<string, string>
}, index: number }) => {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  const roleColors = {
    'CEO & Digital Strategy Director': 'text-violet-400',
    'Head of Analytics': 'text-purple-400',
    'Social Media Manager': 'text-pink-400',
    'SEO Specialist': 'text-blue-400'
  }

  const getSocialIcon = (platform: string) => {
    const iconProps = { size: 16, className: "transition-all duration-300" }
    switch (platform) {
      case 'linkedin': return <Linkedin {...iconProps} />
      case 'twitter': return <Twitter {...iconProps} />
      case 'instagram': return <Instagram {...iconProps} />
      case 'github': return <Github {...iconProps} />
      default: return <Linkedin {...iconProps} />
    }
  }

  return (
    <motion.div 
      ref={ref}
      className="glass-card p-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`} role="img" aria-label={`${member.name} profile picture`}>
        <User className="text-white" size={32} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold mb-2 hero-text">{member.name}</h3>
      <p className={`${roleColors[member.role as keyof typeof roleColors]} text-sm mb-3`}>
        {member.role}
      </p>
      <p className="text-gray-400 text-sm mb-4">{member.experience}</p>
      
      {/* Expertise Tags */}
      <div className="flex flex-wrap gap-1 justify-center mb-4">
        {member.expertise.slice(0, 2).map((skill: string, idx: number) => (
          <span 
            key={idx}
            className="bg-white/10 text-xs px-2 py-1 rounded-full text-gray-300"
          >
            {skill}
          </span>
        ))}
        {member.expertise.length > 2 && (
          <span className="text-xs text-violet-400 font-medium">
            +{member.expertise.length - 2} more
          </span>
        )}
      </div>

      {/* Social Links */}
      <ul className="flex justify-center space-x-3" aria-label={`${member.name} social media links`}>
        {Object.entries(member.social).map(([platform, url]) => (
          <li key={platform}>
            <motion.a 
              href={url as string} 
              className="glass-effect w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-white/20 hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${member.name}'s ${platform} profile`}
            >
              {getSocialIcon(platform)}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
})

TeamMemberCard.displayName = 'TeamMemberCard'

// Memoized value card
const ValueCard = memo(({ icon, title, description, delay }: { 
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}) => {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="glass-effect w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 hero-text">{title}</h3>
      <p className="text-gray-400 font-light">{description}</p>
    </motion.div>
  )
})

ValueCard.displayName = 'ValueCard'

const About = memo(() => {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  const companyValues = [
    {
      icon: <Target className="text-violet-400" size={24} />,
      iconColor: 'text-violet-400',
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that directly impact your business growth and ROI.'
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={24} />,
      iconColor: 'text-yellow-400',
      title: 'Innovation First',
      description: 'We stay ahead of digital trends and use cutting-edge tools to give you a competitive advantage.'
    },
    {
      icon: <Handshake className="text-green-400" size={24} />,
      iconColor: 'text-green-400',
      title: 'Client Partnership',
      description: 'We build long-term partnerships with our clients, becoming an extension of your marketing team.'
    },
    {
      icon: <BarChart3 className="text-blue-400" size={24} />,
      iconColor: 'text-blue-400',
      title: 'Data Transparency',
      description: 'Complete transparency in our processes and reporting, so you always know how your campaigns perform.'
    }
  ]

  return (
    <section id="about" className="relative py-24 px-6 lg:px-12 bg-gray-950" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.header 
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-effect inline-flex items-center px-6 py-3 rounded-full mb-8">
            <Users className="text-violet-400 mr-3" size={20} aria-hidden="true" />
            <span className="text-sm font-light text-gray-300">About Nextgen Solutions</span>
          </div>
          <h2 id="about-heading" className="text-4xl lg:text-5xl font-light hero-text mb-6 font-space-grotesk">
            Meet the <span className="text-gradient">Dream Team</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            We&apos;re a passionate team of digital marketing experts dedicated to helping businesses thrive in the digital landscape
          </p>
        </motion.header>
        
        {/* COMPANY VALUES - OPTIMIZED */}
        <section className="mb-20" aria-labelledby="values-heading">
          <h3 id="values-heading" className="sr-only">Our Company Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>
        
        {/* TEAM MEMBERS - OPTIMIZED */}
        <section aria-labelledby="team-heading">
          <h3 id="team-heading" className="sr-only">Our Team Members</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About
