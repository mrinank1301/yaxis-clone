import { Facebook, Instagram, Linkedin, PinIcon as Pinterest, Twitter, Youtube } from 'lucide-react'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  const sections = {
    "ABOUT US": ["About Y Axis", "Careers", "CSR", "Office Network", "Press and News"],
    "TESTIMONIALS": ["Success Videos", "Customer Reviews", "Social Reviews", "Visa Success"],
    "BLOGS": ["Immigration News", "Immigration Blog", "Overseas Jobs", "Newsletter", "Visa Stories"],
    "INDIAN LANGUAGES": ["Hindi", "Tamil", "Gujarati","Telugu", "Marathi", "Kannada"],
    "FOREIGN LANGUAGES": ["Arabic", "French", "Chinese", "German", "Korean", "Ukrainian", "Italian"]
  }

  const countries = [
    {
      name: "INDIA",
      phone: "+91 7670800001",
      email: "info@y-axis.com",
      website: "www.y-axis.com"
    },
    {
      name: "AUSTRALIA",
      phone: "+61 399394818",
      email: "australia@y-axis.com.au",
      website: "www.y-axis.com.au"
    },
    {
      name: "UAE",
      phone: "+971 (0)42483900",
      email: "dubai@y-axis.com",
      website: "www.y-axis.ae"
    },
    {
      name: "UK",
      phone: "+44 1253226009",
      email: "info@y-axis.co.uk",
      website: "www.y-axis.co.uk"
    },
    {
      name: "Canada",
      phone: "+1 226 243 2213",
      email: "info@y-axis.ca",
      website: "www.y-axis.ca"
    }
  ]

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Object.entries(sections).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {countries.map((country) => (
              <div key={country.name} className="flex flex-col">
                <div className="font-bold">{country.name}</div>
                <div>{country.phone}</div>
                <div>{country.email}</div>
                <div>{country.website}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-4">FOLLOW US</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Pinterest className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">SUBSCRIBE NEWSLETTER</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  className="max-w-xs"
                />
                <Button>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

