'use client'

import { useEffect, useRef } from 'react'
import { modalStyles } from './shared/ModalStyles'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function ColorStandardModal({ isOpen, onClose, videoSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (isOpen && video) {
      video.play().catch(() => {
        // Handle any play() errors silently
      })
    }
    return () => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [isOpen])

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
            Color Standard Printers
          </h2>
          
          <div className="video-container mb-6">
            <video
              ref={videoRef}
              className="modal-video w-full"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className={modalStyles.card}>
            <div className={modalStyles.textContainer}>
              <p className={modalStyles.description}>
                Our standard color printers offer:
              </p>
              
              <ul className={modalStyles.list}>
                <li>Full color printing up to letter/legal size</li>
                <li>High-quality resolution for professional documents</li>
                <li>Fast printing speeds</li>
                <li>Cost-effective color printing solution</li>
              </ul>

              {/* Button section */}
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
  )
} 