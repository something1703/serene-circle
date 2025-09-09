"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, X, MessageSquare, MapPin, Heart } from "lucide-react"
import Link from "next/link"

export function SOSButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const shareLocation = () => {
    setIsSharing(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const locationUrl = `https://maps.google.com/?q=${latitude},${longitude}`

          // Copy location to clipboard
          navigator.clipboard.writeText(`Emergency! I need help. My location: ${locationUrl}`)

          // Try to share via Web Share API if available
          if (navigator.share) {
            navigator.share({
              title: "Emergency Location",
              text: "I need immediate help!",
              url: locationUrl,
            })
          }

          setIsSharing(false)
          alert("Location copied to clipboard and ready to share!")
        },
        () => {
          setIsSharing(false)
          alert("Unable to get location. Please call emergency services directly.")
        },
      )
    }
  }

  const sendEmergencySMS = () => {
    const message = "EMERGENCY: I need immediate help. Please contact me or call emergency services."
    const smsUrl = `sms:?body=${encodeURIComponent(message)}`
    window.open(smsUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border-2 border-red-200 p-4 w-72">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-red-600 flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              Emergency Help
            </h3>
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-xs text-gray-600 font-medium">IMMEDIATE HELP:</p>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 border-red-300 hover:bg-red-50 bg-transparent"
                asChild
              >
                <a href="tel:108">
                  <Phone className="h-3 w-3 mr-1" />
                  Call 108
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 border-red-300 hover:bg-red-50 bg-transparent"
                asChild
              >
                <a href="tel:9152987821">
                  <Phone className="h-3 w-3 mr-1" />
                  Suicide Help
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-xs text-gray-600 font-medium">CRISIS HELPLINES:</p>
            <div className="space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start text-xs h-8 hover:bg-blue-50" asChild>
                <a href="tel:9820466726">
                  <Phone className="h-3 w-3 mr-2" />
                  AASRA: 9820466726
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-xs h-8 hover:bg-blue-50" asChild>
                <a href="tel:08046110007">
                  <Phone className="h-3 w-3 mr-2" />
                  Vandrevala: 08046110007
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-gray-600 font-medium">QUICK ACTIONS:</p>
            <Button
              onClick={shareLocation}
              disabled={isSharing}
              variant="outline"
              size="sm"
              className="w-full justify-start hover:bg-green-50 bg-transparent"
            >
              <MapPin className="h-4 w-4 mr-2" />
              {isSharing ? "Getting Location..." : "Share My Location"}
            </Button>
            <Button
              onClick={sendEmergencySMS}
              variant="outline"
              size="sm"
              className="w-full justify-start hover:bg-yellow-50 bg-transparent"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Send Emergency SMS
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start hover:bg-purple-50 bg-transparent"
              asChild
            >
              <Link href="/chatbot">
                <MessageSquare className="h-4 w-4 mr-2" />
                Crisis Chat Support
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start hover:bg-gray-50 bg-transparent"
              asChild
            >
              <Link href="/emergency">View All Resources</Link>
            </Button>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-red-500 hover:bg-red-600 text-white rounded-full w-14 h-14 shadow-lg animate-pulse hover:animate-none transition-all"
        size="lg"
        aria-label="Emergency SOS Help Button"
      >
        <AlertTriangle className="h-6 w-6" />
      </Button>
    </div>
  )
}
