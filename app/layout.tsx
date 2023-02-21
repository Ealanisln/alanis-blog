import 'tailwindcss/tailwind.css'

import { AnalyticsWrapper } from '../components/Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body 
        className="bg-white text-black">{children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
