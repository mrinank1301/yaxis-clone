"use client"
import { Button } from "@/components/ui/button"

interface CountrySelectorProps {
  selectedCountries: string[]
  onSelect: (country: string) => void
}

export function CountrySelector({ selectedCountries, onSelect }: CountrySelectorProps) {
  const countries = [
    "UK",
    "Canada",
    "Germany",
    "Australia",
    "Australia Partner",
    "Saskatchewan",
    "Quebec"
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Your Country Preference</h3>
      <div className="flex flex-wrap gap-3">
        {countries.map((country) => (
          <Button
            key={country}
            variant={selectedCountries.includes(country) ? "default" : "outline"}
            onClick={() => onSelect(country)}
            className="rounded-full"
          >
            {country}
          </Button>
        ))}
      </div>
    </div>
  )
}

