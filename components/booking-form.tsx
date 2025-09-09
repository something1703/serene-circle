"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Phone, Mail, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    contactMethod: "",
    contactInfo: "",
    preferredTime: "",
    urgency: "",
    concerns: "",
    previousCounseling: false,
    agreeToTerms: false,
  })
  const [anonymousId, setAnonymousId] = useState("")

  const generateAnonymousId = () => {
    const id = "SC" + Math.random().toString(36).substr(2, 8).toUpperCase()
    setAnonymousId(id)
    return id
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      const id = generateAnonymousId()
      setStep(2)
    } else {
      // Handle final submission
      console.log("Booking submitted:", { ...formData, anonymousId })
      setStep(3)
    }
  }

  if (step === 3) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
          <p className="text-muted-foreground mb-4">
            Your anonymous counseling session has been scheduled. Your unique ID is:
          </p>
          <div className="bg-muted p-4 rounded-lg mb-4">
            <code className="text-lg font-mono font-bold text-primary">{anonymousId}</code>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Please save this ID. You'll receive an OTP on your provided contact method 15 minutes before your session.
          </p>
          <Button onClick={() => (window.location.href = "/dashboard")} className="w-full">
            Go to Dashboard
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>{step === 1 ? "Book Your Session" : "Session Details"}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Your identity will remain completely anonymous. We only need minimal contact information to send you
                  session details.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="contactMethod">Preferred Contact Method *</Label>
                  <Select
                    value={formData.contactMethod}
                    onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="How should we contact you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone/WhatsApp</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contactInfo">
                    {formData.contactMethod === "phone" ? "Phone Number" : "Email Address"} *
                  </Label>
                  <div className="relative">
                    {formData.contactMethod === "phone" ? (
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    )}
                    <Input
                      id="contactInfo"
                      type={formData.contactMethod === "phone" ? "tel" : "email"}
                      placeholder={formData.contactMethod === "phone" ? "+91 XXXXX XXXXX" : "your@email.com"}
                      className="pl-10"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="preferredTime">Preferred Time Slot *</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="When would you like to talk?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      <SelectItem value="night">Night (8 PM - 11 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="urgency">How urgent is your need? *</Label>
                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (Within 24 hours)</SelectItem>
                      <SelectItem value="soon">Soon (Within 3 days)</SelectItem>
                      <SelectItem value="flexible">Flexible (Within a week)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Your anonymous ID: <strong>{anonymousId}</strong>. Please save this for future reference.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="concerns">What would you like to discuss? (Optional)</Label>
                  <Textarea
                    id="concerns"
                    placeholder="Share what's on your mind. This helps us match you with the right counselor."
                    value={formData.concerns}
                    onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="previousCounseling"
                    checked={formData.previousCounseling}
                    onCheckedChange={(checked) => setFormData({ ...formData, previousCounseling: checked as boolean })}
                  />
                  <Label htmlFor="previousCounseling" className="text-sm">
                    I have had counseling sessions before
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    required
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the privacy policy and terms of service *
                  </Label>
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between">
            {step === 2 && (
              <Button type="button" variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
            )}
            <Button type="submit" className="ml-auto" disabled={step === 2 && !formData.agreeToTerms}>
              {step === 1 ? "Continue" : "Book Session"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
