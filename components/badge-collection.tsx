import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Lock } from "lucide-react"

const badges = [
  {
    id: 1,
    name: "First Steps",
    description: "Complete your first daily check-in",
    icon: "🌱",
    earned: true,
    earnedDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    icon: "⚡",
    earned: true,
    earnedDate: "2024-01-22",
  },
  {
    id: 3,
    name: "Mindful Master",
    description: "Complete 30 meditation sessions",
    icon: "🧘",
    earned: true,
    earnedDate: "2024-02-10",
  },
  {
    id: 4,
    name: "Gratitude Guru",
    description: "Write 50 gratitude entries",
    icon: "🙏",
    earned: false,
    progress: "32/50",
  },
  {
    id: 5,
    name: "Consistency Champion",
    description: "Maintain a 30-day streak",
    icon: "🏆",
    earned: false,
    progress: "12/30",
  },
  {
    id: 6,
    name: "Wellness Wizard",
    description: "Reach Level 10",
    icon: "✨",
    earned: false,
    progress: "Level 8/10",
  },
]

export function BadgeCollection() {
  const earnedBadges = badges.filter((badge) => badge.earned)
  const totalBadges = badges.length

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Award className="w-5 h-5" />
          <span>Badge Collection</span>
          <Badge variant="secondary">
            {earnedBadges.length}/{totalBadges}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`relative p-3 rounded-lg border-2 text-center transition-all ${
                badge.earned ? "border-primary bg-primary/5 hover:bg-primary/10" : "border-muted bg-muted/30 opacity-60"
              }`}
            >
              {!badge.earned && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
              <div className="text-2xl mb-1">{badge.icon}</div>
              <div className="text-xs font-medium">{badge.name}</div>
              {badge.earned && badge.earnedDate && (
                <div className="text-xs text-muted-foreground mt-1">
                  {new Date(badge.earnedDate).toLocaleDateString()}
                </div>
              )}
              {!badge.earned && badge.progress && (
                <div className="text-xs text-muted-foreground mt-1">{badge.progress}</div>
              )}
            </div>
          ))}
        </div>

        {/* Recent Achievement */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-4">
          <h4 className="font-medium mb-2 flex items-center space-x-2">
            <span>🎉</span>
            <span>Recent Achievement</span>
          </h4>
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🧘</div>
            <div>
              <div className="font-medium">Mindful Master</div>
              <div className="text-sm text-muted-foreground">Earned on Feb 10, 2024</div>
            </div>
          </div>
        </div>

        {/* Next Badge Progress */}
        <div className="border rounded-lg p-4">
          <h4 className="font-medium mb-2">Next Badge Progress</h4>
          <div className="flex items-center space-x-3">
            <div className="text-2xl opacity-60">🙏</div>
            <div className="flex-1">
              <div className="font-medium">Gratitude Guru</div>
              <div className="text-sm text-muted-foreground mb-2">Write 50 gratitude entries (32/50)</div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(32 / 50) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
