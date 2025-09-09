import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Calendar,
  AlertTriangle,
  TrendingUp,
  MessageSquare,
  Shield,
  BookOpen,
  Heart,
  Clock,
  CheckCircle,
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Active Students",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Counseling Sessions",
      value: "89",
      change: "+8%",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Crisis Alerts",
      value: "3",
      change: "-25%",
      icon: AlertTriangle,
      color: "text-red-600",
    },
    {
      title: "Engagement Rate",
      value: "78%",
      change: "+15%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const recentAlerts = [
    {
      id: 1,
      type: "High Risk",
      student: "Student #1247",
      time: "2 hours ago",
      status: "Resolved",
      severity: "high",
    },
    {
      id: 2,
      type: "Missed Appointment",
      student: "Student #0892",
      time: "4 hours ago",
      status: "Follow-up Sent",
      severity: "medium",
    },
    {
      id: 3,
      type: "Crisis Chat",
      student: "Student #1156",
      time: "1 day ago",
      status: "Counselor Assigned",
      severity: "high",
    },
  ]

  const counselors = [
    {
      name: "Dr. Priya Sharma",
      specialization: "Anxiety & Depression",
      availability: "Available",
      sessions: 23,
      rating: 4.9,
    },
    {
      name: "Dr. Rajesh Kumar",
      specialization: "Stress Management",
      availability: "Busy",
      sessions: 18,
      rating: 4.8,
    },
    {
      name: "Dr. Meera Patel",
      specialization: "Crisis Intervention",
      availability: "Available",
      sessions: 31,
      rating: 4.9,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">SereneCircle Mental Health Platform</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <Shield className="h-4 w-4 mr-2" />
              Privacy Settings
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} from last month</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="counselors">Counselors</TabsTrigger>
            <TabsTrigger value="alerts">Crisis Alerts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Recent Alerts
                  </CardTitle>
                  <CardDescription>Crisis interventions and high-priority notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAlerts.map((alert) => (
                      <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={alert.severity === "high" ? "destructive" : "secondary"}
                              className="text-xs"
                            >
                              {alert.type}
                            </Badge>
                            <span className="text-sm font-medium">{alert.student}</span>
                          </div>
                          <p className="text-xs text-gray-600">{alert.time}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {alert.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Emergency Meeting
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Campus Alert
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Add New Counselor
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Update Resources
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Engagement Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Student Engagement Metrics</CardTitle>
                <CardDescription>Platform usage and wellness activity tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Daily Check-ins</span>
                      <span className="text-sm text-gray-600">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Resource Usage</span>
                      <span className="text-sm text-gray-600">84%</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Chatbot Interactions</span>
                      <span className="text-sm text-gray-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="counselors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Counselor Management</CardTitle>
                <CardDescription>Manage counselor schedules, availability, and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {counselors.map((counselor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h4 className="font-medium">{counselor.name}</h4>
                        <p className="text-sm text-gray-600">{counselor.specialization}</p>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={counselor.availability === "Available" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {counselor.availability}
                          </Badge>
                          <span className="text-xs text-gray-600">{counselor.sessions} sessions this month</span>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">{counselor.rating}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          View Schedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Crisis Alert Management
                </CardTitle>
                <CardDescription>Monitor and respond to student crisis situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-red-200">
                      <CardContent className="p-4 text-center">
                        <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                        <h3 className="font-semibold text-red-700">Active Alerts</h3>
                        <p className="text-2xl font-bold text-red-600">2</p>
                      </CardContent>
                    </Card>
                    <Card className="border-yellow-200">
                      <CardContent className="p-4 text-center">
                        <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                        <h3 className="font-semibold text-yellow-700">Pending Review</h3>
                        <p className="text-2xl font-bold text-yellow-600">5</p>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200">
                      <CardContent className="p-4 text-center">
                        <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                        <h3 className="font-semibold text-green-700">Resolved Today</h3>
                        <p className="text-2xl font-bold text-green-600">8</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>Mental health trends and platform performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600 mb-4">Detailed analytics and reporting features coming soon</p>
                  <Button>Request Analytics Access</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resource Management</CardTitle>
                <CardDescription>Manage platform content, articles, and support materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                    <div>
                      <h4 className="font-medium">Update Articles</h4>
                      <p className="text-sm text-gray-600">Manage mental health resources</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                    <div>
                      <h4 className="font-medium">Emergency Contacts</h4>
                      <p className="text-sm text-gray-600">Update crisis helpline numbers</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                    <div>
                      <h4 className="font-medium">Screening Tools</h4>
                      <p className="text-sm text-gray-600">Configure assessment forms</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 text-left bg-transparent">
                    <div>
                      <h4 className="font-medium">Multilingual Content</h4>
                      <p className="text-sm text-gray-600">Add translations</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
