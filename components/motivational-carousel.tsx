"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const motivationalContent = [
  {
    type: "quote",
    content: "You are stronger than you think, braver than you feel, and more loved than you know.",
    author: "Mental Health Awareness",
  },
  {
    type: "story",
    content:
      "Priya from Delhi University found her confidence again through peer support groups. 'I realized I wasn't alone in my struggles.'",
    author: "Student Success Story",
  },
  {
    type: "quote",
    content: "Healing isn't about forgetting the past, it's about learning to live with it and grow from it.",
    author: "Wellness Wisdom",
  },
  {
    type: "story",
    content:
      "Rahul from IIT Kanpur: 'The AI chatbot helped me during my anxiety attacks at 2 AM when no one else was available.'",
    author: "Student Success Story",
  },
  {
    type: "quote",
    content: "Your mental health is just as important as your physical health. Take care of both.",
    author: "Self-Care Reminder",
  },
]

export function MotivationalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === motivationalContent.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? motivationalContent.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === motivationalContent.length - 1 ? 0 : currentIndex + 1)
  }

  const currentItem = motivationalContent[currentIndex]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">Inspiration & Stories</h2>

        <Card className="relative">
          <CardContent className="p-8 text-center">
            <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
            <blockquote className="text-lg md:text-xl text-foreground mb-4 text-balance">
              "{currentItem.content}"
            </blockquote>
            <cite className="text-muted-foreground font-medium">— {currentItem.author}</cite>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <Button variant="outline" size="sm" onClick={goToPrevious} className="rounded-full bg-transparent">
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {motivationalContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="sm" onClick={goToNext} className="rounded-full bg-transparent">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
