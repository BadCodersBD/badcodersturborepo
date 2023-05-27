import '../styles/globals.css'

export const metadata = {
  title: 'Foodies',
  description: 'A Food Delivery Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
