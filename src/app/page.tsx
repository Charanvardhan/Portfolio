// src/app/page.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

// 1. Define your rotating roles
const roles = [
  "Machine Learning Engineer",
  "Data Science Intern",
  "Gradeuate Research Assistant",
  "Graduate Teachuing Assistant",
]

// 2. Simple Typewriter component (JS only)
function Typewriter({ words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500 }) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout

    if (!isDeleting && text.length < currentWord.length) {
      // typing mode
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        typingSpeed
      )
    } else if (isDeleting && text.length > 0) {
      // deleting mode
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deletingSpeed
      )
    } else {
      // pause, then toggle delete or advance
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      } else {
        setIsDeleting(false)
        setWordIndex((idx) => (idx + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return <p className="text-base text-secondary">{text}&nbsp;</p>
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
        <div className="max-w-md text-left space-y-4 text-black">
          {/* Greeting */}
          <h2 className="text-5xl text-primary">
            👋 Hello, I'm Charanvardhan,
          </h2>

          {/* Typed roles */}
          <Typewriter words={roles} />

          {/* CTAs (optional) */}
        </div>
      </div>
    </section>
  )
}
