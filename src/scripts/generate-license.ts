import fs from "fs"

const domain = process.argv[2]
const expires = process.argv[3]

if (!domain || !expires) {
  console.log("Usage: ts-node generate-license.ts <domain> <YYYY-MM-DD>")
  process.exit(1)
}

const licenseData = {
  domain,
  expires,
}

const key = Buffer.from(JSON.stringify(licenseData)).toString("base64")

console.log(`✅ License key for ${domain}:`)
console.log(key)
