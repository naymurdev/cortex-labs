import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Evlogia",
  url: "https://www.evlogia.ai",
  ogImage: "https://www.evlogia.ai/og.jpg",
  description:
    "We are an AI-driven company creating intelligent solutions to empower businesses and individuals, from predictive analytics to automation.",
  links: {
    twitter: "https://twitter.com/naymur_dev",
    linkedin: "https://www.linkedin.com/in/naymur-rahman",
    github: "https://github.com/naymurdev",
  },
};


// Generate a secure token based on the password
export function generateSecureToken(password: string): string {
  const timestamp = Date.now()
  const uuid = uuidv4()

  // Create a hash-like string using the password
  const passwordHash = btoa(password).replace(/[^a-zA-Z0-9]/g, "")
  const timestampHash = btoa(timestamp.toString()).replace(/[^a-zA-Z0-9]/g, "")

  // Combine everything into a secure token
  const tokenData = {
    uuid,
    passwordHash: passwordHash.substring(0, 16),
    timestampHash: timestampHash.substring(0, 8),
    timestamp,
  }

  // Create the final token by encoding the data
  const tokenString = btoa(JSON.stringify(tokenData))
  return tokenString
}

// Validate if the token was generated with the correct password
export function validateToken(token: string, password: string): boolean {
  if (!token || !password) return false

  try {
    // Decode the token
    const decodedToken = JSON.parse(atob(token))

    // Check if token has required fields
    if (!decodedToken.uuid || !decodedToken.passwordHash || !decodedToken.timestampHash) {
      return false
    }

    // Generate the expected password hash
    const expectedPasswordHash = btoa(password)
      .replace(/[^a-zA-Z0-9]/g, "")
      .substring(0, 16)

    // Compare the password hashes
    return decodedToken.passwordHash === expectedPasswordHash
  } catch (error) {
    console.error("Token validation error:", error)
    return false
  }
}

// Check if token is expired (optional - you can set expiration time)
export function isTokenExpired(token: string, expirationHours = 24): boolean {
  try {
    const decodedToken = JSON.parse(atob(token))

    if (!decodedToken.timestamp) return true

    const now = Date.now()
    const tokenAge = now - decodedToken.timestamp
    const maxAge = expirationHours * 60 * 60 * 1000 // Convert hours to milliseconds

    return tokenAge > maxAge
  } catch (error) {
    return true
  }
}
