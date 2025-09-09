"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, X } from "lucide-react"
import Link from "next/link"

export function SOSButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border p-4 w-64">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-red-600">Emergency Help</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-red-600 border-red-200 bg-transparent"
              asChild
            >
              <a href="tel:108">
                <Phone className="h-4 w-4 mr-2" />
                Call 108 (Emergency)
              </a>
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
              <Link href="/emergency">View All Resources</Link>
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
              <Link href="/chatbot">Crisis Chat Support</Link>
            </Button>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-red-500 hover:bg-red-600 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
        size="lg"
      >
        <AlertTriangle className="h-6 w-6" />
      </Button>
    </div>
  )
}
