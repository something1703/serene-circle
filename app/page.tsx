import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MotivationalCarousel } from "@/components/motivational-carousel"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <MotivationalCarousel />
      </main>
      <Footer />
    </div>
  )
}
