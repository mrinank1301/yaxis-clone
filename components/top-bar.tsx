import { Phone, PhoneIcon as WhatsApp } from 'lucide-react'
import Link from "next/link"

export function TopBar() {
  return (
    <div className="hidden md:block bg-white py-2 border-b">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>7670 800 000</span>
          </div>
          <div className="flex items-center gap-2">
            <WhatsApp className="h-4 w-4 text-green-500" />
            <span>+91 880 221 9999</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/signup" className="hover:text-primary">
            Signup
          </Link>
          <Link href="/login" className="hover:text-primary">
            Login
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

