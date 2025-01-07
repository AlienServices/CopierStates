import Image from 'next/image'
import Navbar from '../components/Navbar'
import OptionGrid from '../components/OptionGrid'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="relative pt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4">
          <div className="relative h-[60vh] flex items-center justify-center">
            <Image
              src="/sarah-silhouette.png"
              alt="Sarah Silhouette"
              fill
              className="object-contain z-0"
              priority
            />
            
            <div className="absolute z-10 text-center max-w-2xl mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">Hi, I'm Sarah</h1>
              <p className="text-lg">
                If you are here, it probably means you are looking for a copier, printer, 
                or multifunction printer. I'm here to guide you through the process of 
                selecting the perfect printer for your operations quickly and easily.
              </p>
            </div>
          </div>

          <OptionGrid />
        </div>
      </div>
    </main>
  )
}
