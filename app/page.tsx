import Navbar from '@/components/Navbar'
import OptionGrid from '@/components/OptionGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a2b4b]">
      <Navbar />
      
      <div className="relative pt-20">
        <div className="container mx-auto px-4">
          {/* Video Silhouette Section */}
          <div className="relative h-[70vh] flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-auto max-w-full object-contain"
            >
              <source src="/sarah-silhouette.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Options Grid */}
          <OptionGrid />
        </div>
      </div>
    </main>
  )
}
