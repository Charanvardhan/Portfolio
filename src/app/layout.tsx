// src/app/layout.tsx
import './globals.css'

export const metadata = { /* … */ }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-montserrat antialiased bg-black text-gray-200 scroll-smooth">

        {/* Header */}
        <header className="bg-[#c0beb6] shadow-md fixed top-0 w-full z-50">
          <nav className="container mx-auto flex flex-wrap space-x-6 p-4 text-black font-bold">
          <a href="#home" className="hover:text-green-700 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-green-700 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-green-700 transition-colors duration-300">Skills</a>
          <a href="#experience-education" data-tab="experience" className="hover:text-green-700 transition-colors duration-300">Experience</a>
          <a href="#experience-education" data-tab="research" className="hover:text-green-700 transition-colors duration-300">Research</a>
          <a href="#experience-education" data-tab="education" className="hover:text-green-700 transition-colors duration-300">Education</a>
          <a href="#certifications" className="hover:text-green-700 transition-colors duration-300">Certifications</a>
          </nav>
        </header>

        {/* Page Content */}
        <main className="container mx-auto pt-24 p-8">{children}</main>

        {/* Footer */}
        <footer className="bg-[#c0beb6] border-t border-gray-400 py-4 mt-12">
          <div className="container mx-auto text-center text-sm text-black font-semibold">
            © 2025 Charanvardhan Mannuru
          </div>
        </footer>
      </body>
    </html>
  )
}
