"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, User, Clock } from "lucide-react"

interface PeerMatch {
  id: number
  name: string
  year: string
  interests: string[]
  supportArea: string
  compatibility: number
  isOnline: boolean
}

export default function PeerMatching() {
  const [matches, setMatches] = useState<PeerMatch[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [preferences, setPreferences] = useState({
    year: "",
    supportArea: "",
    communication: "",
  })

  const findMatches = () => {
    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      const mockMatches: PeerMatch[] = [
        {
          id: 1,
          name: "Anonymous Peer A",
          year: "Second Year",
          interests: ["Reading", "Music", "Meditation"],
          supportArea: "Anxiety & Stress",
          compatibility: 92,
          isOnline: true,
        },
        {
          id: 2,
          name: "Anonymous Peer B",
          year: "Second Year",
          interests: ["Sports", "Art", "Journaling"],
          supportArea: "Academic Pressure",
          compatibility: 87,
          isOnline: false,
        },
        {
          id: 3,
          name: "Anonymous Peer C",
          year: "Third Year",
          interests: ["Photography", "Cooking", "Yoga"],
          supportArea: "Social Issues",
          compatibility: 84,
          isOnline: true,
        },
      ]
      setMatches(mockMatches)
      setIsSearching(false)
    }, 2000)
  }

  const connectWithPeer = (peerId: number) => {
    alert(`Connection request sent to peer ${peerId}! They will be notified and can choose to connect.`)
  }

  return (
    <div className="space-y-6">
      {/* Matching Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-emerald-600" />
            Find Your Support Buddy
          </CardTitle>
          <CardDescription>
            Get matched with peers who share similar experiences and can provide mutual support.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Academic Year</label>
              <select
                className="w-full p-2 border rounded-md"
                value={preferences.year}
                onChange={(e) => setPreferences({ ...preferences, year: e.target.value })}
              >
                <option value="">Select Year</option>
                <option value="first">First Year</option>
                <option value="second">Second Year</option>
                <option value="third">Third Year</option>
                <option value="final">Final Year</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Support Area</label>
              <select
                className="w-full p-2 border rounded-md"
                value={preferences.supportArea}
                onChange={(e) => setPreferences({ ...preferences, supportArea: e.target.value })}
              >
                <option value="">Select Area</option>
                <option value="anxiety">Anxiety & Stress</option>
                <option value="academic">Academic Pressure</option>
                <option value="social">Social Issues</option>
                <option value="sleep">Sleep Problems</option>
                <option value="general">General Support</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Communication</label>
              <select
                className="w-full p-2 border rounded-md"
                value={preferences.communication}
                onChange={(e) => setPreferences({ ...preferences, communication: e.target.value })}
              >
                <option value="">Select Type</option>
                <option value="chat">Text Chat</option>
                <option value="voice">Voice Calls</option>
                <option value="both">Both</option>
              </select>
            </div>
          </div>
          <Button
            onClick={findMatches}
            disabled={isSearching || !preferences.year || !preferences.supportArea}
            className="w-full"
          >
            {isSearching ? "Finding Matches..." : "Find My Support Buddy"}
          </Button>
        </CardContent>
      </Card>

      {/* Search Results */}
      {matches.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-800">Your Matches</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {matches.map((match) => (
              <Card key={match.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <User className="h-5 w-5" />
                      {match.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant={match.isOnline ? "default" : "secondary"}>
                        {match.isOnline ? "Online" : "Offline"}
                      </Badge>
                      <Badge variant="outline" className="text-emerald-600">
                        {match.compatibility}% match
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>
                    {match.year} • {match.supportArea}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Shared Interests:</p>
                    <div className="flex flex-wrap gap-1">
                      {match.interests.map((interest, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => connectWithPeer(match.id)} className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Clock className="h-4 w-4 mr-2" />
                      Schedule Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
