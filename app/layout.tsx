import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Expiry Manager — Track & Rotate API Keys Before They Expire',
  description: 'Dashboard that tracks API key expiration dates, sends renewal reminders, and provides guided rotation workflows for popular services like AWS, GitHub, and Stripe.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b1a94b97-44a6-4539-a0ae-fa2c9157c21d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
