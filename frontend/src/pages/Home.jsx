import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import MissionVision from '../components/MissionVision'
import ServicesPreview from '../components/ServicesPreview'
import CiblesSection from '../components/CiblesSection'
import MethodologySection from '../components/MethodologySection'
import WhySkillUp from '../components/WhySkillUp'
import ContactCTA from '../components/ContactCTA'

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats rapides */}
      <StatsSection />

      {/* 3. Mission & Vision — ancre #about pour la Navbar */}
      <div id="about">
        <MissionVision />
      </div>

      {/* 4. Nos 5 services */}
      <ServicesPreview />

      {/* 5. Nos 4 cibles */}
      <CiblesSection />

      {/* 6. Méthodologie en 5 étapes */}
      <MethodologySection />

      {/* 7. Pourquoi SkillUp — 5 points */}
      <WhySkillUp />

      {/* 8. CTA bandeau vert */}
      <ContactCTA />
    </>
  )
}
