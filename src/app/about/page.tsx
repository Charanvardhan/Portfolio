// src/app/about/page.tsx (or wherever your Interests section lives)
import { AiOutlineRobot } from "react-icons/ai"
import { FaBrain, FaPython, FaChartBar } from "react-icons/fa"

export default function Interests() {
  const items = [
    { icon: <AiOutlineRobot size={48} />, label: "LLMs" },
    { icon: <FaBrain size={48} />,      label: "Neural Networks" },
    { icon: <FaPython size={48} />,     label: "Python (JAX/PyTorch)" },
    { icon: <FaChartBar size={48} />,   label: "Data Viz & EDA" },
  ]

  return (
    <div className="py-12">
      <h3 className="font-playfair text-2xl text-secondary text-center mb-6">
        Interests
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {items.map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center space-y-2">
            <div className="text-primary">{icon}</div>
            <span className="text-gray-700 font-bold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}