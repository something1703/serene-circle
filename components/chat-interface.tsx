"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Phone, Calendar, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  suggestions?: string[]
  actions?: Array<{
    type: "emergency" | "counselor" | "exercise"
    label: string
    action: () => void
  }>
}

const quickStarters = [
  "I'm feeling anxious about exams",
  "I can't sleep well lately",
  "I'm feeling overwhelmed",
  "I'm having trouble concentrating",
  "I feel lonely and isolated",
  "I'm stressed about my future",
]

const breathingExercise = {
  name: "4-7-8 Breathing",
  steps: [
    "Sit comfortably and close your eyes",
    "Inhale through your nose for 4 counts",
    "Hold your breath for 7 counts",
    "Exhale through your mouth for 8 counts",
    "Repeat 3-4 times",
  ],
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hello! I'm your AI mental health assistant. I'm here to listen and provide support whenever you need it. How are you feeling today?",
      timestamp: new Date(),
      suggestions: quickStarters.slice(0, 3),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase()
    let response = ""
    let suggestions: string[] = []
    let actions: Message["actions"] = []

    // Crisis detection
    if (
      lowerMessage.includes("suicide") ||
      lowerMessage.includes("kill myself") ||
      lowerMessage.includes("end it all") ||
      lowerMessage.includes("don't want to live")
    ) {
      response =
        "I'm really concerned about you right now. Your life has value and there are people who want to help. Please reach out to a crisis counselor immediately."
      actions = [
        {
          type: "emergency",
          label: "Call Crisis Helpline",
          action: () => window.open("tel:+911234567890"),
        },
        {
          type: "counselor",
          label: "Connect with Counselor",
          action: () => (window.location.href = "/counseling"),
        },
      ]
    }
    // Anxiety responses
    else if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety") || lowerMessage.includes("worried")) {
      response =
        "I understand you're feeling anxious. Anxiety is very common among students, and there are effective ways to manage it. Let's try a breathing exercise to help you feel more grounded right now."
      suggestions = [
        "Tell me more about what's making you anxious",
        "I'd like to try the breathing exercise",
        "What other coping strategies can help?",
      ]
      actions = [
        {
          type: "exercise",
          label: "Start Breathing Exercise",
          action: () => startBreathingExercise(),
        },
      ]
    }
    // Sleep issues
    else if (lowerMessage.includes("sleep") || lowerMessage.includes("insomnia") || lowerMessage.includes("tired")) {
      response =
        "Sleep problems can really affect how we feel and function. Good sleep hygiene is crucial for mental health. Here are some strategies that might help you get better rest."
      suggestions = [
        "What's keeping you awake?",
        "Tell me about your bedtime routine",
        "I want to learn sleep techniques",
      ]
    }
    // Overwhelm/stress
    else if (
      lowerMessage.includes("overwhelmed") ||
      lowerMessage.includes("stressed") ||
      lowerMessage.includes("pressure")
    ) {
      response =
        "Feeling overwhelmed is a sign that you're dealing with a lot right now. It's important to break things down into manageable pieces. Let's work together to help you feel more in control."
      suggestions = ["Help me prioritize my tasks", "I need stress management techniques", "I want to talk to someone"]
      actions = [
        {
          type: "counselor",
          label: "Book Counseling Session",
          action: () => (window.location.href = "/counseling"),
        },
      ]
    }
    // Loneliness
    else if (lowerMessage.includes("lonely") || lowerMessage.includes("isolated") || lowerMessage.includes("alone")) {
      response =
        "Feeling lonely can be really difficult, especially as a student. You're not alone in feeling this way, and there are ways to build meaningful connections. Have you considered joining peer support groups?"
      suggestions = ["Tell me about peer support", "How can I make friends?", "I want to connect with others"]
      actions = [
        {
          type: "counselor",
          label: "Join Peer Support",
          action: () => (window.location.href = "/peer-support"),
        },
      ]
    }
    // Concentration issues
    else if (
      lowerMessage.includes("concentrate") ||
      lowerMessage.includes("focus") ||
      lowerMessage.includes("distracted")
    ) {
      response =
        "Difficulty concentrating is very common, especially when we're stressed or anxious. There are several techniques that can help improve your focus and mental clarity."
      suggestions = [
        "What techniques can help me focus?",
        "Is this related to my mental health?",
        "I need study strategies",
      ]
    }
    // General positive response
    else {
      response =
        "Thank you for sharing that with me. It takes courage to reach out. I'm here to support you through whatever you're experiencing. Would you like to explore some coping strategies or talk more about how you're feeling?"
      suggestions = [
        "I'd like some coping strategies",
        "I want to talk more about my feelings",
        "Can you help me understand what I'm going through?",
      ]
    }

    return {
      id: Date.now().toString(),
      type: "bot",
      content: response,
      timestamp: new Date(),
      suggestions,
      actions,
    }
  }

  const startBreathingExercise = () => {
    const exerciseMessage: Message = {
      id: Date.now().toString(),
      type: "bot",
      content: `Let's do the ${breathingExercise.name} together:\n\n${breathingExercise.steps
        .map((step, index) => `${index + 1}. ${step}`)
        .join("\n")}\n\nTake your time with each step. How do you feel after completing the exercise?`,
      timestamp: new Date(),
      suggestions: ["I feel better", "I'd like to try another technique", "I still feel anxious"],
    }
    setMessages((prev) => [...prev, exerciseMessage])
  }

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = generateBotResponse(message)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bot className="w-5 h-5" />
          <span>AI Mental Health Assistant</span>
          <Badge variant="secondary" className="ml-auto">
            Online
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex items-start space-x-2 max-w-[80%]`}>
                  {message.type === "bot" && (
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 ${
                      message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                    {message.actions && message.actions.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.actions.map((action, index) => (
                          <Button
                            key={index}
                            size="sm"
                            variant={action.type === "emergency" ? "destructive" : "secondary"}
                            onClick={action.action}
                            className="mr-2"
                          >
                            {action.type === "emergency" && <Phone className="w-4 h-4 mr-1" />}
                            {action.type === "counselor" && <Calendar className="w-4 h-4 mr-1" />}
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                  {message.type === "user" && (
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-secondary" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Suggestions */}
            {messages.length > 0 &&
              messages[messages.length - 1].type === "bot" &&
              messages[messages.length - 1].suggestions && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {messages[messages.length - 1].suggestions!.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-sm"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t p-4">
          <Alert className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              This AI assistant provides support but is not a replacement for professional mental health care. In
              emergencies, please contact crisis services immediately.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1"
            />
            <Button type="submit" disabled={!inputValue.trim() || isTyping}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
