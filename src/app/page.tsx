"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// Font Awesome
import {
  FaPython,
  FaCogs,
  FaCode,
  FaHtml5,
  FaGitAlt,
  FaAws,
  FaLinux,
  FaCloud,
  FaServer,
  FaBrain,
  FaChartBar,
  FaMicrosoft
} from "react-icons/fa"

// Ant Design
import { AiOutlineRobot } from "react-icons/ai"

// Game Icons
import { GiDatabase } from "react-icons/gi"

// Devicons (for VS Code)
import { DiVisualstudio } from "react-icons/di"

// Simple Icons
import {
  SiJavascript,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiR,
} from "react-icons/si"




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
  // text-[#594e46]
  return (
    <p className="inline text-1xl sm:text-2xl font-playfair font-bold text-[#594e46]">
      {text}
      <span className="blink-cursor">|</span>
    </p>
  )
}


export default function HomePage() {
  return (
    <>
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
        <div className="absolute inset-0 bg-black/25" />

        {/* content */}
        <div className="relative z-10 w-full px-6 sm:px-20">
          <div className="max-w-md text-center space-y-5 text-black font-bold">
            {/* Greeting */}
            <h2 className="text-5xl font-playfair mb-4">
              👋 Hey, I'm Charanvardhan!
            </h2>

            {/* Typed roles */}
            <Typewriter words={roles} />

            {/* Social links */}
            <div className="flex justify-center gap-8 mt-9">
              <a href="https://github.com/charanvardhan" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/github.svg"
                  alt="GitHub"
                  width={28}
                  height={32}
                  className="hover:opacity-80"
                />
              </a>
              <a href="https://www.linkedin.com/in/charanvardhanreddym/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="hover:opacity-80"
                />
              </a>
              <a href="mailto:charanvardhanreddym@gmail.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/gmail.svg"
                  alt="Gmail"
                  width={32}
                  height={32}
                  className="hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 w-full bg-black">
        <h2 className="font-playfair text-4xl text-primary text-center mb-8 font-bold">
          About Me
        </h2>

        <div className="w-full max-w-5xl mx-auto text-center space-y-16 font-bold">
          <p className="font-montserrat text-gray-200">
            I’m a Machine Learning Engineer & Data Scientist with over two years of
            experience in advanced NLP, ML optimizations, and data-driven analysis.
            Currently pursuing an MS in Computer Science at UGA, I’m passionate
            about building scalable AI systems with Python and exploring cutting-edge
            LLMs and neural networks.
          </p>


          {/* ——— Skills ——— */}
          <h2 className="font-playfair text-4xl text-primary text-center mb-12 font-bold">
            Skills
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8">
            {/* Programming & Scripting */}
            <div className="p-6 bg-card rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-xl text-secondary mb-4">
                Programming & Scripting
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center space-y-2">
                  <FaPython size={32} />
                  <span className="text-sm text-gray-700">Python</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <FaCode size={32} />
                  <span className="text-sm text-gray-700">Java</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <SiR size={32} />
                  <span className="text-sm text-gray-700">R</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <SiJavascript size={32} />
                  <span className="text-sm text-gray-700">JavaScript</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <FaHtml5 size={32} />
                  <span className="text-sm text-gray-700">HTML5</span>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="p-6 bg-card rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-xl text-secondary mb-4">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center space-y-2">
                  <SiPandas size={32} />
                  <span className="text-sm text-gray-700">Pandas</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <SiScikitlearn size={32} />
                  <span className="text-sm text-gray-700">Scikit-learn</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <SiTensorflow size={32} />
                  <span className="text-sm text-gray-700">TensorFlow</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <FaCogs size={32} title="PyTorch" />
                  <span className="text-sm text-gray-700">PyTorch</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <SiDjango size={32} />
                  <span className="text-sm text-gray-700">Django</span>
                </div>
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="p-6 bg-card rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-xl text-secondary mb-4">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center space-y-2">
                  <FaGitAlt size={32} />
                  <span className="text-sm text-gray-700">Git</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <FaServer size={32} />
                  <span className="text-sm text-gray-700">Apache Spark</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <FaAws size={32} />
                  <span className="text-sm text-gray-700">AWS</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <FaMicrosoft size={32} />
                  <span className="text-sm text-gray-700">Azure</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <FaLinux size={32} />
                  <span className="text-sm text-gray-700">Linux</span>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="p-6 bg-card rounded-lg shadow-md text-center">
              <h3 className="font-playfair text-xl text-secondary mb-4">
                Databases
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center space-y-2">
                  <SiMysql size={32} />
                  <span className="text-sm text-gray-700">MySQL</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <SiMongodb size={32} />
                  <span className="text-sm text-gray-700">MongoDB</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <SiRedis size={32} />
                  <span className="text-sm text-gray-700">Redis</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <SiPostgresql size={32} />
                  <span className="text-sm text-gray-700">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <GiDatabase size={32} />
                  <span className="text-sm text-gray-700">Vector DBs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interests with Icons */}
          {/* <div>
            <h3 className="font-playfair text-2xl text-secondary mb-6">
              Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center space-y-2">
                <AiOutlineRobot size={48} className="text-primary" />
                <span className="text-gray-700 font-bold">LLMs</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaBrain size={48} className="text-primary" />
                <span className="text-gray-700 font-bold">Neural Networks</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaPython size={48} className="text-primary" />
                <span className="text-gray-700 font-bold">
                  Python
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaChartBar size={48} className="text-primary" />
                <span className="text-gray-700 font-bold">
                  Data Viz & EDA
                </span>
              </div>
            </div>
          </div> */}

          {/* Stats */}
          <div
            tabIndex="0"
            className="flex flex-row justify-center items-stretch space-x-10"
          >
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">2+</h3>
              <p className="text-gray-400 text-sm sm:text-base">Years Experience</p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">10+</h3>
              <p className="text-gray-400 text-sm sm:text-base">Projects Completed</p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">200+</h3>
              <p className="text-gray-400 text-sm sm:text-base">Problems Solved</p>
            </div>
          </div>

          {/* Project Experience & Coding Problems */}
          <div>
            <h3 className="font-playfair text-2xl text-primary mb-4">
              Project Experience & Coding Problems
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="mb-2">🛠️ OCR Billing System</h4>
                <p className="text-sm text-gray-600">
                  Built an OCR pipeline to extract invoice data with 95% accuracy.
                </p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="mb-2">🔗 Transformer Chatbot</h4>
                <p className="text-sm text-gray-600">
                  Engineered a real-time intent recognition chatbot using HuggingFace.
                </p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="mb-2">📊 Data Validation Suite</h4>
                <p className="text-sm text-gray-600">
                  Created automated tests and dashboards for multi-source data pipelines.
                </p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="mb-2">⚡ Optimizer Experiments</h4>
                <p className="text-sm text-gray-600">
                  Fine-tuned L-BFGS & Newton optimizers for faster CNN convergence.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <h2 className="font-playfair text-4xl text-primary text-center mb-12 font-bold">
            Certifications
          </h2>

          {/* <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8"> */}
            <div
              tabIndex="0"
              className="flex flex-row justify-center items-stretch space-x-10"
            >
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center">
                <h3 className="text-1xl sm:text-1xl font-bold mb-2">AWS Certified Solutions Architect – Associate</h3>
                {/* <p className="text-gray-400 text-sm sm:text-base">Problems Solved</p> */}
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center">
                <h3 className="text-1xl sm:text-1xl font-bold mb-2">Regression Models</h3>
                {/* <p className="text-gray-400 text-sm sm:text-base">Problems Solved</p> */}
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center">
                <h3 className="text-1xl sm:text-1xl font-bold mb-2">AWS Computer Vision: Getting Started with GluonCV</h3>
                {/* <p className="text-gray-400 text-sm sm:text-base">Projects Completed</p> */}
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center">
                <h3 className="text-1xl sm:text-1xl font-bold mb-2">Industrial IoT on Google Cloud</h3>
                {/* <p className="text-gray-400 text-sm sm:text-base">Years Experience</p> */}
              </div>
              
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  )
}
