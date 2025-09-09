import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Users, Phone, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"

export function ChatFeatures() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="w-5 h-5" />
            <span>Quick Help</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
            <Link href="/emergency">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Help
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
            <Link href="/counseling">
              <Calendar className="w-4 h-4 mr-2" />
              Book Counseling
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
            <Link href="/peer-support">
              <Users className="w-4 h-4 mr-2" />
              Peer Support
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-primary" />
              <span>Anxiety & Stress</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-primary" />
              <span>Sleep Problems</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-primary" />
              <span>Academic Pressure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-primary" />
              <span>Loneliness</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-primary" />
              <span>Relationship Issues</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-primary" />
              <span>Self-Esteem</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5" />
            <span>Resources</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-sm p-2" asChild>
              <Link href="/resources">Mental Health Articles</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm p-2" asChild>
              <Link href="/screening">Self-Assessment Tools</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm p-2" asChild>
              <Link href="/resources#exercises">Breathing Exercises</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm p-2" asChild>
              <Link href="/resources#meditation">Meditation Guides</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Your conversations are private and not stored permanently. This AI provides support but cannot replace
            professional mental health care.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
