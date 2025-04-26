// src/app/page.tsx
"use client"

import Link from "next/link"

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
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="max-w-md text-left text-white space-y-4">
          <h3 className="text-lg text-black uppercase tracking-wide">
          Welcome to my portfolio
          </h3>
        <h2 className="text-2xl text-primary text-black">Hey,</h2>
        <h1 className="font-playfair text-5xl text-secondary text-black">I’m Charanvardhan!</h1>
          <p className="text-base text-black">
            Machine Learning Engineer & Data Scientist with 2+ years’ experience
            in NLP, neural networks, and scalable Python-driven AI systems.
          </p>
        </div>
      </div>
    </section>
  )
}
