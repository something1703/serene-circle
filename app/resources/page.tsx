import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ResourceCategories } from "@/components/resource-categories"
import { LanguageSelector } from "@/components/language-selector"
import { BookOpen, Video, MessageSquare, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Mental Health Resource Hub</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Access evidence-based mental health resources, guides, and tools in your preferred language. Everything
              you need to support your mental wellness journey.
            </p>
          </div>

          {/* Language Selector */}
          <div className="flex justify-center mb-8">
            <LanguageSelector />
          </div>

          {/* Resource Types Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Articles & Guides</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive guides on mental health topics, coping strategies, and wellness tips.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Video className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Video Resources</h3>
                <p className="text-muted-foreground text-sm">
                  Guided meditations, breathing exercises, and educational videos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">FAQs</h3>
                <p className="text-muted-foreground text-sm">
                  Common questions about mental health, answered by professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Multilingual</h3>
                <p className="text-muted-foreground text-sm">
                  Content available in English, Hindi, Marathi, and Tamil.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Resource Categories */}
          <ResourceCategories />
        </div>
      </main>
      <Footer />
    </div>
  )
}
