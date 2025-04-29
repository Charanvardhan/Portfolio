// src/components/Neurons.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import type { ISourceOptions } from '@tsparticles/engine';

export default function Neurons() {
  // track when the engine is ready
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // load the full tsparticles bundle (all plugins)
      await loadFull(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  const particlesOptions: ISourceOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: false }, onClick: { enable: false } },
    },
    particles: {
      color: { value: '#fff' },
      links: {
        enable: true,
        distance: 120,
        color: '#999',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        outModes: 'bounce',
      },
      number: { value: 50 },
      opacity: { value: 0.5 },
      size: { value: 2 },
    },
    detectRetina: true,
  };

  // don’t render <Particles /> until the engine is loaded
  if (!engineReady) {
    return null;
  }

  return (
    <Particles
      id="neurons"
      options={particlesOptions}
      // you can also add a loaded callback:
      // particlesLoaded={container => console.log(container)}
    />
  );
}
