// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Charanvardhan Mannuru | Portfolio',
  description: 'Master’s candidate in CS at UGA — ML, AI & Cybersecurity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-montserrat antialiased text-gray-800">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto flex space-x-6 p-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/projects" className="hover:text-primary">Projects</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="container mx-auto p-8">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t py-4 mt-12">
          <div className="container mx-auto text-center text-sm text-gray-500">
            © 2025 Charanvardhan Mannuru
          </div>
        </footer>
      </body>
    </html>
  )
}
