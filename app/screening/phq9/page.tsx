"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Brain, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const phq9Questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed, or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead, or of hurting yourself",
]

const responseOptions = [
  { value: "0", label: "Not at all", score: 0 },
  { value: "1", label: "Several days", score: 1 },
  { value: "2", label: "More than half the days", score: 2 },
  { value: "3", label: "Nearly every day", score: 3 },
]

export default function PHQ9Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<Record<number, number>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [totalScore, setTotalScore] = useState(0)

  const handleResponse = (questionIndex: number, score: number) => {
    setResponses((prev) => ({ ...prev, [questionIndex]: score }))
  }

  const handleNext = () => {
    if (currentQuestion < phq9Questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      // Calculate total score and complete assessment
      const total = Object.values(responses).reduce((sum, score) => sum + score, 0)
      setTotalScore(total)
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const getScoreInterpretation = (score: number) => {
    if (score <= 4) {
      return {
        level: "Minimal Depression",
        description: "Your responses suggest minimal or no depression symptoms.",
        recommendations: [
          "Continue maintaining good mental health habits",
          "Practice regular self-care and stress management",
          "Stay connected with friends and family",
          "Consider our wellness resources for prevention",
        ],
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
      }
    } else if (score <= 9) {
      return {
        level: "Mild Depression",
        description: "Your responses suggest mild depression symptoms that may benefit from attention.",
        recommendations: [
          "Consider speaking with a counselor or therapist",
          "Try our guided self-help resources",
          "Focus on sleep hygiene and regular exercise",
          "Practice mindfulness and stress reduction techniques",
        ],
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
      }
    } else if (score <= 14) {
      return {
        level: "Moderate Depression",
        description:
          "Your responses suggest moderate depression symptoms that would benefit from professional support.",
        recommendations: [
          "We recommend booking a counseling session",
          "Consider speaking with a healthcare provider",
          "Use our crisis resources if needed",
          "Engage with peer support groups",
        ],
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
      }
    } else if (score <= 19) {
      return {
        level: "Moderately Severe Depression",
        description: "Your responses suggest moderately severe depression symptoms requiring professional attention.",
        recommendations: [
          "Please book a counseling session as soon as possible",
          "Consider contacting a mental health professional",
          "Reach out to trusted friends or family for support",
          "Use our emergency resources if you're in crisis",
        ],
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
      }
    } else {
      return {
        level: "Severe Depression",
        description: "Your responses suggest severe depression symptoms that require immediate professional attention.",
        recommendations: [
          "Please seek immediate professional help",
          "Contact our crisis helpline or emergency services",
          "Book an urgent counseling session",
          "Inform a trusted person about how you're feeling",
        ],
        color: "text-red-800",
        bgColor: "bg-red-100",
        borderColor: "border-red-300",
      }
    }
  }

  const progress = ((currentQuestion + 1) / phq9Questions.length) * 100
  const canProceed = responses[currentQuestion] !== undefined
  const interpretation = isComplete ? getScoreInterpretation(totalScore) : null

  if (isComplete && interpretation) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">PHQ-9 Assessment Complete</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{totalScore}/27</div>
                  <p className="text-muted-foreground">Total Score</p>
                </div>

                <Card className={`${interpretation.bgColor} ${interpretation.borderColor} border-2`}>
                  <CardContent className="pt-6">
                    <h3 className={`text-xl font-semibold mb-2 ${interpretation.color}`}>{interpretation.level}</h3>
                    <p className="text-gray-700 mb-4">{interpretation.description}</p>

                    <h4 className="font-semibold mb-2">Recommended Next Steps:</h4>
                    <ul className="space-y-1">
                      {interpretation.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          • {rec}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {totalScore >= 15 && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertDescription className="text-red-800">
                      <strong>Important:</strong> If you're having thoughts of self-harm or suicide, please reach out
                      for immediate help. Contact our crisis helpline or emergency services right away.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <Link href="/counseling">Book Counseling Session</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <Link href="/resources">Explore Resources</Link>
                  </Button>
                </div>

                <div className="text-center">
                  <Button asChild variant="ghost">
                    <Link href="/screening">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Assessments
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-primary" />
                  <CardTitle>PHQ-9 Depression Screening</CardTitle>
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentQuestion + 1} of {phq9Questions.length}
                </div>
              </div>
              <Progress value={progress} className="w-full" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Over the last 2 weeks, how often have you been bothered by:
                </p>
                <h3 className="text-lg font-medium">{phq9Questions[currentQuestion]}</h3>
              </div>

              <RadioGroup
                value={responses[currentQuestion]?.toString() || ""}
                onValueChange={(value) => handleResponse(currentQuestion, Number.parseInt(value))}
              >
                {responseOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button onClick={handleNext} disabled={!canProceed}>
                  {currentQuestion === phq9Questions.length - 1 ? "Complete Assessment" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
