"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Heart, Shield, Clock, UserPlus } from "lucide-react"
import Link from "next/link"

export default function PeerSupportPage() {
  const [activeTab, setActiveTab] = useState("chat-rooms")

  const chatRooms = [
    { id: 1, name: "Anxiety Support", members: 24, active: true, description: "Safe space for anxiety discussions" },
    { id: 2, name: "Study Stress", members: 18, active: true, description: "Academic pressure support" },
    { id: 3, name: "Sleep Issues", members: 12, active: false, description: "Sleep problems and solutions" },
    { id: 4, name: "Social Anxiety", members: 31, active: true, description: "Building social confidence" },
  ]

  const supportGroups = [
    { id: 1, name: "First Year Adjustment", time: "7:00 PM", day: "Monday", spots: 3 },
    { id: 2, name: "Exam Stress Management", time: "6:30 PM", day: "Wednesday", spots: 5 },
    { id: 3, name: "Building Confidence", time: "8:00 PM", day: "Friday", spots: 2 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Peer Support Community</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connect with fellow students who understand your journey. Share experiences, find support, and build
            meaningful connections.
          </p>
        </div>

        {/* Safety Notice */}
        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-amber-600" />
              <p className="text-amber-800">
                <strong>Safe Space Guidelines:</strong> All conversations are anonymous. Be respectful, supportive, and
                follow our community guidelines.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button
            variant={activeTab === "chat-rooms" ? "default" : "outline"}
            onClick={() => setActiveTab("chat-rooms")}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Chat Rooms
          </Button>
          <Button
            variant={activeTab === "support-groups" ? "default" : "outline"}
            onClick={() => setActiveTab("support-groups")}
            className="flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            Support Groups
          </Button>
          <Button
            variant={activeTab === "peer-matching" ? "default" : "outline"}
            onClick={() => setActiveTab("peer-matching")}
            className="flex items-center gap-2"
          >
            <UserPlus className="h-4 w-4" />
            Find a Peer
          </Button>
        </div>

        {/* Chat Rooms Tab */}
        {activeTab === "chat-rooms" && (
          <div className="grid md:grid-cols-2 gap-6">
            {chatRooms.map((room) => (
              <Card key={room.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{room.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant={room.active ? "default" : "secondary"}>{room.active ? "Active" : "Quiet"}</Badge>
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Users className="h-4 w-4" />
                        {room.members}
                      </div>
                    </div>
                  </div>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/peer-support/chat/${room.id}`}>
                    <Button className="w-full">Join Chat Room</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Support Groups Tab */}
        {activeTab === "support-groups" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportGroups.map((group) => (
              <Card key={group.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {group.day} {group.time}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {group.spots} spots available
                    </Badge>
                  </div>
                  <Button className="w-full" disabled={group.spots === 0}>
                    {group.spots === 0 ? "Full" : "Join Group"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Peer Matching Tab */}
        {activeTab === "peer-matching" && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-emerald-600" />
                  Find Your Support Buddy
                </CardTitle>
                <CardDescription>
                  Get matched with a peer who shares similar experiences and can provide mutual support.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Academic Year</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>First Year</option>
                      <option>Second Year</option>
                      <option>Third Year</option>
                      <option>Final Year</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Support Area</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Anxiety & Stress</option>
                      <option>Academic Pressure</option>
                      <option>Social Issues</option>
                      <option>Sleep Problems</option>
                      <option>General Support</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Communication</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="communication" value="chat" />
                      Text Chat
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="communication" value="voice" />
                      Voice Calls
                    </label>
                  </div>
                </div>
                <Button className="w-full">Find My Support Buddy</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
