import { useState } from "react"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { NavBar } from "@/components/nav-bar"
import { OrderModal } from "@/components/order-modal"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FooterSection } from "@/components/sections/footer-section"

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <NavBar onOrder={() => setModalOpen(true)} />
        <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
        <HeroSection />
        <ManifestoSection />
        <FeaturesSection />
        <ShowcaseSection />
        <CarouselSection />
        <InsightsSection />
        <PricingSection onOrder={() => setModalOpen(true)} />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

export default Index