import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ClipboardList, Brain, Heart, Activity, Clock, Users } from "lucide-react"
import Link from "next/link"

const screeningTools = [
  {
    id: "phq9",
    name: "PHQ-9",
    fullName: "Patient Health Questionnaire-9",
    description: "Assess symptoms of depression and their severity over the past two weeks.",
    duration: "3-5 minutes",
    questions: 9,
    purpose: "Depression screening and monitoring",
    icon: Brain,
    color: "bg-blue-500",
  },
  {
    id: "gad7",
    name: "GAD-7",
    fullName: "Generalized Anxiety Disorder-7",
    description: "Evaluate anxiety symptoms and their impact on daily functioning.",
    duration: "2-4 minutes",
    questions: 7,
    purpose: "Anxiety assessment",
    icon: Heart,
    color: "bg-green-500",
  },
  {
    id: "ghq",
    name: "GHQ-12",
    fullName: "General Health Questionnaire-12",
    description: "Screen for general psychological distress and overall mental well-being.",
    duration: "3-5 minutes",
    questions: 12,
    purpose: "General mental health screening",
    icon: Activity,
    color: "bg-purple-500",
  },
]

export default function ScreeningPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Mental Health Self-Assessment</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Take scientifically validated assessments to better understand your mental health. These tools can help
              identify areas where you might benefit from additional support.
            </p>
          </div>

          {/* Important Notice */}
          <Card className="mb-8 border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                  <p className="text-amber-700 text-sm">
                    These screening tools are for educational purposes and self-awareness. They are not diagnostic tools
                    and cannot replace professional mental health evaluation. If you're experiencing severe symptoms or
                    thoughts of self-harm, please seek immediate professional help.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Screening Tools */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {screeningTools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <Card key={tool.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-10 h-10 ${tool.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{tool.fullName}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tool.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>Duration:</span>
                        </span>
                        <span>{tool.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center space-x-1">
                          <ClipboardList className="w-4 h-4" />
                          <span>Questions:</span>
                        </span>
                        <span>{tool.questions}</span>
                      </div>
                    </div>

                    <Badge variant="secondary" className="mb-4 w-full justify-center">
                      {tool.purpose}
                    </Badge>

                    <Button asChild className="w-full">
                      <Link href={`/screening/${tool.id}`}>Start Assessment</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>After Your Assessment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Receive personalized results and recommendations</li>
                  <li>• Get suggestions for next steps and resources</li>
                  <li>• Option to share results with a counselor</li>
                  <li>• Track your progress over time</li>
                  <li>• Access relevant coping strategies and tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy & Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Your responses are completely anonymous</li>
                  <li>• Results are stored securely and encrypted</li>
                  <li>• You control who can access your information</li>
                  <li>• Data can be deleted at any time</li>
                  <li>• No personal identifying information required</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
