import Link from "next/link"
import { Shield, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SereneCircle</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Providing stigma-free, AI-driven mental health support for college students across India. Your well-being
              is our priority.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>24/7 Helpline: 1800-XXX-XXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/counseling" className="text-muted-foreground hover:text-primary">
                  Counseling
                </Link>
              </li>
              <li>
                <Link href="/peer-support" className="text-muted-foreground hover:text-primary">
                  Peer Support
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/screening" className="text-muted-foreground hover:text-primary">
                  Self-Assessment
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="text-muted-foreground hover:text-primary">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-muted-foreground hover:text-primary">
                  Emergency Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Selector & Copyright */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">Available in:</span>
            <select className="bg-background border border-border rounded px-2 py-1 text-sm">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="mr">मराठी</option>
              <option value="ta">தமிழ்</option>
            </select>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 SereneCircle. All rights reserved. Made with ❤️ for student well-being.
          </p>
        </div>
      </div>
    </footer>
  )
}
