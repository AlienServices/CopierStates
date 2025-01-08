'use client'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export default function ColorLargeModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#1a2b4b]/90 z-50 overflow-y-auto">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <div className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Color & 11x17 Printers
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <div className="space-y-6 text-white">
              <p className="text-lg">
                Our color printers with 11x17 capability offer:
              </p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>Full color printing up to 11x17 (and 12x18) size</li>
                <li>High-quality resolution for professional documents</li>
                <li>Fast printing speeds for improved productivity</li>
                <li>Advanced finishing options available</li>
              </ul>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Popular Models:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Add your printer models here */}
                  <div className="bg-white/5 p-4 rounded">
                    <h4 className="font-bold">Model XYZ-1000</h4>
                    <p className="text-gray-300">Perfect for medium-sized offices</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded">
                    <h4 className="font-bold">Model ABC-2000</h4>
                    <p className="text-gray-300">Ideal for high-volume printing</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  onClick={() => {/* Add contact/quote functionality */}}
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 