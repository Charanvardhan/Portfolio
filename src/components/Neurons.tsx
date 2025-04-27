// src/components/Neurons.tsx
'use client'

import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

export default function Neurons() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // loadFull registers all the features from the tsparticles bundle
    await loadFull(engine)
  }, [])

  const particlesOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
    particles: {
      color: { value: '#ffffff' },
      links: { enable: true, distance: 120, color: '#999999', opacity: 0.4, width: 1 },
      move: { enable: true, speed: 0.6, outModes: 'bounce' },
      number: { value: 50, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      size: { value: 2, random: { enable: true, minimumValue: 1 } },
    },
    detectRetina: true,
  }

  return <Particles id="neurons" init={particlesInit} options={particlesOptions} />
}
