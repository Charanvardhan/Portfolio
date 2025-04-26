// src/app/page.tsx
export default function HomePage() {
  return (
    <section className="flex flex-col items-center text-center space-y-6 py-20">
      <h1 className="font-playfair text-5xl text-primary">
        Hi, I’m Charanvardhan
      </h1>
      <p className="text-lg max-w-2xl">
        I’m a Master’s candidate in Computer Science at UGA, passionate about 
        Machine Learning, AI, and Cybersecurity. Welcome to my portfolio!
      </p>
      <div className="flex space-x-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
        >
          View Projects
        </a>
        <a
          href="/about"
          className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition"
        >
          About Me
        </a>
      </div>
    </section>
  )
}
