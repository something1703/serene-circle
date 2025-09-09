"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिंदी" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
]

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  return (
    <Card className="w-fit">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Globe className="w-5 h-5 text-primary" />
          <span className="font-medium">Choose Language:</span>
          <div className="flex space-x-2">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={selectedLanguage === lang.code ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLanguage(lang.code)}
              >
                {lang.native}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
