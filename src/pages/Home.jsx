import { useState } from 'react'
import Preloader from '../components/ui/Preloader'
import Hero from '../components/sections/home/Hero'
import ServicesGrid from '../components/sections/home/ServicesGrid'
import IndustriesSection from '../components/sections/home/IndustriesSection'
import WhyPTS from '../components/sections/home/WhyPTS'
import StatsSection from '../components/sections/home/StatsSection'
import ProcessTimeline from '../components/sections/home/ProcessTimeline'
import MissionVisionValues from '../components/sections/home/MissionVisionValues'
import BlogTeaser from '../components/sections/home/BlogTeaser'
import CTABanner from '../components/sections/home/CTABanner'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <Hero loaded={loaded} />
      <ServicesGrid />
      <IndustriesSection />
      <WhyPTS />
      <StatsSection />
      <ProcessTimeline />
      <MissionVisionValues />
      <BlogTeaser />
      <CTABanner />
    </>
  )
}
