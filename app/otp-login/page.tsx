"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Smartphone, Shield, ArrowRight } from "lucide-react"

export default function OTPLoginPage() {
  const [step, setStep] = useState(1) // 1: Enter ID, 2: Enter OTP, 3: Success
  const [anonymousId, setAnonymousId] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
    }, 2000)
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false)
      setStep(3)
      // Redirect to dashboard after success
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 2000)
    }, 2000)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Secure Access</h1>
            <p className="text-muted-foreground">Access your sessions using your anonymous ID and OTP verification</p>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Enter Your Anonymous ID</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSendOTP} className="space-y-4">
                  <div>
                    <Label htmlFor="anonymousId">Anonymous ID</Label>
                    <Input
                      id="anonymousId"
                      placeholder="SC12345678"
                      value={anonymousId}
                      onChange={(e) => setAnonymousId(e.target.value.toUpperCase())}
                      required
                    />
                    <p className="text-sm text-muted-foreground mt-1">This was provided when you booked your session</p>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending OTP..." : "Send OTP"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Enter OTP</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="mb-4">
                  <AlertDescription>
                    We've sent a 6-digit code to your registered contact method. Please enter it below.
                  </AlertDescription>
                </Alert>

                <form onSubmit={handleVerifyOTP} className="space-y-4">
                  <div>
                    <Label htmlFor="otp">6-Digit OTP</Label>
                    <Input
                      id="otp"
                      placeholder="123456"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      required
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button type="submit" className="flex-1" disabled={isLoading || otp.length !== 6}>
                      {isLoading ? "Verifying..." : "Verify"}
                    </Button>
                  </div>

                  <Button type="button" variant="ghost" className="w-full text-sm">
                    Didn't receive code? Resend OTP
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Access Granted!</h3>
                <p className="text-muted-foreground mb-4">Welcome back. Redirecting to your secure dashboard...</p>
                <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
