export interface License {
  domain: string
  expires: string // Format: YYYY-MM-DD
}

export const validateLicense = (licenseKey: string | undefined): boolean => {
  try {
    if (!licenseKey) return false

    const decoded = JSON.parse(atob(licenseKey)) as License

    const today = new Date()
    const expiry = new Date(decoded.expires)
    const hostname =
      typeof window !== "undefined" ? window.location.hostname : ""

    const domainMatch = hostname.includes(decoded.domain)
    const notExpired = expiry > today

    return domainMatch && notExpired
  } catch (error) {
    console.error("License validation failed:", error)
    return false
  }
}
