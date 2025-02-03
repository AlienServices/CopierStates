'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Color11x17Modal from '@/components/modals/Color11x17Modal'
import ColorStandardModal from '@/components/modals/ColorStandardModal'
import BW11x17Modal from '@/components/modals/BW11x17Modal'
import BWStandardModal from '@/components/modals/BWStandardModal'

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
  const [isColor11x17Open, setIsColor11x17Open] = useState(false)
  const [isColorStandardOpen, setIsColorStandardOpen] = useState(false)
  const [isBW11x17Open, setIsBW11x17Open] = useState(false)
  const [isBWStandardOpen, setIsBWStandardOpen] = useState(false)

  const handleOptionClick = (optionId: string) => {
    switch(optionId) {
      case 'color-11x17':
        setIsColor11x17Open(true)
        break
      case 'color-standard':
        setIsColorStandardOpen(true)
        break
      case 'bw-11x17':
        setIsBW11x17Open(true)
        break
      case 'bw-standard':
        setIsBWStandardOpen(true)
        break
    }
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

      <Color11x17Modal 
        isOpen={isColor11x17Open} 
        onClose={() => setIsColor11x17Open(false)} 
      />
      <ColorStandardModal 
        isOpen={isColorStandardOpen} 
        onClose={() => setIsColorStandardOpen(false)} 
      />
      <BW11x17Modal 
        isOpen={isBW11x17Open} 
        onClose={() => setIsBW11x17Open(false)} 
      />
      <BWStandardModal 
        isOpen={isBWStandardOpen} 
        onClose={() => setIsBWStandardOpen(false)} 
      />
    </main>
  )
}