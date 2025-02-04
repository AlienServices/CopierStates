export default function Contact() {
  return (
    <main className="min-h-screen bg-[#1a2b4b] pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
            <div className="space-y-4 text-white">
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@copiersutah.com</p>
              <p>Address: Your Address Here</p>
              <p>Hours: Mon-Fri 9am-5pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-2 rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 rounded" />
              <textarea placeholder="Message" rows={4} className="w-full p-2 rounded" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
} 