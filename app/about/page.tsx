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
            <p>Welcome to Copiers Utah, your ultimate destination for comprehensive copier solutions in the heart of Utah. Whether you're looking for copiers for sale, leasing options, or convenient short-term copier rentals, we've got you covered. Our shelves boast a diverse selection of top-notch copiers from renowned brands such as Lexmark, Konica Minolta, and Epson, ensuring you'll find the perfect fit for your specific business requirements.</p><br></br>
            <p>Encountering issues with your copier? No need to worry. Our dedicated team of skilled technicians is committed to maintaining your machines in peak condition through expert repair and maintenance services. We understand the challenges of running a business, and we're here to ensure your copiers keep up with the fast-paced demands.</p>
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