import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MoodTracker } from "@/components/mood-tracker"
import { HabitTracker } from "@/components/habit-tracker"
import { ProgressOverview } from "@/components/progress-overview"
import { BadgeCollection } from "@/components/badge-collection"
import { DailyCheckIn } from "@/components/daily-check-in"
import { Sprout } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Your Mind Garden</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Nurture your mental wellness through daily habits, mood tracking, and mindful activities. Watch your
              garden grow as you build healthy routines.
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Activities */}
            <div className="lg:col-span-2 space-y-8">
              <DailyCheckIn />
              <MoodTracker />
              <HabitTracker />
            </div>

            {/* Right Column - Progress & Achievements */}
            <div className="space-y-8">
              <ProgressOverview />
              <BadgeCollection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
