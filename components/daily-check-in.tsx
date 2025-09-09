"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Calendar, Sparkles } from "lucide-react"

export function DailyCheckIn() {
  const [isCheckedIn, setIsCheckedIn] = useState(false)
  const [reflection, setReflection] = useState("")
  const [selectedMood, setSelectedMood] = useState("")

  const moods = [
    { emoji: "😊", label: "Great", value: "great", color: "bg-green-100 text-green-800" },
    { emoji: "🙂", label: "Good", value: "good", color: "bg-blue-100 text-blue-800" },
    { emoji: "😐", label: "Okay", value: "okay", color: "bg-yellow-100 text-yellow-800" },
    { emoji: "😔", label: "Low", value: "low", color: "bg-orange-100 text-orange-800" },
    { emoji: "😢", label: "Difficult", value: "difficult", color: "bg-red-100 text-red-800" },
  ]

  const handleCheckIn = () => {
    if (selectedMood) {
      setIsCheckedIn(true)
      // Here you would typically save the check-in data
    }
  }

  if (isCheckedIn) {
    return (
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="pt-6 text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Daily Check-in Complete!</h3>
          <p className="text-muted-foreground mb-4">
            Great job taking care of your mental health today. You've earned 10 points!
          </p>
          <Badge className="bg-primary/20 text-primary">+10 Points</Badge>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>Daily Check-in</span>
          <Badge variant="secondary">Today</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">How are you feeling today?</h4>
          <div className="grid grid-cols-5 gap-2">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`p-3 rounded-lg border-2 transition-all text-center ${
                  selectedMood === mood.value ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                }`}
              >
                <div className="text-2xl mb-1">{mood.emoji}</div>
                <div className="text-xs font-medium">{mood.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Daily Reflection (Optional)</h4>
          <Textarea
            placeholder="What's one thing you're grateful for today? How did you take care of yourself?"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            rows={3}
          />
        </div>

        <Button onClick={handleCheckIn} disabled={!selectedMood} className="w-full">
          <Sparkles className="w-4 h-4 mr-2" />
          Complete Check-in (+10 Points)
        </Button>
      </CardContent>
    </Card>
  )
}
