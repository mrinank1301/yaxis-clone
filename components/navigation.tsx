import { Search } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  const navItems = [
    { title: "Free Assessment", href: "/assessment", color: "border-red-500" },
    { title: "Migrate", href: "/migrate", color: "border-purple-500" },
    { title: "Work", href: "/work", color: "border-teal-500" },
    { title: "Study", href: "/study", color: "border-yellow-500" },
    { title: "Visa", href: "/visa", color: "border-orange-500" },
    { title: "Coaching", href: "/coaching", color: "border-blue-500" },
    { title: "Admissions", href: "/admissions", color: "border-green-500" },
    { title: "H1B Jobs", href: "/h1b-jobs", color: "border-indigo-500" },
    { title: "Jobs Abroad", href: "/jobs-abroad", color: "border-red-500" },
  ]

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image src="/placeholder.svg?height=50&width=120" alt="Y-AXIS Logo" width={120} height={50} />
          </Link>
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`px-3 py-2 hover:text-primary border-b-2 border-transparent hover:${item.color}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}

