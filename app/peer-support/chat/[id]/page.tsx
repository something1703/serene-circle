"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Users, ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Message {
  id: number
  user: string
  message: string
  timestamp: string
  isOwn: boolean
}

export default function ChatRoomPage() {
  const params = useParams()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user: "Anonymous Student",
      message: "Hey everyone, feeling really anxious about upcoming exams. Anyone else?",
      timestamp: "2:30 PM",
      isOwn: false,
    },
    {
      id: 2,
      user: "Supportive Peer",
      message: "I totally understand! I found that breaking study sessions into smaller chunks really helps.",
      timestamp: "2:32 PM",
      isOwn: false,
    },
    {
      id: 3,
      user: "You",
      message: "Thanks for sharing! What techniques work best for you?",
      timestamp: "2:35 PM",
      isOwn: true,
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [onlineUsers] = useState(12)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const roomNames: { [key: string]: string } = {
    "1": "Anxiety Support",
    "2": "Study Stress",
    "3": "Sleep Issues",
    "4": "Social Anxiety",
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        user: "You",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
      }
      setMessages([...messages, message])
      setNewMessage("")

      // Simulate response after 2-3 seconds
      setTimeout(
        () => {
          const responses = [
            "That's really helpful, thank you for sharing!",
            "I can relate to that feeling. You're not alone.",
            "Have you tried talking to a counselor about this?",
            "Thanks for being so open. It helps to know others understand.",
            "That's a great suggestion! I'll try that approach.",
          ]
          const randomResponse = responses[Math.floor(Math.random() * responses.length)]
          const responseMessage: Message = {
            id: messages.length + 2,
            user: "Supportive Peer",
            message: randomResponse,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            isOwn: false,
          }
          setMessages((prev) => [...prev, responseMessage])
        },
        2000 + Math.random() * 2000,
      )
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/peer-support">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{roomNames[params.id as string] || "Chat Room"}</h1>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Users className="h-4 w-4" />
                {onlineUsers} online
                <Badge variant="secondary">Active</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Notice */}
        <Card className="mb-4 border-amber-200 bg-amber-50">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-amber-600" />
              <span className="text-amber-800">
                Remember: Be respectful, supportive, and maintain anonymity. Report any inappropriate behavior.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Live Chat</CardTitle>
          </CardHeader>

          {/* Messages Area */}
          <CardContent className="flex-1 overflow-y-auto space-y-4 pb-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isOwn ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-800"
                  }`}
                >
                  <div className="text-xs opacity-75 mb-1">{message.user}</div>
                  <div className="text-sm">{message.message}</div>
                  <div className="text-xs opacity-75 mt-1">{message.timestamp}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message... (Press Enter to send)"
                className="flex-1 p-2 border rounded-md resize-none"
                rows={2}
              />
              <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
