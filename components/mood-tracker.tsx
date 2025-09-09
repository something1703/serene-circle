"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

const moodData = [
  { date: "Mon", mood: 4, emoji: "😊" },
  { date: "Tue", mood: 3, emoji: "🙂" },
  { date: "Wed", mood: 5, emoji: "😊" },
  { date: "Thu", mood: 2, emoji: "😐" },
  { date: "Fri", mood: 4, emoji: "😊" },
  { date: "Sat", mood: 5, emoji: "😊" },
  { date: "Sun", mood: 3, emoji: "🙂" },
]

export function MoodTracker() {
  const [selectedPeriod, setSelectedPeriod] = useState("week")

  const averageMood = moodData.reduce((sum, day) => sum + day.mood, 0) / moodData.length
  const moodTrend = moodData[moodData.length - 1].mood > moodData[0].mood ? "up" : "down"

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Mood Tracker</span>
          </CardTitle>
          <div className="flex space-x-2">
            <Button
              variant={selectedPeriod === "week" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod("week")}
            >
              Week
            </Button>
            <Button
              variant={selectedPeriod === "month" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod("month")}
            >
              Month
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Mood Chart */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span>This Week's Mood Pattern</span>
            <Badge variant={moodTrend === "up" ? "default" : "secondary"}>
              {moodTrend === "up" ? "Trending Up" : "Stable"}
            </Badge>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {moodData.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-muted-foreground mb-1">{day.date}</div>
                <div
                  className={`w-full h-12 rounded-lg flex items-center justify-center text-lg border-2 ${
                    day.mood >= 4
                      ? "bg-green-100 border-green-200"
                      : day.mood >= 3
                        ? "bg-blue-100 border-blue-200"
                        : day.mood >= 2
                          ? "bg-yellow-100 border-yellow-200"
                          : "bg-orange-100 border-orange-200"
                  }`}
                >
                  {day.emoji}
                </div>
                <div className="text-xs mt-1 text-muted-foreground">{day.mood}/5</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood Insights */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h4 className="font-medium mb-2">Weekly Insights</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Average Mood:</span>
              <div className="font-semibold">{averageMood.toFixed(1)}/5</div>
            </div>
            <div>
              <span className="text-muted-foreground">Best Day:</span>
              <div className="font-semibold">Wednesday</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Your mood has been generally positive this week. Keep up the good self-care habits!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
