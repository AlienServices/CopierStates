'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ColorLargeModal from './ColorLargeModal'

const options = [
  {
    id: 'color-11x17',
    title: 'Color & 11x17',
    description: 'Color printing with 11x17 capability',
    path: '/options/color-11x17',
    className: 'lg:col-start-1'
  },
  {
    id: 'color-standard',
    title: 'Color Standard',
    description: 'Color printing with letter/legal size',
    path: '/options/color-standard',
    className: 'lg:col-start-2'
  },
  {
    id: 'bw-11x17',
    title: 'B&W & 11x17',
    description: 'Black & white printing with 11x17 capability',
    path: '/options/bw-11x17',
    className: 'lg:col-start-3'
  },
  {
    id: 'bw-standard',
    title: 'B&W Standard',
    description: 'Black & white printing with letter/legal size',
    path: '/options/bw-standard',
    className: 'lg:col-start-4'
  }
]

export default function OptionGrid() {
  const router = useRouter()
  const [isColorLargeOpen, setIsColorLargeOpen] = useState(false)

  const handleOptionClick = (optionId: string) => {
    if (optionId === 'color-11x17') {
      setIsColorLargeOpen(true)
    } else {
      router.push(`/options/${optionId}`)
    }
  }

  return (
    <>
      <div className="relative -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 px-8 lg:px-16">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`
                bg-white/10 backdrop-blur-sm p-6 rounded-lg 
                shadow-lg hover:shadow-xl hover:bg-white/20
                transition-all duration-300 hover:-translate-y-1 
                text-center border border-white/20
                ${option.className}
              `}
            >
              <h3 className="text-xl font-bold mb-2 text-white">{option.title}</h3>
              <p className="text-gray-300">{option.description}</p>
            </button>
          ))}
        </div>
      </div>

      <ColorLargeModal 
        isOpen={isColorLargeOpen} 
        onClose={() => setIsColorLargeOpen(false)} 
      />
    </>
  )
} 