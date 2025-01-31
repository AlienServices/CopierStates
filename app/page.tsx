'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import ColorLargeModal from '@/components/ColorLargeModal'

const options = [
  {
    id: 'color-11x17',
    title: 'Color & 11x17',
    description: 'Color printing with 11x17 capability',
  },
  {
    id: 'color-standard',
    title: 'Color Standard',
    description: 'Color printing with letter/legal size',
  },
  {
    id: 'bw-11x17',
    title: 'B&W & 11x17',
    description: 'Black & white printing with 11x17 capability',
  },
  {
    id: 'bw-standard',
    title: 'B&W Standard',
    description: 'Black & white printing with letter/legal size',
  }
]

export default function Home() {
  const [isColorLargeOpen, setIsColorLargeOpen] = useState(false)

  const handleOptionClick = (optionId: string) => {
    if (optionId === 'color-11x17') {
      setIsColorLargeOpen(true)
    }
    // Add other modal handlers here as needed
  }

  return (
    <main className="main-container">
      <Navbar />
      
      <div className="relative pt-20">
        <div className="container mx-auto px-4">
          <div className="video-container">
            <video
              autoPlay
              loop
              muted
              className="video-player"
            >
              <source src="/Copiers-States-Intro-Script-Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Only one option grid here */}
          <div className="option-grid">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className="option-card"
              >
                <h3 className="option-title">{option.title}</h3>
                <p className="option-description">{option.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <ColorLargeModal 
        isOpen={isColorLargeOpen} 
        onClose={() => setIsColorLargeOpen(false)} 
      />
    </main>
  )
}