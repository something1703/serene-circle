import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChatInterface } from "@/components/chat-interface"
import { ChatFeatures } from "@/components/chat-features"
import { MessageCircle, Brain, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ChatbotPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">AI Mental Health Assistant</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Get instant support, coping strategies, and guidance 24/7. Our AI assistant is trained to provide
              compassionate, evidence-based mental health first aid.
            </p>
          </div>

          {/* Features Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
                <p className="text-muted-foreground text-sm">Get support anytime, anywhere. No appointments needed.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground text-sm">
                  Non-judgmental, empathetic responses tailored to your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Evidence-Based</h3>
                <p className="text-muted-foreground text-sm">
                  Techniques from CBT, mindfulness, and other proven therapies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Interface */}
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <ChatInterface />
            </div>
            <div className="lg:col-span-1">
              <ChatFeatures />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
