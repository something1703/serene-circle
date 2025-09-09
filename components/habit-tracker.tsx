"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Target, Plus } from "lucide-react"

const habits = [
  {
    id: 1,
    name: "Morning Meditation",
    description: "5 minutes of mindfulness",
    streak: 7,
    completedToday: true,
    weeklyGoal: 7,
    weeklyProgress: 6,
    points: 5,
  },
  {
    id: 2,
    name: "Gratitude Journal",
    description: "Write 3 things you're grateful for",
    streak: 12,
    completedToday: true,
    weeklyGoal: 7,
    weeklyProgress: 5,
    points: 5,
  },
  {
    id: 3,
    name: "Evening Walk",
    description: "15 minutes outdoor activity",
    streak: 3,
    completedToday: false,
    weeklyGoal: 5,
    weeklyProgress: 3,
    points: 10,
  },
  {
    id: 4,
    name: "Deep Breathing",
    description: "Practice breathing exercises",
    streak: 5,
    completedToday: false,
    weeklyGoal: 7,
    weeklyProgress: 4,
    points: 5,
  },
]

export function HabitTracker() {
  const [trackedHabits, setTrackedHabits] = useState(habits)

  const toggleHabit = (habitId: number) => {
    setTrackedHabits((prev) =>
      prev.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              completedToday: !habit.completedToday,
              streak: !habit.completedToday ? habit.streak + 1 : Math.max(0, habit.streak - 1),
              weeklyProgress: !habit.completedToday ? habit.weeklyProgress + 1 : habit.weeklyProgress - 1,
            }
          : habit,
      ),
    )
  }

  const totalPointsToday = trackedHabits
    .filter((habit) => habit.completedToday)
    .reduce((sum, habit) => sum + habit.points, 0)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>Habit Garden</span>
          </CardTitle>
          <Badge className="bg-primary/20 text-primary">+{totalPointsToday} Points Today</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {trackedHabits.map((habit) => (
            <div key={habit.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      habit.completedToday
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-muted-foreground hover:border-primary"
                    }`}
                  >
                    {habit.completedToday ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                  </button>
                  <div>
                    <h4 className={`font-medium ${habit.completedToday ? "line-through text-muted-foreground" : ""}`}>
                      {habit.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{habit.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">🔥 {habit.streak} day streak</div>
                  <div className="text-xs text-muted-foreground">+{habit.points} points</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Weekly Progress</span>
                  <span>
                    {habit.weeklyProgress}/{habit.weeklyGoal}
                  </span>
                </div>
                <Progress value={(habit.weeklyProgress / habit.weeklyGoal) * 100} className="h-2" />
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          <Plus className="w-4 h-4 mr-2" />
          Add New Habit
        </Button>
      </CardContent>
    </Card>
  )
}
