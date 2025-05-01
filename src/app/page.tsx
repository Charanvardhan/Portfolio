"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  // FaCloud,
  FaServer,
  // FaBrain,
  // FaChartBar,
  FaMicrosoft
} from "react-icons/fa"

// Ant Design
// import { AiOutlineRobot } from "react-icons/ai"

// Game Icons
import { GiDatabase } from "react-icons/gi"

// Devicons (for VS Code)
// import { DiVisualstudio } from "react-icons/di"

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
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const chars = Array.from(currentWord)      // <-- split into correct codepoints
    let timeout: NodeJS.Timeout | null = null; // Explicitly type and initialize

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

    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    }
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
  const [activeTab, setActiveTab] = useState<"experience" | "research" | "education">("experience");
  // const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target && (e.target as HTMLElement).dataset.tab) {
        const tab = (e.target as HTMLElement).dataset.tab as "experience" | "research" | "education" | undefined;
        if (tab && (tab === "experience" || tab === "research" || tab === "education")) {
          setActiveTab(tab);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
    

  const experienceData = [
    {
      title: "Machine Learning Engineer – Kore.ai, Inc.",
      description: [
        "Built OCR pipelines for automated bill processing, ensuring accuracy and validation with AI-driven verification.",
        "Engineered transformer-based dialogue flows for real-time intent recognition and NLP optimization.",
        "Developed custom domain-specific NER, NLP, and NLU models for entity extraction and semantic analysis.",
        "Migrated ontology-based knowledge graphs to scalable embedding-based retrieval systems using BERT.",
        "Deployed NLP models via ONNX quantization and pruning for efficient edge device inference."
      ]
    },
    {
      title: "Data Scientist Intern – Nokia Solutions & Networks",
      description: [
        "Designed automated data validation workflows with quantitative tests and EDA to maintain multi-source pipeline integrity.",
        "Performed regression, classification, and clustering analyses to derive business insights.",
        "Applied PCA and Lasso Regression for feature selection and model efficiency improvement.",
        "Visualized key performance indicators using Matplotlib and Seaborn for executive and technical reporting."
      ]
    },
    {
      title: "Graduate Research Assistant – University of Georgia",
      description: [
        "Designed and fine-tuned second-order optimizers inspired by L-BFGS and Newton’s methods to accelerate CNN training on CIFAR-10/100 datasets.",
        "Enhanced ResNet generalization using data augmentation, dropout, and learning rate scheduling techniques.",
        "Developed distributed deep learning workflows with mixed precision and model parallelism in PyTorch for large datasets."
      ]
    },
    {
      title: "Graduate Teaching Assistant – University of Georgia",
      description: [
        "Instructed R programming via Posit Cloud, guiding students through data wrangling, statistical modeling, and reproducible workflows with real-world data.",
        "Created instructional materials and held one-on-one sessions to simplify complex analytical concepts.",
        "Assessed assignments focusing on programming accuracy, numerical validity, and visualization clarity using ggplot2."
      ]
    }
  ];
  
  
  const researchData = [
    { 
      title: "Early-Stage Neural Network Optimization", 
      description: "Designed and fine-tuned second-order optimizers, inspired by L-BFGS and Newton’s methods, to accelerate CNN training on CIFAR-10/100 datasets, achieving faster convergence and enhanced generalization across high-dimensional spaces." 
    },
    { 
      title: "Training Dynamics Under Differential Privacy", 
      description: "Systematically analyzed early training dynamics of differentially private neural networks, studying how learning rate, depth, and width impact optimization behavior. Using Hessian eigenvalues to track sharpness, identified distinct regimes — early transient, intermediate saturation, progressive sharpening, and edge of stability — revealing unique sharpness reduction phases under differential privacy compared to non-private models." 
    }
  ];

  const educationData = [
    { title: "University of Georgia (Aug 2023 – Present)", description: "Master’s in Computer Science, GPA: 3.84/4.0." },
    { title: "Vellore Institute of Technology (July 2017 – May 2022)", description: "Integrated Master’s in Software Engineering, GPA: 3.3/4.0." }
  ];


  return (
    <>
      <section id="home"
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
                <Image
                  src="/images/github.svg"
                  alt="GitHub"
                  width={28}
                  height={32}
                  className="hover:opacity-80"
                />
              </a>
              <a href="https://www.linkedin.com/in/charanvardhanreddym/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="hover:opacity-80"
                />
              </a>
              <a href="mailto:charanvardhanreddym@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image 
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
      <section id="about" className="py-10 px-6 w-full bg-black">
      
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
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-8 px-6 w-full bg-black">
        <h2 className="font-playfair text-4xl text-primary text-center mb-2 font-bold">
          Skills
        </h2>

        <div className="max-w-5xl py-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
          {/* Programming & Scripting */}
          <div className="p-6 bg-card rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-4 hover:shadow-xl hover:bg-[#c0beb6] hover:text-[#594e46] duration-300">
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
          <div className="p-6 bg-card rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-4 hover:shadow-xl hover:bg-[#c0beb6] hover:text-[#594e46] duration-300">
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
          <div className="p-6 bg-card rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-4 hover:shadow-xl hover:bg-[#c0beb6] hover:text-[#594e46] duration-300">
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
          <div className="p-6 bg-card rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-4 hover:shadow-xl hover:bg-[#c0beb6] hover:text-[#594e46] duration-300">
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
          className="
            flex flex-row justify-center items-stretch 
            space-x-4            /* small gap on mobile */
            sm:space-x-10        /* medium gap on small tablets */
            lg:space-x-20        /* your original gap on desktop */
          "
        >
          {[ 
            { value: "2+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "200+", label: "Problems Solved" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-lg border bg-card text-card-foreground shadow-sm 
                p-2 sm:p-4 md:p-6             /* smaller padding on mobile */
                text-center transition-transform transform 
                hover:-translate-y-4 hover:shadow-xl 
                hover:bg-[#c0beb6] hover:text-[#594e46] duration-300
              "
            >
              <h3 className="
                text-xl sm:text-2xl md:text-3xl   /* scale value text down on mobile */
                font-bold mb-1
              ">
                {stat.value}
              </h3>
              <p className="
                text-xs sm:text-sm md:text-base   /* scale label down on mobile */
              ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
        
      <section id="experience-education" className="py-8 px-6 w-full bg-black">
        <h3 className="font-playfair text-4xl text-primary text-center mb-8 font-bold">
          Experience & Education
        </h3>

        {/* Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-green-900 text-green-400 border-green-700"
                : "bg-transparent text-green-400 border-green-700"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>

          <button
            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${
              activeTab === "research"
                ? "bg-green-900 text-green-400 border-green-700"
                : "bg-transparent text-green-400 border-green-700"
            }`}
            onClick={() => setActiveTab("research")}
          >
            Research
          </button>

          <button
            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${
              activeTab === "education"
                ? "bg-green-900 text-green-400 border-green-700"
                : "bg-transparent text-green-400 border-green-700"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {/* Invisible scroll anchors */}
        <div id="experience" className="pt-24 -mt-24"></div>
        <div id="research" className="pt-24 -mt-24"></div>
        <div id="education" className="pt-24 -mt-24"></div>

        {/* Grid Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          <AnimatePresence>
            {(activeTab === "experience" ? experienceData :
              activeTab === "research" ? researchData :
              educationData).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg bg-green-900/20 p-6 w-full h-60 flex flex-col justify-center items-center overflow-hidden"
              >
                <h4 className="mb-4 font-bold text-lg text-green-400 text-center">
                  {item.title}
                </h4>
                <div className="overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-transparent text-gray-300 text-sm text-left px-2 space-y-2">
                  {Array.isArray(item.description) ? (
                    <ul className="list-disc list-inside">
                      {item.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section id="certifications" className="py-8 px-6 w-full bg-black">
        {/* Certifications */}
        <h2 className="font-playfair text-4xl text-primary text-center mb-12 font-bold">
          Certifications
        </h2>

        {/* <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8"> */}
          <div
            // tabIndex="0"
            className="flex flex-col items-center space-y-6 md:flex-row md:space-x-20 md:space-y-0"
          >
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center transition-transform transform hover:-translate-y-4 hover:shadow-xl hover:bg-[#c0beb6] hover:text-[#594e46] duration-300 w-64 h-24 flex flex-col justify-center group">
              <div className="transition-transform duration-300 group-hover:scale-110"> 
                <h3 className="text-1xl sm:text-1xl font-bold mb-2">AWS Certified Solutions Architect Associate</h3>
              {/* <p className="text-gray-400 text-sm sm:text-base">Problems Solved</p> */}
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center transition-transform transform hover:-translate-y-4 hover:shadow-xl hover:bg-[#c0beb6] hover:text-[#594e46] duration-300 w-64 h-24 flex flex-col justify-center group">
              <div className="transition-transform duration-300 group-hover:scale-110"> 
                <h3 className="text-1xl sm:text-1xl font-bold mb-2">Regression Models</h3>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center transition-transform transform hover:-translate-y-4 hover:shadow-xl hover:bg-[#c0beb6] hover:text-[#594e46] duration-300 w-64 h-24 flex flex-col justify-center group">
              <div className="transition-transform duration-300 group-hover:scale-110"> 
                <h3 className="text-1xl sm:text-1xl font-bold mb-2">AWS Computer Vision: with GluonCV</h3>
              </div>
              {/* <p className="text-gray-400 text-sm sm:text-base">Projects Completed</p> */}
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 text-center transition-transform transform hover:-translate-y-4 hover:shadow-xl hover:bg-[#c0beb6] hover:text-[#594e46] duration-300 w-64 h-24 flex flex-col justify-center group">
              <div className="transition-transform duration-300 group-hover:scale-110"> 
                <h3 className="text-1xl sm:text-1xl font-bold mb-2">Industrial IoT on Google Cloud</h3>
              </div>
              {/* <p className="text-gray-400 text-sm sm:text-base">Years Experience</p> */}
            </div>
          </div>
      
      {/* </div> */}
      </section>

      {/* <section id="contact" className="py-12 px-6 w-full bg-black">
        <h2 className="font-playfair text-4xl text-primary text-center mb-12 font-bold">
          Contact Me
        </h2>

        <div className="max-w-2xl mx-auto text-center space-y-8">
          {submitted ? (
            // 🎉 Success Message
            <div className="text-green-400 text-xl font-semibold">
              🎉 Thank you for contacting me! I will get back to you soon.
            </div>
          ) : (
            // 💬 Contact Form
            <form
              action="https://formspree.io/f/yourformid" // Replace with your actual Formspree form link
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-md bg-black border border-green-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-400 transition-all duration-300 focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-md bg-black border border-green-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-400 transition-all duration-300 focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-md bg-black border border-green-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-400 transition-all duration-300 focus:ring-2 focus:ring-green-700"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full border border-green-700 text-green-400 font-semibold hover:bg-green-900 hover:text-green-400 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section> */}

    </>
  )
}
