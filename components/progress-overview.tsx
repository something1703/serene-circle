import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Flame, Calendar } from "lucide-react"

export function ProgressOverview() {
  const stats = {
    totalPoints: 1247,
    level: 8,
    pointsToNextLevel: 153,
    currentStreak: 12,
    longestStreak: 28,
    daysActive: 45,
  }

  const levelProgress = ((stats.totalPoints % 200) / 200) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="w-5 h-5" />
          <span>Progress Overview</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Level Progress */}
        <div className="text-center space-y-3">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-white">{stats.level}</span>
          </div>
          <div>
            <h3 className="font-semibold">Level {stats.level} Gardener</h3>
            <p className="text-sm text-muted-foreground">
              {stats.pointsToNextLevel} points to Level {stats.level + 1}
            </p>
          </div>
          <Progress value={levelProgress} className="w-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <Star className="w-6 h-6 text-primary mx-auto mb-1" />
            <div className="text-lg font-bold">{stats.totalPoints}</div>
            <div className="text-xs text-muted-foreground">Total Points</div>
          </div>

          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
            <div className="text-lg font-bold">{stats.currentStreak}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </div>

          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <Calendar className="w-6 h-6 text-blue-500 mx-auto mb-1" />
            <div className="text-lg font-bold">{stats.daysActive}</div>
            <div className="text-xs text-muted-foreground">Days Active</div>
          </div>

          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
            <div className="text-lg font-bold">{stats.longestStreak}</div>
            <div className="text-xs text-muted-foreground">Best Streak</div>
          </div>
        </div>

        {/* Weekly Goal */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <h4 className="font-medium mb-2">This Week's Goal</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Complete 5 daily check-ins and maintain your meditation streak
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm">Progress: 4/5 days</span>
            <Badge variant="secondary">80%</Badge>
          </div>
          <Progress value={80} className="mt-2" />
        </div>
      </CardContent>
    </Card>
  )
}
