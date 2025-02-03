'use client'

import { modalStyles } from './shared/ModalStyles'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export default function BW11x17Modal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className={modalStyles.overlay}>
      <button 
        onClick={onClose}
        className={modalStyles.closeButton}
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
          
      <div className={modalStyles.container}>
        <div className={modalStyles.content}>
          <h2 className={modalStyles.title}>
            Black & White 11x17 Printers
          </h2>
          
          {/* Add your modal content here */}
          <div className={modalStyles.card}>
            <div className={modalStyles.textContainer}>
              <p className={modalStyles.description}>
                Our black and white printers with 11x17 capability offer:
              </p>

              <ul className={modalStyles.list}>
                <li>Full color printing up to 11x17 (and 12x18) size</li>
                <li>High-quality resolution for professional documents</li>
                <li>Fast printing speeds for improved productivity</li>
                <li>Advanced finishing options available</li>
              </ul>

              <div className={modalStyles.buttonContainer}>
                <button 
                  type="button"
                  className={modalStyles.button}
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
  );
}