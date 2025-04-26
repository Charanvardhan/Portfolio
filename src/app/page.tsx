// src/app/page.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const roles = [
  "🤖 Machine Learning Engineer",
  "🧑‍💻 Data Science Intern",
  "🔬 Graduate Research Assistant",
  "🎓 Graduate Teaching Assistant",
]

function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 100,
  pauseTime = 1500,
}) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const chars = Array.from(currentWord)      // <-- split into correct codepoints
    let timeout

    if (!isDeleting && charIndex < chars.length) {
      // typing forward
      timeout = setTimeout(() => {
        setCharIndex(ci => ci + 1)
        setText(chars.slice(0, charIndex + 1).join(""))
      }, typingSpeed)

    } else if (isDeleting && charIndex > 0) {
      // deleting backward
      timeout = setTimeout(() => {
        setCharIndex(ci => ci - 1)
        setText(chars.slice(0, charIndex - 1).join(""))
      }, deletingSpeed)

    } else {
      // pause at full word or after deletion
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      } else {
        setIsDeleting(false)
        setWordIndex((wi) => (wi + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <p className="inline text-1xl sm:text-2xl font-playfair font-bold text-[#594e46]">
      {text}
      <span className="blink-cursor">|</span>
    </p>
  )
}


export default function HomePage() {
  return (
    <section
      className="
        relative flex items-center
        /* make full-bleed */
        left-1/2 -translate-x-1/2
        w-full
        /* control height */
        h-[60vh] max-h-[370px]
        /* background */
        bg-[url('/images/CoverPhotoLinkedin.png')]
        bg-cover bg-no-repeat
        bg-right 
        overflow-hidden rounded-3xl
      "
    >
      {/* dark overlay */}
      {/* <div className="absolute inset-0 bg-black/5" /> */}

      {/* content */}
      <div className="relative z-10 w-full px-6 sm:px-20">
        <div className="max-w-md text-center space-y-5 text-black font-bold">
          {/* Greeting */}
          <h2 className="text-5xl font-playfair mb-4">
            👋 Hey, I'm Charanvardhan,
          </h2>

          {/* Typed roles */}
          <Typewriter words={roles} />

        </div>
      </div>
    </section>
  )
}
