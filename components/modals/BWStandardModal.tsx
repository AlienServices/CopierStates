'use client'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export default function BWStandardModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#1a2b4b]/90 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h2 className="text-3xl font-bold text-white mb-6">
            Black & White Standard Printers
          </h2>
          
          {/* Add your modal content here */}
        </div>
      </div>
    </div>
  );
}