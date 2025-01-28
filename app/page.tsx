import Navbar from '@/components/Navbar'
import OptionGrid from '@/components/OptionGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a2b4b]">
      <Navbar />
      
      <div className="relative pt-20">
        <div className="container mx-auto px-4">
          {/* Video Section - Added brightness and contrast adjustments */}
          <div className="relative h-[70vh] flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              className="h-auto w-auto max-h-[500px] max-w-[800px] object-contain"
              style={{
                filter: 'brightness(1.2) contrast(1.1)' // Increased brightness and contrast
              }}
            >
              <source src="/Copiers-States-Intro-Script-Video.mp4" type="video/mp4" />
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
