import React, { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadStarsPreset } from 'tsparticles-preset-stars'
import { theme } from '@presentation/styles'

const BackgroundParticles: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: 'stars',
        background: {
          color: {
            value: theme.colors.primary
          }
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: theme.colors.background
          },
          links: {
            color: theme.colors.background,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 70
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 4 }
          }
        },
        detectRetina: true
      }}
    />
  )
}

export default BackgroundParticles
