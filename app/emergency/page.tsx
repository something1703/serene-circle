import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin, Clock, Heart, Shield } from "lucide-react"

export default function EmergencyPage() {
  const emergencyContacts = [
    {
      name: "National Suicide Prevention Helpline",
      number: "9152987821",
      available: "24/7",
      type: "Crisis",
    },
    {
      name: "AASRA Mumbai",
      number: "9820466726",
      available: "24/7",
      type: "Crisis",
    },
    {
      name: "Sneha Chennai",
      number: "044-24640050",
      available: "24/7",
      type: "Crisis",
    },
    {
      name: "Vandrevala Foundation",
      number: "9999666555",
      available: "24/7",
      type: "Crisis",
    },
  ]

  const quickActions = [
    {
      title: "Call Emergency Services",
      description: "Immediate medical emergency",
      number: "108",
      icon: Phone,
      color: "bg-red-500",
    },
    {
      title: "Crisis Chat",
      description: "Text-based crisis support",
      action: "Start Chat",
      icon: MessageCircle,
      color: "bg-blue-500",
    },
    {
      title: "Find Nearby Hospital",
      description: "Locate nearest medical facility",
      action: "Find Location",
      icon: MapPin,
      color: "bg-green-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900">Emergency Support</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You're not alone. Immediate help is available 24/7. Your safety and wellbeing matter.
          </p>
        </div>

        {/* Crisis Alert */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <Heart className="h-5 w-5" />
              If you're in immediate danger
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700 mb-4">
              If you're having thoughts of self-harm or suicide, please reach out immediately. You deserve support and
              care.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Call 108 (Emergency Services)
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
                <Button className="w-full">{action.number ? `Call ${action.number}` : action.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Crisis Helplines
            </CardTitle>
            <CardDescription>Free, confidential support available 24/7. All calls are anonymous.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-900">{contact.name}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {contact.available}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {contact.type}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    {contact.number}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Planning */}
        <Card>
          <CardHeader>
            <CardTitle>Create Your Safety Plan</CardTitle>
            <CardDescription>Having a plan can help you stay safe during difficult times.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Warning Signs</h4>
                <p className="text-sm text-gray-600">Identify your personal warning signs</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Coping Strategies</h4>
                <p className="text-sm text-gray-600">List activities that help you feel better</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Support Contacts</h4>
                <p className="text-sm text-gray-600">Friends and family you can reach out to</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Professional Help</h4>
                <p className="text-sm text-gray-600">Your counselor or therapist contact</p>
              </div>
            </div>
            <Button className="w-full">Create My Safety Plan</Button>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                <div>
                  <h4 className="font-medium">Crisis Text Line</h4>
                  <p className="text-sm text-gray-600">Text HOME to 741741</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                <div>
                  <h4 className="font-medium">Online Crisis Chat</h4>
                  <p className="text-sm text-gray-600">Anonymous chat support</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                <div>
                  <h4 className="font-medium">Mental Health First Aid</h4>
                  <p className="text-sm text-gray-600">Learn to help others</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                <div>
                  <h4 className="font-medium">Campus Counseling</h4>
                  <p className="text-sm text-gray-600">Find your college resources</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
