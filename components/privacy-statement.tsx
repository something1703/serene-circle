import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Trash2 } from "lucide-react"

export function PrivacyStatement() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Privacy Protection</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <Eye className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Anonymous Identity</h4>
              <p className="text-sm text-muted-foreground">
                You'll be assigned a unique ID. Your real name is never stored or shared.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Lock className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Encrypted Communication</h4>
              <p className="text-sm text-muted-foreground">
                All conversations are end-to-end encrypted and stored securely.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Trash2 className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Data Deletion</h4>
              <p className="text-sm text-muted-foreground">
                Session records are automatically deleted after 90 days unless you choose to keep them.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Contact method (phone/email) for session notifications</li>
            <li>• Preferred time slots for scheduling</li>
            <li>• General concerns (optional, helps with counselor matching)</li>
            <li>• Session feedback (anonymous, for service improvement)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Rights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Request data deletion at any time</li>
            <li>• Access your session history</li>
            <li>• Change contact preferences</li>
            <li>• Opt out of follow-up communications</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
