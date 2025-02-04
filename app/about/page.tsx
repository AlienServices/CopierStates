import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <main className="min-h-screen bg-[#1a2b4b]">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-4xl font-bold text-white mb-8">About CopiersUtah</h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <div className="prose prose-lg text-white max-w-none">
            <h2 className="text-2xl font-semibold text-white">Our Story</h2>
            <p>Company history and mission statement...</p>

            <h2 className="text-2xl font-semibold text-white mt-8">Why Choose Us</h2>
            <ul className="list-disc pl-6">
              <li>Years of experience...</li>
              <li>Expert service...</li>
              <li>Quality products...</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
} 