'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' }) // Clear form
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Error sending message. Please try again.')
    }
  }

  return (
    <main className="min-h-screen bg-[#1a2b4b]">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
            <div className="space-y-4 text-white">
              <p>Phone: (801) 261-0510</p>
              <p>Email: info@copiersutah.com</p>
              <p>Address: 554 W 8360 S, Sandy, UT 84070</p>
              <p>Hours: Mon-Fri 8am-5pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 rounded bg-white/80"
                required 
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-2 rounded bg-white/80"
                required 
              />
              <textarea 
                placeholder="Message" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4} 
                className="w-full p-2 rounded bg-white/80"
                required 
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
} 