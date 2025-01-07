'use client'

import { useRouter } from 'next/navigation'

const options = [
  {
    id: 'color-11x17',
    title: 'Color & 11x17',
    description: 'Color printing with 11x17 capability',
    path: '/options/color-11x17'
  },
  {
    id: 'color-standard',
    title: 'Color Standard',
    description: 'Color printing with letter/legal size',
    path: '/options/color-standard'
  },
  {
    id: 'bw-11x17',
    title: 'B&W & 11x17',
    description: 'Black & white printing with 11x17 capability',
    path: '/options/bw-11x17'
  },
  {
    id: 'bw-standard',
    title: 'B&W Standard',
    description: 'Black & white printing with letter/legal size',
    path: '/options/bw-standard'
  }
]

export default function OptionGrid() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => router.push(option.path)}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl 
                     transition-all duration-300 hover:-translate-y-1 text-center
                     border border-gray-100"
        >
          <h3 className="text-xl font-bold mb-2 text-gray-800">{option.title}</h3>
          <p className="text-gray-600">{option.description}</p>
        </button>
      ))}
    </div>
  )
} 