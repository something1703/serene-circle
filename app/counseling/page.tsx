import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { PrivacyStatement } from "@/components/privacy-statement"
import { Shield, Lock, UserCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function CounselingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Confidential Counseling Booking</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Book your anonymous counseling session with complete privacy and security. Your identity remains protected
              throughout the process.
            </p>
          </div>

          {/* Privacy Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Anonymous Booking</h3>
                <p className="text-muted-foreground text-sm">
                  No personal details required. Use a unique ID for all communications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Secure OTP Login</h3>
                <p className="text-muted-foreground text-sm">
                  Access your sessions with secure OTP verification. No passwords to remember.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Verified Counselors</h3>
                <p className="text-muted-foreground text-sm">
                  Licensed professionals trained in student mental health and cultural sensitivity.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            <div className="lg:col-span-1">
              <PrivacyStatement />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
