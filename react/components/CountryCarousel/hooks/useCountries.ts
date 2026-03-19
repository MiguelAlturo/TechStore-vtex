import { useEffect, useState } from 'react'

import { getCountries, saveLead } from '../services/countryService'

interface Country {
  name: {
    official: string
    common: string
  }
  capital?: string[]
  flags: {
    svg: string
  }
}

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  // 🔥 FETCH
  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  // 🔥 SLIDER AUTO
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!countries.length) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === countries.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [countries])

  // 🔥 SUBMIT
  const submitLead = async (name: string, email: string) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!name || !email || !isValidEmail) {
      setStatus('error')

      return
    }

    setStatus('loading')

    try {
      await saveLead({
        name,
        email,
        country: selectedCountry,
      })

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return {
    countries,
    loading,
    error,
    selectedCountry,
    setSelectedCountry,
    currentIndex,
    status,
    setStatus,
    submitLead,
  }
}
